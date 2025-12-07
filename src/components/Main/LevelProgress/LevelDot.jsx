import { useEffect, useState } from 'react';
import './LevelDot.css';



export default function LevelDot({level, sublevel, isCompleted, dotName}) {
    let [isHovered, setIsHovered] = useState('')
    
    return(
        <div className="level-dot-wrapper" onMouseEnter={() => setIsHovered('show')} onMouseLeave={() => setIsHovered('')}>
            <button className={`level-dot ${isCompleted}`} />
            <span className={`level-dot__sublevel-name ${isHovered}`}>
                {dotName}
                <span className='level-dot__sublevel-name__edge'></span>
            </span>
        </div>
    )
}