import Link from "next/link";
import Image from "next/image"; // Import Image component

export default function HeroSection() {
  return (
    <section className="relative flex items-center justify-center min-h-screen bg-charcoal text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Side: Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-4">
            Hi, I'm <span className="text-light-grey">Naimal Salahuddin</span>
          </h1>
          <p className="text-xl sm:text-2xl text-light-grey mb-8">
            Web Designer & Developer focused on creating visually stunning and technically proficient websites.
          </p>
          <p className="text-lg text-light-grey mb-10 max-w-2xl md:max-w-full mx-auto md:mx-0">
            Designing websites that drive conversions and deliver exceptional user experiences.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <Link href="#project" className="bg-white text-charcoal py-3 px-8 rounded-lg text-lg font-semibold hover:bg-light-grey transition duration-300 ease-in-out shadow-lg">
              View My Work
            </Link>
            <Link href="#contact" className="bg-transparent text-white border border-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-white hover:text-charcoal transition duration-300 ease-in-out shadow-lg">
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Right Side: Avatar */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Image
            src={"/dp.jpg"} // Assuming dp.jpg is the avatar image
            alt="Naimal Salahuddin Avatar"
            width={300}
            height={300}
            className="rounded-full shadow-lg object-cover w-64 h-64 md:w-80 md:h-80"
          />
        </div>
      </div>
    </section>
  );
}