import './Block.css'
import { useGame } from '@/app/GameContext'
import { useEffect } from 'react';

export default function Block({blockId, style, group, blockSolution, playground = false}) {
    const {hoveredBlock, setHoveredBlock, setCompletedBlocks, completedBlocks, sublevelState, currentSublevel, currentLevel, setSublevelState} = useGame();

    const blockIdPlayground = playground === true ? blockId.replace(' ', '') : null;
    const isHovered = hoveredBlock === group;

    const compareCodeWithSolution = () => {
        if (!blockIdPlayground) return;
        const current = sublevelState?.[currentLevel]?.[currentSublevel]?.blockStyles?.[blockIdPlayground];
        if(!current || !blockSolution) return false;
        for(const key in blockSolution){
            if(current[key] !== blockSolution[key]) return false;
        }

        return true;
    }

    useEffect(()=> {
        if (!blockIdPlayground) return;
        const isCorrect = compareCodeWithSolution();
        console.log(`${blockIdPlayground} is ${isCorrect}`)
        
        setSublevelState(prev => {
            const newData = [...prev];
            const innerArray = [...newData[currentLevel]];
            const innerObj = {
                ...innerArray[currentSublevel],
                completedBlocks: {
                    ...innerArray[currentSublevel].completedBlocks,
                    [blockIdPlayground]: isCorrect
                }
            };
            innerArray[currentSublevel] = innerObj;
            newData[currentLevel] = innerArray;
            return newData;
        });

    }, [sublevelState[currentLevel][currentSublevel].blockStyles]);

    useEffect(() => {
  console.log(sublevelState);
}, [sublevelState, currentLevel, currentSublevel]);
    
    const isCompleted = sublevelState[currentLevel][currentSublevel].completedBlocks[blockIdPlayground] === true ? 'completed' : '';
    // const isCompleted = completedBlocks[blockIdPlayground] === true ? 'completed' : '';

    const finalStyle = {
        ...style,
        ...(isHovered ? {outline: "5px solid var(--highlight-red)"} : {}),
        ...(playground === true ? (sublevelState[currentLevel][currentSublevel].blockStyles[blockIdPlayground] || {}) : {})
    }

    const finalStyleHoverText = {
        ...(isHovered ? {display: "block"} : {display: "none"})
    }

    return (
        <div 
            style={finalStyle} 
            onMouseEnter={() => setHoveredBlock(group)} 
            onMouseLeave={() => setHoveredBlock(null)}
            className={`block ${blockIdPlayground} ${isCompleted}`}
        >
            <div className='block-name-text' style={finalStyleHoverText} aria-label={blockId}>{blockId}</div>
        </div>
    )
}