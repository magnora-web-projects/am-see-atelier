"use client";
import { Bebas_Neue, Courier_Prime } from "next/font/google";
import { motion } from "framer-motion";

export interface ServiceData {
  id: string;
  title: string;
  description: string;
}

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const courier = Courier_Prime({ weight: ["400", "700"], subsets: ["latin"] });

export default function ServiceCard({
  title,
  description,
  index,
}: Omit<ServiceData, "id"> & { index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: (index || 0) * 0.1 }}
      className="flex flex-col group cursor-default"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="w-8 h-[1px] bg-[#e5e5e5] group-hover:w-16 group-hover:bg-[#a38a70] transition-all duration-500" />
        <h4
          className={`${bebas.className} text-[#111111] text-3xl tracking-[0.15em]`}
        >
          {title}
        </h4>
      </div>
      <p
        className={`${courier.className} text-[#888888] text-sm leading-[2.2] pl-12 group-hover:text-[#555555] transition-colors duration-500`}
      >
        {description}
      </p>
    </motion.div>
  );
}
