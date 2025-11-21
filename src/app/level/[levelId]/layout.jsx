// app/level/[levelId]/layout.jsx
export default function LevelLayout({ children }) {
  return (
    <div className="level-wrapper">
      <div className="level-content">{children}</div>
    </div>
  );
}
