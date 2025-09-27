import Image from "next/image";
import HeroSection from "./_components/main/HeroSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <div className="p-10">
        More content
      </div>
    </div>
  );
}
