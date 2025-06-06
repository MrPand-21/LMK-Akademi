import { useLanguage } from "../lib/i18n";
import { Button } from "@/components/ui/button";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* About Content */}
          <div className="animate-fade-in-up">
            <span className="text-purple-600 font-semibold text-lg">{t('about.title')}</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-6">{t('about.company')}</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {t('about.description')}
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {t('about.description2')}
            </p>

            {/* Values */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="fas fa-handshake text-white text-xl"></i>
                </div>
                <div className="font-semibold text-gray-800">Güvenilirlik</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="fas fa-star text-white text-xl"></i>
                </div>
                <div className="font-semibold text-gray-800">Kalite</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="fas fa-users text-white text-xl"></i>
                </div>
                <div className="font-semibold text-gray-800">Deneyim</div>
              </div>
            </div>

            <Button className="gradient-bg text-white hover:opacity-90 px-8 py-3">
              {t('common.learnMore')}
            </Button>
          </div>

          {/* About Visual */}
          <div className="relative animate-slide-in-right">
            <img 
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Professional team meeting discussing education plans" 
              className="rounded-3xl shadow-2xl w-full h-auto" 
            />
            
            {/* USA Study Destination Badge */}
            <div className="absolute bottom-6 left-6 bg-white rounded-2xl p-6 shadow-xl">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl">🇺🇸</span>
                </div>
                <div>
                  <div className="font-bold text-2xl text-gray-800">USA</div>
                  <div className="text-sm text-gray-600">A Study Destination</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
