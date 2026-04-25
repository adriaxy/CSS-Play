'use client';
import { useState, useEffect } from 'react';
import './AnimatedText.css';

const PLACEHOLDER_ITEMS = [
    {
        text: 'Write real Code.',
        svg: (
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
            <path d="M15 12h.01" />
            <path d="M12 12h.01" />
            <path d="M9 12h.01" />
            <path d="M6 19a2 2 0 0 1 -2 -2v-4l-1 -1l1 -1v-4a2 2 0 0 1 2 -2" />
            <path d="M18 19a2 2 0 0 0 2 -2v-4l1 -1l-1 -1v-4a2 2 0 0 0 -2 -2" />
            </svg>
        ),
    },
    {
        text: 'See the result.',
        svg: (
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
            <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
            <path d="M11.669 17.994q -5.18 -.18 -8.669 -5.994q 3.6 -6 9 -6t 9 6" />
            <path d="M19 22.5a4.75 4.75 0 0 1 3.5 -3.5a4.75 4.75 0 0 1 -3.5 -3.5a4.75 4.75 0 0 1 -3.5 3.5a4.75 4.75 0 0 1 3.5 3.5" />
            </svg>
        ),
    },
    {
        text: 'Beat the level',
        svg: (
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
            <path d="M12 4v3m-4 -3v6m8 -6v6" />
            <path d="M12 18.5l-3 1.5l.5 -3.5l-2 -2l3 -.5l1.5 -3l1.5 3l3 .5l-2 2l.5 3.5z" />
            </svg>
        ),
    },
];

const DISPLAY_DURATION = 5000; 
const TRANSITION_DURATION = 500;

export default function AnimatedText({ items = PLACEHOLDER_ITEMS }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [phase, setPhase] = useState('visible');

    useEffect(() => {
        if (phase !== 'visible') return;

        const showTimer = setTimeout(() => setPhase('exit'), DISPLAY_DURATION);
        return () => clearTimeout(showTimer);
    }, [phase, currentIndex]);

    useEffect(() => {
        if (phase !== 'exit') return;

        const exitTimer = setTimeout(() => {
            setCurrentIndex(prev => (prev + 1) % items.length);
            setPhase('enter');
        }, TRANSITION_DURATION);
        return () => clearTimeout(exitTimer);
    }, [phase, items.length]);

    useEffect(() => {
        if (phase !== 'enter') return;

        const enterTimer = setTimeout(() => setPhase('visible'), TRANSITION_DURATION);
        return () => clearTimeout(enterTimer);
    }, [phase]);

    const current = items[currentIndex];

    return (
        <div className={`animated-text animated-text--${phase}`}>
            <span className="animated-text__svg">{current.svg}</span>
            <span className="animated-text__label">{current.text}</span>
        </div>
    );
}
