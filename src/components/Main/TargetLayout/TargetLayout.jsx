import './TargetLayout.css'
import SubHeaderArena from "../Shared/SubHeaderArena"
import PlaygroundButton from "../Shared/PlaygroundButton"
import BlockContainer from '../Shared/BlockContainer'
import Block from '../Shared/Block'

export default function TargetLayout({initialStyles}){
    console.log(initialStyles[0].completed)

    return(
        <div className='target-layout'>
            <SubHeaderArena 
                SubHeaderTitle={'Target Layout'}
            />
            <BlockContainer 
                blockId={'target'}
                initialStyles={initialStyles}
            >
                <Block blockStyle={{...initialStyles[1].completed, ...initialStyles[1].solution}}/>
                <Block blockStyle={{...initialStyles[2].completed, ...initialStyles[2].solution}}/>
            </BlockContainer>
        </div>
    )
}