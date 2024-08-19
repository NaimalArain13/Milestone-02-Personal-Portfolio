import About from "./about/page";
import HeroSection from "./components/heroSection";
import Contact from "./contact/page";
import Project from "./project/page";
import "./globals.css";
import TechStack from "./components/autoSroll";

export default function Home() {
  // const img = {
  //   img: "/image.jpg",
  // };
  return (
    <div className="bg-bg min-h-screen w-auto md:w-full">
      <div>
        <HeroSection />
      </div>

      <div className="pt-20" id="project">
        <Project />
      </div>

      <div className="pt-20" id="about">
        <About />
      </div>

      <div className="pt-20">
        <TechStack />
      </div>
      
      <div className="pt-20" id="contact">
        <Contact />
      </div>
    </div>
  );
}
