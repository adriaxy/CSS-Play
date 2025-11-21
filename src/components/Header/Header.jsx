import './Header.css';
import LogoButton from './LogoButton';
import PrevChallengeButton from './PrevChallengeButton';
import NextChallengeButton from './NextChallengeButton';
import BackHomeButton from './navButtons/BackHomeButton';
import DarkModeButton from './DarkModeButton';

export default function Header({title}) {

    return (
        <header>
            <LogoButton />
            <PrevChallengeButton />
            <div className="header-center">
                {<h1>CSS Property: <span className="highlight">{title}</span></h1>}
            <div className="outline-title"></div>
            </div>
            <NextChallengeButton />
            <div className="header-right">
                <BackHomeButton
                    className={"home-btn"}
                    type={"home-btn"}
                />
                <DarkModeButton />
            </div>
        </header>
    )
}