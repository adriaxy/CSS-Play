import { useState, useEffect } from "react";
import SolutionCodeSection from "../Shared/SolutionCodeSection";

export default function ModalSolution({viewSolution, solutionCode, onClick}) {
    const finalClass = viewSolution === true ? 'showModal' : '';

    

    useEffect(()=> {
        const handelKeyDown = (e) => {
            console.log(9)
            if(e.key === 'Escape') onClick();
        }

        if(viewSolution === true){
            window.addEventListener('keydown', handelKeyDown);
            return () => {window.removeEventListener('keydown', handelKeyDown)};
        }
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
                    <SolutionCodeSection blockId={'block1'} solutionCode={solutionCode[1].solutionString}/>
                    <SolutionCodeSection blockId={'block2'} solutionCode={solutionCode[0].id}/>
                </div>
            </div>
        </div>
    )
}