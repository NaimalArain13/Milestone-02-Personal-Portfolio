import Link from "next/link";
import AnimatedStripes from "../components/background animations/animatedStripes";
import ServiceCard from "../components/serviceCard";
import { services } from "@/lib/data/services";

export default function ServicesPage() {
  return (
    <main className="bg-bg min-h-screen">
      {/* Page header */}
      <section className="pt-32 pb-16 px-6 md:px-[clamp(20px,6vw,110px)]">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-display font-extrabold text-5xl md:text-7xl text-primary mb-4">
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
          <p className="font-display text-2xl md:text-3xl font-bold text-primary">
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
                key={service.slug}
                slug={service.slug}
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
        <h2 className="font-display font-extrabold text-4xl text-primary mb-4">
          Ready to start?
        </h2>
        <p className="text-muted mb-8">Let&apos;s talk about your project.</p>
        <Link
          href="/#contact"
          className="inline-block bg-primary text-bg px-10 py-4 font-semibold hover:bg-accent transition-colors duration-300 rounded-md"
        >
          Get in touch
        </Link>
      </section>
    </main>
  );
}
