import './CloseModalButton.css'

export default function CloseModalButton({onClick, className}) {
    
    return(
        <button onClick={onClick} className={`close-modal-button ${className}`}>
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            >
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
            </svg>
        </button>
    )
}