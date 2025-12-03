import './Grid.css'
import { useGame } from '@/app/GameContext';
import React from 'react';

export default function Grid({cols = 8, rows = 6, size = 50, visible}) {
    const { showGrid } = useGame();
    
    return(
        <div className={`grid-wrapper ${showGrid ? 'show' : ''}`}>
            {Array.from({ length: cols }).map((_, i) => {
                return (
                    <React.Fragment key={i}>
                        <div  
                            className="gridX" 
                            style={{left: i*size, borderRight: i!== cols - 1 ? '1px solid var(--border-grid-primary)' : undefined
                        }}>
                        </div>
                        {i !== 0 && <span 
                            className='info-gridX'
                            style={{left: i*size - 50}}
                            >{`${(i*size).toString()}`}
                        </span>}
                    </React.Fragment>
            )})}
            {Array.from({ length: rows }).map((_, i) => {
                return (
                    <React.Fragment key={i}>
                        <div 
                        key={i} 
                        className="gridY" 
                        style={{top: i*size, borderBottom: i!== rows - 1 ? '1px solid var(--border-grid-primary)' : undefined
                        }}>
                        </div>
                        {i !== 0 && <span 
                            className='info-gridY'
                            style={{top: i*size}}
                            >{`${(i*size).toString()}`}
                        </span>}
                    </React.Fragment>
            )})}
        </div>
    )
}