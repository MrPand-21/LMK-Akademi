import { useLanguage } from "../lib/i18n";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">LMK</span>
              </div>
              <div>
                <div className="font-bold text-lg">LMK</div>
                <div className="text-sm opacity-90">CONSULTING</div>
              </div>
            </div>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              Güçlü bir eğitime sahip, geleceğe güvenle bakan nesiller yetişmesine öncülük ediyoruz.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Kurumsal */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Kurumsal</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Hakkımızda</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Değerlerimiz</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Referanslarımız</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Danışmanlarımız</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Etkinliklerimiz</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Eğitim Planlama */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Eğitim Planlama</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Eğitim Planlama Nedir?</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Isındırma</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Yurtdışı İlköğretim Okul Danışmanlığı</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Yurtdışı Liseye Hazırlık Programları</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Kültürler Arası Lise Değişim Programları</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Assist & Davis Bursları</a></li>
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h4 className="font-semibold text-lg mb-6">{t('contact.title')}</h4>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-center space-x-3">
                <i className="fas fa-phone text-purple-600"></i>
                <span>{t('contact.phone')}</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-envelope text-purple-600"></i>
                <span>{t('contact.email')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
