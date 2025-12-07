import './Block.css'
import { useGame } from '@/app/GameContext'
import { useEffect } from 'react';

export default function Block({blockId, style, group, blockSolution, playground = false, level, sublevel}) {
    const {hoveredBlock, setHoveredBlock, blockStyles, code, setCompletedBlocks, completedBlocks, sublevelState, currentSublevel, currentLevel} = useGame();

    const levelC = level - 1;
    const sublevelC = sublevel - 1;

    // console.log(currentSublevel)
    // const current = sublevelState?.[currentLevel]?.[currentSublevel]?.blockStyles?.[blockIdPlayground] || {};

    const blockIdPlayground = playground === true ? blockId : null;
    // console.log(blockIdPlayground)
    // console.table(sublevelState[1][0].blockStyles[blockIdPlayground])


    const isHovered = hoveredBlock === group;

    const compareCodeWithSolution = () => {

        if (!blockIdPlayground) return;

        // const current = sublevelState[1][0].blockStyles[blockIdPlayground];
        const current = sublevelState?.[levelC]?.[sublevelC]?.blockStyles?.[blockIdPlayground];

        // const current = sublevelState?.[1]?.[0]?.blockStyles.blockIdPlayground || {};
        // console.table(current)

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
    }, [sublevelState]);

    const isCompleted = completedBlocks[blockIdPlayground] === true ? 'completed' : '';

    const finalStyle = {
        ...style,
        ...(isHovered ? {outline: "5px solid var(--highlight-red)"} : {}),
        ...(playground === true ? (sublevelState?.[levelC]?.[sublevelC]?.blockStyles?.[blockIdPlayground] || {}) : {})
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

// import './Block.css'
// import { useGame } from '@/app/GameContext'
// import { useEffect } from 'react';

// export default function Block({blockId, style, group, blockSolution, playground = false}) {
//     const {hoveredBlock, setHoveredBlock, blockStyles, code, setCompletedBlocks, completedBlocks, sublevelState, currentSublevel, currentLevel} = useGame();

//     const blockIdPlayground = playground === true ? blockId.replace(' ', '') : null;

//     const isHovered = hoveredBlock === group;

//     const compareCodeWithSolution = () => {
//         if (!blockIdPlayground) return;
//         // console.log(blockStyles)
//         const current = (blockStyles?.[blockIdPlayground] || {});
//         if(!current || !blockSolution) return false;

//         for(const key in blockSolution){
//             if(current[key] !== blockSolution[key]) return false;
//         }

//         return true;
//     }

//     useEffect(()=> {
//         if (!blockIdPlayground) return;
//         const isCorrect = compareCodeWithSolution();
//         setCompletedBlocks(prev => ({...prev, [blockIdPlayground]: isCorrect}))
//     }, [blockStyles]);

//     const isCompleted = completedBlocks[blockIdPlayground] === true ? 'completed' : '';

//     const finalStyle = {
//         ...style,
//         ...(isHovered ? {outline: "5px solid var(--highlight-red)"} : {}),
//         ...(playground === true ? (blockStyles?.[blockIdPlayground] || {}) : {})
//     }

//     const finalStyleHoverText = {
//         ...(isHovered ? {display: "block"} : {display: "none"})
//     }

//     return (
//         <div 
//             style={finalStyle} 
//             onMouseEnter={() => setHoveredBlock(group)} 
//             onMouseLeave={() => setHoveredBlock(null)}
//             className={`block ${blockIdPlayground} ${isCompleted}`}
//         >
//             <div className='block-name-text' style={finalStyleHoverText} aria-label={blockId}>{blockId}</div>
//         </div>
//     )
// }