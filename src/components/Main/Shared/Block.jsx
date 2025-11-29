import './Block.css'
import { useGame } from '@/app/GameContext'

export default function Block({blockId, style, group}) {
    const {hoveredBlock, setHoveredBlock} = useGame();

    const isHovered = hoveredBlock === group;

    const finalStyle = {
        ...style,
        ...(isHovered ? {outline: "5px solid red"} : {})
    }

    const finalStyleHoverText = {
        ...(isHovered ? {display: "block"} : {display: "none"})
    }

    return (
        <div 
            style={finalStyle} 
            onMouseEnter={() => setHoveredBlock(group)} 
            onMouseLeave={() => setHoveredBlock(null)}
            className='block'
        >
            <div className='block-name-text' style={finalStyleHoverText} aria-label={blockId}>{blockId}</div>
        </div>
    )
}