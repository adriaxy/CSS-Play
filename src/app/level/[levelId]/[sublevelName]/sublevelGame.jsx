"use client";
import { useRouter } from "next/navigation";
import Header from "@/components/Header/Header";
import Main from "@/components/Main/Main";
import levels from "@/data/levels";

export default function SublevelGame({ level, sublevel }) {
  const router = useRouter();
  const levelId = level.level;

  // ✔ Índices derivados del nivel cargado
  const levelIndex = levels.findIndex(l => l.level === level.level);
  const sublevelIndex = level.sublevels.findIndex(s => s.name === sublevel.name);

  // ✔ Navegación usando ONLY URL → el wrapper actualizará el contexto
  const goToPrev = () => {
    const prevIndex = sublevelIndex - 1;
    if (prevIndex < 0) return;

    const name = level.sublevels[prevIndex].name;
    router.replace(`/level/${levelId}/${name}`, { scroll: false });
  };

  const goToNext = () => {
    const nextIndex = sublevelIndex + 1;
    if (nextIndex >= level.sublevels.length) return;

    const name = level.sublevels[nextIndex].name;
    router.replace(`/level/${levelId}/${name}`, { scroll: false });
  };

  // ✔ Disabled buttons usando sublevelIndex directo
  const isPrevDisabled = sublevelIndex === 0;
  const isNextDisabled = sublevelIndex === level.sublevels.length - 1;

  const s = level.sublevels[sublevelIndex];

  return (
    <>
      <Header
        title={s.name.toUpperCase()}
        onPrev={goToPrev}
        onNext={goToNext}
        isPrevDisabled={isPrevDisabled}
        isNextDisabled={isNextDisabled}
      />

      <Main
        levelNum={levelId}
        sublevelNum={s.id}
        challenge={s.challenge}
        name={s.name}
        theoryText={s.theory.description}
        solution={s.blocks}
        numOfSublevels={level.sublevels.length}
      />
    </>
  );
}
