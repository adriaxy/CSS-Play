"use client";
import { useEffect, useState } from "react";
import { useGame } from "@/app/GameContext";
import levels from "@/data/levels";

export default function SublevelClientWrapper({ levelId, sublevelName, children }) {
  const { setCurrentLevel, setCurrentSublevel, currentLevel, currentSublevel } = useGame();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const levelIndex = levels.findIndex(l => l.level === Number(levelId));
    const sublevelIndex = levels[levelIndex].sublevels.findIndex(s => s.name === sublevelName);

    setCurrentLevel(levelIndex);
    setCurrentSublevel(sublevelIndex);
    setReady(true);
  }, [levelId, sublevelName]);

  if (!ready) return null; 

  return children;
}


// export default function SublevelClientWrapper({ levelId, sublevelName, children }) {
//   const { setCurrentLevel, setCurrentSublevel } = useGame();

//   useEffect(() => {
//     const levelIndex = levels.findIndex(l => l.level === Number(levelId));
//     const sublevelIndex = levels[levelIndex].sublevels.findIndex(s => s.name === sublevelName);

//     setCurrentLevel(levelIndex);
//     setCurrentSublevel(sublevelIndex);
//   }, [levelId, sublevelName]);

//   return children;
// }
