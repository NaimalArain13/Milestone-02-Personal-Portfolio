import { IoLogoJavascript } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaPython } from "react-icons/fa";
import React from 'react';

export default function AutoScroll() {
  return (
    <div className="overflow-hidden w-full">
      <div>
        <h1 className="flex justify-center pt-24 pb-16 text-5xl font-bold tracking-widest text-text2">
          Tech Stack
        </h1>
      </div>
      <div className="flex justify-center items-center bg-text py-6">
        <div className="flex space-x-36 text-5xl text-neutral-500 animate-auto-scroll whitespace-nowrap">
          <p className="text-blue-600 ">
            <FaCss3Alt size={60} />
          </p>
          <p className="text-orange-400 ">
            <FaHtml5 size={60} />
          </p>
          <p className="text-yellow-500 ">
            <IoLogoJavascript size={60} />
          </p>
          <p className="text-black ">
            <RiNextjsFill size={60} />
          </p>
          <p className="text-blue-800 ">
            <FaPython size={60} />
          </p>
          <p className="text-blue-500 ">
            <RiTailwindCssFill size={60} />
          </p>
          <p className="text-blue-600 ">
            <FaCss3Alt size={60} />
          </p>
          <p className="text-orange-400 ">
            <FaHtml5 size={60} />
          </p>
          <p className="text-yellow-500 ">
            <IoLogoJavascript size={60} />
          </p>
          <p className="text-black ">
            <RiNextjsFill size={60} />
          </p>
          <p className="text-blue-800 ">
            <FaPython size={60} />
          </p>
          <p className="text-blue-500 ">
            <RiTailwindCssFill size={60} />
          </p>
        </div>
      </div>
    </div>
  );
}
