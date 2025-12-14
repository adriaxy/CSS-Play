import { useEffect } from "react";
import SolutionCodeSection from "./SolutionCodeSection";
import { useGame } from "@/app/GameContext";
import './ModalSolution.css'

export default function ModalSolution({viewSolution, onClick}) {
    const {currentSublevelData} = useGame();
    const blocksToEvaluate = currentSublevelData.evaluatedBlocks;

    const finalClass = viewSolution === true ? 'showModal' : '';

    useEffect(()=> {
        const handleKeyDown = (e) => {
            if(e.key === 'Escape') onClick();
        }

        if(viewSolution === true){
            window.addEventListener('keydown', handleKeyDown);
        }
        return () => {window.removeEventListener('keydown', handleKeyDown)};
    }, [viewSolution])

    return (
        <div className={`modal-solution__background ${finalClass}`} onClick={onClick}>
            <div className="modal-solution__wrapper" onClick={(e) => e.stopPropagation()}>
                <div className="solution-header">
                    <div>
                        <span className="solution-header__title">Solution</span>
                        <svg xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#fff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        >
                        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/>
                        </svg>
                    </div>
                    <button onClick={onClick} className="close-modal-button">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#fff"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        >
                        <path d="M18 6l-12 12" />
                        <path d="M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className='solution-code'>
                    {
                        blocksToEvaluate.map((blockId) => {
                            const block = currentSublevelData.blocks.find(b => b.id === blockId);
                            if (!block) return null;
                            return (
                                <SolutionCodeSection key={blockId} blockId={blockId} solutionCode={block.viewSolution}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}