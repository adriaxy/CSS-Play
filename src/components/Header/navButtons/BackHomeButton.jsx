'use client';
import Link from "next/link";

export default function BackHomeButton({className, type}) {

    const svg = type === 'home-btn'
        ? (<svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--bg-darkest)"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            >
            <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
            <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
            <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
            </svg>)
        : undefined;
    
    return (
        <Link
            className={className}
            href='/'
        >
            {svg}
        </Link>
    )
}

// 'use client';
// import { useRouter } from "next/navigation";

// export default function BackHomeButton({className, type}) {
//     const router = useRouter();
//     const handleClick = () => {
//         router.push('/');
//     }

//     const svg = type === 'home-btn'
//         ? (<svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="30"
//             height="30"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="var(--bg-darkest)"
//             strokeWidth="1.75"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             >
//             <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
//             <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
//             <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
//             </svg>)
//         : undefined;
    
//     return (
//         <button
//             className={className}
//             onClick={handleClick}
//         >
//             {svg}
//         </button>
//     )
// }