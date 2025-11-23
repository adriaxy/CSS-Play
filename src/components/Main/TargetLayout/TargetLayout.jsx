import './TargetLayout.css'
import SubHeader from "../Shared/SubHeader"
import PlaygroundButton from "../Shared/PlaygroundButton"

export default function TargetLayout({}){

    const handleClick = () => console.log('show grid')

    return(
        <div className='target-layout'>
            <SubHeader 
                SubHeaderTitle={'Target Layout'}
            />
        </div>
    )
}