"use client";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <section className="bg-white py-16 text-charcoal" id="about">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-4xl font-bold mb-12">
          About Me
        </h2>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          <div className="flex-shrink-0" data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="1500">
            <Image
              src={"/dp.jpg"}
              alt="Profile Picture"
              width={250}
              height={250}
              className="rounded-full shadow-lg object-cover w-64 h-64"
            />
          </div>
          <div className="flex-grow text-dark-grey space-y-6" data-aos="fade-left" data-aos-easing="ease-out-cubic" data-aos-duration="1500">
            <p className="text-lg leading-relaxed">
              I am Naimal Salahuddin. I&#39;m an emerging fullstack developer with hands-on experience in various projects, continuously enhancing my expertise in Full-Stack Development. Over the past 1.5 years, I&#39;ve been learning and refining my skills in full-stack technologies through various hands-on projects. I have a foundational understanding of AI too, having completed a basic course in the field.
            </p>
            <p className="text-lg leading-relaxed">
              My passion lies in designing and developing visually stunning and technically proficient websites that drive conversions and deliver exceptional user experiences. I am currently working on a startup project based in the US, further expanding my professional experience.
            </p>
            {/* Placeholder for Key Skills/Expertise */}
            <div>
              <h3 className="text-2xl font-semibold text-charcoal mb-4">Key Skills & Expertise</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-md">
                <li>• Frontend Development (React, Next.js, Tailwind CSS)</li>
                <li>• Backend Development (Node.js, Express.js)</li>
                <li>• Database Management (MongoDB, PostgreSQL)</li>
                <li>• UI/UX Design Principles</li>
                <li>• Responsive Web Design</li>
                <li>• Basic AI Concepts</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}