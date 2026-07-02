import { Bebas_Neue } from "next/font/google";
import Image from "next/image";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] });

export default function ContactUs() {
  return (
    <section className="relative w-full flex items-center justify-center py-40 px-8 overflow-hidden">
      <Image
        src="/contactBG.png"
        alt="Artist painting on canvas"
        fill
        loading="eager"
        className="object-cover object-center z-0"
      />

      <div className="absolute inset-0 bg-black/20 z-10" />

      <div className="relative z-20 max-w-4xl w-full flex flex-col items-center justify-center text-center">
        <h3
          className={`${bebas.className} text-6xl md:text-8xl text-white tracking-[0.15em] mb-12 drop-shadow-md`}
        >
          INITIATE DIALOGUE
        </h3>

        <button
          className={`${bebas.className} text-xl md:text-2xl text-white border border-white/50 px-12 py-5 tracking-[0.2em] transition-all duration-500 hover:bg-white hover:text-[#111111] uppercase backdrop-blur-sm`}
        >
          Inquire Now
        </button>
      </div>
    </section>
  );
}
