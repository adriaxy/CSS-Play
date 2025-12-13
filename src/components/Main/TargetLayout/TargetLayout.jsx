import './TargetLayout.css'
import SubHeaderArena from "../Shared/SubHeaderArena"
import BlockContainer from '../Shared/BlockContainer'
import Block from '../Shared/Block'
import Grid from '../Shared/Grid'
import { useGame } from "@/app/GameContext"

export default function TargetLayout(){
    const {currentSublevelData} = useGame();
    const blocksToRender = currentSublevelData.totalBlocks;

    return(
        <div className='target-layout'>
            <SubHeaderArena 
                SubHeaderTitle={'Target Layout'}
            />
            <BlockContainer blockId={'target'}>
                <Grid />
                {
                    blocksToRender.map((blockId) => {
                        const block = currentSublevelData.blocks.find(b => b.id === blockId);
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
