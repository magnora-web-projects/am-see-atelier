"use client";
import { Bebas_Neue, Courier_Prime } from "next/font/google";
import Image from "next/image";
import { motion } from "framer-motion";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const courier = Courier_Prime({ weight: ["400", "700"], subsets: ["latin"] });

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen mt-24">
      <div className="md:hidden flex flex-col min-h-screen w-full relative">
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative w-full h-[55vh]"
        >
          <Image
            src="/hero-1.jpg"
            alt="Art exhibition"
            fill
            sizes="100%"
            loading="eager"
            className="object-cover object-center"
          />
        </motion.div>

        <div className="relative w-full h-[45vh]">
          <div className="absolute -top-[3.5rem] sm:-top-[5rem] left-8 sm:left-12 flex flex-col leading-[0.85] z-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`${bebas.className} text-[#000] text-[5.5rem] sm:text-[8rem] drop-shadow-sm`}
            >
              ATELIER
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className={`${bebas.className} text-[#000] text-[5.5rem] sm:text-[8rem]`}
            >
              AM
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className={`${bebas.className} text-[#000] text-[5.5rem] sm:text-[8rem]`}
            >
              SEE
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className={`${courier.className} text-[#555555] text-lg lg:text-xl tracking-widest uppercase mt-4`}
            >
              Ein Ort, an dem Kunst atmet
            </motion.p>
          </div>
        </div>
      </div>

      <div className="hidden md:flex min-h-screen w-full relative items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src="/hero-1.jpg"
            alt="Art exhibition"
            fill
            loading="eager"
            className="object-cover object-center z-0"
          />
        </motion.div>

        <div className="absolute inset-0 bg-black/30 z-10" />

        <div className="relative z-20 text-center flex flex-col items-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className={`${bebas.className} text-white text-7xl lg:text-9xl tracking-[0.1em] drop-shadow-lg mb-4`}
          >
            ATELIER AM SEE
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className={`${courier.className} text-white/90 text-lg lg:text-xl tracking-widest uppercase`}
          >
            Ein Ort, an dem Kunst atmet
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute bottom-0 left-0 w-full z-20 leading-[0]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            className="w-full h-[80px] lg:h-[120px]"
          >
            <path
              fill="#fcfcf2"
              fillOpacity="1"
              d="M0,128L80,144C160,160,320,192,480,197.3C640,203,800,181,960,144C1120,107,1280,53,1360,27L1440,0L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
