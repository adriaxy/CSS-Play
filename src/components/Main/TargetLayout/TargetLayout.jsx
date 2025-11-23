import './TargetLayout.css'
import SubHeaderArena from "../Shared/SubHeaderArena"
import PlaygroundButton from "../Shared/PlaygroundButton"

export default function TargetLayout({}){

    const handleClick = () => console.log('show grid')

    return(
        <div className='target-layout'>
            <SubHeaderArena 
                SubHeaderTitle={'Target Layout'}
            />
        </div>
    )
}