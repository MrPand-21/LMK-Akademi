import { useEffect } from "react";
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
import { useScrollEffects } from "../hooks/useScrollEffects";
import { useLanguage } from "../lib/i18n";

export default function Home() {
  const { scrollY, scrollDirection } = useScrollEffects();
  const { language } = useLanguage();

  useEffect(() => {
    // Add smooth language transition class to body
    document.body.classList.add('language-transition');
    
    // Trigger scroll-based reveals
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    revealElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add('visible');
      }
    });
  }, [language]);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
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
