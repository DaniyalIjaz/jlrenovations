import Navbar from "./components/Navbar";
import HeroCarousel from "./components/HeroCarousel";
import Services from "./components/Services";
import CeoMessage from "./components/CeoMessage";
import Team from "./components/Team";
import Differentiators from "./components/Differentiators";
import Mission from "./components/Mission";
import Values from "./components/Values";
import Gallery from "./components/Gallery";
import BeforeAfterShowcase from "./components/BeforeAfterShowcase";
import ServiceAreas from "./components/ServiceAreas";
import ContactFooter from "./components/ContactFooter";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  return (
    <div className="bg-ivory-50 text-ink-700 antialiased">
      <Navbar />
      <main>
        <HeroCarousel />
        <Services />
        <BeforeAfterShowcase />
        <Gallery />
        <CeoMessage />
        <Team />
        <Differentiators />
        <Mission />
        <ServiceAreas />
        <Values />
      </main>
      <ContactFooter />
      <WhatsAppButton />
    </div>
  );
}
