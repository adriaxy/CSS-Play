import './Block.css'
import { useGame } from '@/app/GameContext'
import { useEffect } from 'react';

export default function Block({blockId, style, group, blockSolution, playground = false}) {
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
        const current = sublevelState?.[currentLevel]?.[currentSublevel]?.blockStyles?.[blockIdPlayground];
        if(!current || !blockSolution) return false;
        for(const key in blockSolution){
            if(current[key] !== blockSolution[key]) return false;
        }

        return true;
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
        ...(isHovered ? {outline: "5px solid var(--highlight-red)"} : {}),
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
            </div>
            {}
        </>
    )
}