import Link from "next/link";
import AnimatedStripes from "../components/background animations/animatedStripes";
import ServiceCard from "../components/serviceCard";

const services = [
  {
    title: "Full-Stack Web Development",
    description:
      "Next.js, React, TypeScript, Tailwind CSS — responsive, production-ready web apps from design to deployment.",
  },
  {
    title: "AI Agent Development",
    description:
      "Custom AI agents using the OpenAI Agents SDK, multi-agent pipelines, tool-use, and conversational systems.",
  },
  {
    title: "UI/UX Design & Development",
    description:
      "Pixel-perfect interfaces with Shadcn, Figma-to-code workflows, accessible and fully responsive design systems.",
  },
  {
    title: "E-commerce Solutions",
    description:
      "Marketplace builds with Sanity CMS, cart systems, product management, and payment integration.",
  },
  {
    title: "Python & Automation",
    description:
      "Streamlit web apps, scripting, automation pipelines, data visualisation, and workflow tools.",
  },
  {
    title: "Chatbot & Conversational AI",
    description:
      "Chainlit-based chatbots, RAG systems, memory-enabled assistants, and context-aware conversational interfaces.",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-bg min-h-screen">
      {/* Page header */}
      <section className="pt-32 pb-16 px-6 md:px-[clamp(20px,6vw,110px)]">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-primary mb-4">
            Services.
          </h1>
          <p className="text-xl text-muted max-w-2xl">
            What I can build for you — from full-stack web apps to intelligent AI systems.
          </p>
        </div>
      </section>

      {/* Animated stripes section */}
      <AnimatedStripes>
        <div className="max-w-6xl mx-auto px-6 md:px-[clamp(20px,6vw,110px)] text-center">
          <p className="text-2xl md:text-3xl font-semibold text-primary">
            Strategy. Design. Technology.
          </p>
        </div>
      </AnimatedStripes>

      {/* Services grid */}
      <section className="py-24 px-6 md:px-[clamp(20px,6vw,110px)]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center bg-surface">
        <h2 className="text-4xl font-bold tracking-tight text-primary mb-4">
          Ready to start?
        </h2>
        <p className="text-muted mb-8">Let&apos;s talk about your project.</p>
        <Link
          href="/contact"
          className="inline-block bg-primary text-bg px-10 py-4 font-semibold hover:bg-accent transition-colors duration-300 rounded-md"
        >
          Get in touch
        </Link>
      </section>
    </main>
  );
}
