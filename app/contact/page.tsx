import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

export default function ContactPage() {
  return (
    <main className="bg-white min-h-screen pt-32 pb-20 px-6 md:px-[clamp(20px,6vw,110px)]">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-primary mb-4">
          Let&apos;s Talk.
        </h1>
        <p className="text-xl text-muted mb-16 max-w-xl">
          Have a project in mind or just want to say hello? Drop me a message.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact form */}
          <form className="bg-surface rounded-2xl p-8 md:p-10 space-y-5">
            <div>
              <label className="block text-sm font-semibold text-primary mb-2">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full border border-border rounded-lg px-4 py-3 text-primary text-sm focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-primary mb-2">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full border border-border rounded-lg px-4 py-3 text-primary text-sm focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-primary mb-2">Message</label>
              <textarea
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full border border-border rounded-lg px-4 py-3 text-primary text-sm focus:outline-none focus:border-accent transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white px-8 py-3 font-semibold hover:bg-accent transition-colors duration-300 rounded-lg"
            >
              Send Message
            </button>
          </form>

          {/* Contact info */}
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="text-lg font-semibold text-primary mb-2">Email</h3>
              <Link
                href="mailto:naimalarain13@gmail.com"
                className="text-muted hover:text-accent transition-colors"
              >
                naimalarain13@gmail.com
              </Link>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-primary mb-4">Socials</h3>
              <div className="flex flex-col gap-3">
                <Link
                  href="//www.linkedin.com/in/naimal-arain-/"
                  className="flex items-center gap-3 text-muted hover:text-accent transition-colors group"
                >
                  <FaLinkedin size={20} />
                  <span className="text-sm font-medium">LinkedIn</span>
                </Link>
                <Link
                  href="//github.com/NaimalArain13"
                  className="flex items-center gap-3 text-muted hover:text-accent transition-colors group"
                >
                  <FaGithub size={20} />
                  <span className="text-sm font-medium">GitHub</span>
                </Link>
                <Link
                  href="//www.facebook.com/profile.php?id=100081783813071"
                  className="flex items-center gap-3 text-muted hover:text-accent transition-colors group"
                >
                  <FaFacebook size={20} />
                  <span className="text-sm font-medium">Facebook</span>
                </Link>
              </div>
            </div>

            <div className="bg-surface rounded-2xl p-6">
              <p className="text-sm text-muted leading-relaxed">
                I typically respond within 24 hours. For urgent inquiries, feel free to reach out directly via email or LinkedIn.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
