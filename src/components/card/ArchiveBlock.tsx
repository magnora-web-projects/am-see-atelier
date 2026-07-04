"use client";
import Image from "next/image";
import { ArchiveItem } from "@/src/domain";
import { motion } from "framer-motion";
import { Bebas_Neue, Courier_Prime, Playfair_Display } from "next/font/google";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const courier = Courier_Prime({ weight: ["400", "700"], subsets: ["latin"] });
const playfair = Playfair_Display({
  weight: "400",
  style: "italic",
  subsets: ["latin"],
});

export default function ArchiveBlock({
  item,
  index,
}: {
  item: ArchiveItem;
  index: number;
}) {
  const isEven = index % 2 === 0;

  const curvedCornerClass = isEven
    ? "rounded-tr-[12rem] md:rounded-tr-[16rem]"
    : "rounded-tl-[12rem] md:rounded-tl-[16rem]";

  const ImageSide = (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full md:w-1/2 flex justify-center"
    >
      <div
        className={`w-full max-w-2xl ${item.imageAspect} relative overflow-hidden shadow-xl group ${curvedCornerClass}`}
      >
        <Image
          src={item.imageSrc}
          alt={item.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          loading="lazy"
          className="object-cover object-center transition-transform duration-1000 group-hover:scale-105 z-0"
        />
        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-700 z-10" />
      </div>
    </motion.div>
  );

  const TextSide = (
    <motion.div
      initial={{ opacity: 0, x: isEven ? 50 : -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      className={`w-full md:w-1/2 flex flex-col justify-center ${
        isEven ? "md:pl-12 lg:pl-20" : "md:pr-12 lg:pr-20"
      }`}
    >
      <h3
        className={`${bebas.className} text-4xl md:text-6xl tracking-[0.15em] text-[#111111] mb-6`}
      >
        {item.title}
      </h3>

      <div className="w-16 h-[2px] bg-[#a38a70] mb-8" />

      <p
        className={`${courier.className} text-[#a38a70] text-sm md:text-base tracking-[0.2em] uppercase mb-8`}
      >
        {item.subtitle}
      </p>

      <p
        className={`${courier.className} text-[#555555] text-base md:text-lg leading-[2.2] mb-10`}
      >
        {item.description}
      </p>

      <a
        href={item.linkHref}
        className={`${playfair.className} text-[#111111] hover:text-[#a38a70] transition-colors duration-500 text-xl border-b-[1px] border-[#111111] hover:border-[#a38a70] pb-2 self-start`}
      >
        {item.linkText}
      </a>
    </motion.div>
  );

  return (
    <div
      className={`max-w-[1400px] w-full mx-auto flex flex-col md:flex-row items-center gap-16 px-8 md:px-12 ${
        isEven ? "" : "md:flex-row-reverse"
      }`}
    >
      {ImageSide}
      {TextSide}
    </div>
  );
}
