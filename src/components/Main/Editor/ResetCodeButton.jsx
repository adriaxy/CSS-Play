import EditorButton from "../Shared/EditorButton";

export default function ResetCodeButton({onClick}) {

    return (
        <EditorButton onClick={onClick}>
            <span>Reset code</span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--text-on-dark)"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                >
                <path d="M19.933 13.041a8 8 0 1 1 -9.925 -8.788c3.899 -1 7.935 1.007 9.425 4.747" />
                <path d="M20 4v5h-5" />
            </svg>
        </EditorButton>
    )
}