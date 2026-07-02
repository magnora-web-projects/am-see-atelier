import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] });

export default function ContactUs() {
  return (
    <>
      <div className="pt-24 md:pt-32 w-full  flex items-center justify-center">
        <div className="bg-[#ffebd6] w-full h-[60vh] flex-col flex items-center justify-center">
          <h3 className={`${bebas.className} text-5xl text-[#7a7a7a]`}>
            Contact us
          </h3>
          <button
            className={`${bebas.className} text-2xl border border-gray-400 cursor-pointer p-4 transform transition mt-5 text-gray-700 hover:bg-gray-600 hover:text-white`}
          >
            Email
          </button>
        </div>
      </div>
    </>
  );
}
