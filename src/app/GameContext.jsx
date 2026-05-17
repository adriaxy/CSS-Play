"use client";
import { createContext, useContext, useState, useEffect, useRef } from "react";
import { parseCssToRules } from "../../lib/parseCss";
import levels from "@/data/levels";
import { parse } from "css-tree";

const STORAGE_KEY = "cssPlayState";

// Se serializan los campos que el jugador puede modificar
// defaultCode viene de levels.js y blockStyles se recalcula con el parser, así que no hace falta guardarlos
function serializeSublevelProgress(sublevelStateData) {
    return sublevelStateData.map(levelArray =>
        levelArray.map((sublevel) => ({
            firstTime: sublevel.firstTime,
            playerCode: sublevel.playerCode,
            completedBlocks: sublevel.completedBlocks,
            completed: sublevel.completed
        }))
    );
}

// Combina el progreso guardado con el estado inicial para que los niveles nuevos
// que no existían en el guardado se inicialicen correctamente desde levels.js
function mergeWithSavedProgress(savedProgress, initialState) {
    return initialState.map((levelArray, levelIdx) =>
        levelArray.map((sublevel, sublevelIdx) => ({
            ...sublevel,
            ...(savedProgress[levelIdx]?.[sublevelIdx] || {})
        }))
    );
}

const GameContext = createContext();

