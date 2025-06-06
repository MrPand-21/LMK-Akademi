import { useEffect, useState } from "react";
import { useLanguage } from "../lib/i18n";

export default function Statistics() {
  const { t } = useLanguage();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounters();
          }
        });
      },
      { threshold: 0.5 }
    );

    const statsSection = document.getElementById('statistics');
    if (statsSection) {
      observer.observe(statsSection);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach((counter) => {
      const target = parseInt(counter.getAttribute('data-target') || '0');
      const duration = 2000;
      const step = target / (duration / 16);
      let current = 0;
      
      const updateCounter = () => {
        if (current < target) {
          current += step;
          counter.textContent = Math.floor(current).toString();
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target.toString();
        }
      };
      
      updateCounter();
    });
  };

  return (
    <section id="statistics" className="py-20 gradient-bg relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080" 
          alt="Group of diverse students celebrating graduation" 
          className="w-full h-full object-cover opacity-20" 
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 text-center text-white">
          {/* Years of Experience */}
          <div className="animate-fade-in">
            <div className="text-5xl font-bold mb-4 counter" data-target="10">0</div>
            <div className="text-lg font-medium">{t('stats.experience')}</div>
          </div>

          {/* Students */}
          <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
            <div className="text-5xl font-bold mb-4 counter" data-target="739">0</div>
            <div className="text-lg font-medium">{t('stats.students')}</div>
          </div>

          {/* High Schools */}
          <div className="animate-fade-in" style={{animationDelay: '0.4s'}}>
            <div className="text-5xl font-bold mb-4 counter" data-target="580">0</div>
            <div className="text-lg font-medium">{t('stats.schools')}</div>
          </div>

          {/* Universities */}
          <div className="animate-fade-in" style={{animationDelay: '0.6s'}}>
            <div className="text-5xl font-bold mb-4 counter" data-target="1322">0</div>
            <div className="text-lg font-medium">{t('stats.universities')}</div>
          </div>

          {/* Scholarships */}
          <div className="animate-fade-in col-span-2 lg:col-span-1" style={{animationDelay: '0.8s'}}>
            <div className="text-3xl lg:text-4xl font-bold mb-4">$2,000,000</div>
            <div className="text-lg font-medium">{t('stats.scholarships')}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
