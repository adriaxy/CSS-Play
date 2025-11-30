import EditorButton from "../Shared/EditorButton";
import { useState } from "react";

export default function ViewSolutionButton({onClick}) {

    return (
        <EditorButton onClick={onClick}>
            <span>View Solution</span>
        </EditorButton>
    )
}