'use client'
import './HomeContent.css'
import { useRouter } from "next/navigation";
import ChallengeButton from '../Header/navButtons/ChallengeButton';
import CardLevel from './CardLevel/CardLevel';
import CardSublevels from './CardLevel/CardSublevels';
import { useGame } from '@/app/GameContext';
import levels from '@/data/levels';

export default function HomeContent(){
    const router = useRouter();
    const { homeLevelsData } = useGame();

    const handleLevelClick = (e) => {
        const levelIndex = homeLevelsData.findIndex(level => level.levelName === e.target.textContent)
        router.push(`/level/${levels[levelIndex].level}/${levels[levelIndex].sublevels[0].name}`)
    }

    const handleSublevelClick = (e) => {
        const levelIndex = homeLevelsData.findIndex(level => level.sublevelNames.includes(e.target.textContent));
        const sublevelName = e.target.textContent
        router.push(`/level/${levels[levelIndex].level}/${sublevelName}`)
    }

    return(
        <section className="home-section">
                <h1>HOME</h1>
            <div className="card-wrapper">
                {
                    homeLevelsData.map((level, i) => {
                        return (
                            <CardLevel
                                levelName={level.levelName}
                                onClick={handleLevelClick}
                                key={i}
                            >
                                <CardSublevels 
                                    sublevelNames={level.sublevelNames}
                                    onClick={handleSublevelClick}
                                />
                            </CardLevel>
                        )
                    })
                }
            </div>
        </section>
    )
}