import '../Header.css';

export default function ChallengeButton({ label, onClick, svg, svgPosition = 'left'}) {
    const svgNamePosition = svgPosition;
    return (
        <button className={`challenge-button ${svgNamePosition}`} onClick={onClick}>
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