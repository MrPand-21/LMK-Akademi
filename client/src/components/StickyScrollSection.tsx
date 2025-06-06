import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../lib/i18n";
import { Card, CardContent } from "@/components/ui/card";

export default function StickyScrollSection() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const steps = [
    {
      title: t('process.step1.title'),
      description: t('process.step1.description'),
      icon: "fas fa-comments",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: t('process.step2.title'),
      description: t('process.step2.description'),
      icon: "fas fa-search",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: t('process.step3.title'),
      description: t('process.step3.description'),
      icon: "fas fa-file-alt",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: t('process.step4.title'),
      description: t('process.step4.description'),
      icon: "fas fa-plane",
      color: "from-orange-500 to-red-500"
    },
    {
      title: t('process.step5.title'),
      description: t('process.step5.description'),
      icon: "fas fa-hands-helping",
      color: "from-teal-500 to-blue-500"
    }
  ];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const containerRect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate progress through the sticky section
      const progress = Math.max(0, Math.min(1, 
        (-containerRect.top + windowHeight * 0.1) / (containerRect.height - windowHeight)
      ));
      
      // Map progress to step index with smoother transitions
      const stepProgress = progress * (steps.length - 0.001);
      const newIndex = Math.floor(stepProgress);
      setActiveIndex(Math.max(0, Math.min(newIndex, steps.length - 1)));
    };

    // Use throttled scroll for better performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll);
    return () => window.removeEventListener('scroll', throttledScroll);
  }, [steps.length]);

  return (
    <section ref={containerRef} className="h-[400vh] relative -mt-20">
      <div className="sticky top-0 h-screen flex items-center bg-white sticky-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Process steps */}
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <span className="text-purple-600 font-semibold text-lg">{t('process.title')}</span>
                <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-6">
                  {t('process.subtitle')}
                </h2>
                <p className="text-lg text-gray-600">
                  {t('process.description')}
                </p>
              </div>

              <div className="space-y-6">
                {steps.map((step, index) => (
                  <div 
                    key={index}
                    className={`flex items-start space-x-4 p-4 rounded-2xl transition-all duration-500 ${
                      index === activeIndex 
                        ? 'bg-purple-50 border-2 border-purple-200 scale-105' 
                        : 'bg-gray-50 border-2 border-transparent opacity-60'
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-r ${step.color} text-white font-bold text-lg shadow-lg ${
                      index === activeIndex ? 'animate-pulse' : ''
                    }`}>
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - Active step visualization */}
            <div className="relative">
              <Card className={`shadow-2xl border-0 bg-gradient-to-r ${steps[activeIndex].color} text-white transform transition-all duration-700 hover:scale-105`}>
                <CardContent className="p-8">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <i className={`${steps[activeIndex].icon} text-4xl text-white`}></i>
                    </div>
                    <h3 className="text-3xl font-bold mb-4">{steps[activeIndex].title}</h3>
                    <p className="text-xl leading-relaxed opacity-90">
                      {steps[activeIndex].description}
                    </p>
                    
                    {/* Progress indicator */}
                    <div className="mt-8">
                      <div className="text-sm opacity-80 mb-2">Step {activeIndex + 1} of {steps.length}</div>
                      <div className="w-full bg-white/20 rounded-full h-2">
                        <div 
                          className="bg-white h-2 rounded-full transition-all duration-300"
                          style={{ width: `${((activeIndex + 1) / steps.length) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Floating decorative elements */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-yellow-400 rounded-full opacity-20 animate-bounce-slow"></div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-pink-400 rounded-full opacity-20 animate-pulse-slow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}