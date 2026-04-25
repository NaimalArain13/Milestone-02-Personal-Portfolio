"use client";
import ProjectCard from "../components/projectCard";

const projects = [
  {
    img: "/room-matcher.png",
    title: "Room Matcher AI",
    description: "An AI powered room matcher multi-agent system.",
    route: "https://room-matcher-ai-rosy.vercel.app/",
  },
  {
    img: "/nasa.png",
    title: "Nasa AI",
    description: "A SaaS platform built with OpenAI & Replicate APIs.",
    route: "//github.com/NaimalArain13/NaSa_SaaS_ai",
  },
  {
    img: "/impactoM.PNG",
    title: "ImpactoMoney",
    description: "A decentralised funding project built for Palestinians.",
    route: "https://impacto-money.vercel.app/",
  },
  {
    img: "/snx.PNG",
    title: "SnX by Nash",
    description: "E-commerce marketplace hackathon — Sanity, Next.js, Tailwind, Shadcn.",
    route: "https://naimal-marketplace-hackathon03-q2-finale.vercel.app/",
  },
  {
    img: "/exclusive.png",
    title: "Exclusive",
    description: "Full e-commerce website built for a UI/UX hackathon.",
    route: "https://naimal-ui-ux-hackathon-preps-full-e-commerce-website.vercel.app/",
  },
  {
    img: "/bandage.PNG",
    title: "Bandage",
    description: "UI/UX hackathon project — Next.js, Tailwind, Shadcn.",
    route: "https://naimal-ui-ux-hackathon-q2.vercel.app/",
  },
  {
    img: "/blog.png",
    title: "Dynamic Blog Platform",
    description: "Responsive blog platform for writing and sharing articles.",
    route: "//blog-platform-by-na.vercel.app/",
  },
  {
    img: "/tech.png",
    title: "Tech Store",
    description: "Techbook store leveraging React Context API for global state.",
    route: "//naimal-arain-milestone-03-e-commerce-website.vercel.app/",
  },
  {
    img: "/resume.png",
    title: "Interactive Resume Builder",
    description: "Resume builder built with HTML, CSS, and TypeScript.",
    route: "//hackathon-interative-resume-builder.vercel.app/",
  },
  {
    img: "/e-learn.png",
    title: "E-Learn Platform UI",
    description: "Educational learning platform UI — Next.js, Tailwind, Shadcn.",
    route: "//naimal-educational-learning-platform-assignment02-milestone02.vercel.app/",
  },
  {
    img: "/todo2.png",
    title: "Todo App",
    description: "Task management app to organise and track daily activities.",
    route: "//my-todo-app-green.vercel.app/",
  },
];

export default function ProjectsPage() {
  return (
    <main className="bg-white min-h-screen pt-32 pb-20 px-6 md:px-[clamp(20px,6vw,110px)]">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-primary mb-4">
          Projects
        </h1>
        <p className="text-lg text-muted mb-16">
          A selection of work I&apos;m proud of — from AI agents to e-commerce platforms.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} prop={project} />
          ))}
        </div>
      </div>
    </main>
  );
}
