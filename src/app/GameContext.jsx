"use client";
import { createContext, useContext, useState } from "react";

const GameContext = createContext();

export function GameProvider({children}){
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
        "/* Block 1 */\n.block1{\n\n}\n\n/* Block 2 */\n.block2{\n\n}"
    );

    //UI buttons
    const [viewSolution, setViewSolution] = useState(false);
    const [showGrid, setShowGrid] = useState(false);

    //TFG
    const [sublevelProgress, setSublevelProgress] = useState({});
    const [levelProgress, setLevelProgress] = useState({});

    //Reset game
    const resetGame = () => {
        setSelectedBlock(null);
        setHoveredBlock(null);
        setCompletedBlocks({ block1: false, block2: false });
        setCode("/* Block 1 */\n.block1{\n\n}\n\n/* Block 2 */\n.block2{\n\n}");
        setEvaluationResult(null);
        setShowGrid(false);
        setViewSolution(false);
    };
    

    return (
        <GameContext.Provider value={{code, setCode}}>
            {children}
        </GameContext.Provider>
    )
}

export function useGame(){
    return useContext(GameContext)
}