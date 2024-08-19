"use client";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-bg top-0 z-10 sticky w-full transition-transform shadow-xl text-text2 py-3 px-5 flex items-center justify-between">
      <Link href="/">
        <div className="flex items-center space-x-4">
          <h1 className="text-3xl font-bold italic text-text2">NA</h1>
          
        </div>
      </Link>

      {/* Hidden on mobile, shown on larger screens */}
      <nav className="hidden md:flex gap-14">
        <ul className="flex gap-14 font-semibold">
          <li><Link href="#project" className="hover:underline underline-offset-2">Projects</Link></li>
          <li><Link href="#about" className="hover:underline underline-offset-2">Info</Link></li>
          <li><Link href="#contact" className="hover:underline underline-offset-2">Contact Me</Link></li>
        </ul>
      </nav>

      {/* Menu button for mobile view */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="absolute top-16 left-0 right-0 bg-text text-center">
          <ul className="flex flex-col gap-4 py-4 text-bg">
            <li><Link href="#project" className="hover:underline underline-offset-2">Projects</Link></li>
            <li><Link href="#about" className="hover:underline underline-offset-2">Info</Link></li>
            <li><Link href="#contact" className="hover:underline underline-offset-2">Contact Me</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
}
