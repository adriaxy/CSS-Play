import './BlockContainer.css'
import { useGame } from "@/app/GameContext"

export default function BlockContainer({blockId, initialStyles, children}){
    const {evaluationResult, sublevelState, currentSublevel, currentLevel} = useGame();

    const isCompleted = sublevelState[currentLevel][currentSublevel].completed ? 'completed' : ''; 

    if(blockId === 'target'){
        return (
            <div className="block-container" style={initialStyles[3].style}>
                {children}
            </div>
        )
    }

    if(blockId === 'playground'){
        return (
            <div className="block-container block-container-playground" style={initialStyles[3].style}>
                <div className={`completed-sublevel-message ${isCompleted}`}>
                    <span className='completed-sublevel__title'>🎉&nbsp;&nbsp;Challenge completed</span>
                </div>
                {children}
            </div>
        )
    }
}