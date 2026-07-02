import { Bebas_Neue, Courier_Prime } from "next/font/google";
import Image from "next/image";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const courier = Courier_Prime({ weight: ["400", "700"], subsets: ["latin"] });

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-[#ffffff] flex items-center justify-center py-20 px-6 md:px-16 overflow-hidden relative selection:bg-[#111111] selection:text-white">
      <div className="absolute top-0 left-0 w-full h-full border-[0.5px] border-[#e5e5e5] opacity-50 pointer-events-none" />
      <div className="absolute top-1/4 -right-20 w-[60vw] h-[1px] bg-gradient-to-r from-transparent via-[#d1d1d1] to-transparent rotate-45" />

      <div className="relative max-w-7xl w-full flex flex-col md:flex-row items-center justify-between z-10 gap-16">
        <div className="w-full md:w-5/12 flex flex-col items-start z-20">
          <h2
            className={`${bebas.className} text-[#a38a70] text-xl md:text-2xl tracking-[0.4em] uppercase mb-6`}
          >
            Curated Aesthetics
          </h2>
          <h1
            className={`${bebas.className} text-[#111111] text-7xl md:text-9xl leading-[0.85] mb-10`}
          >
            ART <br />
            ELEVATED
          </h1>

          <p
            className={`${courier.className} text-sm text-[#555555] leading-[2.2] max-w-sm tracking-wide`}
          >
            We transcend standard design. Our focus is empowering artists, elite
            galleries, and creative visionaries to manifest their essence
            through avant-garde digital experiences.
          </p>
        </div>

        <div className="w-full md:w-7/12 relative flex justify-end">
          <div className="w-full max-w-[600px] aspect-[3/4] bg-[#fcfcfc] flex items-center justify-center relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-transform duration-700 hover:scale-[1.02]">
            <div className="absolute inset-6 border-[0.5px] border-[#111111]/20 flex flex-col items-center justify-center bg-white/50 backdrop-blur-md">
              <span className="block mb-4 text-3xl text-[#111111]/40">✦</span>
              <Image
                src="/hero.jpg"
                alt="Artist painting on canvas"
                fill
                loading="eager"
                className="object-cover object-center z-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
