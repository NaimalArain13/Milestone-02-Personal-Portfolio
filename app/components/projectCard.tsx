"use client";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { useEffect } from "react";
interface Props {
  title: string;
  description: string;
  img: string;
  route: string;
}
export default function ProjectCard({ prop }: { prop: Props }) {
  useEffect(()=>{
    AOS.init()
  },[])
  return (
    <div
      className="w-full bg-white rounded-lg shadow-md overflow-hidden group transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
      data-aos="fade-up"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1500"
    >
      <div className="relative w-full h-48 overflow-hidden"> {/* Landscape image aspect ratio */}
        <Image
          src={`${prop.img}`}
          alt={prop.title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <Link href={prop.route} className="block">
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-xl text-charcoal font-bold group-hover:text-dark-grey transition-colors duration-300">{prop.title}</h1>
            <div className="transform transition-transform duration-300 group-hover:rotate-45">
              <MdArrowOutward className="text-charcoal text-2xl" />
            </div>
          </div>
        </Link>
        <p className="text-dark-grey text-sm">{prop.description}</p>
      </div>
    </div>
  );
}
