import '../Header.css';

export default function ChallengeButton({ label, onClick, svg, svgPosition = 'left', disabled}) {
    const svgNamePosition = svgPosition;

    return (
        <button className={`header__challenge-button ${svgNamePosition} ${disabled ? 'header__challenge-button--disabled' : ''}`} onClick={onClick}>
            {svg && svgPosition === 'left' && 
                svg
            }
            <span>{label}</span>
            {svg && svgPosition === 'right' && 
                svg
            }
        </button>
    )
}