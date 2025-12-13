import './Header.css';
import LogoButton from './LogoButton';
import PrevChallengeButton from './PrevChallengeButton';
import NextChallengeButton from './NextChallengeButton';
import BackHomeButton from './navButtons/BackHomeButton';
import ThemeModeButton from './ThemeModeButton';
import levels from '@/data/levels';
import { useGame } from '@/app/GameContext';

export default function Header({ onPrev, onNext, isPrevDisabled, isNextDisabled}) {
    const { currentLevel, currentSublevel } = useGame();
    const levelRoot = levels[currentLevel];
    const sublevelName = levelRoot.sublevels[currentSublevel].name.toUpperCase();

    return (
        <header className="header">
            <LogoButton />
            <PrevChallengeButton onClick={onPrev} isPrevDisabled={isPrevDisabled}/>
            <div className="header__center">
                {<h1 className='header__title'>Level {levelRoot.level} : <span className="header__title--highlight">{sublevelName}</span></h1>}
            <div className="header__title-outline"></div>
            </div>
            <NextChallengeButton onClick={onNext} isNextDisabled={isNextDisabled}/>
            <div className="header__right">
                <BackHomeButton
                    className={"header__home-btn"}
                    type={"home-btn"}
                />
                <ThemeModeButton />
            </div>
        </header>
    )
}