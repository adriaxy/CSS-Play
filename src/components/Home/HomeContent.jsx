'use client'
import './HomeContent.css'
import { useState } from 'react';
import { useRouter } from "next/navigation";
import ChallengeButton from '../Header/navButtons/ChallengeButton';
import CardLevel from './CardLevel/CardLevel';
import CardSublevels from './CardLevel/CardSublevels';
import Header from '../Header/Header';
import { useGame } from '@/app/GameContext';
import levels from '@/data/levels';
import Link from "next/link";

export default function HomeContent(){
    const router = useRouter();
    const { homeLevelsData, sublevelState, resetProgress } = useGame();
    const [search, setSearch] = useState('');
    const [showInfo, setShowInfo] = useState(true);

    const totalSublevels = sublevelState.reduce((sum, level) => sum + level.length, 0);
    const totalCompleted = sublevelState.reduce((sum, level) => sum + level.filter(s => s.completed).length, 0);
    const progressPercent = totalSublevels > 0 ? Math.round((totalCompleted / totalSublevels) * 100) : 0;

    const filteredLevels = homeLevelsData.reduce((acc, level, i) => {
        const query = search.toLowerCase().trim();
        if (!query) return [...acc, { level, i }];
        const matchesTitle = level.levelName.toLowerCase().includes(query);
        const matchesSublevel = level.sublevelNames.some(name => name.toLowerCase().includes(query));
        if (matchesTitle || matchesSublevel) acc.push({ level, i });
        return acc;
    }, []);

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
        <>
            <Header 
                isHome={true}
            />
            <div className={`informative-wrapper${showInfo ? '' : ' informative-wrapper--hidden'}`}>
            <section className='informative-section'>
                <div className="informative-section__left">
                    <h1 className='left__title'>
                        <span className='main-heading--color'>Learn CSS by playing</span>
                        <span className='main-heading--mono'> — apply properties step by step and match the target design.</span>
                    </h1>
                    <p className="left__subtitle">
                        <span className="subtitle--light">
                            In each level, you’ll practice specific CSS properties by styling the blocks until they look like the target example.
                        </span>
                        <span className="subtitle--bold">
                            Write your code, see the changes instantly, and progress through levels as you master each concept.
                        </span>
                    </p>
                    <div className="left__call-action">
                        <div className='call-action__dot'></div>
                        <div className="call-action__main-content">
                            <div className="call-action__title">
                                <span className="secondary-heading--light">Begin with </span>
                                <span className="secondary-heading--bold">Level 1: Styling Essentials</span>
                            </div>
                            <Link href={'/level/1/color'}>
                                <button className='call-action__button' href='/level/1/color'>
                                    <span className='call-action__text'>Start Game</span>
                                    <svg className='call-cation__svg'
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="30"
                                        height="30"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="#03080d"
                                        strokeWidth="1.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        >
                                        <path d="M5 12l14 0" />
                                        <path d="M15 16l4 -4" />
                                        <path d="M15 8l4 4" />
                                    </svg>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="informative-section__right"></div>
            </section>
            </div>
            <button className="section-toggle" onClick={() => setShowInfo(prev => !prev)}>
                <div className="section-toggle__line" />
                <div className={`section-toggle__chevron${showInfo ? '' : ' section-toggle__chevron--flipped'}`}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    >
                        <path d="M6 15l6 -6l6 6" />
                    </svg>
                </div>
                <div className="section-toggle__line" />
            </button>
            <section className="home-levels">
                <div className="home-levels__actions">
                    <div className="actions__search-bar">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="var(--text-on-light)"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        >
                            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                            <path d="M21 21l-6 -6" />
                        </svg>
                        <input
                            type="text"
                            placeholder='Search CSS property...'
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                        />
                    </div>
                    <button className='actions__reset' onClick={resetProgress}>
                        <span>Reset progress</span>
                        <svg
                        className='reset__svg'
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#ffbf00"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        >
                            <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" />
                            <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />
                        </svg>
                    </button>
                </div>
                <div className="home-levels__wrapper">
                    {filteredLevels.length === 0 ? (
                        <div className="home-levels__empty">
                            <span>No levels found for &ldquo;{search}&rdquo;</span>
                        </div>
                    ) : (
                        filteredLevels.map(({ level, i }) => {
                            const levelSublevels = sublevelState[i] ?? [];
                            const completedCount = levelSublevels.filter(s => s.completed).length;
                            const totalCount = levelSublevels.length;
                            return (
                                <CardLevel
                                    levelName={level.levelName}
                                    levelId={level.id}
                                    levelPath={`/level/${levels[i].level}/${levels[i].sublevels[0].name}`}
                                    onClick={handleLevelClick}
                                    completedCount={completedCount}
                                    totalCount={totalCount}
                                    key={i}
                                >
                                    <CardSublevels
                                        sublevelNames={level.sublevelNames}
                                        onClick={handleSublevelClick}
                                        sublevelCompletions={levelSublevels.map(s => s.completed)}
                                    />
                                </CardLevel>
                            );
                        })
                    )}
                </div>
                <div className="home-levels__progress-bar-wrapper">
                    <div className="progress-bar">
                        <div className="progress-bar__fill" style={{ width: `${progressPercent}%` }} />
                    </div>
                    <span className="progress-bar__label">{progressPercent}%</span>
                </div>
            </section>
            </>

    )
}