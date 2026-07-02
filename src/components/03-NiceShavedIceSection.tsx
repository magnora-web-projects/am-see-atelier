import { Bebas_Neue, Courier_Prime, Playfair_Display } from "next/font/google";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const courier = Courier_Prime({ weight: ["400", "700"], subsets: ["latin"] });
const playfair = Playfair_Display({
  weight: "400",
  style: "italic",
  subsets: ["latin"],
});

export default function NiceShavedIceSection() {
  return (
    <section className="bg-[#fcfaf5] py-20 md:py-32 w-full">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16 px-6">
        <div className="w-full md:w-1/2 flex flex-col items-start md:pl-8 lg:pl-16">
          <div className="mb-6">
            <h3
              className={`${bebas.className} text-2xl md:text-[28px] tracking-[0.15em] text-[#333]`}
            >
              <span className="bg-[#ffebd6] px-2 py-1 leading-none inline-block">
                NICE SHAVED ICE
              </span>
            </h3>
          </div>

          <p
            className={`${courier.className} text-gray-500 text-[13px] tracking-[0.15em] mb-6`}
          >
            Shaved Ice cafe
          </p>

          <p
            className={`${courier.className} text-gray-500 text-[13px] leading-[2.4] max-w-[420px] mb-8`}
          >
            Located in Tampa Florida. Nice Shaved Ice is a Taiwanese style
            dessert cafe. We used colorful product photography and a bold
            typeface to bring forward the originality of the product. Atelier
            worked on brand colors, fonts, web design, menu & print design.
          </p>

          <a
            href="#"
            className={`${playfair.className} text-gray-400 hover:text-[#ff6161] transition-colors duration-300 italic text-[15px]`}
          >
            view website
          </a>
        </div>

        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <div className="w-full max-w-[540px] aspect-[5/4] bg-gradient-to-br from-[#ebe8e0] to-[#e0ddd5] rounded-tl-[12rem] md:rounded-tl-[16rem] relative overflow-hidden shadow-sm">
            <div className="absolute inset-4 border-2 border-dashed border-[#c2bfae] rounded-tl-[11rem] md:rounded-tl-[15rem] flex flex-col items-center justify-center text-center p-6">
              <span className="text-3xl mb-3 text-gray-400">🖼️</span>
              <span
                className={`${courier.className} text-gray-500 text-xs tracking-[0.15em] uppercase`}
              >
                Placeholder for <br />
                <span className="font-bold mt-2 block">image_5f1d3f.jpg</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
