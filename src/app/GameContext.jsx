"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { parseCssToRules } from "../../lib/parseCss";
import levels from "@/data/levels";

const GameContext = createContext();

export function GameProvider({children}){
    const [currentLevel, setCurrentLevel] = useState(0);
    const [currentSublevel, setCurrentSublevel] = useState(0);

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
    const [code, setCode] = useState(
        "/* Block 1 */\n.block1 {\n\n}\n\n/* Block 2 */\n.block2 {\n\n}"
    );
    const initialGameCode = "/* Block 1 */\n.block1 {\n\n}\n\n/* Block 2 */\n.block2 {\n\n}";

    //UI buttons
    const [viewSolution, setViewSolution] = useState(false);
    const [showGrid, setShowGrid] = useState(false);

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

    //Reset game
    const resetGame = () => {
        setSelectedBlock(null);
        setHoveredBlock(null);
        setCompletedBlocks({ block1: false, block2: false });
        setCode("/* Block 1 */\n.block1 {\n\n}\n\n/* Block 2 */\n.block2 {\n\n}");
        setEvaluationResult(null);
        setShowGrid(false);
        setViewSolution(false);
    };

    const blockStyles = parseCssToRules(code);

    useEffect(() => {
        console.log('currentlevel effect')
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

    return (
        <GameContext.Provider value={{code, setCode, hoveredBlock, setHoveredBlock, initialGameCode, viewSolution, setViewSolution, blockStyles, completedBlocks, setCompletedBlocks, evaluationResult}}>
            {children}
        </GameContext.Provider>
    )
}

export function useGame(){
    return useContext(GameContext)
}