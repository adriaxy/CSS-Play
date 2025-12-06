import levels from "@/data/levels";
import LevelLayout from "../layout";
import SublevelGame from "./sublevelGame";
import { GameProvider } from "@/app/GameContext";
import SublevelClientWrapper from "./SublevelClientWrapper";

export default async function SublevelPage({ params }) {
  const { levelId, sublevelName } = await params;
  const level = levels.find(l => l.level === Number(levelId));
  if (!level) return <p>Level not found</p>;
  const sublevel = level.sublevels.find(s => s.name === sublevelName);
  if (!sublevel) return <p>Sublevel not found</p>;
  
  const levelIndex = levels.findIndex(l => l.level === Number(levelId));
  const sublevelIndex = level.sublevels.findIndex(s => s.name === sublevelName);


  return (
    <SublevelClientWrapper levelId={levelId} sublevelName={sublevelName}>
      <LevelLayout>
        <SublevelGame level={level} sublevel={sublevel} />
      </LevelLayout>
    </SublevelClientWrapper>
  );
}
