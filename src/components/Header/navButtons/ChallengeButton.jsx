import '../Header.css';

export default function ChallengeButton({ label, onClick, svg, svgPosition = 'left'}) {
    return (
        <button className="challenge-button" onClick={onClick}>
            {svg && svgPosition === 'left' && 
            <span className='icon'>
                {svg}
            </span>
            }
            <span className='label'>{label}</span>
            {svg && svgPosition === 'right' && 
            <span className='icon'>
                {svg}
            </span>
            }
        </button>
    )
}