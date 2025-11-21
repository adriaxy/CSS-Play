"use client";
import { useRouter } from "next/navigation";
import Header from "@/components/Header/Header";

export default function SublevelGame({ level, sublevel }) {
  const router = useRouter();
  const goToPrev = () => console.log(level);
  const goToNext = () => console.log("next");

  return (
    <>
      <Header 
        title={sublevel.name.toUpperCase()} 
        onPrev={goToPrev} 
        onNext={goToNext} />
      <div>{/* contenido del subnivel */}</div>
    </>
  );
}
