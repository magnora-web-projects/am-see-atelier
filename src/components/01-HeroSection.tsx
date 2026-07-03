import { Bebas_Neue, Courier_Prime } from "next/font/google";
import Image from "next/image";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const courier = Courier_Prime({ weight: ["400", "700"], subsets: ["latin"] });

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen mt-24">
      <div className="md:hidden flex flex-col min-h-screen w-full relative">
        <div className="relative w-full h-[55vh]">
          <Image
            src="/hero-1.jpg"
            alt="Art exhibition"
            fill
            loading="eager"
            className="object-cover object-center"
          />
        </div>

        <div className="relative w-full h-[45vh]">
          <div className="absolute -top-[3.5rem] sm:-top-[5rem] left-8 sm:left-12 flex flex-col leading-[0.85] z-10">
            <h1
              className={`${bebas.className} text-[#000] text-[5.5rem] sm:text-[8rem] drop-shadow-sm`}
            >
              WE
            </h1>
            <h1
              className={`${bebas.className} text-[#000] text-[5.5rem] sm:text-[8rem]`}
            >
              LOVE
            </h1>
            <h1
              className={`${bebas.className} text-[#000] text-[5.5rem] sm:text-[8rem]`}
            >
              ART
            </h1>
          </div>
        </div>
      </div>

      <div className="hidden md:flex min-h-screen w-full relative items-center justify-center overflow-hidden">
        {/* Full Screen Background Image */}
        <Image
          src="/hero-1.jpg"
          alt="Art exhibition"
          fill
          loading="eager"
          className="object-cover object-center z-0"
        />

        <div className="absolute inset-0 bg-black/30 z-10" />

        <div className="relative z-20 text-center flex flex-col items-center">
          <h1
            className={`${bebas.className} text-white text-7xl lg:text-9xl tracking-[0.1em] drop-shadow-lg mb-4`}
          >
            WE LOVE ART
          </h1>
          <p
            className={`${courier.className} text-white/90 text-lg lg:text-xl tracking-widest uppercase`}
          >
            Curated Aesthetics & Elevated Design
          </p>
        </div>

        <div className="absolute bottom-0 left-0 w-full z-20 leading-[0]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            className="w-full h-[80px] lg:h-[120px]"
          >
            <path
              fill="#fcfcf2"
              fillOpacity="1"
              d="M0,128L80,144C160,160,320,192,480,197.3C640,203,800,181,960,144C1120,107,1280,53,1360,27L1440,0L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
