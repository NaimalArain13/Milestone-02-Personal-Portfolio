import { GoDotFill } from "react-icons/go";
import Image from "next/image";
import styles from "./Home.module.css";


export default function HeroSection() {
  
  return (
      <div className=" w-full text-neutral-300">
        <div className="flex justify-center pt-10">
          <button className="bg-text border-cyan-100  border-y-2 divide-x-0 space-x-2 rounded-l-full py-[0.5rem] text-sm flex items-center justify-center text-neutral-300 rounded-r-full px-4">
            <p className="text-yellow-300">
              <GoDotFill />{" "}
       
            </p>
            <p className={`${styles.typewriter}`}>It&#39;s me <b>Naimal Salahuddin</b></p>
          </button>
        </div>
        <div className="flex justify-center bg-bg pt-7">
          <Image
            src={"/dp.jpg"}
            width={70}
            height={0}
            alt=""
            className="rounded-full w-auto"
          />
        </div>
        <div className="text-text2 flex flex-col items-center justify-center pt-6">
          <p className="text-3xl md:5xl font-bold text-center leading-snug">
            Designing Websites
            <br />
            that drive Conversions
          </p>
        </div>
        <div className="text-text2 flex flex-col items-center justify-center pt-6">
          <p className="text-lg md:text-xl  text-center leading-snug">
           <b>AIM</b> to Design and develop visually stunning
            <br />
            and technically proficient websites for
            <br />
            clients worldwide.
          </p>
        </div>{" "}
        <div className="flex items-center justify-center pt-7"><button className="bg-text text-white py-3 px-7 rounded-md relative"> naimalarain13@gmail.com</button></div>
      </div>
  );
}
   

