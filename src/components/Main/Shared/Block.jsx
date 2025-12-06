import './Block.css'
import { useGame } from '@/app/GameContext'
import { useEffect } from 'react';

export default function Block({blockId, style, group, blockSolution, playground = false}) {
    const {hoveredBlock, setHoveredBlock, blockStyles, code, setCompletedBlocks, completedBlocks} = useGame();

    const blockIdPlayground = playground === true ? blockId.replace(' ', '') : null;

    const isHovered = hoveredBlock === group;

    const compareCodeWithSolution = () => {
        if (!blockIdPlayground) return;
        // console.log(blockStyles)
        const current = (blockStyles?.[blockIdPlayground] || {});
        if(!current || !blockSolution) return false;

        for(const key in blockSolution){
            if(current[key] !== blockSolution[key]) return false;
        }

        return true;
    }

    useEffect(()=> {
        if (!blockIdPlayground) return;
        const isCorrect = compareCodeWithSolution();
        setCompletedBlocks(prev => ({...prev, [blockIdPlayground]: isCorrect}))
    }, [blockStyles]);

    const isCompleted = completedBlocks[blockIdPlayground] === true ? 'completed' : '';

    const finalStyle = {
        ...style,
        ...(isHovered ? {outline: "5px solid var(--highlight-red)"} : {}),
        ...(playground === true ? (blockStyles?.[blockIdPlayground] || {}) : {})
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