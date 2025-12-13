import './LevelProgress.css';
import ProgressDots from './ProgressDots';
import { useGame } from '@/app/GameContext';

export default function LevelProgress(){
    const { currentLevelData } = useGame();

    return (
        <section className='main__level-progress'>
            <span className='progress__title'>{`L-${currentLevelData.level}`}</span>
            <ProgressDots/>
        </section>
    )
}