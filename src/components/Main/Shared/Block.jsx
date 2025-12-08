import './Block.css'
import { useGame } from '@/app/GameContext'
import { useEffect } from 'react';
import levels from '@/data/levels';

export default function Block({blockId, style, group, blockSolution, playground = false}) {
    const {hoveredBlock, setHoveredBlock, sublevelState, currentSublevel, currentLevel, setSublevelState} = useGame();
    const hasBlockChildren = levels[currentLevel].sublevels[currentSublevel].blocks[0].blockChildren;
    const blockChildrenStyles = levels[currentLevel].sublevels[currentSublevel]?.blocks[4]?.style;
    const blockChildrenText = levels[currentLevel].sublevels[currentSublevel]?.blocks[4]?.text;

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
    
    const isCompleted = sublevelState[currentLevel][currentSublevel].completedBlocks[blockIdPlayground] === true ? 'completed' : '';

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
        className={`block ${blockIdPlayground} ${isCompleted}`}>
            {hasBlockChildren && <div style={blockChildrenStyles}>{blockChildrenText !== '' && blockChildrenText}</div>}
            <div className='block-name-text' style={finalStyleHoverText} aria-label={blockId}>{blockId}</div>

        </div>
    )
}