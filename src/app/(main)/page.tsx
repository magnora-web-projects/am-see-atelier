import {
  ContactUs,
  Footer,
  Header,
  Hero,
  OurWork,
  Services,
} from "@/src/components";

export default function Home() {
  return (
    <>
      <main className="bg-[##fcfcf2] min-h-screen">
        <Header />

        <div id="home">
          <Hero />
        </div>

        <div id="GALERIE">
          <OurWork />
        </div>

        <div id="DAS ATELIER">
          <Services />
        </div>

        <div id="KONTAKT">
          <ContactUs />
        </div>

        <div id="social">
          <Footer />
        </div>
      </main>
    </>
  );
}
