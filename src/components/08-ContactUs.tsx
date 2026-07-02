import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] });

export default function ContactUs() {
  return (
    <section className="w-full bg-[#111111] flex items-center justify-center py-40 px-8">
      <div className="max-w-4xl w-full flex flex-col items-center justify-center text-center">
        <h3
          className={`${bebas.className} text-6xl md:text-8xl text-white tracking-[0.15em] mb-12`}
        >
          INITIATE DIALOGUE
        </h3>
        <button
          className={`${bebas.className} text-xl md:text-2xl text-white border border-white/30 px-12 py-5 tracking-[0.2em] transition-all duration-500 hover:bg-white hover:text-[#111111] uppercase`}
        >
          Inquire Now
        </button>
      </div>
    </section>
  );
}
