import { Bebas_Neue, Courier_Prime } from "next/font/google";
import Image from "next/image";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const courier = Courier_Prime({ weight: ["400", "700"], subsets: ["latin"] });

export default function ContactUs() {
  return (
    <section className="relative w-full flex items-center justify-center py-40 px-8 overflow-hidden">
      <Image
        src="/contactBG.png"
        alt="Artist painting on canvas"
        fill
        loading="eager"
        className="object-cover object-center z-0"
      />

      <div className="absolute inset-0 bg-black/40 z-10" />

      <div className="relative z-20 max-w-4xl w-full flex flex-col items-center justify-center text-center">
        <h3
          className={`${bebas.className} text-6xl md:text-8xl text-white tracking-[0.15em] mb-6 drop-shadow-md`}
        >
          KONTAKT
        </h3>

        <p
          className={`${courier.className} text-white/90 text-sm md:text-base mb-12 max-w-2xl leading-loose`}
        >
          Natürliche Umgebung, ruhige Atmosphäre, viel Platz zum Malen und
          Kreativsein. Wenn du Fragen zum Atelier, zu unseren Künstlerinnen und
          Künstlern oder zum Sommer-Kinder-Malkurs hast, kannst du dich
          jederzeit melden.
        </p>

        <a
          href="mailto:atelier-am-see@kontakt.de"
          className={`${bebas.className} text-xl md:text-2xl text-white border border-white/50 px-12 py-5 tracking-[0.2em] transition-all duration-500 hover:bg-white hover:text-[#111111] uppercase backdrop-blur-sm mb-8 block`}
        >
          E-Mail Senden
        </a>

        <div className="flex flex-col gap-2">
          <span
            className={`${courier.className} text-white/80 text-xs tracking-widest uppercase`}
          >
            Mobil: 0176 4146 2816
          </span>
          <span
            className={`${courier.className} text-white/80 text-xs tracking-widest uppercase`}
          >
            kontakt@atelier-starnberg.de
          </span>
        </div>
      </div>
    </section>
  );
}
