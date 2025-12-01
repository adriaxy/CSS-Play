import './ProgressDots.css';
import LevelDot from './LevelDot';

export default function ProgressDots({numOfSublevels, level, sublevel}) {
    return(
        <div className='progress-dots'>
            {Array.from({ length: numOfSublevels }).map((_, i) => (
                <LevelDot key={i} level={level} sublevel={i}/>
            ))}
        </div>
    )
}