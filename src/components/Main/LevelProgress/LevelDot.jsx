import { useState } from 'react';
import './LevelDot.css';
import Link from 'next/link';
import { useGame } from '@/app/GameContext';

export default function LevelDot({ isCompleted, dotName }) {
    const {currentLevelData} = useGame();
    const pageLevel = currentLevelData.level;
    let [isHovered, setIsHovered] = useState('');

    return (
        <Link
            href={`/level/${pageLevel}/${dotName}`}
            className="level-dot-wrapper"
            onMouseEnter={() => setIsHovered('show')}
            onMouseLeave={() => setIsHovered('')}
        >
        <button className={`level-dot ${isCompleted}`} />
        <span className={`level-dot__sublevel-name ${isHovered}`}>
            {dotName}
            <span className="level-dot__sublevel-name__edge"></span>
        </span>
        </Link>
    );
}
