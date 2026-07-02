export interface ServiceData {
  id: string;
  title: string;
  description: string;
}

import { Bebas_Neue, Courier_Prime } from "next/font/google";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const courier = Courier_Prime({ weight: ["400", "700"], subsets: ["latin"] });

export default function ServiceCard({
  title,
  description,
}: Omit<ServiceData, "id">) {
  return (
    <div className="flex flex-col mb-10 md:mb-14 pr-0 md:pr-8">
      <h4
        className={`${bebas.className} text-[#3b525e] text-[22px] tracking-[0.1em] mb-4`}
      >
        {title}
      </h4>
      <p
        className={`${courier.className} text-[#7a7a7a] text-[13px] leading-[2.4]`}
      >
        {description}
      </p>
    </div>
  );
}
