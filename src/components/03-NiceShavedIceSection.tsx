import { Bebas_Neue, Courier_Prime, Playfair_Display } from "next/font/google";
import Image from "next/image";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const courier = Courier_Prime({ weight: ["400", "700"], subsets: ["latin"] });
const playfair = Playfair_Display({
  weight: "400",
  style: "italic",
  subsets: ["latin"],
});

export default function NiceShavedIceSection() {
  return (
    <section className="bg-[#ffffff] py-24 md:py-32 w-full">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-16 md:gap-24 px-8">
        <div className="w-full md:w-1/2 flex flex-col items-start md:pl-12 lg:pl-24">
          <h3
            className={`${bebas.className} text-4xl md:text-5xl tracking-[0.15em] text-[#111111] mb-4`}
          >
            NICE SHAVED ICE
          </h3>

          <div className="w-12 h-[1px] bg-[#a38a70] mb-8" />

          <p
            className={`${courier.className} text-[#a38a70] text-xs tracking-[0.2em] uppercase mb-8`}
          >
            Shaved Ice cafe
          </p>

          <p
            className={`${courier.className} text-[#555555] text-sm leading-[2.4] max-w-md mb-12`}
          >
            Located in Tampa Florida. Nice Shaved Ice is a Taiwanese style
            dessert cafe. We used colorful product photography and a bold
            typeface to bring forward the originality of the product. Atelier
            worked on brand colors, fonts, web design, menu & print design.
          </p>

          <a
            href="#"
            className={`${playfair.className} text-[#111111] hover:text-[#a38a70] transition-colors duration-500 text-lg border-b-[0.5px] border-[#111111] hover:border-[#a38a70] pb-1`}
          >
            Explore Exhibition
          </a>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-full max-w-[600px] aspect-[16/11] bg-[#fafafa] relative overflow-hidden group">
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
      </div>
    </section>
  );
}
