import { Bebas_Neue, Courier_Prime } from "next/font/google";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const courier = Courier_Prime({ weight: ["400", "700"], subsets: ["latin"] });

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-[#fcfaf5] flex items-center justify-center py-20 px-6 md:px-12 overflow-hidden relative">
      <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] border-[1px] border-[#ffd1d1] rotate-12 -translate-x-1/2 -z-0" />
      <div className="absolute top-1/3 left-1/3 w-[30vw] h-[30vw] max-w-[400px] max-h-[400px] border-[1px] border-[#ffd1d1] -rotate-6 -translate-x-1/2 -z-0" />

      <div className="relative max-w-6xl w-full flex flex-col md:flex-row items-center z-10">
        <div className="w-full md:w-1/2 relative flex justify-center md:justify-end md:pr-8">
          <div className="w-full max-w-[500px] aspect-[4/5] bg-gradient-to-br from-neutral-200 to-neutral-300 shadow-xl flex items-center justify-center relative overflow-hidden">
            <div className="text-neutral-500 font-medium tracking-[0.2em] text-sm uppercase text-center px-4">
              <span className="block mb-2 text-2xl text-neutral-400">🖼️</span>
              Art Academy <br /> image_5ea4f9.jpg Placeholder
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 bg-[#ffebd6] p-10 md:p-16 lg:p-24 z-20 md:-ml-16 mt-8 md:mt-0 shadow-sm">
          <div className="max-w-md">
            <h2
              className={`${bebas.className} text-[#ff6161] text-2xl tracking-widest mb-2`}
            >
              WE LOVE
            </h2>
            <h1
              className={`${bebas.className} text-[#ff6161] text-6xl md:text-8xl leading-[0.9] mb-8`}
            >
              ART
            </h1>

            <p
              className={`${courier.className} text-sm md:text-base text-gray-700 leading-loose`}
            >
              We love art and design. We focus on helping artists, art
              galleries, designers, makers and other creative businesses like
              restaurants and coffee shops showcase & sell their work through
              artful web design.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
