import './Grid.css'
import { useGame } from '@/app/GameContext';

export default function Grid({cols = 20, rows = 15, size = 20, visible}) {
    const { showGrid } = useGame();
    
    return(
        <div className={`grid-wrapper ${showGrid ? 'show' : ''}`}>
            {Array.from({ length: cols }).map((_, i) => {
                return (
                    <div 
                        key={i} 
                        className="gridX" 
                        style={{left: i*size, borderRight: i!== cols - 1 ? '1px solid var(--border-grid-primary)' : undefined
                    }}>
                    </div>
            )})}
            {Array.from({ length: rows }).map((_, i) => {
                return (
                    <div 
                        key={i} 
                        className="gridY" 
                        style={{top: i*size, borderBottom: i!== rows - 1 ? '1px solid var(--border-grid-primary)' : undefined
                    }}>
                    </div>
            )})}
        </div>
    )
}