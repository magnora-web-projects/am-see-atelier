import { Bebas_Neue, Courier_Prime, Playfair_Display } from "next/font/google";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const courier = Courier_Prime({ weight: ["400", "700"], subsets: ["latin"] });
const playfair = Playfair_Display({
  weight: "400",
  style: "italic",
  subsets: ["latin"],
});

export default function KelpSushi() {
  return (
    <section className="bg-[#ffffff] py-24 md:py-32 w-full">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-16 md:gap-24 px-8">
        <div className="w-full md:w-1/2 flex flex-col items-start md:pl-12 lg:pl-24">
          <h3
            className={`${bebas.className} text-4xl md:text-5xl tracking-[0.15em] text-[#111111] mb-4`}
          >
            KELP SUSHI JOINT
          </h3>

          <div className="w-12 h-[1px] bg-[#a38a70] mb-8" />

          <p
            className={`${courier.className} text-[#a38a70] text-xs tracking-[0.2em] uppercase mb-8`}
          >
            Restaurant Concept
          </p>

          <p
            className={`${courier.className} text-[#555555] text-sm leading-[2.4] max-w-md mb-12`}
          >
            KELP Sushi joint is a family owned restaurant with two locations in
            Tampa, Florida. Rooted in history we opted to make use of nostagic
            family photos from the 1970’s to anchor the brand. The result is
            approchable and full of originality just like it’s menu offerings.
            Atelier has worked on the restaurant concept with creative
            direction, branding, web design, print & digital content.
          </p>

          <a
            href="#"
            className={`${playfair.className} text-[#111111] hover:text-[#a38a70] transition-colors duration-500 text-lg border-b-[0.5px] border-[#111111] hover:border-[#a38a70] pb-1`}
          >
            Explore Exhibition
          </a>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-full max-w-[600px] aspect-[4/3] bg-[#fafafa] relative overflow-hidden group">
            <div className="absolute inset-0 border border-[#e5e5e5] transition-all duration-500 group-hover:inset-4 group-hover:border-[#111111]" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 z-10">
              <span className="text-2xl mb-4 text-[#111111]/30 group-hover:scale-110 transition-transform duration-500">
                ✧
              </span>
              <span
                className={`${courier.className} text-[#555555] text-xs tracking-[0.2em] uppercase`}
              >
                Selected Work <br />
                <span className="text-[#111111] mt-3 block">
                  image_5f1d3f.jpg
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
