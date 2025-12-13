"use client";
import { useRouter } from "next/navigation";
import Header from "@/components/Header/Header";
import Main from "@/components/Main/Main";
import { useGame } from "@/app/GameContext";

export default function SublevelGame() {
  const { currentSublevel, currentLevelData } = useGame(); 
  const router = useRouter();
  const levelSublevels = currentLevelData.sublevels;

  const goToNext = () => {
      if (currentSublevel + 1 < levelSublevels.length) {
          const nextName = levelSublevels[currentSublevel + 1].name;
          router.replace(`/level/${currentLevelData.level}/${nextName}`);
      }
  };

  const goToPrev = () => {
      if (currentSublevel - 1 >= 0) {
          const nextName = levelSublevels[currentSublevel - 1].name;
          router.replace(`/level/${currentLevelData.level}/${nextName}`);
      }
  };

  const isPrevDisabled = currentSublevel === 0;
  const isNextDisabled = currentSublevel === levelSublevels.length - 1;

  return (
    <>
      <Header
        onPrev={goToPrev}
        onNext={goToNext}
        isPrevDisabled={isPrevDisabled}
        isNextDisabled={isNextDisabled}
      />
      <Main/>
    </>
  );
}