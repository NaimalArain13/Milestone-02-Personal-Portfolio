'use client';
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white top-0 z-10 sticky w-full transition-transform shadow-md text-charcoal py-4 px-6 flex items-center justify-between">
      <Link href="/">
        <div className="flex items-center space-x-4 justify-between">
          <h1 className="text-3xl font-bold italic text-charcoal">NA</h1>
        </div>
      </Link>

      {/* Hidden on mobile, shown on larger screens */}
      <nav className="hidden md:flex gap-10">
        <ul className="flex gap-10 font-medium">
          <li><Link href="#project" className="hover:text-dark-grey transition-colors duration-200">Projects</Link></li>
          <li><Link href="#about" className="hover:text-dark-grey transition-colors duration-200">Info</Link></li>
          <li><Link href="#contact" className="hover:text-dark-grey transition-colors duration-200">Contact Me</Link></li>
        </ul>
      </nav>

      {/* Menu button for mobile view */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu" className="text-charcoal">
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="absolute top-full left-0 right-0 bg-light-grey flex flex-col items-center py-4 shadow-md md:hidden">
          <ul className="flex flex-col gap-4 text-charcoal font-medium">
            <li><Link href="#project" className="hover:text-dark-grey transition-colors duration-200" onClick={() => setIsOpen(false)}>Projects</Link></li>
            <li><Link href="#about" className="hover:text-dark-grey transition-colors duration-200" onClick={() => setIsOpen(false)}>Info</Link></li>
            <li><Link href="#contact" className="hover:text-dark-grey transition-colors duration-200" onClick={() => setIsOpen(false)}>Contact Me</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
}
