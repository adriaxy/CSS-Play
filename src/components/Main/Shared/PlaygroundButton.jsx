import './PlaygroundButton.css'
import { useState } from 'react'
import { useGame } from '@/app/GameContext';

export default function PlaygroundButton({buttonLabel, type}){
    const { setShowGrid, showGrid } = useGame();

    const button = type === 'grid' 
        ? 
        <label className={`sub-header__button ${showGrid ? 'sub-header__button--active' : ''}`}>
            <input type="checkbox" checked={showGrid} onChange={(e) => setShowGrid(e.target.checked)}/>
            {buttonLabel}
        </label>
        
        : 
        <label className={`sub-header__button`}>
            <input type="checkbox" onChange={(e) => e.target.checked}/>
            {buttonLabel}
        </label>
        

    return (button)
}