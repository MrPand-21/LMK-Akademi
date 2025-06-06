import { useLanguage } from "../lib/i18n";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import BlurReveal from "./BlurReveal";

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: "fas fa-child",
      title: t('services.elementary.title'),
      description: t('services.elementary.description'),
      features: [
        'Yurtdışı İlköğretim Okul Danışmanlığı',
        'Yurtdışı Özel Lise Eğitimi Programları Hazırlığı',
        'Yurtdışı Özel Lise Danışmanlığı'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: "fas fa-school",
      title: t('services.highschool.title'),
      description: t('services.highschool.description'),
      features: [
        'Yurtdışı Özel Lise Eğitimi Programları Hazırlığı',
        'Yurtdışı Özel Lise Danışmanlığı',
        'Sporcu, Akademik ve Sanatçı Öğrenci Bursları'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: "fas fa-exchange-alt",
      title: t('services.exchange.title'),
      description: t('services.exchange.description'),
      features: [
        'Kültürler Arası Lise Değişim Programları',
        'Takip Danışmanlığı'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: "fas fa-university",
      title: t('services.university.title'),
      description: t('services.university.description'),
      features: [
        'Üniversite Danışmanlığı',
        'Üniversite Sonrası'
      ],
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: "fas fa-award",
      title: t('services.scholarships.title'),
      description: t('services.scholarships.description'),
      features: [
        'Assist & Davis Bursları',
        'Akademik Sınavlar'
      ],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: "fas fa-sun",
      title: t('services.summer.title'),
      description: t('services.summer.description'),
      features: [
        'Yaz Programları ve Dil Okulları',
        'Öğrenci Yerleştirmeleri'
      ],
      color: 'from-pink-500 to-rose-500'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-purple-600 font-semibold text-lg">{t('services.title')}</span>
          <BlurReveal 
            text={t('services.subtitle')}
            className="text-4xl font-bold text-gray-900 mt-4 mb-6"
            as="h2"
          />
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" id="programs">
          {services.map((service, index) => (
            <div key={index} className="apple-card animate-border p-6 group hover:scale-105 transition-all duration-300 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <i className={`${service.icon} text-white text-2xl`}></i>
                </div>
                <button className="w-8 h-8 flex justify-center items-center text-slate-400 hover:text-slate-300">
                  <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="16" height="4" fill="none">
                    <path d="M8 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM2 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM14 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
                  </svg>
                </button>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-slate-300 text-sm mb-4">{service.description}</p>
              
              <ul className="space-y-2 text-sm text-slate-400 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button className={`w-full bg-gradient-to-r ${service.color} text-white hover:opacity-90 transition-all duration-300`}>
                {t('common.viewDetails')}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
