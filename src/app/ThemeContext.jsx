"use client";

import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export function ThemeProvider({children}) {
    const[theme, setTheme] = useState('dark-mode');

    const toggleTheme = () => {
        setTheme(prev => 
            prev === 'dark-mode' ? 'light-mode' : 'dark-mode'
        );
    };

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if(savedTheme){
            setTheme(savedTheme)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("theme", theme)
    }, [theme])

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme(){
    return useContext(ThemeContext)
}