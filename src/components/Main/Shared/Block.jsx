import './Block.css'
import { useGame } from '@/app/GameContext'

export default function Block({blockId, style, group}) {
    const {hoveredBlock, setHoveredBlock} = useGame();

    const isHovered = hoveredBlock === group;

    const finalStyle = {
        ...style,
        ...(isHovered ? {outline: "5px solid red"} : {})
    }

    return (
        <div 
            style={finalStyle} 
            onMouseEnter={() => setHoveredBlock(group)} 
            onMouseLeave={() => setHoveredBlock(null)}
        />
    )
}