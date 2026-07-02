import { Bebas_Neue, Courier_Prime, Playfair_Display } from "next/font/google";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const courier = Courier_Prime({ weight: ["400", "700"], subsets: ["latin"] });
const playfair = Playfair_Display({
  weight: "400",
  style: "italic",
  subsets: ["latin"],
});

export default function OurWorkSection() {
  return (
    <section className="bg-[#fcfaf5] py-20 md:py-32 w-full">
      <div className="flex flex-col items-center mb-16 md:mb-24">
        <h2
          className={`${bebas.className} text-[#ff6161] text-xl md:text-2xl tracking-[0.15em] mb-4`}
        >
          OUR WORK
        </h2>
        <p
          className={`${playfair.className} text-gray-500 text-sm md:text-base italic`}
        >
          A few of our favourite projects
        </p>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-16 px-6">
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="w-full max-w-[500px] aspect-[4/4.5] bg-gradient-to-br from-[#ebe8e0] to-[#e0ddd5] rounded-tr-[12rem] md:rounded-tr-[16rem] relative overflow-hidden shadow-sm">
            <div className="absolute inset-4 border-2 border-dashed border-[#c2bfae] rounded-tr-[11rem] md:rounded-tr-[15rem] flex flex-col items-center justify-center text-center p-6">
              <span className="text-3xl mb-3 text-gray-400">🖼️</span>
              <span
                className={`${courier.className} text-gray-500 text-xs tracking-[0.15em] uppercase`}
              >
                Placeholder for <br />
                <span className="font-bold mt-2 block">image_5f18fc.jpg</span>
              </span>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col items-start md:pt-16">
          <div className="mb-6">
            <h3
              className={`${bebas.className} text-2xl md:text-[28px] tracking-[0.15em] text-[#333]`}
            >
              <span className="bg-[#ffebd6] px-2 py-1 leading-none inline-block">
                LISA GILMORE DESIGN
              </span>
            </h3>
          </div>

          <p
            className={`${courier.className} text-gray-500 text-[13px] tracking-[0.15em] mb-6`}
          >
            Interior Designer
          </p>

          <p
            className={`${courier.className} text-gray-500 text-[13px] leading-[2.4] max-w-[420px] mb-8`}
          >
            Lisa, a rising star of the design world, featured in Rue, Domino and
            AD magazines, wanted a minimal website and elegant branding for her
            fast growing luxury interior design business. We gave her a clean
            identity with a photography focused website to best show her skills
            and multiple local and national design projects.
          </p>

          <a
            href="#"
            className={`${playfair.className} text-gray-400 hover:text-[#ff6161] transition-colors duration-300 italic text-[15px]`}
          >
            view website
          </a>
        </div>
      </div>
    </section>
  );
}
