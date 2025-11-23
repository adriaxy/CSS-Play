import SubHeader from "../Shared/SubHeader"
import PlaygroundButton from "../Shared/PlaygroundButton"

export default function Playground({}){

    const handleClick = () => console.log('show grid')

    return(
        <div className='playground'>
            <SubHeader 
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