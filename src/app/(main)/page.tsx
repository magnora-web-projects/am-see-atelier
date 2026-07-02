import {
  ContactUs,
  Footer,
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
      <Hero />
      <OurWork />
      <NiceShavedIceSection />
      <JulieBretonSection />
      <KelpSushi />
      <MauriceBreton />
      <Services />
      <ContactUs />
      <Footer />
    </>
  );
}
