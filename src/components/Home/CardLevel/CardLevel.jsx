import './CardLevel.css'
import Link from "next/link";

export default function CardLevel({levelName, levelId, levelPath, onClick, children, completedCount = 0, totalCount = 0}){
    const allCompleted = totalCount > 0 && completedCount === totalCount;
    return(
        <article className='card-level'>
             <div className="card-level__title">
                <div className={`title__badge-total${allCompleted ? ' title__badge-total--completed' : ''}`}>
                    {completedCount}/{totalCount}
                </div>
                <button className='title__label' onClick={onClick}>{levelId} - {levelName}</button>
            </div>
            <div>{children}</div>
            <Link href={levelPath}>
                <button className='card-level__play'>
                    <svg className="play__svg" width="18" height="20" viewBox="0 0 16 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.25 6.03571C16.25 7.19041 16.25 10.0772 14.25 11.2319L4.5 16.861C2.5 18.0157 1.01395e-06 16.5724 1.1149e-06 14.263L1.60701e-06 3.00463C1.70796e-06 0.695224 2.5 -0.748153 4.5 0.406548L14.25 6.03571Z"/>
                    </svg>
                </button>
            </Link>
        </article>
    )
}