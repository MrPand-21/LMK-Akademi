import { useState, useEffect } from "react";
import { useLanguage } from "../lib/i18n";
import { Button } from "@/components/ui/button";

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glassmorphism backdrop-blur-md' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">LMK</span>
              </div>
              <div className="text-white">
                <div className="font-bold text-lg">LMK</div>
                <div className="text-sm opacity-90">CONSULTING</div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-white hover:text-yellow-400 transition-colors"
              >
                {t('nav.about')}
              </button>
              <button 
                onClick={() => scrollToSection('services')} 
                className="text-white hover:text-yellow-400 transition-colors"
              >
                {t('nav.education')}
              </button>
              <button 
                onClick={() => scrollToSection('programs')} 
                className="text-white hover:text-yellow-400 transition-colors"
              >
                {t('nav.programs')}
              </button>
              <button 
                onClick={() => scrollToSection('university')} 
                className="text-white hover:text-yellow-400 transition-colors"
              >
                {t('nav.university')}
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-white hover:text-yellow-400 transition-colors"
              >
                {t('nav.contact')}
              </button>
            </nav>

            {/* Language Switcher & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Button
                  variant={language === 'tr' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setLanguage('tr')}
                  className={`text-sm ${language === 'tr' ? 'bg-white text-purple-600' : 'text-white hover:bg-white/20'}`}
                >
                  TR
                </Button>
                <Button
                  variant={language === 'en' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setLanguage('en')}
                  className={`text-sm ${language === 'en' ? 'bg-white text-purple-600' : 'text-white hover:bg-white/20'}`}
                >
                  EN
                </Button>
              </div>

              {/* Mobile Menu Button */}
              <button 
                className="lg:hidden text-white p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <i className="fas fa-bars text-xl"></i>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)}></div>
          <div className="fixed top-0 right-0 w-64 h-full gradient-bg p-6">
            <div className="flex justify-end mb-8">
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white p-2"
              >
                <i className="fas fa-times text-xl"></i>
              </button>
            </div>
            <nav className="space-y-4">
              <button 
                onClick={() => scrollToSection('about')} 
                className="block text-white hover:text-yellow-400 transition-colors py-2"
              >
                {t('nav.about')}
              </button>
              <button 
                onClick={() => scrollToSection('services')} 
                className="block text-white hover:text-yellow-400 transition-colors py-2"
              >
                {t('nav.education')}
              </button>
              <button 
                onClick={() => scrollToSection('programs')} 
                className="block text-white hover:text-yellow-400 transition-colors py-2"
              >
                {t('nav.programs')}
              </button>
              <button 
                onClick={() => scrollToSection('university')} 
                className="block text-white hover:text-yellow-400 transition-colors py-2"
              >
                {t('nav.university')}
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="block text-white hover:text-yellow-400 transition-colors py-2"
              >
                {t('nav.contact')}
              </button>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
