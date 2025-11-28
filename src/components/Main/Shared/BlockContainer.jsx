import './BlockContainer.css'

export default function BlockContainer({blockId, initialStyles, children}){
    if(blockId === 'target'){
        return (
            <div className="block-container" style={initialStyles[3].style}>
                {children}
            </div>
        )
    }

    if(blockId === 'playground'){
        return (
            <div className="block-container" style={initialStyles[3].style}>
                {children}
            </div>
        )
    }
}