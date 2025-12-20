import './BlockContainer.css'
import { useGame } from "@/app/GameContext"
import { useEffect, useState } from 'react';

export default function BlockContainer({blockId, children}){
    const {sublevelState, currentSublevel, currentLevel, currentSublevelData} = useGame();
    const containerStyles = currentSublevelData.blocks.find(b => b.id === "blockParent").style;

    const [isCompleted, setIsCompleted]  = useState(false);

    useEffect(() => {
        const completed = sublevelState[currentLevel][currentSublevel].completed;
        setIsCompleted(completed);
    }, [sublevelState, currentLevel, currentSublevel]);

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
                <div className={`completed-sublevel-message ${isCompleted ? 'completed' : ''}`}>
                    <span className='completed-sublevel__title'>🎉&nbsp;&nbsp;Challenge completed</span>
                </div>
                {children}
            </div>
        )
    }
}


