import React from "react";
import { useLocation } from "react-router-dom";
import { MapPin, Phone, Mail, User, Clock } from "lucide-react";

const PartnerDetailsCard = ({ partner }) => {
  const location = useLocation();
  const image = location.state?.image;

  return (
    <div className="max-w-6xl mx-auto p-6 mt-16">
      {/* Başlık Bölümü */}
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          {partner.isyeri_unvani}
        </h1>
        <p className="text-xl text-blue-600 font-medium">{partner.faaliyet_turu}</p>
      </div>

      {/* Ana İçerik Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Sol Kolon - Resim ve Konum */}
        <div className="lg:col-span-1 space-y-6">
          {image && (
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src={image}
                alt={partner.isyeri_unvani}
                className="w-full h-80 object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          )}
          
          {/* Konum/Adres Bilgileri - Resmin Hemen Altında */}
          <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 pb-2 border-b border-gray-200 flex items-center">
              <MapPin className="text-blue-600 mr-3" size={28} />
              Adres Bilgisi
            </h2>
            
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Açık Adres</p>
                <p className="text-lg font-medium text-gray-800">{partner.acik_adres}</p>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Mahalle</p>
                  <p className="text-lg font-medium text-gray-800">{partner.mahalle}</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500">Cadde/Sokak</p>
                  <p className="text-lg font-medium text-gray-800">{partner.yol_adi}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Çalışma Saatleri - Mobil için */}
          <div className="lg:hidden">
            {partner.calisma_saati && (
              <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl shadow-md">
                <div className="flex items-center mb-4">
                  <Clock className="text-blue-600 mr-3" size={24} />
                  <h2 className="text-xl font-semibold text-gray-800">Çalışma Saatleri</h2>
                </div>
                <p className="text-gray-700">{partner.calisma_saati}</p>
              </div>
            )}
          </div>
        </div>

        {/* Sağ Kolon - İletişim ve Diğer Bilgiler */}
        <div className="lg:col-span-2 space-y-6">
          {/* İletişim Kartı */}
          <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 pb-2 border-b border-gray-200 flex items-center">
              <User className="text-blue-600 mr-3" size={28} />
              İletişim Bilgileri
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <User className="text-gray-500 mt-1 mr-4 flex-shrink-0" size={20} />
                <div>
                  <p className="text-sm text-gray-500">Yetkili Kişi</p>
                  <p className="text-lg font-medium text-gray-800">{partner.yetkili_kisi}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="text-gray-500 mt-1 mr-4 flex-shrink-0" size={20} />
                <div>
                  <p className="text-sm text-gray-500">Telefon</p>
                  <p className="text-lg font-medium text-gray-800">
                    <a href={`tel:${partner.telefon}`} className="hover:text-blue-600 transition-colors">
                      {partner.telefon}
                    </a>
                  </p>
                </div>
              </div>
              
              {partner.eposta && (
                <div className="flex items-start">
                  <Mail className="text-gray-500 mt-1 mr-4 flex-shrink-0" size={20} />
                  <div>
                    <p className="text-sm text-gray-500">E-posta</p>
                    <p className="text-lg font-medium text-gray-800">
                      <a href={`mailto:${partner.eposta}`} className="hover:text-blue-600 transition-colors">
                        {partner.eposta}
                      </a>
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Çalışma Saatleri - Masaüstü için */}
          <div className="hidden lg:block">
            {partner.calisma_saati && (
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <Clock className="text-blue-600 mr-3" size={24} />
                  <h2 className="text-xl font-semibold text-gray-800">Çalışma Saatleri</h2>
                </div>
                <p className="text-gray-700 text-lg">{partner.calisma_saati}</p>
              </div>
            )}
          </div>

          {/* Harita Bölümü - Sağ Kolonun Alt Kısmında */}
          {partner.harita_kodu && (
            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 pb-2 border-b border-gray-200 flex items-center">
                <MapPin className="text-blue-600 mr-3" size={28} />
                Konum Haritası
              </h2>
              <div className="rounded-xl overflow-hidden shadow-md">
                <div 
                  dangerouslySetInnerHTML={{ __html: partner.harita_kodu }} 
                  className="w-full h-80"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PartnerDetailsCard;