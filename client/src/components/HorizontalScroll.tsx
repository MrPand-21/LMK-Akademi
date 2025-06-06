import { useEffect, useRef } from "react";
import { useLanguage } from "../lib/i18n";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function HorizontalScroll() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const scrollElement = scrollRef.current;
    
    if (!container || !scrollElement) return;

    const handleScroll = () => {
      const containerRect = container.getBoundingClientRect();
      
      // Calculate scroll progress more smoothly
      const scrollProgress = Math.max(0, Math.min(1, 
        (-containerRect.top) / (containerRect.height - window.innerHeight)
      ));
      
      // Apply eased horizontal scroll based on vertical scroll
      const easedProgress = easeInOutCubic(scrollProgress);
      const maxScroll = scrollElement.scrollWidth - scrollElement.clientWidth;
      
      // Use requestAnimationFrame for smoother animations
      requestAnimationFrame(() => {
        scrollElement.scrollLeft = easedProgress * maxScroll;
      });
    };

    // Easing function for smoother animation
    const easeInOutCubic = (t: number): number => {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const programs = [
    {
      title: t('horizontal.elementary.title'),
      description: t('horizontal.elementary.description'),
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      features: [t('horizontal.elementary.feature1'), t('horizontal.elementary.feature2'), t('horizontal.elementary.feature3')]
    },
    {
      title: t('horizontal.highschool.title'), 
      description: t('horizontal.highschool.description'),
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      features: [t('horizontal.highschool.feature1'), t('horizontal.highschool.feature2'), t('horizontal.highschool.feature3')]
    },
    {
      title: t('horizontal.exchange.title'),
      description: t('horizontal.exchange.description'),
      image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      features: [t('horizontal.exchange.feature1'), t('horizontal.exchange.feature2'), t('horizontal.exchange.feature3')]
    },
    {
      title: t('horizontal.university.title'),
      description: t('horizontal.university.description'),
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      features: [t('horizontal.university.feature1'), t('horizontal.university.feature2'), t('horizontal.university.feature3')]
    },
    {
      title: t('horizontal.scholarships.title'),
      description: t('horizontal.scholarships.description'),
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      features: [t('horizontal.scholarships.feature1'), t('horizontal.scholarships.feature2'), t('horizontal.scholarships.feature3')]
    }
  ];

  return (
    <section ref={containerRef} className="h-[300vh] relative -mt-20">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-900 horizontal-scroll-container">
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="w-full relative z-10">
          <div className="text-center mb-8 px-8">
            <h2 className="text-5xl font-bold text-white mb-4">{t('horizontal.title')}</h2>
            <p className="text-xl text-purple-100">{t('horizontal.subtitle')}</p>
          </div>
          
          <div 
            ref={scrollRef}
            className="flex space-x-8 px-8 overflow-x-hidden"
            style={{ scrollBehavior: 'auto' }}
          >
            {programs.map((program, index) => (
              <Card key={index} className="min-w-[400px] bg-white/10 backdrop-blur-lg border-white/20 text-white transform transition-all duration-500 hover:scale-105 hover:bg-white/20 magnetic-hover">
                <div className="h-48 overflow-hidden rounded-t-lg">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-white">{program.title}</CardTitle>
                  <CardDescription className="text-purple-100">
                    {program.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {program.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-purple-100 transition-all duration-300 hover:text-yellow-300">
                        <i className="fas fa-check text-yellow-400 mr-2"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}