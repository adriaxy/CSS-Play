import './Theory.css'
import SubHeaderSection from '../Shared/SubHeaderSection'
import css from 'styled-jsx/css'
import { useGame } from '@/app/GameContext'
import levels from '@/data/levels'

export default function Theory({cssPropertyName}){
    const { currentLevel, currentSublevel } = useGame();
    const levelRoot = levels[currentLevel].sublevels[currentSublevel];
    const description = levelRoot.theory.description;
    const syntax = levelRoot.theory.syntax;

    return(
        <>
            <SubHeaderSection sectionName={'theory__title'}>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--text-on-light)"
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
            <div className="theory__text">
                <div className="theory__text-limit">
                    <div className='theory__text-description'>
                        {description.map((p, i) => (
                            <p key={i} className='description-property__paragraph'>{p}</p>
                        ))}
                    </div>
                    <div className='theory__text-syntax'>
                    <h4 className='text-syntax__title'>Syntax</h4>
                    {syntax.map((s, i) => (
                        <pre key={i} className='syntax-property__code'><code>{s}</code></pre>
                    ))}
                </div>
                </div>
            </div>
        </>
    )
}