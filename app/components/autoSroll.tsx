import { IoLogoJavascript } from "react-icons/io";
import { FaHtml5, FaPython } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";

export default function TechStack() {
  return (
    <div className="overflow-hidden w-full bg-bg py-20">
      <h2 className="text-center text-4xl md:text-5xl font-bold tracking-tight text-primary mb-16">
        Tech Stack
      </h2>
      <div className="flex justify-center items-center bg-surface py-8">
        <div className="flex space-x-20 animate-auto-scroll whitespace-nowrap">
          {[
            <FaCss3Alt key="css1" size={52} className="text-gray-300" />,
            <FaHtml5 key="html1" size={52} className="text-gray-300" />,
            <IoLogoJavascript key="js1" size={52} className="text-gray-300" />,
            <RiNextjsFill key="next1" size={52} className="text-gray-300" />,
            <FaPython key="py1" size={52} className="text-gray-300" />,
            <RiTailwindCssFill key="tw1" size={52} className="text-gray-300" />,
            <FaCss3Alt key="css2" size={52} className="text-gray-300" />,
            <FaHtml5 key="html2" size={52} className="text-gray-300" />,
            <IoLogoJavascript key="js2" size={52} className="text-gray-300" />,
            <RiNextjsFill key="next2" size={52} className="text-gray-300" />,
            <FaPython key="py2" size={52} className="text-gray-300" />,
            <RiTailwindCssFill key="tw2" size={52} className="text-gray-300" />,
          ]}
        </div>
      </div>
    </div>
  );
}
