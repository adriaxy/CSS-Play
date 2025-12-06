"use client";

import './global.css';
import { ThemeProvider, useTheme } from './ThemeContext';
import { useEffect } from 'react';
import { GameProvider } from './GameContext';
import Header from '@/components/Header/Header';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <GameProvider initialLevel={0} initialSublevel={0}>
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
