"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header/Header";
import Main from "@/components/Main/Main";
import { useGame } from "@/app/GameContext";
import levels from "@/data/levels";
import { GameProvider } from "@/app/GameContext";

export default function SublevelGame({ level, sublevel }) {
  const router = useRouter();
  const levelId = level.level;
  // const levelId = 2;
  const { setCurrentLevel, setCurrentSublevel } = useGame();

  const [localSublevelIndex, setLocalSublevelIndex] = useState(
    level.sublevels.findIndex(s => s.name === sublevel.name)
  );

  const levelIndex = levels.findIndex(l => l.level === level.level);
  const sublevelIndex = level.sublevels.findIndex(s => s.name === sublevel.name);


  const goToPrev = () => {
    const next = localSublevelIndex - 1;
    if(next < 0) return; 
    setCurrentSublevel((prev) => prev - 1);
    const nextSublevelName = level.sublevels[next].name;
    setLocalSublevelIndex(next);
    router.replace(`/level/${levelId}/${nextSublevelName}`, {scroll:false});
  };

  const goToNext = () => {
    const next = localSublevelIndex + 1;
    if(next >= level.sublevels.length) return; 
    setCurrentSublevel((prev) => prev + 1)
    const nextSublevelName = level.sublevels[next].name;
    setLocalSublevelIndex(next);
    router.replace(`/level/${levelId}/${nextSublevelName}`, {scroll:false});
  };

  const isPrevDisabled = localSublevelIndex === 0 ? true : false;
  const isNextDisabled = localSublevelIndex === level.sublevels.length - 1 ?  true : false;

  return (
    <>
      <Header 
        title={level.sublevels[localSublevelIndex].name.toUpperCase()} 
        onPrev={goToPrev} 
        onNext={goToNext}
        isPrevDisabled={isPrevDisabled} 
        isNextDisabled={isNextDisabled}/>
        <Main 
          levelNum={levelId}
          sublevelNum={level.sublevels[localSublevelIndex].id}
          challenge={level.sublevels[localSublevelIndex].challenge}
          name={level.sublevels[localSublevelIndex].name}
          theoryText={level.sublevels[localSublevelIndex].theory.description}
          initialStyles={level.sublevels[localSublevelIndex].blocks}
          solution={level.sublevels[localSublevelIndex].blocks}
          numOfSublevels={level.sublevels.length}
        />
    </>
  );
}