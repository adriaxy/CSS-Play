import './Theory.css'
import SubHeaderSection from '../Shared/SubHeaderSection'
import { useGame } from '@/app/GameContext'

export default function Theory(){
    const { currentSublevelData } = useGame();
    const description = currentSublevelData.theory.description;
    const syntax = currentSublevelData.theory.syntax;
    const title = Array.from({ length: 100 });

    return(
        <>
            <SubHeaderSection sectionName={'theory__title'} isTitleAnmiated={true}>
            <span className='theory__title--light'>
                {title.map((_,i) => (
                    <span key={i} className='theory__title--bold'>{currentSublevelData.name}</span>
                ))}
            </span>
            </SubHeaderSection>
            <div className="theory__text">
                <div className="theory__text-limit">
                    <div className='theory__text-description'>
                        <h4 className='text-theory__title'>A bit of theory...</h4>
                            <div className="text-theory__container">
                                {description.map((p, i) => (
                                    <p key={i} className='description-property__paragraph'>{p}</p>
                                ))}
                            </div>
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