import './Header.css';
import LogoButton from './LogoButton';
import PrevChallengeButton from './PrevChallengeButton';
import NextChallengeButton from './NextChallengeButton';
import BackHomeButton from './navButtons/BackHomeButton';
import ThemeModeButton from './ThemeModeButton';

export default function Header({title, onPrev, onNext, isPrevDisabled, isNextDisabled}) {

    return (
        <header>
            <LogoButton />
            <PrevChallengeButton onClick={onPrev} isPrevDisabled={isPrevDisabled}/>
            <div className="header-center">
                {<h1>CSS Property: <span className="highlight">{title}</span></h1>}
            <div className="outline-title"></div>
            </div>
            <NextChallengeButton onClick={onNext} isNextDisabled={isNextDisabled}/>
            <div className="header-right">
                <BackHomeButton
                    className={"home-btn"}
                    type={"home-btn"}
                />
                <ThemeModeButton />
            </div>
        </header>
    )
}