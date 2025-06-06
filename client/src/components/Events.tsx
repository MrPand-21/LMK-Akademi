import { useLanguage } from "../lib/i18n";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Events() {
  const { t } = useLanguage();

  const events = [
    {
      title: t('events.tsao.title'),
      description: t('events.tsao.description'),
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400',
      alt: 'Professional networking event with educational consultants'
    },
    {
      title: t('events.boarding.title'),
      description: t('events.boarding.description'),
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400',
      alt: 'American boarding school campus with students and faculty'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-purple-600 font-semibold text-lg">{t('events.title')}</span>
          <h2 className="text-4xl font-bold text-gray-900 mt-4">Eğitim Fuarları ve Etkinliklerimiz</h2>
        </div>

        {/* Events Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {events.map((event, index) => (
            <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0">
              <div className="h-64 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                />
              </div>
              
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-purple-600 rounded-full mr-3"></div>
                  <span className="text-purple-600 font-semibold">LMK Consulting</span>
                </div>
                <CardTitle className="text-2xl text-gray-900">{event.title}</CardTitle>
              </CardHeader>
              
              <CardContent>
                <CardDescription className="text-gray-700 leading-relaxed mb-6">
                  {event.description}
                </CardDescription>
                
                <Button className="gradient-bg text-white hover:opacity-90">
                  {t('common.viewDetails')}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
            {t('common.allEvents')}
          </Button>
        </div>
      </div>
    </section>
  );
}
