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
                    <span key={i} className={`theory__title--font-${i % 5}`}>{currentSublevelData.name}</span>
                ))}
            </span>
            </SubHeaderSection>
            <div className="theory__text">
                <div className="theory__text-limit">
                    <div className='theory__text-description'>
                        <h3 className='text-theory__title'>A bit of theory...</h3>
                            <div className="text-theory__container">
                                {description.map((p, i) => (
                                    <p key={i} className='description-property__paragraph'>{p}</p>
                                ))}
                            </div>
                    </div>
                    <div className='theory__text-syntax'>
                    <h3 className='text-syntax__title'>Syntax</h3>
                    {syntax.map(({ comment, selector, code }, i) => (
                        <pre key={i} className='syntax-property__code'>
                            <code>
                                {comment && <><span className='syntax-comment'>{`/* ${comment} */`}</span>{'\n'}</>}
                                {selector ? (
                                    <>
                                        {`${selector} {\n`}
                                        {code.map(({ property, value }, j) => (
                                            <span key={j}>
                                                {'  '}<span className='syntax-prop'>{property}</span>{': '}<span className='syntax-val'>{value}</span>{';\n'}
                                            </span>
                                        ))}
                                        {'}'}
                                    </>
                                ) : (
                                    code.map(({ property, value }, j) => (
                                        <span key={j}>
                                            {j > 0 && '\n'}
                                            <span className='syntax-prop'>{property}</span>{': '}<span className='syntax-val'>{value}</span>{';'}
                                        </span>
                                    ))
                                )}
                            </code>
                        </pre>
                    ))}
                </div>
                </div>
            </div>
        </>
    )
}