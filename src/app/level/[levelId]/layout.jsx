import Header from "@/components/Header/Header";

export default function LevelLayout({ children, headerTitle }) {
  return (
    <div className="level-wrapper">
      <Header title={headerTitle} />

      <div className="level-content">
        {children}
      </div>
    </div>
  );
}

