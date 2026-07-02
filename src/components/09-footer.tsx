import { Bebas_Neue, Courier_Prime } from "next/font/google";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const courier = Courier_Prime({ weight: ["400", "700"], subsets: ["latin"] });

export default function Footer() {
  const footerLinks = ["HOME", "PORTFOLIO", "SERVICES", "WHO WE ARE", "EMAIL"];

  return (
    <footer className="bg-[#fcfaf5] py-20 md:py-28 w-full border-t border-[#ebe8e0]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-16 gap-8">
          <h2
            className={`${bebas.className} text-[#3b525e] text-2xl md:text-3xl tracking-[0.15em]`}
          >
            STAY SOCIAL
          </h2>

          <p
            className={`${courier.className} text-[#7a7a7a] text-[13px] md:max-w-md text-center md:text-left leading-[2.4]`}
          >
            We love art. Follow us on{" "}
            <a
              href="#"
              className="underline underline-offset-4 decoration-1 hover:text-[#3b525e] transition-colors"
            >
              instagram
            </a>{" "}
            for weekly features of artists, galleries & creative inspiration.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-20">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="w-full aspect-square bg-[#ebe8e0] relative overflow-hidden shadow-sm flex items-center justify-center border border-dashed border-[#c2bfae] group hover:border-[#3b525e] transition-colors cursor-pointer"
            >
              <div className="flex flex-col items-center">
                <span className="text-2xl mb-2 grayscale opacity-50 group-hover:opacity-100 transition-opacity">
                  📷
                </span>
                <span
                  className={`${courier.className} text-[#7a7a7a] text-[10px] tracking-widest uppercase`}
                >
                  Post {item}
                </span>
              </div>
            </div>
          ))}
        </div>

        <nav className="flex flex-wrap justify-center gap-6 md:gap-10">
          {footerLinks.map((link) => (
            <a
              key={link}
              href="#"
              className={`${bebas.className} text-[#3b525e] text-[15px] tracking-[0.15em] hover:text-[#ff6161] transition-colors`}
            >
              {link}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
