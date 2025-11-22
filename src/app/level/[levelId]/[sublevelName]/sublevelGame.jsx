"use client";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import levels from "@/data/levels";
import Header from "@/components/Header/Header";

export default function SublevelGame({ level, sublevel }) {
  const [currentSublevel, setCurrentSublevel] = useState(0);
  const pathname = usePathname();
  const router = useRouter();
  const goToPrev = () => console.log(level);
  const goToNext = () => {
    setCurrentSublevel(prev => {
        if(prev >= level.sublevels.length) return prev;
        return prev + 1;
    });

    const parts = pathname.split('/');
    parts[parts.length-1] = level.sublevels[currentSublevel].name;
    const newPath = parts.join('/');
    router.push(newPath);
  };

  return (
    <>
      <Header 
        title={sublevel.name.toUpperCase()} 
        onPrev={goToPrev} 
        onNext={goToNext} />
      <div>{/* contenido del subnivel */}</div>
    </>
  );
}
