// app/level/[levelId]/[sublevelName]/page.jsx
import levels from "@/data/levels";
import LevelLayout from "../layout";
import Header from "@/components/Header/Header";

export default async function SublevelPage({ params }) {
  const { levelId, sublevelName } = await params;

  const level = levels.find(l => l.level === Number(levelId));
  if (!level) return <p>Level not found</p>;

  const sublevel = level.sublevels.find(s => s.name === sublevelName);
  if (!sublevel) return <p>Sublevel not found</p>;

  return (
    <LevelLayout>
      <Header title={sublevel.name.toLocaleUpperCase()} />
      <div className="sublevel-content">
        {/* Aquí va el contenido del subnivel */}
      </div>
    </LevelLayout>
  );
}
