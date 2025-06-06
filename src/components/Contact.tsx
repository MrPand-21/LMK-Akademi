import { useState } from "react";
import { useLanguage } from "../lib/i18n";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mesajınız gönderildi!",
      description: "En kısa sürede size dönüş yapacağız.",
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      program: '',
      message: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 gradient-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Contact Info */}
          <div className="text-white">
            <span className="text-yellow-400 font-semibold text-lg">{t('contact.title')}</span>
            <h2 className="text-4xl font-bold mt-4 mb-6">Hayallerinizi Konuşalım</h2>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Eğitim yolculuğunuzda size rehberlik etmek için buradayız. Ücretsiz danışmanlık için bizimle iletişime geçin.
            </p>

            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 glassmorphism rounded-full flex items-center justify-center">
                  <i className="fas fa-phone text-white"></i>
                </div>
                <div>
                  <div className="font-semibold">Telefon</div>
                  <div className="opacity-90">{t('contact.phone')}</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 glassmorphism rounded-full flex items-center justify-center">
                  <i className="fas fa-envelope text-white"></i>
                </div>
                <div>
                  <div className="font-semibold">E-posta</div>
                  <div className="opacity-90">{t('contact.email')}</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 glassmorphism rounded-full flex items-center justify-center">
                  <i className="fab fa-whatsapp text-white"></i>
                </div>
                <div>
                  <div className="font-semibold">WhatsApp</div>
                  <div className="opacity-90">{t('contact.phone')}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glassmorphism rounded-3xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-6">{t('contact.getConsultation')}</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  type="text"
                  placeholder="Adınızı yazın"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:ring-white/50"
                  required
                />
                <Input
                  type="tel"
                  placeholder="Telefon numaranız"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:ring-white/50"
                  required
                />
              </div>

              <Input
                type="email"
                placeholder="E-posta adresiniz"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:ring-white/50"
                required
              />

              <Select value={formData.program} onValueChange={(value) => handleInputChange('program', value)}>
                <SelectTrigger className="bg-white/20 border-white/30 text-white focus:ring-white/50">
                  <SelectValue placeholder="Program seçin" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="elementary">İlköğretim Programları</SelectItem>
                  <SelectItem value="highschool">Lise Programları</SelectItem>
                  <SelectItem value="university">Üniversite Danışmanlığı</SelectItem>
                  <SelectItem value="exchange">Değişim Programları</SelectItem>
                  <SelectItem value="summer">Yaz Programları</SelectItem>
                </SelectContent>
              </Select>

              <Textarea
                rows={4}
                placeholder="Size nasıl yardımcı olabiliriz?"
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:ring-white/50 resize-none"
                required
              />

              <Button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Danışmanlık Talep Et
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
