import './TargetLayout.css'
import SubHeaderArena from "../Shared/SubHeaderArena"
import PlaygroundButton from "../Shared/PlaygroundButton"
import BlockContainer from '../Shared/BlockContainer'
import Block from '../Shared/Block'

export default function TargetLayout({initialStyles}){

    return(
        <div className='target-layout'>
            <SubHeaderArena 
                SubHeaderTitle={'Target Layout'}
            />
            <BlockContainer 
                blockId={'target'}
                initialStyles={initialStyles}
            >
                <Block blockId={'targetBlock1'} style={{...initialStyles[1].completed, ...initialStyles[1].solution}} group={'group1'}/>
                <Block blockId={'targetBlock2'} style={{...initialStyles[1].completed, ...initialStyles[2].solution}} group={'group2'}/>
                {/* <Block blockStyle={{...initialStyles[2].completed, ...initialStyles[2].solution}}/> */}
            </BlockContainer>
        </div>
    )
}