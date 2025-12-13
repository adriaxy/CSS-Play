import './ProgressDots.css';
import LevelDot from './LevelDot';
import { useGame } from '@/app/GameContext';

export default function ProgressDots() {
    const { sublevelState, currentLevel, currentLevelData } = useGame();

    return (
        <div className='progress-dots'>
            {currentLevelData.sublevels.map((sublevel, i) => (
                <LevelDot
                    key={i}
                    sublevel={i}
                    dotName={sublevel.name}
                    isCompleted={sublevelState[currentLevel][i]?.completed ? 'completed' : ''}
                />
            ))}
        </div>
    );
}
