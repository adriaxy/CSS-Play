import './Theory.css'
import SubHeaderSection from '../Shared/SubHeaderSection'
import css from 'styled-jsx/css'

export default function Theory({cssPropertyName, theoryText}){
    return(
        <>
            <SubHeaderSection sectionName={'theory__title'}>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--text-on-dark)"
                strokeWidth="1.75"
                strokeLinejoin="round"
                >
                <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                <path d="M3 6l0 13" />
                <path d="M12 6l0 13" />
                <path d="M21 6l0 13" />
                </svg>
            <span className='theory__title--light'>CSS property: <span className='theory__title--bold'>{cssPropertyName.toUpperCase()}</span></span>
            </SubHeaderSection>
            <div className="theory__text">{theoryText}</div>
        </>
    )
}