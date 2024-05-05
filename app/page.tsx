import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import HeroPage from "./HeroPage";
import Title from "@/components/Title";
import ServicesPage from "./ServicesPage";
import PortfolioPage from "./PortfolioPage";
import ContactPage from "./ContactPage";

export default function Home() {
  return (
    <main className="h-screen p-10">
      <nav>
        <Navbar />
      </nav>
      <section id="#home" className="flex items-center justify-center">
        <HeroPage />
      </section>
      <section id="#services" className="text-center">
        <Title>
          <div>How can I help you?</div>
        </Title>
        <ServicesPage />
      </section>
      <section id="#portfolio" className="text-center">
        <Title>
          <div>Portfolio</div>
        </Title>
        <PortfolioPage />
      </section>
      <section id="#contact" className="text-center">
        <Title>
          <div>Contact</div>
        </Title>
        <ContactPage />
      </section>
      <footer>
        <Footer />
      </footer>
    </main>
  );
}
