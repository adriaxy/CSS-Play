import './BlockContainer.css'
import { useGame } from "@/app/GameContext"
import levels from '@/data/levels';

export default function BlockContainer({blockId, children}){
    const {evaluationResult, sublevelState, currentSublevel, currentLevel} = useGame();
    const containerStyles = levels[currentLevel].sublevels[currentSublevel].blocks.find(b => b.id === "blockParent").style
    const isCompleted = sublevelState[currentLevel][currentSublevel].completed ? 'completed' : ''; 

    if(blockId === 'target'){
        return (
            <div className="block-container" style={containerStyles}>
                {children}
            </div>
        )
    }

    if(blockId === 'playground'){
        return (
            <div className="block-container block-container-playground" style={containerStyles}>
                <div className={`completed-sublevel-message ${isCompleted}`}>
                    <span className='completed-sublevel__title'>🎉&nbsp;&nbsp;Challenge completed</span>
                </div>
                {children}
            </div>
        )
    }
}

