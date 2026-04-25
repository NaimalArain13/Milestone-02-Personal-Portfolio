import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-bg border-t border-border pt-12 pb-8 text-primary">
      <div className="max-w-7xl mx-auto px-6 md:px-[clamp(20px,6vw,110px)]">
        {/* Contact banner */}
        <div className="bg-surface rounded-2xl py-8 px-10 text-center mb-10">
          <p className="text-base font-medium text-primary">
            Interested in working together?{" "}
            <Link
              href="mailto:naimalarain13@gmail.com"
              className="inline-block bg-primary text-bg py-2 px-6 rounded-md hover:bg-accent transition-colors duration-300 ml-2"
            >
              naimalarain13@gmail.com
            </Link>
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/dp.jpg"
              alt="Naimal Salahuddin"
              width={40}
              height={40}
              className="rounded-full h-auto"
            />
            <span className="text-xl font-bold text-primary">NA</span>
          </Link>

          {/* Nav links */}
          <nav className="flex gap-8 text-sm font-medium">
            <Link href="/projects" className="text-muted hover:text-accent transition-colors">Projects</Link>
            <Link href="/services" className="text-muted hover:text-accent transition-colors">Services</Link>
            <Link href="/contact" className="text-muted hover:text-accent transition-colors">Contact</Link>
          </nav>

          {/* Social icons */}
          <div className="flex gap-5 text-2xl">
            <Link href="//www.facebook.com/profile.php?id=100081783813071" aria-label="Facebook" className="text-muted hover:text-primary transition-colors">
              <FaFacebook />
            </Link>
            <Link href="//www.linkedin.com/in/naimal-arain-/" aria-label="LinkedIn" className="text-muted hover:text-primary transition-colors">
              <FaLinkedin />
            </Link>
            <Link href="//github.com/NaimalArain13" aria-label="GitHub" className="text-muted hover:text-primary transition-colors">
              <FaGithub />
            </Link>
          </div>
        </div>

        <p className="text-center text-xs text-muted mt-8">
          &copy; {new Date().getFullYear()} Naimal Salahuddin. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
