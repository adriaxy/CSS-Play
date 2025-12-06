"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { parseCssToRules } from "../../lib/parseCss";
import levels from "@/data/levels";
import { parse } from "css-tree";

const GameContext = createContext();

export function GameProvider({ initialLevel, initialSublevel, children}){
    const [currentLevel, setCurrentLevel] = useState(initialLevel);
    const [currentSublevel, setCurrentSublevel] = useState(initialSublevel);

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
                completed: false
            }));
            return sublevelState;
        })
    const [sublevelState, setSublevelState] = useState(initialProgress);

    //Reset game
    const resetGame = () => {
        setSelectedBlock(null);
        setHoveredBlock(null);
        setCompletedBlocks({ block1: false, block2: false });
        setCode(initialGameCode);
        setEvaluationResult(null);
        setShowGrid(true);
        setViewSolution(false);
    };

    const [blockStyles, setBlockStyles] = useState();
    useEffect(()=> {
        const index = sublevelState[currentLevel][currentSublevel]
        const code = index.firstTime === true ? index.defaultCode : index.playerCode;
        // console.log(sublevelState)
        // console.log(index.defaultCode)
        const parseCss = parseCssToRules(code);
        setBlockStyles(parseCss);
    }, [sublevelState])

    // useEffect(()=> {
    //     const index = sublevelState[currentLevel][currentSublevel]
    //     const code = index.firstTime === true ? index.defaultCode : index.playerCode;
    //     console.log(index.defaultCode)
    //     const parseCss = parseCssToRules(code);
    //     setBlockStyles(parseCss);
    // }, [currentLevel, currentSublevel, sublevelState])

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
    }, [completedBlocks, currentLevel, currentSublevel])

    useEffect(() => {
  console.log('GameProvider montado', { currentLevel, currentSublevel, sublevelState });
}, []);


    return (
        <GameContext.Provider value={{code, setCode, hoveredBlock, setHoveredBlock, initialGameCode, viewSolution, setViewSolution, blockStyles, completedBlocks, setCompletedBlocks, evaluationResult, showGrid, setShowGrid, sublevelState, setSublevelState, setCurrentLevel, setCurrentSublevel}}>
            {children}
        </GameContext.Provider>
    )
}

export function useGame(){
    return useContext(GameContext)
}