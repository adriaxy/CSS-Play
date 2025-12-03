import './TargetLayout.css'
import SubHeaderArena from "../Shared/SubHeaderArena"
import PlaygroundButton from "../Shared/PlaygroundButton"
import BlockContainer from '../Shared/BlockContainer'
import Block from '../Shared/Block'
import Grid from '../Shared/Grid'

export default function TargetLayout({initialStyles}){

    return(
        <div className='target-layout'>
            <SubHeaderArena 
                SubHeaderTitle={'Target Layout'}
            />
            <BlockContainer blockId={'target'} initialStyles={initialStyles}>
                <Grid />
                <Block blockId={'block 1'} style={{...initialStyles[1].completed, ...initialStyles[1].solution}} group={'group1'}/>
                <Block blockId={'block 2'} style={{...initialStyles[1].completed, ...initialStyles[2].solution}} group={'group2'}/>
            </BlockContainer>
        </div>
    )
}