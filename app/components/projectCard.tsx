"use client";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

interface Props {
  title: string;
  description: string;
  img: string;
  route: string;
}

export default function ProjectCard({ prop }: { prop: Props }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="project-card group block"
      data-aos="fade-up"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="800"
    >
      <Link href={prop.route} target="_blank" rel="noopener noreferrer">
        <div className="aspect-[4/3] overflow-hidden rounded-xl bg-surface">
          <Image
            src={prop.img}
            alt={prop.title}
            height={0}
            width={1440}
            className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(.19,1,.22,1)] group-hover:scale-105"
          />
        </div>
        <div className="mt-4 space-y-1">
          <h4 className="text-xl font-semibold text-primary">{prop.title}</h4>
          <p className="text-sm text-muted">{prop.description}</p>
        </div>
      </Link>
    </div>
  );
}
