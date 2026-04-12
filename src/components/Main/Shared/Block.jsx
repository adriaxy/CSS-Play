import './Block.css'
import { useGame } from '@/app/GameContext'
import { useEffect } from 'react';

export default function Block({blockId, style, group, blockSolution, playground = false, blockText}) {
    // Obtenemos estado global del juego desde el context
    const {hoveredBlock, setHoveredBlock, sublevelState, currentSublevel, currentLevel, setSublevelState, currentSublevelData} = useGame();
    const hasBlockChildrenInside = currentSublevelData.blocks[0].blockChildrenInside;
    const insideChildrenStyles = currentSublevelData?.blocks[4]?.style;
    const insideChildrenText = currentSublevelData?.blocks[4]?.text;    

    // ID del bloque para playground (sin espacios)
    const blockIdPlayground = playground === true ? blockId.replace(' ', '') : null;
    // Saber si el bloque actual está siendo hover
    const isHovered = hoveredBlock === group;

    // Compara el estilo actual del bloque con la solución
    const compareCodeWithSolution = () => {
        if (!blockIdPlayground) return;
        const userInputSolution = sublevelState?.[currentLevel]?.[currentSublevel]?.blockStyles?.[blockIdPlayground];
        if(!userInputSolution || !blockSolution) return false;
        const finalValidation = blockSolution.some(solution => {
            let flag = true;
            for(const key in solution){
                if(userInputSolution[key] !== solution[key]){
                    flag = false;
                    break; 
                }
            }
            return flag;
        })
        return finalValidation;
    }

    // actualiza el estado de completado del bloque
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
    
    // Clase para marcar visualmente el bloque completado
    const isCompleted = sublevelState[currentLevel][currentSublevel].completedBlocks[blockIdPlayground] === true ? 'completed' : '';

    // Estilos finales combinando props, hover y estilos de playground
    const finalStyle = {
        ...style,
        ...(isHovered ? {outline: "2px solid var(--highlight-red)", transition: "box-shadow 0.1s ease"} : {}),
        ...(playground === true ? (sublevelState[currentLevel][currentSublevel].blockStyles[blockIdPlayground] || {}) : {})
    }

    const finalStyleHoverText = {
        ...(isHovered ? {display: "block"} : {display: "none"})
    }

    return (
        <>
            <div 
            style={finalStyle} 
            onMouseEnter={() => setHoveredBlock(group)} 
            onMouseLeave={() => setHoveredBlock(null)}
            className={`block ${blockIdPlayground} ${isCompleted}`}>
                {hasBlockChildrenInside && <div style={insideChildrenStyles}>{insideChildrenText !== '' && insideChildrenText}</div>}
                <div className='block-name-text' style={finalStyleHoverText} aria-label={blockId}>{blockId}</div>
                {blockText && <p className='block-content'>{blockText}</p>}
            </div>
            {}
        </>
    )
}