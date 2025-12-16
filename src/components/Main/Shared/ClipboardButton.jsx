import './ClipboardButton.css'
import { useState } from 'react'

export default function ClipboardButton({copiedText}){
    const [clipboard, setClipboard] = useState(false);
    const handleClick = () => {
        setClipboard(true);
        navigator.clipboard.writeText(copiedText)
    }

    const resetClipboard = (time) => {
        setTimeout(() => {
            setClipboard(false)
        }, time);
    }

    const svg = clipboard === false 
        ? <svg xmlns="http://www.w3.org/2000/svg" 
            width="18" 
            height="18" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="var(--bg-light)" 
            strokeWidth="1" 
            strokeLinecap="round" 
            strokeLinejoin="round">
            <rect width="8" height="4" x="8" y="2" rx="1" ry="1"/>
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
            </svg>
            
        : <svg xmlns="http://www.w3.org/2000/svg" 
            width="18" 
            height="18" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="var(--bg-light)" 
            strokeWidth="1" 
            strokeLinecap="round" 
            strokeLinejoin="round">
            <rect width="8" height="4" x="8" y="2" rx="1" ry="1"/>
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/>
            </svg>

    const copyButtonMessage = clipboard === false 
        ? 'Copy code'
        : 'Copied'

    return(
        <button onClick={() => {handleClick(); resetClipboard(1000)}} className="copy-code-button">
            {svg}
            <span className="copy-code-button__text">{copyButtonMessage}</span>
        </button>
    )
}