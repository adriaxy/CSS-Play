import './Block.css'
import { useGame } from '@/app/GameContext'

export default function Block({blockId, style, group, playground = false}) {
    const {hoveredBlock, setHoveredBlock, blockStyles} = useGame();

    const blockIdPlayground = playground === true ? blockId.replace(' ', '') : '';

    const isHovered = hoveredBlock === group;

    const finalStyle = {
        ...style,
        ...(isHovered ? {outline: "5px solid red"} : {}),
        ...(playground === true ? blockStyles[blockIdPlayground] : {})
    }

    const finalStyleHoverText = {
        ...(isHovered ? {display: "block"} : {display: "none"})
    }

    return (
        <div 
            style={finalStyle} 
            onMouseEnter={() => setHoveredBlock(group)} 
            onMouseLeave={() => setHoveredBlock(null)}
            className={`block ${blockIdPlayground}`}
        >
            <div className='block-name-text' style={finalStyleHoverText} aria-label={blockId}>{blockId}</div>
        </div>
    )
}