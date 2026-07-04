import { Bebas_Neue, Courier_Prime, Playfair_Display } from "next/font/google";
import ServiceCard from "./card/ServiceCard";
import { servicesData } from "../domain";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const courier = Courier_Prime({ weight: ["400", "700"], subsets: ["latin"] });
const playfair = Playfair_Display({
  weight: "400",
  style: "italic",
  subsets: ["latin"],
});

export default function ServicesSection() {
  return (
    <section className=" py-32 w-full border-t-[0.5px] border-[#e5e5e5]">
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex flex-col justify-center items-center mb-32 border-b-[0.5px] border-[#e5e5e5] pb-16">
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16 mb-40">
          {servicesData.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
