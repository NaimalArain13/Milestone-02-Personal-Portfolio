import Hero from "./components/sections/hero";
import About from "./components/sections/about";
import ExperienceTimeline from "./components/sections/experienceTimeline";
import Impact from "./components/sections/impact";
import FeaturedProjects from "./components/sections/featuredProjects";
import MoreProjects from "./components/sections/moreProjects";
import StackSection from "./components/sections/stackSection";
import ContactSection from "./components/sections/contactSection";
import Chat from "./components/chat";

export default function Home() {
  return (
    <div className="bg-bg min-h-screen">
      <Chat backendUrl={process.env.AGENT_BASEURL as string} />
      <Hero />
      <About />
      <ExperienceTimeline />
      <Impact />
      <FeaturedProjects />
      <MoreProjects />
      <StackSection />
      <ContactSection />
    </div>
  );
}
