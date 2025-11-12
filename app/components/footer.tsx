import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-charcoal py-8 text-white">
      <div className="max-w-7xl mx-auto text-center space-y-6 px-4">
        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 text-3xl ">
          <Link
            href="//www.facebook.com/profile.php?id=100081783813071"
            aria-label="Facebook"
            className="hover:text-light-grey transition-colors duration-200"
          >
            <FaFacebook />
          </Link>
          <Link
            href="//www.linkedin.com/in/naimal-arain-/"
            aria-label="LinkedIn"
            className="hover:text-light-grey transition-colors duration-200"
          >
            <FaLinkedin />
          </Link>
          <Link
            href="//github.com/NaimalArain13"
            aria-label="GitHub"
            className="hover:text-light-grey transition-colors duration-200"
          >
            <FaGithub />
          </Link>
        </div>

        {/* Copyright Information */}
        <div className="text-sm font-medium">
          All rights reserved. &copy; Copyright{" "}
          <Link href="/" className="hover:text-light-grey transition-colors duration-200">
            Naimal Salahuddin
          </Link>{" "}
          2024
        </div>
      </div>
    </footer>
  );
}
