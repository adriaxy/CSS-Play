import EditorButton from "../Shared/EditorButton";

export default function ViewSolutionButton({onClick}) {

    return (
        <EditorButton onClick={onClick}>
            <span>View Solution</span>
        </EditorButton>
    )
}