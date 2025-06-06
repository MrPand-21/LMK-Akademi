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
      const containerCenter = containerRect.top + containerRect.height / 2;
      const windowCenter = window.innerHeight / 2;
      
      // Calculate scroll progress through the container
      const scrollProgress = Math.max(0, Math.min(1, 
        (windowCenter - containerRect.top) / (containerRect.height - window.innerHeight)
      ));
      
      // Apply horizontal scroll based on vertical scroll
      const maxScroll = scrollElement.scrollWidth - scrollElement.clientWidth;
      scrollElement.scrollLeft = scrollProgress * maxScroll;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const programs = [
    {
      title: "Elementary Programs",
      description: "Comprehensive international elementary education guidance",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      features: ["School Selection", "Application Support", "Cultural Preparation"]
    },
    {
      title: "High School Programs", 
      description: "Premium boarding and day school placements worldwide",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      features: ["Boarding Schools", "Day Schools", "Athletic Programs"]
    },
    {
      title: "Exchange Programs",
      description: "Cross-cultural immersion experiences for global perspectives",
      image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      features: ["Cultural Exchange", "Language Immersion", "Host Families"]
    },
    {
      title: "University Consulting",
      description: "Strategic guidance for top-tier university admissions",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      features: ["Application Strategy", "Essay Support", "Interview Prep"]
    },
    {
      title: "Scholarship Programs",
      description: "Merit-based financial aid for exceptional students",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      features: ["Merit Scholarships", "Athletic Awards", "Academic Excellence"]
    }
  ];

  return (
    <section ref={containerRef} className="h-[300vh] relative">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-900">
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="w-full relative z-10">
          <div className="text-center mb-8 px-8">
            <h2 className="text-5xl font-bold text-white mb-4">Education Journey</h2>
            <p className="text-xl text-purple-100">Scroll to explore our comprehensive programs</p>
          </div>
          
          <div 
            ref={scrollRef}
            className="flex space-x-8 px-8 overflow-x-hidden"
            style={{ scrollBehavior: 'auto' }}
          >
            {programs.map((program, index) => (
              <Card key={index} className="min-w-[400px] bg-white/10 backdrop-blur-lg border-white/20 text-white">
                <div className="h-48 overflow-hidden rounded-t-lg">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-full object-cover"
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
                      <li key={featureIndex} className="flex items-center text-purple-100">
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