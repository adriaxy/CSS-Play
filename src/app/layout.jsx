"use client";

import './global.css';
import { ThemeProvider, useTheme } from './ThemeContext';
import { GameProvider } from './GameContext';
import { useEffect } from 'react';
import Header from '@/components/Header/Header';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <GameProvider>
          <ThemeProvider>
          <BodyClassController>
            <div className='container'>
              {children}
            </div>
          </BodyClassController>
        </ThemeProvider>
        </GameProvider>
      </body>
    </html>
  );
}

function BodyClassController({children}){
   const { theme } = useTheme();

   useEffect(() => {
    document.documentElement.className = theme;
   }, [theme]);

   return children; 
}