export function GameProvider({ initialLevel, initialSublevel, children}){
    const [currentLevel, setCurrentLevel] = useState(initialLevel);
    const [currentSublevel, setCurrentSublevel] = useState(initialSublevel);
    
    // Extraemos los datos de cada nivel y subnivel según la página en la que estemos
    const currentLevelData = levels[currentLevel];
    const currentSublevelData = currentLevelData.sublevels[currentSublevel];

    //Active block
    const [selectedBlock, setSelectedBlock] = useState(null);
    const [hoveredBlock, setHoveredBlock] = useState(null);

    //Sublevel progress
    const [completedBlocks, setCompletedBlocks] = useState({
        block1: false,
        block2: false
    })
    const [evaluationResult, setEvaluationResult] = useState(null);

    //Editor + solution
    const initialGameCode = "/* Block 1 */\n.block1 {\n\n}\n\n/* Block 2 */\n.block2 {\n\n}";  
    const [code, setCode] = useState(
        initialGameCode
    );
   
    //UI buttons
    const [viewSolution, setViewSolution] = useState(false);
    const [showGrid, setShowGrid] = useState(true);

    // Estados para esconder el mensaje "challenge completed" del playground cuando 
    // se completa el nivel y se muestra la modal de felicitación
    const [showCompletedLevelMessage, setShowCompletedLevelMessage] = useState(false);
    const [levelCompletedModalShown, setLevelCompletedModalShown] = useState({});

    //TFG
    const [sublevelProgress, setSublevelProgress] = useState({});
    const [levelProgress, setLevelProgress] = useState(() => {
    const progress = {};
    levels.forEach((level, lvlIdx) => {
        progress[lvlIdx] = Object.fromEntries(
        level.sublevels.map((_, subIdx) => [subIdx, false])
        );
    });
    return progress;
    });

    //Sublevel info 
    const initialProgress = levels.map((level) => {
            const sublevelLength = level.sublevels.length;
            const sublevelState = Array.from( {length: sublevelLength}, (_, i) => ({
                firstTime: true,
                defaultCode: level.sublevels[i].blocks[0].defaultCode,
                playerCode: null,
                completedBlocks: {
                    block1: false,
                    block2: false
                },        
                completed: false,
                blockStyles: {}
            }));
            return sublevelState;
        })
    const [sublevelState, setSublevelState] = useState(initialProgress);

    // ref para saber si ya se cargó el progreso de localStorage
    // se evita que el efecto de guardado sobreescriba el localStorage con el estado
    // vacío inicial antes de que se haya tenido la oportunidad de leer el guardado
    const localProgressLoaded = useRef(false);

    // Carga el progreso guardado al montar el componente
    useEffect(() => {
        try {
            const savedData = localStorage.getItem(STORAGE_KEY);
            if (savedData) {
                const { sublevelProgress, completedLevelModals } = JSON.parse(savedData);
                if (sublevelProgress) {
                    setSublevelState(currentState =>
                        mergeWithSavedProgress(sublevelProgress, currentState)
                    );
                }
                if (completedLevelModals) {
                    setLevelCompletedModalShown(completedLevelModals);
                }
            }
        } catch (loadError) {
            // Si localStorage no está disponible o el JSON está corrupto, se continúa con el estado inicial
            console.warn("Could not load saved progress:", loadError);
        }
        localProgressLoaded.current = true;
    }, []);

    // Guarda el progreso automáticamente cada vez que cambia el estado
    useEffect(() => {
        if (!localProgressLoaded.current) return;
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify({
                sublevelProgress: serializeSublevelProgress(sublevelState),
                completedLevelModals: levelCompletedModalShown
            }));
        } catch (saveError) {
            // Puede ocurrir si el almacenamiento está lleno
            console.warn("Could not save progress:", saveError);
        }
    }, [sublevelState, levelCompletedModalShown]);

    const evaluateBlocks = (completedBlocks, evaluatedBlocksArray) => {
        return evaluatedBlocksArray.every(
            blockId => completedBlocks[blockId] === true
        )
    }

    useEffect(() => {
    const evaluated = currentSublevelData.evaluatedBlocks;

    const allBlocksCompleted = evaluateBlocks(
        sublevelState[currentLevel][currentSublevel].completedBlocks, evaluated
    )

    if (allBlocksCompleted && !sublevelState[currentLevel][currentSublevel].completed) {
        setSublevelState(prev => {
        const newData = [...prev];
        const innerArray = [...newData[currentLevel]];
        const obj = {
            ...innerArray[currentSublevel],
            completed: true
        };
        innerArray[currentSublevel] = obj;
        newData[currentLevel] = innerArray;
        return newData;
        });
    }
    }, [sublevelState, currentLevel, currentSublevel]);

    const resetProgress = () => {
        setSublevelState(levels.map((level) =>
            Array.from({ length: level.sublevels.length }, (_, i) => ({
                firstTime: true,
                defaultCode: level.sublevels[i].blocks[0].defaultCode,
                playerCode: null,
                completedBlocks: { block1: false, block2: false },
                completed: false,
                blockStyles: {}
            }))
        ));
        setLevelProgress(() => {
            const progress = {};
            levels.forEach((level, lvlIdx) => {
                progress[lvlIdx] = Object.fromEntries(
                    level.sublevels.map((_, subIdx) => [subIdx, false])
                );
            });
            return progress;
        });
        setCompletedBlocks({ block1: false, block2: false });
        setCode(initialGameCode);
        setEvaluationResult(null);
        localStorage.removeItem(STORAGE_KEY);
        localProgressLoaded.current = true;
    };

    const [blockStyles, setBlockStyles] = useState();

    // Actualizamos los datos de progreso del jugador en sublevelState usando el parseador con css-tree
    useEffect(()=> {
        const index = sublevelState[currentLevel][currentSublevel]
        const code = index.firstTime === true ? index.defaultCode : index.playerCode;
        const parseCss = parseCssToRules(code);
        setSublevelState((prev) => {
            const newData = [...prev];
            const innerArray = [...newData[currentLevel]];
            const obj = {...innerArray[currentSublevel], blockStyles: parseCss};
            innerArray[currentSublevel] = obj;
            newData[currentLevel] = innerArray;
            return newData
        })
    }, [currentSublevel, currentLevel, sublevelState[currentLevel]?.[currentSublevel]?.playerCode, sublevelState[currentLevel]?.[currentSublevel]?.firstTime ])

    useEffect(() => {
        const defaultGrid = levels[currentLevel].defaultShowGrid;
        if (defaultGrid !== undefined) {
            setShowGrid(defaultGrid);
        }
    }, [currentLevel]);

    // Guardamos el progreso de cada nivel
    useEffect(() => {
    const sublevelsCount = levels[currentLevel].sublevels.length;
        setLevelProgress(prev => ({
            ...prev,
            [currentLevel]: prev[currentLevel] || Object.fromEntries(
                Array.from({ length: sublevelsCount }, (_, i) => [i, false])
            )
        }));
    }, [currentLevel]);

    
    const allBlocksCompleted = Object.values(completedBlocks).every(v => v === true);

    useEffect(()=> {
        if(allBlocksCompleted){
            setEvaluationResult(true);

            setLevelProgress(prev => ({
                ...prev,
                [currentLevel]: {
                    ...prev[currentLevel],
                    [currentSublevel]: true
                }
            }))
        }
    }, [completedBlocks, currentLevel, currentSublevel]);

    const [mobileAlertShown, setMobileAlertShown] = useState(false); 

    //Niveles y subniveles que usaremos para mostrar en HOME
    const homeLevelsData = Array.from({length: levels.length}, (_,i) => ({
        id: levels[i].level,
        completed: false,
        levelName: levels[i].name,
        sublevelNames: levels[i].sublevels.map(sublevel => sublevel.name)
    }))

    return (
        <GameContext.Provider value={{ homeLevelsData, code, setCode, hoveredBlock, setHoveredBlock, initialGameCode, viewSolution, setViewSolution, blockStyles, completedBlocks, setCompletedBlocks, evaluationResult, showGrid, setShowGrid, sublevelState, setSublevelState, setCurrentLevel, setCurrentSublevel, currentSublevel, currentLevel, currentLevelData, currentSublevelData, showCompletedLevelMessage, setShowCompletedLevelMessage, levelCompletedModalShown, setLevelCompletedModalShown, mobileAlertShown, setMobileAlertShown, resetProgress}}>
            {children}
        </GameContext.Provider>
    )
}

export function useGame(){
    return useContext(GameContext)
}