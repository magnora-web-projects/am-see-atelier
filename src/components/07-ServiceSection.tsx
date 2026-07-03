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
            EXPERTISE
          </h2>
          <p
            className={`${playfair.className} text-[#555555] text-xl text-center my-4 leading-relaxed max-w-xl`}
          >
            With bilingual (French & English) services tailored to your specific
            needs our goal is to best represent your work, product or business
            through flawless execution.
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

        <div className="flex flex-col md:flex-row items-start p-12 bg-[#fafafa] border-[0.5px] border-[#e5e5e5]">
          <div className="w-full md:w-1/3 mb-10 md:mb-0">
            <span className="text-[#a38a70] mb-4 block">✦</span>
            <h3
              className={`${bebas.className} text-[#111111] text-3xl tracking-[0.15em]`}
            >
              THE STUDIO
            </h3>
          </div>

          <div className="w-full md:w-2/3">
            <p
              className={`${courier.className} text-[#555555] text-sm leading-[2.4]`}
            >
              We are a bilingual boutique design firm with more than 15 years
              experience with web, e-commerce, branding, print and packaging
              design. Our offices are located in Nelson B.C. Canada where our
              small team of expert designers and coders work hard to best serve
              your needs. We love art and focus on helping artists, galleries,
              and creative businesses achieve a compelling online presence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
