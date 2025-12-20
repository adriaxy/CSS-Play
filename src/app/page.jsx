'use client'
import ChallengeButton from "@/components/Header/navButtons/ChallengeButton"
import { useRouter } from "next/navigation";


export default function HomePage() {
  const router = useRouter();

    const handleClick = () => {
        router.replace(`/level/2/width`);
    }

    return(
        <section className="home-section">
                <h1>HOME</h1>

            <div className="home-message">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--bg-light)"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                >
                <path d="M4 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M13 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M13 19l-9 0" />
                <path d="M4 15l9 0" />
                <path d="M8 12v-5h2a3 3 0 0 1 3 3v5" />
                <path d="M5 15v-2a1 1 0 0 1 1 -1h7" />
                <path d="M21.12 9.88l-3.12 -4.88l-5 5" />
                <path d="M21.12 9.88a3 3 0 0 1 -2.12 5.12a3 3 0 0 1 -2.12 -.88l4.24 -4.24z" />
                </svg>
                <h2>Oops! Our website is still under construction, stay tuned!</h2>
            </div>
            <ChallengeButton 
                label={'Back to level 2'}  
                svgPosition="left"
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
                </svg>}
                className={'home-contruction-btn'}
                onClick={handleClick}
                disabled={false}
                />
        </section>
    )
}