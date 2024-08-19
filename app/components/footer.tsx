import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
// import UpsideFooter from "./upFooter";

export default function Footer() {
  return (
    <footer className="bg-bg py-8 text-text2">
      <div className="max-w-7xl max-h-20xl h-full mx-auto text-center space-y-8">
        {/* Contact Information */}
        <div className="bg-text py-6 px-10 text-text2 font-medium border-y-2 border-opacity-5 border-neutral-200 ">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        {/* Contact Information */}
        <div className="text-lg">
          <p className=" hidden md:block">
            Interested in working with me? Send me a message at {"   "}{" "}
            <button className="bg-black text-text2 py-3 px-7  rounded-md relative">
              {" "}
              naimalarain13@gmail.com
            </button>
          </p>
          <button className="bg-black text-text2 py-3 px-7  rounded-md relative md:hidden">
              {" "}
              naimalarain13@gmail.com
            </button>
        </div>
      </div>
    </div>

        {/* Navigation Links */}
        <div className="justify-center gap-6 text-md grid grid-cols-1 md:grid-rows-1 lg:flex">
          <Link href="/about" className="hover:scale-95">
            About
          </Link>
          <Link href="/project" className="hover:scale-95">
            Project
          </Link>
          <Link href="/contact" className="hover:scale-95">
           Contact
          </Link>
        </div>

        {/* Logo or Image */}
        <div className="flex justify-center">
          <Image
            src="/dp.jpg"
            alt="Footer Image"
            width={50}
            height={0}
            className="rounded-full h-auto"
          />
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 text-3xl ">
          <Link
            href="//www.facebook.com/profile.php?id=100081783813071"
            aria-label="Facebook"
            className="hover:text-white"
          >
            <FaFacebook />
          </Link>
          <Link
            href="//www.linkedin.com/in/naimal-arain-/"
            aria-label="LinkedIn"
            className="hover:text-white"
          >
            <FaLinkedin />
          </Link>
          <Link
            href="//github.com/NaimalArain13"
            aria-label="GitHub"
            className="hover:text-white"
          >
            <FaGithub />
          </Link>
        </div>

        {/* Copyright Information */}
        <div className="text-sm pb-2 font-medium">
          All rights reserved. &copy; Copyright{" "}
          <Link href="/">
            Naimal Salahuddin
          </Link>{" "}
          2024
        </div>
      </div>
    </footer>
  );
}
