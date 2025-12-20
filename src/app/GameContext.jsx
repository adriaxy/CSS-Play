"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { parseCssToRules } from "../../lib/parseCss";
import levels from "@/data/levels";
import { parse } from "css-tree";

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

    //Reset game
    // const resetGame = () => {
    //     setSelectedBlock(null);
    //     setHoveredBlock(null);
    //     setCompletedBlocks({ block1: false, block2: false });
    //     setCode(initialGameCode);
    //     setEvaluationResult(null);
    //     setShowGrid(true);
    //     setViewSolution(false);
    // };

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

    return (
        <GameContext.Provider value={{code, setCode, hoveredBlock, setHoveredBlock, initialGameCode, viewSolution, setViewSolution, blockStyles, completedBlocks, setCompletedBlocks, evaluationResult, showGrid, setShowGrid, sublevelState, setSublevelState, setCurrentLevel, setCurrentSublevel, currentSublevel, currentLevel, currentLevelData, currentSublevelData, showCompletedLevelMessage, setShowCompletedLevelMessage, levelCompletedModalShown, setLevelCompletedModalShown, mobileAlertShown, setMobileAlertShown}}>
            {children}
        </GameContext.Provider>
    )
}

export function useGame(){
    return useContext(GameContext)
}