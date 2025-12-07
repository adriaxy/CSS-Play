import { useEffect, useState } from 'react';
import './LevelDot.css';

export default function LevelDot({level, sublevel, isCompleted}) {
    return(
        <button className={`level-dot ${isCompleted}`}/>
    )
}