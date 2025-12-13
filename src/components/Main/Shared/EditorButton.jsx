import './EditorButton.css'

export default function editorButton({onClick, children}) {

    return(
        <button onClick={onClick} className='editor-button'>
            <div>{children}</div>
        </button>
    )
}