import '../Header.css';

export default function ChallengeButton({ label, onClick, svg, svgPosition = 'left', isNextDisabled, isPrevDisabled}) {
    const disabled = isNextDisabled === true || isPrevDisabled === true ? 'disabled' : '';
    const svgNamePosition = svgPosition;

    return (
        <button className={`challenge-button ${svgNamePosition} ${disabled}`} onClick={onClick}>
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