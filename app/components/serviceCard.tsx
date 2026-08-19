"use client";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

interface Props {
  slug: string;
  title: string;
  description: string;
  index: number;
}

export default function ServiceCard({ slug, title, description, index }: Props) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Link
      href={`/services/${slug}`}
      className="group block bg-bg rounded-2xl p-8 hover:bg-accent transition-colors duration-300"
      data-aos="fade-up"
      data-aos-delay={index * 80}
      data-aos-duration="600"
    >
      <h3 className="text-xl font-bold text-primary group-hover:text-white transition-colors duration-300 mb-3">
        {title}
      </h3>
      <p className="text-sm text-muted group-hover:text-white/80 transition-colors duration-300 leading-relaxed">
        {description}
      </p>
      <span className="mt-4 inline-block text-xs font-semibold text-accent group-hover:text-white transition-colors duration-300">
        Learn more →
      </span>
    </Link>
  );
}
