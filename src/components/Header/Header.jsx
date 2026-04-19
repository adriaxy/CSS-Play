import './Header.css';
import LogoButton from './LogoButton';
import PrevChallengeButton from './PrevChallengeButton';
import NextChallengeButton from './NextChallengeButton';
import BackHomeButton from './navButtons/BackHomeButton';
import ThemeModeButton from './ThemeModeButton';
import AnimatedText from '../Home/AnimatedText/AnimatedText';
import { useGame } from '@/app/GameContext';

export default function Header({ onPrev, onNext, isPrevDisabled, isNextDisabled, children, isHome}) {
    const { currentLevelData } = useGame();

    return (
        <>
            <div className='header-container'>
                <header className="header">
                    <LogoButton />
                    {!isHome && <PrevChallengeButton onClick={onPrev} isPrevDisabled={isPrevDisabled} className={'header__challenge-button--desktop'}/>}
                    {!isHome && <div className="header__center">
                        {<h1 className='header__title'>Level {currentLevelData.level} : <span>{currentLevelData.name}</span></h1>}
                    </div>}
                    {!isHome && <NextChallengeButton onClick={onNext} isNextDisabled={isNextDisabled} className={'header__challenge-button--desktop'}/>}
                    <div className="header__right">
                        {!isHome 
                            ? <BackHomeButton
                                className={"header__home-btn"}
                                type={"home-btn"}
                            />
                            : <AnimatedText />
                        }
                        <ThemeModeButton />
                    </div>
                </header>
            </div>
            {!isHome && <nav className='navigation-responsive'>
                <PrevChallengeButton onClick={onPrev} isPrevDisabled={isPrevDisabled} className={'header__challenge-button--mobile'}/>
                <div className='nav-sep'></div>
                <NextChallengeButton onClick={onNext} isNextDisabled={isNextDisabled} className={'header__challenge-button--mobile'}/>
            </nav>}
        </>
    )
}