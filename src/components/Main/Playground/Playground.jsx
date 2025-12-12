import SubHeaderArena from "../Shared/SubHeaderArena"
import PlaygroundButton from "../Shared/PlaygroundButton"
import Block from "../Shared/Block"
import BlockContainer from "../Shared/BlockContainer"
import './Playground.css'
import Grid from "../Shared/Grid"
import { useGame } from "@/app/GameContext"

export default function Playground({initialStyles}){
    const {currentLevel, currentSublevel} = useGame();
    
    return(
        <div className='playground'>
            <SubHeaderArena 
                SubHeaderTitle={'Playground'}
                buttons={[
                    <PlaygroundButton 
                        type={'grid'}
                        buttonLabel={'Show Grid'}
                    />
                ]}
            />
            <BlockContainer blockId={'playground'} initialStyles={initialStyles}>
                <Grid/>
                <Block blockId={'block 1'} style={{...initialStyles[1].completed, ...initialStyles[0].initialStyleBlock1}} group={'group1'} playground={true} blockSolution={initialStyles[1].solutionCompleted}/>
                <Block blockId={'block 2'} style={{...initialStyles[2].completed, ...initialStyles[0].initialStyleBlock2}} group={'group2'} playground={true} blockSolution={initialStyles[2].solutionCompleted}/>
            </BlockContainer>
        </div>
    )
}

