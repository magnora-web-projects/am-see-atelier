"use client";
import { Bebas_Neue, Courier_Prime, Playfair_Display } from "next/font/google";
import { archiveData } from "../domain/";
import { ArchiveBlock } from "./card";
import { motion } from "framer-motion";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const playfair = Playfair_Display({
  weight: "400",
  style: "italic",
  subsets: ["latin"],
});

export default function OurArchivesSection() {
  return (
    <section className="py-24 md:py-32 w-full border-t-[0.5px] border-[#e5e5e5]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center mb-24 md:mb-32"
      >
        <h2
          className={`${bebas.className} text-[#111111] text-4xl md:text-6xl tracking-[0.2em] mb-6`}
        >
          GALERIE
        </h2>
        <p
          className={`${playfair.className} text-[#888888] text-xl md:text-2xl tracking-wide`}
        >
          Atelier am See
        </p>
      </motion.div>

      <div className="flex flex-col gap-y-32 md:gap-y-48">
        {archiveData.map((item, index) => (
          <ArchiveBlock key={item.id} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}
