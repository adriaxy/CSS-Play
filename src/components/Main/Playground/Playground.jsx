import SubHeaderArena from "../Shared/SubHeaderArena"
import PlaygroundButton from "../Shared/PlaygroundButton"
import Block from "../Shared/Block"
import BlockContainer from "../Shared/BlockContainer"

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
                <Block blockId={'playground'} blockStyle={initialStyles}/>
                <Block blockId={'playground'} blockStyle={initialStyles}/>
            </BlockContainer>
        </div>
    )
}