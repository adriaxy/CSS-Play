"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { parseCssToRules } from "../../lib/parseCss";

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
        "/* Block 1 */\n.block1 {\n\n}\n\n/* Block 2 */\n.block2 {\n\n}"
    );
    const initialGameCode = "/* Block 1 */\n.block1 {\n\n}\n\n/* Block 2 */\n.block2 {\n\n}";

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
        setCode("/* Block 1 */\n.block1 {\n\n}\n\n/* Block 2 */\n.block2 {\n\n}");
        setEvaluationResult(null);
        setShowGrid(false);
        setViewSolution(false);
    };

    const blockStyles = parseCssToRules(code);

    useEffect(()=> {
        console.log(completedBlocks)
        if(Object.values(completedBlocks).every(v => v === true)){
            console.log("🎉 Todos los bloques completados!");
        }
    }, [completedBlocks])

    return (
        <GameContext.Provider value={{code, setCode, hoveredBlock, setHoveredBlock, initialGameCode, viewSolution, setViewSolution, blockStyles, completedBlocks, setCompletedBlocks}}>
            {children}
        </GameContext.Provider>
    )
}

export function useGame(){
    return useContext(GameContext)
}