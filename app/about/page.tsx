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
    <div className="bg-bg py-8 text-text2">
      <div>
        <h1 className="flex justify-center pt-8 pb-16 text-5xl font-bold tracking-widest text-text2">
          About Me
        </h1>
      </div>
      <div>
      <div className="space-y-4">
        <div className="flex flex-col items-center justify-center gap-3">
         <div
            className="h-[300px] w-[300px] md:w-[455px]  border-neutral-600 bg-text rounded-3xl"
            data-aos="flip-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1500"
          >
            <div className="flex justify-center items-center pt-16">
            <Image
            src={"/dp.jpg"}
            alt="Profile Picture"
            width={150} 
            height={0} 
            className="rounded-full shadow-lg h-auto"
          />
            </div>
          </div> 
          <div
            className="h-[355px] w-full md:w-[755px] border-neutral-600 text-text2 bg-text rounded-3xl"
            data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1500"
          >
            <p className="flex items-center pt-9 px-14 text-justify tracking-widest text-md">
              I am Naimal Salahuddin.
              <br />
              <br />I&#39;m a front-end developer passionate about crafting user-friendly web interfaces. Over the past 1.5 years, I've been learning and refining my skills in front-end technologies through various hands-on projects. In addition to my front-end work, I have a foundational understanding of AI, having completed a basic course in the field. 
            </p>
          </div>
          
        </div>

        
        </div>
      </div>
    </div>
  );
}