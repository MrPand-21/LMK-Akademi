import { createContext, useContext, useState, type ReactNode } from "react";

type Language = 'tr' | 'en';

interface Translations {
  [key: string]: {
    tr: string;
    en: string;
  };
}

const translations: Translations = {
  // Navigation
  'nav.about': { tr: 'Biz Kimiz', en: 'About Us' },
  'nav.education': { tr: 'Eğitim Planlama', en: 'Education Planning' },
  'nav.programs': { tr: 'İlköğretim & Lise Programları', en: 'Elementary & High School Programs' },
  'nav.exchange': { tr: 'Değişim Programları', en: 'Exchange Programs' },
  'nav.university': { tr: 'Üniversite Danışmanlığı', en: 'University Consulting' },
  'nav.scholarships': { tr: 'Burslar', en: 'Scholarships' },
  'nav.assist': { tr: 'Assist & Davis', en: 'Assist & Davis' },
  'nav.summer': { tr: 'Yaz Programları ve Dil Okulları', en: 'Summer Programs & Language Schools' },
  'nav.exams': { tr: 'Akademik Sınavlar', en: 'Academic Exams' },
  'nav.placements': { tr: 'Öğrenci Yerleştirmeleri', en: 'Student Placements' },
  'nav.contact': { tr: 'İletişim', en: 'Contact' },

  // Hero Section
  'hero.title': { tr: 'Eğitim Hayallerinizi Gerçekleştirin', en: 'Make Your Education Dreams Come True' },
  'hero.subtitle': { tr: 'Yurtdışında eğitim yolculuğunuzda güvenilir rehberiniz. 10 yıllık deneyimimizle 739 öğrenciyi hayallerine ulaştırdık.', en: 'Your trusted guide on your international education journey. With 10 years of experience, we helped 739 students achieve their dreams.' },
  'hero.cta': { tr: 'Ücretsiz Danışmanlık Al', en: 'Get Free Consultation' },
  'hero.planning': { tr: 'Eğitim Planlama', en: 'Education Planning' },

  // About Section
  'about.title': { tr: 'Hakkımızda', en: 'About Us' },
  'about.company': { tr: 'LMK CONSULTING', en: 'LMK CONSULTING' },
  'about.description': { tr: 'Biz de LMK Consulting olarak, güçlü bir eğitime sahip, geleceğe güvenle bakan nesiller yetişmesine öncülük ediyoruz. Yurtdışında ilköğretim, lise veya üniversite eğitimi almak isteyen öğrencilere, yatılı ya da gündüzlü seçenekleriyle birlikte kişiselleştirilmiş danışmanlık hizmeti veriyoruz.', en: 'As LMK Consulting, we pioneer in raising generations with strong education who look to the future with confidence. We provide personalized consulting services to students who want to receive elementary, high school or university education abroad, with boarding or day school options.' },
  'about.description2': { tr: 'Çocuklarına en iyi eğitimi sağlamak isteyen aileler, yurtdışında eğitim fikrini düşündükleri andan itibaren, sayısız seçenek arasında kayboluyor. Bu seçenekler arasından en doğrusunu bulmak ve sonrasında zorlu başvuru süreçlerini tamamlamak bir uzman olmadan neredeyse imkânsız hale geliyor.', en: 'Families who want to provide the best education for their children get lost among countless options from the moment they think about the idea of studying abroad. Finding the right one among these options and then completing the challenging application processes becomes almost impossible without an expert.' },

  // Services Section
  'services.title': { tr: 'Hizmetlerimiz', en: 'Our Services' },
  'services.subtitle': { tr: 'Kapsamlı eğitim danışmanlığı hizmetlerimizle yanınızdayız', en: 'We are with you with our comprehensive educational consulting services' },
  
  // Process Section
  'process.title': { tr: 'Sürecimiz', en: 'Our Process' },
  'process.subtitle': { tr: 'Eğitim Yolculuğunuz', en: 'Your Education Journey' },
  'process.description': { tr: 'Uluslararası eğitim hayallerinizi gerçekleştirmek için yapılandırılmış yaklaşımımız', en: 'A structured approach to achieving your international education dreams' },
  
  'process.step1.title': { tr: 'İlk Danışmanlık', en: 'Initial Consultation' },
  'process.step1.description': { tr: 'Akademik hedefleriniz, ilgi alanlarınız ve aile tercihlerinizin kapsamlı değerlendirmesiyle kişiselleştirilmiş eğitim yol haritası oluşturuyoruz.', en: 'We begin with a comprehensive assessment of your academic goals, interests, and family preferences to create a personalized education roadmap.' },
  
  'process.step2.title': { tr: 'Okul Araştırması ve Seçimi', en: 'School Research & Selection' },
  'process.step2.description': { tr: 'Ekibimiz profilinize göre en uygun okulları araştırır ve listeler, akademik mükemmellik ve kültürel uyumluluğu garanti eder.', en: 'Our team researches and shortlists the best-fit schools based on your profile, ensuring academic excellence and cultural compatibility.' },
  
  'process.step3.title': { tr: 'Başvuru Desteği', en: 'Application Support' },
  'process.step3.description': { tr: 'Denemelerden mülakatklara kadar başvuru sürecinin her adımında size rehberlik ederek kabul şansınızı maksimize ediyoruz.', en: 'We guide you through every step of the application process, from essays to interviews, maximizing your chances of acceptance.' },
  
  'process.step4.title': { tr: 'Hazırlık ve Geçiş', en: 'Preparation & Transition' },
  'process.step4.description': { tr: 'Kültürel oryantasyon, akademik hazırlık ve pratik düzenlemeler dahil olmak üzere ayrılık öncesi hazırlık ile sorunsuz geçiş.', en: 'Pre-departure preparation including cultural orientation, academic readiness, and practical arrangements for a smooth transition.' },
  
  'process.step5.title': { tr: 'Sürekli Destek', en: 'Ongoing Support' },
  'process.step5.description': { tr: 'Akademik izleme, aile iletişimi ve kriz yönetimi ile eğitim yolculuğunuz boyunca sürekli destek.', en: 'Continuous support throughout your education journey with academic monitoring, family communication, and crisis management.' },
  'services.elementary.title': { tr: 'İlköğretim Programları', en: 'Elementary Programs' },
  'services.elementary.description': { tr: 'Yurtdışı ilköğretim okul danışmanlığı ve hazırlık programları', en: 'International elementary school consulting and preparation programs' },
  'services.highschool.title': { tr: 'Lise Programları', en: 'High School Programs' },
  'services.highschool.description': { tr: 'Yurtdışı özel lise eğitimi programları ve danışmanlık hizmetleri', en: 'International private high school education programs and consulting services' },
  'services.exchange.title': { tr: 'Değişim Programları', en: 'Exchange Programs' },
  'services.exchange.description': { tr: 'Kültürler arası lise değişim programları ve deneyim fırsatları', en: 'Cross-cultural high school exchange programs and experience opportunities' },
  'services.university.title': { tr: 'Üniversite Danışmanlığı', en: 'University Consulting' },
  'services.university.description': { tr: 'Yurtdışı üniversite başvuru süreçleri ve akademik rehberlik', en: 'International university application processes and academic guidance' },
  'services.scholarships.title': { tr: 'Burs Programları', en: 'Scholarship Programs' },
  'services.scholarships.description': { tr: 'Sporcu, akademik ve sanatçı öğrenci bursları için başvuru desteği', en: 'Application support for athletic, academic and artistic student scholarships' },
  'services.summer.title': { tr: 'Yaz Programları', en: 'Summer Programs' },
  'services.summer.description': { tr: 'Dil okulları ve yaz akademi programları organizasyonu', en: 'Language schools and summer academy programs organization' },

  // Statistics
  'stats.experience': { tr: 'Yıllık Deneyim', en: 'Years of Experience' },
  'stats.students': { tr: 'Öğrencilerimiz', en: 'Our Students' },
  'stats.schools': { tr: 'Çalışılan Liseler', en: 'Partner High Schools' },
  'stats.universities': { tr: 'Çalışılan Üniversiteler', en: 'Partner Universities' },
  'stats.scholarships': { tr: 'Minimum Yıllık Toplam Burs', en: 'Minimum Annual Total Scholarships' },

  // Testimonials
  'testimonials.title': { tr: 'Öğrencilerimiz Ne Diyor?', en: 'What Our Students Say?' },
  'testimonials.student1.name': { tr: 'Alkım Çetinkaya', en: 'Alkım Çetinkaya' },
  'testimonials.student1.role': { tr: 'Veli', en: 'Parent' },
  'testimonials.student1.text': { tr: '9. sınıftayken, yurtdışında bir sene eğitim görmek amacıyla Ted Ankara Koleji\'ndeki yurtdışı eğitim danışmanına gittim. Bana ASSIST programından söz etti. Başarılı öğrencilere yeterli oranda burs imkânı sağladığını ve tam da benim beklentilerimi karşılayabilecek bir program olduğunu...', en: 'When I was in 9th grade, I went to the overseas education consultant at Ted Ankara College to study abroad for a year. He told me about the ASSIST program. He mentioned that it provides adequate scholarship opportunities for successful students and is a program that can exactly meet my expectations...' },
  'testimonials.student2.name': { tr: 'Rezzan Özoğul', en: 'Rezzan Özoğul' },
  'testimonials.student2.role': { tr: 'Veli', en: 'Parent' },
  'testimonials.student2.text': { tr: 'Hayatta en önemli görev çocuk yetiştirmektir. Bu görevi layığı ile yapabilmek için anaokulundan, hatta seçtiğimiz oyun gruplarından itibaren, büyük bir titizlikle araştırıp en iyi ve çocuğumuza en uygun eğitim kurumunu bulmak için çaba sarf ederiz...', en: 'The most important task in life is raising children. To fulfill this task properly, we make great efforts to research and find the best and most suitable educational institution for our child from kindergarten onwards...' },

  // Events
  'events.title': { tr: 'Etkinlikler', en: 'Events' },
  'events.tsao.title': { tr: 'TSAO Türkiye Resepsiyonu', en: 'TSAO Turkey Reception' },
  'events.tsao.description': { tr: 'The Ten Schools Admission Organization (TSAO) ABD\'deki en iyi 10 yatılı özel okulun kabul komitesinin oluşturduğu bir organizasyondur.', en: 'The Ten Schools Admission Organization (TSAO) is an organization formed by the admissions committees of the top 10 boarding private schools in the USA.' },
  'events.boarding.title': { tr: 'ABD Yatılı Okullar Resepsiyonu', en: 'US Boarding Schools Reception' },
  'events.boarding.description': { tr: 'ABD\'deki belli başlı yatılı okullar, tanıtımlarını yapmak ve okullara aday öğrencilerle tanışmak için dünyada pek çok ülkeyi ziyaret ederler', en: 'Major boarding schools in the USA visit many countries around the world to promote themselves and meet prospective students' },

  // Contact
  'contact.title': { tr: 'İletişim', en: 'Contact' },
  'contact.getConsultation': { tr: 'Ücretsiz Danışmanlık Al', en: 'Get Free Consultation' },
  'contact.phone': { tr: '+90 532 548 05 64', en: '+90 532 548 05 64' },
  'contact.email': { tr: 'info@lmkconsulting.org', en: 'info@lmkconsulting.org' },

  // Footer
  'footer.copyright': { tr: '© 2019 - 2025 LMK Consulting Tüm Hakları Saklıdır.', en: '© 2019 - 2025 LMK Consulting All Rights Reserved.' },

  // Common
  'common.learnMore': { tr: 'Daha Fazla Bilgi', en: 'Learn More' },
  'common.getStarted': { tr: 'Hemen Başlayın', en: 'Get Started' },
  'common.viewDetails': { tr: 'Detayları İncele', en: 'View Details' },
  'common.allEvents': { tr: 'Tüm Etkinlikler', en: 'All Events' },
  'common.sendMessage': { tr: 'Mesajı Gönder', en: 'Send Message' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('language');
      return (saved as Language) || 'tr';
    }
    return 'tr';
  });

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang);
    }
  };

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
