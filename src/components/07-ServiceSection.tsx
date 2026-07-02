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
    <section className="bg-[#fcfaf5] py-24 md:py-32 w-full">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center mb-24">
          <h2
            className={`${bebas.className} text-[#ff6161] text-xl tracking-[0.15em] mb-8`}
          >
            OUR SERVICES
          </h2>
          <p
            className={`${playfair.className} text-[#8b8577] text-[17px] md:text-[19px] leading-relaxed max-w-2xl`}
          >
            With bilingual (French & English) services tailored to your specific
            needs our goal is to best represent your work, product or business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-24">
          {servicesData.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center pt-16">
          <div className="w-full md:w-[35%] mb-6 md:mb-0">
            <h3
              className={`${bebas.className} text-[#ff6161] text-xl tracking-[0.15em]`}
            >
              WHO WE ARE
            </h3>
          </div>

          <div className="w-full md:w-[65%]">
            <p
              className={`${courier.className} text-[#7a7a7a] text-[13px] leading-[2.4]`}
            >
              We are a bilingual (French & English) boutique design firm with
              more than 15 years experience with web, e-commerce, branding,
              print and packaging design. Our offices are located in Nelson B.C.
              Canada where our small team of expert web designer, graphic
              designer and coder work hard to best serve your needs. We love art
              and focus on helping artist, art galleries, designers, makers and
              creative businesses achieve a compelling and effective online
              presence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
