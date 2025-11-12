"use client";
import React from 'react';
import SkillCard from './SkillCard'; // Import the new SkillCard component
import { IoLogoJavascript } from "react-icons/io";
import { FaHtml5, FaPython, FaReact } from "react-icons/fa"; // Added FaReact
import { FaCss3Alt } from "react-icons/fa6";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { AiOutlineOpenAI } from "react-icons/ai"; // Original OpenAI icon
import { SiMui } from "react-icons/si"; // Original Material UI icon
import { SiGooglegemini } from "react-icons/si"; // Original Gemini icon

export default function TechStack() {
  const skills = [
    { icon: FaHtml5, name: "HTML5", colorClass: "text-orange-500" },
    { icon: FaCss3Alt, name: "CSS3", colorClass: "text-blue-600" },
    { icon: IoLogoJavascript, name: "JavaScript", colorClass: "text-yellow-500" },
    { icon: FaPython, name: "Python", colorClass: "text-[#2b5b84]" },
    { icon: FaReact, name: "React", colorClass: "text-sky-400" }, // Light blue for React
    { icon: RiNextjsFill, name: "Next.js", colorClass: "text-black" },
    { icon: RiTailwindCssFill, name: "Tailwind CSS", colorClass: "text-cyan-500" },
    { icon: SiMui, name: "Material UI", colorClass: "text-blue-600" }, // Blue for Material UI
    { icon: SiGooglegemini, name: "Gemini CLI", colorClass: "text-[#6991d6]" }, // Pinkish for Gemini
    { icon: AiOutlineOpenAI, name: "OpenAI Agent SDK", colorClass: "text-emerald-500" }, // Green for OpenAI
    // Add more skills as needed
  ];

  return (
    <section className="w-full py-16 bg-white">
      <h2 className="text-center text-4xl font-bold mb-12 text-charcoal">
        My Skills
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 px-4 justify-items-center">
        {skills.map((skill, index) => (
          <SkillCard key={index} icon={skill.icon} name={skill.name} colorClass={skill.colorClass} />
        ))}
      </div>
    </section>
  );
}
