"use client";

import ChallengeButton from "./navButtons/ChallengeButton";

export default function PrevChallengeButton({onClick, isPrevDisabled, className}) {
    return (
        <ChallengeButton 
            label={'Previous challenge'}
            svg={
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--text-on-light)"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                >
                <path d="M5 12l14 0" />
                <path d="M5 12l4 4" />
                <path d="M5 12l4 -4" />
                </svg>
            }
            svgPosition="left"
            onClick={onClick}
            disabled={isPrevDisabled}
            className={className}
        />
    )
}