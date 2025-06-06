import { useState, useEffect } from "react";
import { useLanguage } from "../lib/i18n";
import { Button } from "@/components/ui/button";

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

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
    setActiveDropdown(null);
  };

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const navigationItems = [
    {
      key: 'about',
      label: t('nav.about'),
      items: [
        { key: 'company', label: t('nav.about.company'), action: () => scrollToSection('about') },
        { key: 'values', label: t('nav.about.values'), action: () => scrollToSection('about') },
        { key: 'references', label: t('nav.about.references'), action: () => scrollToSection('about') },
        { key: 'consultants', label: t('nav.about.consultants'), action: () => scrollToSection('about') },
      ]
    },
    {
      key: 'education',
      label: t('nav.education'),
      items: [
        { key: 'what', label: t('nav.education.what'), action: () => scrollToSection('services') },
        { key: 'warmup', label: t('nav.education.warmup'), action: () => scrollToSection('services') },
        { key: 'followup', label: t('nav.education.followup'), action: () => scrollToSection('services') },
      ]
    },
    {
      key: 'programs',
      label: t('nav.programs'),
      items: [
        { key: 'elementary', label: t('nav.programs.elementary'), action: () => scrollToSection('services') },
        { key: 'prep', label: t('nav.programs.prep'), action: () => scrollToSection('services') },
        { key: 'highschool', label: t('nav.programs.highschool'), action: () => scrollToSection('services') },
        { key: 'athletic', label: t('nav.programs.athletic'), action: () => scrollToSection('services') },
        { key: 'admissions', label: t('nav.programs.admissions'), action: () => scrollToSection('services') },
      ]
    },
    {
      key: 'university',
      label: t('nav.university'),
      items: [
        { key: 'consulting', label: t('nav.university.consulting'), action: () => scrollToSection('services') },
        { key: 'postgrad', label: t('nav.university.postgrad'), action: () => scrollToSection('services') },
      ]
    },
    {
      key: 'other',
      label: t('nav.other'),
      items: [
        { key: 'exchange', label: t('nav.exchange'), action: () => scrollToSection('services') },
        { key: 'assist', label: t('nav.assist'), action: () => scrollToSection('services') },
        { key: 'summer', label: t('nav.summer'), action: () => scrollToSection('services') },
        { key: 'exams', label: t('nav.exams'), action: () => scrollToSection('services') },
        { key: 'placements', label: t('nav.placements'), action: () => scrollToSection('services') },
      ]
    }
  ];

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
            <nav className="hidden lg:flex space-x-8 relative">
              {navigationItems.map((item) => (
                <div 
                  key={item.key}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(item.key)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button 
                    className="text-white hover:text-yellow-400 transition-colors py-2 flex items-center space-x-1"
                  >
                    <span>{item.label}</span>
                    <i className="fas fa-chevron-down text-xs"></i>
                  </button>
                  
                  {/* Dropdown Menu */}
                  <div className={`absolute top-full left-0 mt-2 w-80 glassmorphism rounded-2xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-300 ${
                    activeDropdown === item.key ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'
                  }`}>
                    <div className="p-6">
                      <h3 className="text-white font-semibold text-lg mb-4 border-b border-white/20 pb-2">
                        {item.label}
                      </h3>
                      <div className="space-y-3">
                        {item.items.map((subItem) => (
                          <button
                            key={subItem.key}
                            onClick={subItem.action}
                            className="w-full text-left text-white/90 hover:text-yellow-400 hover:bg-white/10 px-3 py-2 rounded-lg transition-all duration-200 flex items-center space-x-3"
                          >
                            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                            <span className="text-sm">{subItem.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-white hover:text-yellow-400 transition-colors py-2"
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
          <div className="fixed top-0 right-0 w-80 h-full gradient-bg p-6 overflow-y-auto">
            <div className="flex justify-end mb-8">
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white p-2"
              >
                <i className="fas fa-times text-xl"></i>
              </button>
            </div>
            <nav className="space-y-6">
              {navigationItems.map((item) => (
                <div key={item.key} className="space-y-2">
                  <div className="text-white font-semibold text-lg border-b border-white/20 pb-2">
                    {item.label}
                  </div>
                  <div className="space-y-2 pl-4">
                    {item.items.map((subItem) => (
                      <button
                        key={subItem.key}
                        onClick={subItem.action}
                        className="block text-white/90 hover:text-yellow-400 transition-colors py-1 text-sm"
                      >
                        • {subItem.label}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
              
              <button 
                onClick={() => scrollToSection('contact')} 
                className="block text-white hover:text-yellow-400 transition-colors py-2 font-semibold"
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
