import { useEffect, useState } from "react";
import { useLanguage } from "../lib/i18n";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const { t } = useLanguage();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen gradient-bg flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className={`text-white transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-8 blur-sm'
          }`}>
            <h1 className={`text-5xl lg:text-6xl font-bold mb-6 leading-tight transition-all duration-1200 delay-200 ${
              isLoaded ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-12 blur-md'
            }`}>
              {t('hero.title')}
            </h1>
            <p className={`text-xl mb-8 opacity-90 leading-relaxed transition-all duration-1000 delay-400 ${
              isLoaded ? 'opacity-90 translate-y-0 blur-0' : 'opacity-0 translate-y-8 blur-sm'
            }`}>
              {t('hero.subtitle')}
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-600 ${
              isLoaded ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-8 blur-sm'
            }`}>
              <Button 
                onClick={scrollToContact}
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl magnetic-hover"
              >
                {t('hero.cta')}
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-purple-600 transition-all magnetic-hover"
              >
                <i className="fas fa-play mr-2"></i>
                {t('hero.planning')}
              </Button>
            </div>
          </div>

          {/* Hero Visual */}
          <div className={`relative transition-all duration-1500 delay-800 ${
            isLoaded ? 'opacity-100 translate-x-0 blur-0 scale-100' : 'opacity-0 translate-x-8 blur-sm scale-95'
          }`}>
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Students collaborating in modern classroom" 
                className="rounded-3xl shadow-2xl w-full h-auto floating-animation" 
              />
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-6 -left-6 glassmorphism rounded-2xl p-4 shadow-xl animate-fade-in">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                  <i className="fas fa-graduation-cap text-white"></i>
                </div>
                <div>
                  <div className="font-bold text-white">739</div>
                  <div className="text-sm text-white/80">{t('stats.students')}</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 glassmorphism rounded-2xl p-4 shadow-xl animate-fade-in" style={{animationDelay: '0.5s'}}>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                  <i className="fas fa-dollar-sign text-white"></i>
                </div>
                <div>
                  <div className="font-bold text-white">$2M+</div>
                  <div className="text-sm text-white/80">{t('stats.scholarships')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <i className="fas fa-chevron-down text-2xl opacity-70"></i>
      </div>
    </section>
  );
}
