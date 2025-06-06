import { useLanguage } from "../lib/i18n";
import { Card, CardContent } from "@/components/ui/card";

export default function Testimonials() {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: t('testimonials.student1.name'),
      role: t('testimonials.student1.role'),
      text: t('testimonials.student1.text'),
      avatar: 'AÇ',
      color: 'from-purple-500 to-purple-600'
    },
    {
      name: t('testimonials.student2.name'),
      role: t('testimonials.student2.role'),
      text: t('testimonials.student2.text'),
      avatar: 'RÖ',
      color: 'from-orange-500 to-yellow-500'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-purple-600 font-semibold text-lg">{t('testimonials.title')}</span>
          <h2 className="text-4xl font-bold text-gray-900 mt-4">Başarı Hikayelerimiz</h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${testimonial.color} rounded-full flex items-center justify-center mr-4`}>
                    <span className="text-white font-bold text-xl">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-purple-600 font-medium">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fas fa-star text-yellow-400"></i>
                  ))}
                </div>
                
                <p className="text-gray-700 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
