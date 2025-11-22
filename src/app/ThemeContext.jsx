"use client";

import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({children}) {
    const[theme, setTheme] = useState('dark-mode');

    const toggleTheme = () => {
        setTheme(prev => 
            prev === 'dark-mode' ? 'light-mode' : 'dark-mode'
        );
    };

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme(){
    return useContext(ThemeContext)
}