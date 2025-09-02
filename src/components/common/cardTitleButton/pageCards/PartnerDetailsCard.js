import React from "react";
import { useLocation } from "react-router-dom";

const PartnerDetailsCard = ({ partner }) => {
  const location = useLocation();
  const image = location.state?.image;

  return (
    <div className="max-w-5xl mx-auto p-14 mt-8 space-y-6">

      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          {partner.isyeri_unvani}
        </h1>
        <p className="text-gray-600">{partner.faaliyet_turu}</p>
      </div>

      {image && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <img
            src={image}
            alt={partner.isyeri_unvani}
            className="w-full h-64 object-cover rounded-lg shadow"
          />
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 border rounded-lg bg-gray-50">
          <h2 className="text-xl font-semibold mb-2">İletişim</h2>
          <p>
            <strong>Yetkili:</strong> {partner.yetkili_kisi}
          </p>
          <p>
            <strong>Telefon:</strong> {partner.telefon}
          </p>
          <p>
            <strong>E-posta:</strong> {partner.eposta || "-"}
          </p>
        </div>
        <div className="p-4 border rounded-lg bg-gray-50">
          <h2 className="text-xl font-semibold mb-2">Adres</h2>
          <p>{partner.acik_adres}</p>
          <p>
            <strong>Mahalle:</strong> {partner.mahalle}
          </p>
          <p>
            <strong>Cadde:</strong> {partner.yol_adi}
          </p>
        </div>
      </div>

      {partner.calisma_saati && (
        <div className="p-4 border rounded-lg bg-gray-50">
          <h2 className="text-xl font-semibold mb-2">Çalışma Saatleri</h2>
          <p>{partner.calisma_saati}</p>
        </div>
      )}

      {partner.harita_kodu && (
        <div className="overflow-hidden rounded-lg shadow">
          <div dangerouslySetInnerHTML={{ __html: partner.harita_kodu }} />
        </div>
      )}
    </div>
  );
};

export default PartnerDetailsCard;
