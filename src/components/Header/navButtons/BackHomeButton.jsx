'use client';
import { useRouter } from "next/navigation";

export default function BackHomeButton({className, svg}) {
    const router = useRouter();
    const handleClick = () => {
        router.push('/');
    }
    
    return (
        <button
            className={className}
            onClick={handleClick}
        >
            {svg}
        </button>
    )
}