import React from "react";
import Layout from "../layouts/Layout";
import { MapPin, Phone, Mail, Clock, Users, ExternalLink } from "lucide-react";

const Contact = () => {
  // Yönlendirme yapılacak URL
  const externalFormUrl = "https://ornek-form-sitesi.com/iletisim";

  const handleRedirect = () => {
    // Yeni sekmede form sayfasını aç
    window.open(externalFormUrl, "_blank");
  };

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 py-12 mt-8">
        {/* Başlık */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            İletişime Geçin
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Soru, görüş ve önerileriniz için aşağıdaki iletişim kanallarını kullanabilir 
            veya iletişim formumuzu doldurabilirsiniz.
          </p>
        </div>

        {/* Harita ve İletişim Bilgileri */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Harita */}
          <div className="rounded-2xl overflow-hidden shadow-xl h-96">
            <iframe
              title="Büyükçekmece Belediyesi Haritası"
              src="https://maps.google.com/maps?q=41.02115252472539,28.5852208036723&hl=tr&z=16&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>

          {/* İletişim Bilgileri */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8 flex items-center">
              <Users className="mr-3 text-blue-600" size={32} />
              İletişim Bilgileri
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="text-blue-600 mt-1 mr-4 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-gray-800">Adres</h3>
                  <p className="text-gray-700">Büyükçekmece Belediyesi, İstanbul, Türkiye</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="text-blue-600 mt-1 mr-4 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-gray-800">Telefon</h3>
                  <p className="text-gray-700">
                    <a href="tel:+902121234567" className="hover:text-blue-600 transition-colors">
                      +90 212 123 45 67
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="text-blue-600 mt-1 mr-4 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-gray-800">E-posta</h3>
                  <p className="text-gray-700">
                    <a href="mailto:info@buyukcekmece.bel.tr" className="hover:text-blue-600 transition-colors">
                      info@buyukcekmece.bel.tr
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="text-blue-600 mt-1 mr-4 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-gray-800">Çalışma Saatleri</h3>
                  <p className="text-gray-700">Pazartesi - Cuma: 08:30 - 17:30</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* İletişim Formu Yönlendirme Butonu */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              İletişim Formu
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              İletişim formumuzu doldurmak için aşağıdaki butona tıklayarak 
              ilgili sayfaya yönlendirileceksiniz.
            </p>
          </div>

          <button
            onClick={handleRedirect}
            className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center justify-center mx-auto"
          >
            <ExternalLink size={20} className="mr-2" />
            İletişim Formuna Git
          </button>

          <p className="text-gray-500 text-sm mt-4">
            Form doldurma işlemi için harici bir sayfaya yönlendirileceksiniz.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;