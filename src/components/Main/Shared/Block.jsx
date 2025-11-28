import './Block.css'

export default function Block({blockId, blockStyle}) {

    if(blockId === 'playground'){
        return (
            <div style={{...blockStyle[1].completed, ...blockStyle[0].style}}></div>
        )
    }
    
    return(
        <div style={blockStyle}></div>
    )
}