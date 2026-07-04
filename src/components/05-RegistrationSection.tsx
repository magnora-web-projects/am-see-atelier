"use client";
import Image from "next/image";
import { Bebas_Neue, Courier_Prime, Playfair_Display } from "next/font/google";
import { motion } from "framer-motion";
import { useState } from "react";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const courier = Courier_Prime({ weight: ["400", "700"], subsets: ["latin"] });
const playfair = Playfair_Display({
  weight: "400",
  style: "italic",
  subsets: ["latin"],
});

export default function RegistrationSection() {
  const [formData, setFormData] = useState({
    childName: "",
    age: "",
    parentName: "",
    email: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="py-24 md:py-32 w-full bg-[#fcfaf5] border-t-[0.5px] border-[#e5e5e5]">
      <div className="max-w-[1400px] w-full mx-auto flex flex-col lg:flex-row items-start gap-16 px-8 md:px-12 relative">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-5/12 flex justify-center lg:sticky lg:top-32"
        >
          <div className="w-full max-w-md aspect-[4/5] relative overflow-hidden shadow-xl rounded-tl-[12rem] md:rounded-tl-[16rem] rounded-br-[12rem] md:rounded-br-[16rem]">
            <Image
              src="/kid.jpg"
              alt="Child painting by a lake"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              loading="eager"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[#a38a70]/10 mix-blend-multiply" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="w-full lg:w-7/12 flex flex-col justify-start lg:pl-12"
        >
          <h3
            className={`${bebas.className} text-5xl md:text-7xl tracking-[0.15em] text-[#111111] mb-4 leading-none`}
          >
            SOMMER KINDER-MALKURS
          </h3>

          <p
            className={`${playfair.className} text-[#a38a70] text-2xl md:text-3xl tracking-wide mb-8`}
          >
            Juli & August | Bei gutem Wetter – 4 flexible Termine
          </p>

          <p
            className={`${courier.className} text-[#555555] text-base leading-[2.2] mb-12`}
          >
            Ein kreativer Malkurs direkt am Starnberger See. Kinder malen frei,
            entdecken Farben und entwickeln spielerisch ihre künstlerischen
            Fähigkeiten. Am Ende erhalten alle Kinder ein Teilnahme-Zertifikat.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 border-y-[0.5px] border-[#cccccc] py-12">
            <div className="flex flex-col gap-2">
              <span
                className={`${bebas.className} text-[#111111] text-2xl tracking-[0.15em]`}
              >
                DETAILS
              </span>
              <ul
                className={`${courier.className} text-[#555555] text-sm leading-loose space-y-2`}
              >
                <li>• Preis: 100 € für 4 Termine</li>
                <li>• Farbe & Leinwand inklusive</li>
                <li>• Alter: Ab 6 Jahre bis 14 Jahre</li>
                <li>
                  • Zeit von 11:00 bis 15:00 Uhr (1 Stunde Pause Mittagspause)
                </li>
                <li>• Ort: Atelier am See, Starnberger See</li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <span
                className={`${bebas.className} text-[#111111] text-2xl tracking-[0.15em]`}
              >
                ORGANISATION
              </span>
              <ul
                className={`${courier.className} text-[#555555] text-sm leading-loose space-y-2`}
              >
                <li>• Es stehen 8 Samstags Termine zur Verfügung</li>
                <li>
                  • Flexible Kurstermine / (Der 1 Termin muss fix gebucht
                  werden)
                </li>
                <li>• Kurs wird durch Stempelkarte Dokumentiert</li>
                <li>• Kursstart: ab 5 Juni Anmeldung möglich ab: sofort</li>
                <li>• Teilnahme nur mit Anmeldung</li>
              </ul>
            </div>
          </div>

          <h4
            className={`${bebas.className} text-[#111111] text-4xl tracking-[0.15em] mb-8`}
          >
            KURSABLAUF
          </h4>

          <div className="flex flex-col gap-8 mb-16">
            <div className="border-l-[1px] border-[#a38a70] pl-6 relative">
              <div className="absolute w-3 h-3 bg-[#a38a70] rounded-full -left-[6.5px] top-1.5" />
              <h5
                className={`${bebas.className} text-2xl text-[#111111] tracking-widest`}
              >
                1. Termin – Einführung & Farben entdecken
              </h5>
              <p
                className={`${courier.className} text-sm text-[#555555] mt-2 leading-relaxed`}
              >
                Begrüßung. Material kennenlernen: Pinsel, Farben, Leinwand.
                Spielerische Farbübungen und Pinselhaltung. Erste kleine
                Malaufgabe. Ziel: Kinder fühlen sich wohl und entdecken ihre
                Kreativität.
              </p>
            </div>

            <div className="border-l-[1px] border-[#a38a70] pl-6 relative">
              <div className="absolute w-3 h-3 bg-[#a38a70] rounded-full -left-[6.5px] top-1.5" />
              <h5
                className={`${bebas.className} text-2xl text-[#111111] tracking-widest`}
              >
                2. Termin – Formen, Natur & kleine Motive
              </h5>
              <p
                className={`${courier.className} text-sm text-[#555555] mt-2 leading-relaxed`}
              >
                Beobachtung der Natur am See. Malen einfacher Formen und Motive.
                Kleine Übungen zu Licht & Schatten. Individuelle Unterstützung
                für jedes Kind. Ziel: Kinder lernen, Motive bewusst
                wahrzunehmen.
              </p>
            </div>

            <div className="border-l-[1px] border-[#a38a70] pl-6 relative">
              <div className="absolute w-3 h-3 bg-[#a38a70] rounded-full -left-[6.5px] top-1.5" />
              <h5
                className={`${bebas.className} text-2xl text-[#111111] tracking-widest`}
              >
                3. Termin – Eigenes Bild gestalten
              </h5>
              <p
                className={`${courier.className} text-sm text-[#555555] mt-2 leading-relaxed`}
              >
                Auswahl eines eigenen Motivs. Schritt-für-Schritt Begleitung.
                Arbeiten mit Farbkombinationen. Ruhe, Konzentration und Freude
                am Prozess. Ziel: Ein persönliches Bild entsteht.
              </p>
            </div>

            <div className="border-l-[1px] border-[#a38a70] pl-6 relative">
              <div className="absolute w-3 h-3 bg-[#a38a70] rounded-full -left-[6.5px] top-1.5" />
              <h5
                className={`${bebas.className} text-2xl text-[#111111] tracking-widest`}
              >
                4. Termin – Abschluss & Zertifikat
              </h5>
              <p
                className={`${courier.className} text-sm text-[#555555] mt-2 leading-relaxed`}
              >
                Fertigstellen der Bilder. Kleine Ausstellung der Kinderwerke.
                Gemeinsame Abschlussrunde. Übergabe der Teilnahme-Zertifikate.
                Ziel: Stolz, Selbstvertrauen und ein schönes Erlebnis.
              </p>
            </div>
          </div>

          <div className="bg-[#ffffff] p-10 shadow-sm border-[0.5px] border-[#e5e5e5]">
            <h4
              className={`${bebas.className} text-[#111111] text-3xl tracking-[0.15em] mb-8`}
            >
              ANMELDUNG ZUM KURS
            </h4>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-8 w-full"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                  <input
                    type="text"
                    required
                    className={`${courier.className} w-full bg-transparent border-b border-[#cccccc] py-2 text-[#111111] focus:outline-none focus:border-[#a38a70] transition-colors peer placeholder-transparent`}
                    placeholder="Name des Kindes"
                    onChange={(e) =>
                      setFormData({ ...formData, childName: e.target.value })
                    }
                  />
                  <label
                    className={`${courier.className} absolute left-0 -top-3.5 text-[#888888] text-xs uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#a38a70]`}
                  >
                    Name des Kindes
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="text"
                    required
                    className={`${courier.className} w-full bg-transparent border-b border-[#cccccc] py-2 text-[#111111] focus:outline-none focus:border-[#a38a70] transition-colors peer placeholder-transparent`}
                    placeholder="Alter"
                    onChange={(e) =>
                      setFormData({ ...formData, age: e.target.value })
                    }
                  />
                  <label
                    className={`${courier.className} absolute left-0 -top-3.5 text-[#888888] text-xs uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#a38a70]`}
                  >
                    Alter
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                  <input
                    type="text"
                    required
                    className={`${courier.className} w-full bg-transparent border-b border-[#cccccc] py-2 text-[#111111] focus:outline-none focus:border-[#a38a70] transition-colors peer placeholder-transparent`}
                    placeholder="Name der Eltern"
                    onChange={(e) =>
                      setFormData({ ...formData, parentName: e.target.value })
                    }
                  />
                  <label
                    className={`${courier.className} absolute left-0 -top-3.5 text-[#888888] text-xs uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#a38a70]`}
                  >
                    Name der Eltern
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    required
                    className={`${courier.className} w-full bg-transparent border-b border-[#cccccc] py-2 text-[#111111] focus:outline-none focus:border-[#a38a70] transition-colors peer placeholder-transparent`}
                    placeholder="E-Mail Adresse"
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                  <label
                    className={`${courier.className} absolute left-0 -top-3.5 text-[#888888] text-xs uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#a38a70]`}
                  >
                    E-Mail Adresse
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className={`${bebas.className} mt-6 w-full px-10 py-5 bg-[#111111] text-white text-xl tracking-[0.15em] uppercase hover:bg-[#a38a70] transition-colors duration-500`}
              >
                Kostenpflichtig Anmelden
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
