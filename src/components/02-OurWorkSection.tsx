import { Bebas_Neue, Courier_Prime, Playfair_Display } from "next/font/google";
import Image from "next/image";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const courier = Courier_Prime({ weight: ["400", "700"], subsets: ["latin"] });
const playfair = Playfair_Display({
  weight: "400",
  style: "italic",
  subsets: ["latin"],
});

export default function OurWorkSection() {
  return (
    <section className="bg-[#ffffff] py-24 md:py-40 w-full border-t-[0.5px] border-[#e5e5e5]">
      <div className="flex flex-col items-center mb-20 md:mb-32">
        <h2
          className={`${bebas.className} text-[#111111] text-3xl md:text-5xl tracking-[0.2em] mb-6`}
        >
          OUR ARCHIVES
        </h2>
        <p
          className={`${playfair.className} text-[#888888] text-lg md:text-xl tracking-wide`}
        >
          A curated selection of our finest commissions
        </p>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24 px-8">
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-full max-w-[550px] aspect-[4/5] bg-[#fafafa] relative overflow-hidden group">
            <div className="absolute inset-0 border border-[#e5e5e5] transition-all duration-500 group-hover:inset-4 group-hover:border-[#111111]" />
            <div className="absolute inset-6 border-[0.5px] border-[#111111]/20 flex flex-col items-center justify-center bg-white/50 backdrop-blur-md">
              <span className="text-2xl mb-4 text-[#111111]/30 group-hover:scale-110 transition-transform duration-500">
                ✧
              </span>
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

        <div className="w-full md:w-1/2 flex flex-col items-start">
          <h3
            className={`${bebas.className} text-4xl md:text-5xl tracking-[0.15em] text-[#111111] mb-4`}
          >
            LISA GILMORE DESIGN
          </h3>

          <div className="w-12 h-[1px] bg-[#a38a70] mb-8" />

          <p
            className={`${courier.className} text-[#a38a70] text-xs tracking-[0.2em] uppercase mb-8`}
          >
            Interior Designer
          </p>

          <p
            className={`${courier.className} text-[#555555] text-sm leading-[2.4] max-w-md mb-12`}
          >
            Lisa, a rising star of the design world, featured in Rue, Domino and
            AD magazines, wanted a minimal website and elegant branding for her
            fast growing luxury interior design business. We gave her a clean
            identity with a photography focused website to best show her skills
            and multiple local and national design projects.
          </p>

          <a
            href="#"
            className={`${playfair.className} text-[#111111] hover:text-[#a38a70] transition-colors duration-500 text-lg border-b-[0.5px] border-[#111111] hover:border-[#a38a70] pb-1`}
          >
            Explore Exhibition
          </a>
        </div>
      </div>
    </section>
  );
}
