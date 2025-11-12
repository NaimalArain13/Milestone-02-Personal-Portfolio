import Link from "next/link";

export default function Contact() {
  return (
    <section className="bg-light-grey py-16 text-charcoal" id="contact">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-8">
          Contact Me
        </h2>
        <p className="text-lg text-dark-grey mb-8">
          Have a project in mind or just want to say hello? Feel free to reach out!
        </p>
        <Link href='mailto:naimalarain13@gmail.com' className="inline-block bg-charcoal text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-dark-grey transition duration-300 ease-in-out shadow-lg">
          Email Me
        </Link>
      </div>
    </section>
  );
}