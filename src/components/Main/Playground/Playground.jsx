import SubHeaderArena from "../Shared/SubHeaderArena"
import PlaygroundButton from "../Shared/PlaygroundButton"
import Block from "../Shared/Block"
import BlockContainer from "../Shared/BlockContainer"
import './Playground.css'
import Grid from "../Shared/Grid"
import { useGame } from "@/app/GameContext"

export default function Playground(){
    const {currentSublevelData} = useGame();
    const blocksToRender = currentSublevelData.totalBlocks;
    
    return(
        <div className='playground'>
            <SubHeaderArena 
                SubHeaderTitle={'Playground'}
                buttons={[
                    <PlaygroundButton 
                        type={'grid'}
                        buttonLabel={'Show Grid'}
                    />
                ]}
            />
            <BlockContainer blockId={'playground'}>
                <Grid/>
                {
                    blocksToRender.map((blockId) => {
                        const block = currentSublevelData.blocks.find(b => b.id === blockId);
                        if (!block) return null;
                        return (
                            <Block 
                                key={blockId} 
                                blockId={blockId} 
                                style={block.initialStyle} 
                                group={block.group} 
                                blockSolution={block.solution}
                                playground={true}/>
                        )
                    })
                }
            </BlockContainer>
        </div>
    )
}
