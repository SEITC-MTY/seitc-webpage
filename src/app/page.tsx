import HeroSection from "./_components/main/HeroSection";
import AboutUs from "./components/about-us/AboutUs";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutUs />
      <div className="p-10">
        More content
      </div>
    </div>
  );
}
