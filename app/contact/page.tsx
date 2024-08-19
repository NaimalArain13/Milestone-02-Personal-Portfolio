import Link from "next/link";

export default function Contact() {
  return (
    <section className="bg-bg py-8 text-text2">
      <div>
        <h1 className="flex justify-center pt-8 pb-16 text-5xl font-bold tracking-widest text-text2">
          Contact Me
        </h1>
      </div>
      <div className="flex items-center justify-center">
      <div
            className="h-[200px] w-full md:w-[480px] border-neutral-600 bg-text rounded-3xl hover:animate-pulse hover:bg-gradient-to-br from-button1 to-button2"
            data-aos="flip-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1500"
          >
            <div className="flex justify-center items-center pt-16 hover:animate-pulse rounded-3xl">
              <Link href='mailto:naimalarain13@gmail.com'>
              <button className="bg-stone-950 border-neutral-200 border-y-1 rounded-l-full rounded-r-full text-lg flex items-center justify-center font-bold text-text2 py-4 px-14">
                <p>Get in Touch</p>
              </button>
              </Link>
            </div>
          </div>
      </div>
     
    </section>
  );
}