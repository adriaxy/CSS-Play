// app/level/[levelId]/layout.jsx
export default function LevelLayout({ children }) {
  return (
    <div className="level">
      <div className="level__content">{children}</div>
    </div>
  );
}
