'use client';
import { useState } from "react"

export default function DarkModeButton() {
    const [colorMode, setColorMode] = useState('dark');
    const handleClick = () => {
        setColorMode(colorMode === 'dark' ? 'light' : 'dark')
    }
    
    return(
        <button onClick={handleClick} aria-label="Toggle dark/light mode">
            {
                colorMode === 'dark' ? (
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#132c47"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    >
                    <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                    <path d="M4 12h.01" />
                    <path d="M12 4v.01" />
                    <path d="M20 12h.01" />
                    <path d="M12 20v.01" />
                    <path d="M6.31 6.31l-.01 -.01" />
                    <path d="M17.71 6.31l-.01 -.01" />
                    <path d="M17.7 17.7l.01 .01" />
                    <path d="M6.3 17.7l.01 .01" />
                    </svg>
                ) : (
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#132c47"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    >
                    <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
                    </svg>
                )
            }
        </button>
    )
}