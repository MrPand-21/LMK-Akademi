import { useEffect, useState, useRef } from "react";
import { useLanguage } from "../lib/i18n";
import { Button } from "@/components/ui/button";
import BlurReveal from "./BlurReveal";
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Hero() {
  const { t } = useLanguage();
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [dragStartX, setDragStartX] = useState(0);

  const educationCards = [
    {
      id: 1,
      title: t('hero.carousel.card1.title'),
      subtitle: t('hero.carousel.card1.subtitle'),
      gradient: "from-blue-500 to-cyan-500",
      icon: "🎓",
      items: [
        t('hero.carousel.card1.item1'),
        t('hero.carousel.card1.item2'),
        t('hero.carousel.card1.item3'),
        t('hero.carousel.card1.item4'),
      ]
    },
    {
      id: 2,
      title: t('hero.carousel.card2.title'),
      subtitle: t('hero.carousel.card2.subtitle'),
      gradient: "from-purple-500 to-pink-500",
      icon: "📚",
      items: [
        t('hero.carousel.card2.item1'),
        t('hero.carousel.card2.item2'),
        t('hero.carousel.card2.item3'),
        t('hero.carousel.card2.item4'),
      ]
    },
    {
      id: 3,
      title: t('hero.carousel.card3.title'),
      subtitle: t('hero.carousel.card3.subtitle'),
      gradient: "from-green-500 to-emerald-500",
      icon: "🌍",
      items: [
        t('hero.carousel.card3.item1'),
        t('hero.carousel.card3.item2'),
        t('hero.carousel.card3.item3'),
        t('hero.carousel.card3.item4'),
      ]
    },
  ];

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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % educationCards.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + educationCards.length) % educationCards.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setDragStartX(clientX);
  };

  const handleDragEnd = (e: React.MouseEvent | React.TouchEvent) => {
    const clientX = 'changedTouches' in e ? e.changedTouches[0].clientX : e.clientX;
    const diff = dragStartX - clientX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  const getCardPosition = (index: number) => {
    const diff = index - currentSlide;

    let normalizedDiff = diff;
    if (diff > educationCards.length / 2) normalizedDiff = diff - educationCards.length;
    if (diff < -educationCards.length / 2) normalizedDiff = diff + educationCards.length;

    if (normalizedDiff === 0) {
      return { x: 0, scale: 1, zIndex: 10, opacity: 1 };
    } else if (normalizedDiff === 1 || normalizedDiff === -educationCards.length + 1) {
      return { x: '20%', scale: 0.85, zIndex: 5, opacity: 0.5 };
    } else if (normalizedDiff === -1 || normalizedDiff === educationCards.length - 1) {
      return { x: '-20%', scale: 0.85, zIndex: 5, opacity: 0.5 };
    } else {
      return { x: normalizedDiff < 0 ? '-40%' : '40%', scale: 0.7, zIndex: 0, opacity: 0 };
    }
  };

  return (
    <section className="relative min-h-screen gradient-bg flex items-center overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={` text-slate-50 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-8 blur-sm'
            }`}>
            <img src="https://lmkconsulting.org/dosyalar/edu.png" alt="LMK Logo" className=" mb-4" />

            <BlurReveal
              text={t('hero.subtitle')}
              className="text-xl mb-8 opacity-90 leading-relaxed text-white"
              as="p"
            />
            <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-600 ${isLoaded ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-8 blur-sm'
              }`}>
              <Button
                onClick={scrollToContact}
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl magnetic-hover"
              >
                {t('hero.cta')}
              </Button>
              <Button
                variant="outline"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all magnetic-hover"
              >
                <i className="fas fa-play mr-2"></i>
                {t('hero.planning')}
              </Button>
            </div>
          </div>

          <div className={`transition-all group duration-500  ${isLoaded ? 'opacity-100 translate-x-0 blur-0 scale-100' : 'opacity-0 translate-x-8 blur-sm scale-95'}`}>
            <div
              ref={containerRef}
              className="relative h-[400px] sm:h-[450px] lg:h-[500px] flex items-center justify-center"
              onMouseDown={handleDragStart}
              onMouseUp={handleDragEnd}
              onTouchStart={handleDragStart}
              onTouchEnd={handleDragEnd}
            >
              <button
                onClick={prevSlide}
                className="absolute left-2 opacity-0 group-hover:opacity-100 sm:left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14  rounded-full flex items-center justify-center transition-colors"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-2 sm:right-4 opacity-0 group-hover:opacity-100 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14  rounded-full flex items-center justify-center  transition-colors"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" />
              </button>

              <div className="w-full h-full relative">
                {educationCards.map((card, index) => {
                  const position = getCardPosition(index);

                  return (
                    <AnimatePresence key={card.id}>
                      <motion.div
                        initial={false}
                        animate={{
                          x: position.x,
                          y: 0,
                          scale: position.scale,
                          zIndex: position.zIndex,
                          opacity: position.opacity,
                        }}
                        transition={{
                          type: 'spring',
                          stiffness: 300,
                          damping: 30,
                          mass: 1,
                        }}
                        className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center cursor-pointer"
                        onClick={() => index !== currentSlide && goToSlide(index)}
                      >
                        <Card className="w-full text-slate-50/70 max-w-xs sm:max-w-sm h-[350px] sm:h-[380px] lg:h-[470px] bg-background/90 backdrop-blur-xl border border-slate-50/30 rounded-2xl overflow-hidden shadow-lg">
                          <CardContent className="p-4 sm:p-6 h-full flex flex-col">
                            <div className="flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-4">
                              <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${card.gradient} rounded-xl flex items-center justify-center shadow-md`}>
                                <span className="text-lg sm:text-xl text-white">{card.icon}</span>
                              </div>
                              <div>
                                <h3 className="text-lg sm:text-xl font-bold text-slate-50 ">{card.title}</h3>
                                <p className="text-xs text-muted-foreground uppercase tracking-wider">{card.subtitle}</p>
                              </div>
                            </div>

                            <div className={`h-0.5 w-full bg-gradient-to-r ${card.gradient} rounded-full mb-4 sm:mb-6 opacity-70`}></div>

                            <div className="flex-1 space-y-3 sm:space-y-4 overflow-y-auto hide-scrollbar pb-4">
                              {card.items.map((item, i) => (
                                <div key={i} className="flex items-start space-x-3">
                                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${card.gradient} mt-1.5 flex-shrink-0`}></div>
                                  <span className="text-muted-foreground text-xs sm:text-sm">{item}</span>
                                </div>
                              ))}
                            </div>

                            <Button className={`w-full mt-4 bg-gradient-to-r ${card.gradient} hover:opacity-90 text-white font-medium py-2 text-xs sm:text-sm rounded-xl shadow-lg`}>
                              {t('hero.carousel.apply')}
                            </Button>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </AnimatePresence>
                  );
                })}
              </div>
            </div>

            <div className="flex justify-center space-x-2 sm:space-x-3 mt-4 sm:mt-6">
              {educationCards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 ${index === currentSlide
                    ? 'w-8 sm:w-10 h-2 sm:h-3 bg-white shadow-lg'
                    : 'w-2 sm:w-3 h-2 sm:h-3 bg-white/30 hover:bg-white/50'
                    } rounded-full`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <div className="absolute -top-14 -left-44 opacity-70 glassmorphism rounded-2xl p-4 shadow-xl animate-fade-in z-20">
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

            <div className="absolute -bottom-28 -right-28 glassmorphism rounded-2xl p-4 shadow-xl animate-fade-in z-20" style={{ animationDelay: '0.5s' }}>
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

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <i className="fas fa-chevron-down text-2xl opacity-70"></i>
      </div>
    </section>
  );
}
