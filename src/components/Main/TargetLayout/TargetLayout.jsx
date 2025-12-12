import './TargetLayout.css'
import SubHeaderArena from "../Shared/SubHeaderArena"
import PlaygroundButton from "../Shared/PlaygroundButton"
import BlockContainer from '../Shared/BlockContainer'
import Block from '../Shared/Block'
import Grid from '../Shared/Grid'
import { useGame } from "@/app/GameContext"
import levels from "@/data/levels"

export default function TargetLayout(){
    const {currentLevel, currentSublevel} = useGame();
    const levelRoot = levels[currentLevel].sublevels[currentSublevel]
    const blocksToRender = levelRoot.totalBlocks;

    return(
        <div className='target-layout'>
            <SubHeaderArena 
                SubHeaderTitle={'Target Layout'}
            />
            <BlockContainer blockId={'target'}>
                <Grid />
                {
                    blocksToRender.map((blockId) => {
                        const block = levelRoot.blocks.find(b => b.id === blockId);
                        if (!block) return null;
                        return (
                            <Block 
                                key={blockId} 
                                blockId={blockId} 
                                style={{...block.initialStyle, ...block.solution}} 
                                group={block.group} 
                                blockSolution={block.solution}
                                playground={false}/>
                        )
                    })
                }
            </BlockContainer>
        </div>
    )
}
