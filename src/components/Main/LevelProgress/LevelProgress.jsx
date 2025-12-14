import './LevelProgress.css';
import ProgressDots from './ProgressDots';
import { useGame } from '@/app/GameContext';
import { useEffect, useState } from 'react';
import CloseModalButton from '../Shared/CloseModalButton';

export default function LevelProgress(){
    const { currentLevelData, sublevelState, currentLevel, setShowCompletedLevelMessage} = useGame();
    const levelCompletedMessage = currentLevelData.successMessage;
    const [showModal, setShowModal] = useState('');
    const handleClick = () => setShowModal('');

    useEffect(() => {
        const allSublevelsCompleted = sublevelState[currentLevel].every(sub => sub.completed === true);
        allSublevelsCompleted ? setShowModal('show') : null;
    }, [sublevelState, currentLevel])

    return (
        <section className={`main__level-progress ${showModal}`}>
            <span className='progress__title'>{`L-${currentLevelData.level}`}</span>
            <ProgressDots/>
            <div className={`level-completed-modal ${showModal}`}>
                <span className='level-completed-modal__title-wrapper'>
                    <div className=''>
                        <span className='level-completed-modal__title-text'>Congratulations!</span>
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#000000"
                        stroke-width="2.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className='level-completed-modal__confetti'
                        >
                        <path d="M4 5h2" />
                        <path d="M5 4v2" />
                        <path d="M11.5 4l-.5 2" />
                        <path d="M18 5h2" />
                        <path d="M19 4v2" />
                        <path d="M15 9l-1 1" />
                        <path d="M18 13l2 -.5" />
                        <path d="M18 19h2" />
                        <path d="M19 18v2" />
                        <path d="M14 16.518l-6.518 -6.518l-4.39 9.58a1 1 0 0 0 1.329 1.329l9.579 -4.39z" />
                        </svg>
                    </div>
                </span>
                <CloseModalButton onClick={() => (handleClick(), setShowCompletedLevelMessage(true))} className="level-completed-modal__close-button"/> 
                {levelCompletedMessage}
                <div className='next-level-button'>
                    <button className='header__challenge-button next-level'>
                        Go to level 3
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="var(--text-on-light)"
                            strokeWidth="1.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            >
                            <path d="M5 12l14 0" />
                            <path d="M15 16l4 -4" />
                            <path d="M15 8l4 4" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    )
}