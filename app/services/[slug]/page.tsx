import Link from "next/link";
import { notFound } from "next/navigation";
import { FiCheck } from "react-icons/fi";
import { services, getServiceBySlug } from "@/lib/data/services";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  return (
    <main className="bg-bg min-h-screen pt-32 pb-24 px-6 md:px-[clamp(20px,6vw,110px)]">
      <div className="max-w-3xl mx-auto">
        <Link href="/services" className="text-sm font-semibold text-accent hover:underline">
          ← All Services
        </Link>

        <h1 className="mt-6 font-display font-extrabold text-4xl md:text-6xl text-primary">
          {service.title}
        </h1>
        <p className="mt-4 text-lg text-muted leading-relaxed">{service.details.overview}</p>

        <div className="flex flex-wrap gap-2 mt-6">
          {service.techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs font-medium text-muted bg-surface px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <section className="mt-14">
          <h2 className="font-display font-bold text-2xl text-primary mb-5">What&apos;s Included</h2>
          <ul className="space-y-3">
            {service.details.whatsIncluded.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-muted leading-relaxed">
                <FiCheck className="text-accent mt-1 flex-shrink-0" size={18} />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-20 pt-10 border-t border-border text-center">
          <p className="text-muted mb-4">Have a project that needs this?</p>
          <Link
            href="/#contact"
            className="inline-block bg-primary text-bg px-8 py-3.5 font-semibold hover:bg-accent transition-colors duration-300 rounded-md"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </main>
  );
}
