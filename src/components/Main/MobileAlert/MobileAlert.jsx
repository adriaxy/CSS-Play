import './MobileAlert.css'
import CloseModalButton from '../Shared/CloseModalButton'
import { useState } from 'react'
import { useGame } from '@/app/GameContext'

export default function MobileAlert() {
    const { mobileAlertShown, setMobileAlertShown } = useGame();
    const [isHidden, setIsHidden] = useState(false);

    const handleClick = () => {
        setIsHidden(true);
        setMobileAlertShown(true);
    };

    if(mobileAlertShown || isHidden) return null; 

    return (
        <div className={`modal-alert-mobile ${isHidden ? 'hide' : ''}`}>
            <div className='modal-alert-mobile__container'>
                <CloseModalButton 
                    className={'modal-alert-mobile__close-btn'}
                    onClick={handleClick}
                />
                <div className="modal-alert-mobile__main-content">
                    <div className='modal-alert-mobile__svg'>
                        <div className="alert-svg__circle">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="70"
                            height="70"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#0a1422"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            >
                            <path d="M15 21h-7a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v7" />
                            <path d="M11 4h2" />
                            <path d="M12 17v.01" />
                            <path d="M19 16v3" />
                            <path d="M19 22v.01" />
                            </svg>
                        </div>
                    </div>
                    <span className='modal-alert-mobile__title'>For the best experience</span>
                    <p className='modal-alert-mobile__description'>
                        This app works best on desktop or laptop screens. To fully enjoy the interactive challenges, we recommend using a larger device.
                    </p>
                </div>
            </div>
        </div>
    )
}