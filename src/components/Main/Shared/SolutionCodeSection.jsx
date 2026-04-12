import './SolutionCodeSection.css'
import ClipboardButton from './ClipboardButton'

export default function SolutionCodeSection({blockId, solutionCode}) { 

    return(
       <div className="solution-code__wrapper">
            <div className="block__title">{`/* ${blockId} */`}</div>
            <div className="block__code-wrapper">
                <div className="block_code-text">{solutionCode}</div>
                <div className="block_code-clipboard-wrapper">
                    <ClipboardButton copiedText={solutionCode}/>
                </div>
            </div>
        </div>
    )
}