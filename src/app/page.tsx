import HeroSection from "./_components/main/HeroSection";
import AboutUs from "./components/about-us/AboutUs";
import Footer from "./_components/UI/footer/Footer";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <section id="aboutUs">
        <AboutUs />
      </section>
      <div className="p-10">
        More content
      </div>
      <Footer />
    </div>
  );
}
