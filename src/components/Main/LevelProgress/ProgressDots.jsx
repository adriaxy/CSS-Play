import './ProgressDots.css';
import LevelDot from './LevelDot';
import { useGame } from '@/app/GameContext';
import levels from '@/data/levels';

export default function ProgressDots({numOfSublevels, level, sublevel}) {
    const { sublevelState, currentLevel, currentSublevel } = useGame();
    
    return(
        <div className='progress-dots'>
            {Array.from({ length: numOfSublevels }).map((_, i) => (
                <LevelDot key={i} level={level} sublevel={i} dotName={levels?.[currentLevel]?.sublevels[i]?.name} isCompleted={sublevelState[currentLevel][i]?.completed ? 'completed' : ''}/>
            ))}
        </div>
    )
}