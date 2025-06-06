import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Statistics from "../components/Statistics";
import StickyScrollSection from "../components/StickyScrollSection";
import HorizontalScroll from "../components/HorizontalScroll";
import Testimonials from "../components/Testimonials";
import Events from "../components/Events";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Services />
      <Statistics />
      <StickyScrollSection />
      <HorizontalScroll />
      <Testimonials />
      <Events />
      <Contact />
      <Footer />
      
      {/* WhatsApp Float Button */}
      <a 
        href="https://wa.me/905325480564" 
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
    </div>
  );
}
