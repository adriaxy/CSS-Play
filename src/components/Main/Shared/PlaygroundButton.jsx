import './PlaygroundButton.css'

export default function PlaygroundButton({buttonLabel, buttonState = false, onClick}){

    return(
        <label className={`sub-header__button ${buttonState ? 'sub-header__button--active' : ''}`}>
            <input type="checkbox" checked={buttonState} onChange={onClick}/>
            {buttonLabel}
        </label>
    )
}