import SubHeaderArena from "../Shared/SubHeaderArena"
import PlaygroundButton from "../Shared/PlaygroundButton"
import Block from "../Shared/Block"
import BlockContainer from "../Shared/BlockContainer"
import { useGame } from "@/app/GameContext"

export default function Playground({initialStyles}){
    const handleClick = () => console.log('show grid')

    return(
        <div className='playground'>
            <SubHeaderArena 
                SubHeaderTitle={'Playground'}
                buttons={[
                    <PlaygroundButton 
                        buttonLabel={'Show Grid'}
                        onClick={handleClick}
                        buttonState={true}
                    />,
                    <PlaygroundButton 
                        buttonLabel={'Slide & Compare'}
                        onClick={handleClick}
                    />
                ]}
            />
            <BlockContainer blockId={'playground'} initialStyles={initialStyles}>
                <Block blockId={'playgroundBlock1'} style={{...initialStyles[1].completed, ...initialStyles[0].style}} group={'group1'}/>
                <Block blockId={'playgroundBlock2'} style={{...initialStyles[1].completed, ...initialStyles[0].style}} group={'group2'}/>
            </BlockContainer>
        </div>
    )
}