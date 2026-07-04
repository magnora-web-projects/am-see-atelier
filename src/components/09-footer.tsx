"use client";
import { Bebas_Neue, Courier_Prime } from "next/font/google";
import { FooterPic, links } from "../domain";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const courier = Courier_Prime({ weight: ["400", "700"], subsets: ["latin"] });

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <footer className="py-24 w-full border-t-[0.5px] border-[#e5e5e5]">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-center md:items-end mb-24 gap-12"
        >
          <h2
            className={`${bebas.className} text-[#111111] text-4xl tracking-[0.2em]`}
          >
            ATELIER AM SEE
          </h2>

          <p
            className={`${courier.className} text-[#888888] text-xs tracking-widest uppercase md:max-w-md text-center md:text-right leading-loose`}
          >
            Starnberger See <br />
            <a
              href="mailto:atelier-am-see@kontakt.de"
              className="text-[#111111] border-b border-[#111111] hover:text-[#a38a70] hover:border-[#a38a70] transition-colors pb-1 inline-block mt-2"
            >
              atelier-am-see@kontakt.de
            </a>
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-32">
          {FooterPic.map((item, index): any => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="w-full aspect-square bg-[#fafafa] relative overflow-hidden group border-[0.5px] border-[#e5e5e5] hover:border-[#111111] transition-colors duration-500 cursor-pointer"
            >
              <div className="absolute inset-6 border-[0.5px] border-[#111111]/20 flex flex-col items-center justify-center bg-white/50 backdrop-blur-md">
                <Image
                  src={item.pic}
                  alt="Artist painting on canvas"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="eager"
                  className="object-cover object-center z-0"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.nav
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex flex-wrap justify-center md:justify-between items-center gap-8 border-t-[0.5px] border-[#e5e5e5] pt-12"
        >
          <span
            className={`${courier.className} text-[#a38a70] text-xs tracking-widest`}
          >
            © 2026 ATELIER AM SEE
          </span>
          <div className="flex gap-8 md:gap-12 flex-wrap justify-center">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`${courier.className} text-[#555555] text-xs tracking-[0.2em] uppercase hover:text-[#a38a70] transition-colors duration-300`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.nav>
      </div>
    </footer>
  );
}
