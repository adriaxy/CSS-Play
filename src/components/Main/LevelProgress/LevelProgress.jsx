import './LevelProgress.css';
import ProgressDots from './ProgressDots';


export default function LevelProgress({level, sublevel, numOfSublevels}){

    return (
        <section className='main__level-progress'>
            <span className='progress__title'>{`L-${level}`}</span>
            <ProgressDots numOfSublevels={numOfSublevels} level={level} sublevel={sublevel}/>
        </section>
    )
}