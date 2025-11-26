"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header/Header";
import Main from "@/components/Main/Main";

export default function SublevelGame({ level, sublevel }) {
  const router = useRouter();
  const levelId = 2;

  const [currentSublevel, setCurrentSublevel] = useState(
    level.sublevels.findIndex(s => s.name === sublevel.name)
  );

  const goToPrev = () => {
    const next = currentSublevel - 1;
    if(next < 0) return; 
    const nextSublevelName = level.sublevels[next].name;
    setCurrentSublevel(next);
    router.replace(`/level/${levelId}/${nextSublevelName}`, {scroll:false});
  };

  const goToNext = () => {
    const next = currentSublevel + 1;
    if(next >= level.sublevels.length) return; 
    const nextSublevelName = level.sublevels[next].name;
    setCurrentSublevel(next);
    router.replace(`/level/${levelId}/${nextSublevelName}`, {scroll:false});
  };

  const isPrevDisabled = currentSublevel === 0 ? true : false;
  const isNextDisabled = currentSublevel === level.sublevels.length - 1 ?  true : false;

  return (
    <>
      <Header 
        title={level.sublevels[currentSublevel].name.toUpperCase()} 
        onPrev={goToPrev} 
        onNext={goToNext}
        isPrevDisabled={isPrevDisabled} 
        isNextDisabled={isNextDisabled}/>
        <Main 
          levelNum={level.level.toString()}
          sublevelNum={level.sublevels[currentSublevel].id}
          challenge={level.sublevels[currentSublevel].challenge}
          name={level.sublevels[currentSublevel].name}
          theoryText={level.sublevels[currentSublevel].theory.description}
        />
    </>
  );
}