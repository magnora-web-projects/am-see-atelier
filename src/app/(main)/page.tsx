import {
  ContactUs,
  Footer,
  Header,
  Hero,
  JulieBretonSection,
  KelpSushi,
  MauriceBreton,
  NiceShavedIceSection,
  OurWork,
  Services,
} from "@/src/components";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="bg-[#ffffff] min-h-screen">
        <Header />

        <div id="home">
          <Hero />
        </div>

        <div id="archives">
          <OurWork />
          <NiceShavedIceSection />
          <JulieBretonSection />
          <KelpSushi />
          <MauriceBreton />
        </div>

        <div id="expertise">
          <Services />
        </div>

        <div id="contact">
          <ContactUs />
        </div>

        <div id="social">
          <Footer />
        </div>
      </main>
    </>
  );
}
