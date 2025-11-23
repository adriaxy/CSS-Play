import SubHeaderArena from "../Shared/SubHeaderArena"
import PlaygroundButton from "../Shared/PlaygroundButton"

export default function Playground({}){

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
        </div>
    )
}