import levels from "@/data/levels";
import LevelLayout from "../layout";
import SublevelGame from "./sublevelGame";
import SublevelClientWrapper from "./SublevelClientWrapper";
import { useGame } from "@/app/GameContext";

export default async function SublevelPage({ params }) {
  const { levelId, sublevelName } = await params;
  const level = levels.find(l => l.level === Number(levelId));
  if (!level) return <p>Level not found</p>;
  const sublevel = level.sublevels.find(s => s.name === sublevelName);
  if (!sublevel) return <p>Sublevel not found</p>;

  return (
    <SublevelClientWrapper levelId={levelId} sublevelName={sublevelName}>
      <LevelLayout>
        <SublevelGame level={level} sublevel={sublevel} />
      </LevelLayout>
    </SublevelClientWrapper>
  );
}

export async function generateMetadata({params}){
  const { levelId, sublevelName } = await params;
  const level = levels.find(l => l.level === Number(levelId));
  const sublevel = level.sublevels.find(s => s.name === sublevelName)
  
  if(!sublevel){
    return {
      title: 'CSS Play – Sublevel not found'
    }
  }

  return {
    title: `CSS Play - ${sublevel.name}`,
    icons: {
      icon: `/assets/play_favicon.svg`
    },
    description: 'An interactive platform to learn CSS through visual challenges and real-time feedback.'
  }
}