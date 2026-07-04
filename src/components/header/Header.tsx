"use client";

import { useState, useEffect } from "react";
import {
  Bebas_Neue,
  Courier_Prime,
  Playfair_Display,
  Great_Vibes,
} from "next/font/google";
import { links } from "@/src/domain";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const courier = Courier_Prime({ weight: ["400", "700"], subsets: ["latin"] });
const playfair = Playfair_Display({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});
const greatVibes = Great_Vibes({ weight: "400", subsets: ["latin"] });

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[60] transition-all duration-700 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md border-b-[0.5px] border-[#e5e5e5] py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex justify-between items-center">
          <a
            href="#home"
            onClick={() => setIsOpen(false)}
            className="relative flex flex-col items-center justify-center z-50 mb-2 md:mb-0 group"
          >
            <span
              className={`${playfair.className} text-[#274749] text-4xl md:text-5xl tracking-wide leading-none`}
            >
              Atelier
            </span>
            <span
              className={`${greatVibes.className} text-[#274749] text-[1.35rem] md:text-2xl absolute -bottom-3 md:-bottom-4 whitespace-nowrap opacity-90`}
            >
              am See
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`${courier.className} text-[#555555] text-xs tracking-[0.2em] uppercase hover:text-[#274749] transition-colors duration-300`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-[6px] relative p-2 cursor-pointer z-[60]"
            aria-label="Toggle Menu"
          >
            <span
              className={`w-8 h-[1px] bg-[#274749] transition-all duration-500 ${
                isOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`w-8 h-[1px] bg-[#274749] transition-all duration-500 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`w-8 h-[1px] bg-[#274749] transition-all duration-500 ${
                isOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 bg-[#ffffff] z-[50] flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center gap-10 text-center px-6">
          {[...links, { name: "Initiate Dialogue", href: "#contact" }].map(
            (link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`${bebas.className} text-[#274749] text-3xl sm:text-4xl tracking-[0.2em] uppercase hover:text-[#a38a70] transition-colors duration-300`}
              >
                {link.name}
              </a>
            ),
          )}
        </nav>
      </div>
    </>
  );
}
