import levels from "@/data/levels";
import LevelLayout from "../layout";
import SublevelGame from "./sublevelGame";

export default async function SublevelPage({ params }) {
  const { levelId, sublevelName } = await params;
  const level = levels.find(l => l.level === Number(levelId));
  if (!level) return <p>Level not found</p>;
  const sublevel = level.sublevels.find(s => s.name === sublevelName);
  if (!sublevel) return <p>Sublevel not found</p>;
  console.log("🔵 Server component rendered");

  return (
    <LevelLayout>
      <SublevelGame level={level} sublevel={sublevel} />
    </LevelLayout>
  );
}
