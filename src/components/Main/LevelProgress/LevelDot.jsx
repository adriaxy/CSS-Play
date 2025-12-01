import { useEffect, useState } from 'react';
import './LevelDot.css';
import { useGame } from '@/app/GameContext';

export default function LevelDot({level, sublevel}) {
    const { levelProgress } = useGame();
    
    const completed = levelProgress?.[level]?.[sublevel] ?? false ? 'completed' : '';

    return(
        <button className={`level-dot ${completed}`}/>
    )
}