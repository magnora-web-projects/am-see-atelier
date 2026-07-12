"use client";
import { Bebas_Neue, Courier_Prime, Playfair_Display } from "next/font/google";
import { motion } from "framer-motion";
import ServiceCard from "./card/ServiceCard";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const courier = Courier_Prime({ weight: ["400", "700"], subsets: ["latin"] });
const playfair = Playfair_Display({
  weight: "400",
  style: "italic",
  subsets: ["latin"],
});

export default function ServicesClient({ data }: { data: any[] }) {
  return (
    <section className="py-32 w-full border-t-[0.5px] border-[#e5e5e5]">
      <div className="max-w-6xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center items-center mb-32 border-b-[0.5px] border-[#e5e5e5] pb-16"
        >
          <h2
            className={`${bebas.className} text-[#111111] text-4xl tracking-[0.2em] mb-8 md:mb-0`}
          >
            DAS ATELIER
          </h2>
          <p
            className={`${playfair.className} text-[#555555] text-xl text-center my-4 leading-relaxed max-w-xl`}
          >
            Zwischen Wasser, Licht und stillen Momenten liegt das Atelier am See
            – ein kreativer Rückzugsort am Starnberger See, an dem seit über
            sieben Jahren drei Künstlerinnen und Künstler arbeiten.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16 mb-40">
          {data.map((service, index) => (
            <ServiceCard
              key={service._id || index}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-start p-12 bg-[#fafafa] border-[0.5px] border-[#e5e5e5]"
        >
          <div className="w-full md:w-1/3 mb-10 md:mb-0">
            <span className="text-[#a38a70] mb-4 block">✦</span>
            <h3
              className={`${bebas.className} text-[#111111] text-3xl tracking-[0.15em]`}
            >
              RÜCKZUGSORT
            </h3>
          </div>

          <div className="w-full md:w-2/3">
            <p
              className={`${courier.className} text-[#555555] text-sm leading-[2.4]`}
            >
              Mit über 30 Jahren Erfahrung in Kunst und Malerei bringen sie eine
              Tiefe, Ruhe und Professionalität mit, die man in jedem
              Pinselstrich spürt. Hier entstehen Bilder, Gespräche,
              Inspirationen – und ein Gefühl von Zuhause.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
