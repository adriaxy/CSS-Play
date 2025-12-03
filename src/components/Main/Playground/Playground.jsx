import SubHeaderArena from "../Shared/SubHeaderArena"
import PlaygroundButton from "../Shared/PlaygroundButton"
import Block from "../Shared/Block"
import BlockContainer from "../Shared/BlockContainer"
import './Playground.css'

export default function Playground({initialStyles}){
    const horizontalGrid = Array.from({ lenght: 20 }, (_, i) => i);
    let positionX = 0;
    let positionY = 0;

    return(
        <div className='playground'>
            <SubHeaderArena 
                SubHeaderTitle={'Playground'}
                buttons={[
                    <PlaygroundButton 
                        buttonLabel={'Show Grid'}
                    />,
                    <PlaygroundButton 
                        buttonLabel={'Slide & Compare'}
                    />
                ]}
            />
            <BlockContainer blockId={'playground'} initialStyles={initialStyles}>
                <Block blockId={'block 1'} style={{...initialStyles[1].completed, ...initialStyles[0].style}} group={'group1'} playground={true} blockSolution={initialStyles[1].solutionCompleted}/>
                <Block blockId={'block 2'} style={{...initialStyles[1].completed, ...initialStyles[0].style}} group={'group2'} playground={true} blockSolution={initialStyles[2].solutionCompleted}/>
                {Array.from({ length: 20 }).map((_, i) => {
                   i === 0 ? positionX = 0 : positionX += 20; 
                   return (<div key={i} className="playground__gridX" style={{left: `${positionX}px`, borderRight: i!==19 ? '1px solid var(--border-grid-primary)' : undefined}}></div>)
                })}
                {Array.from({ length: 15 }).map((_, i) => {
                   i === 0 ? positionY = 0 : positionY += 20; 
                   return (<div key={i} className="playground__gridY" style={{top: `${positionY}px`, borderBottom: i!==14 ? '1px solid var(--border-grid-primary)' : undefined}}></div>)
                })}
            </BlockContainer>
        </div>
    )
}

