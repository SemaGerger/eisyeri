import React from "react";
import PageCard from "../../../common/cardTitleButton/pageCards/PageCard";
import SampleImage from "../../../../assets/logos/esitisyeri-kalp-logo.png";

const TestPartnersList = ({ partners }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
      {partners.map((partner, index) => {
        const cells = partner.Cells || [];
        const name = cells[2]?.DisplayText || "İsim yok";
        const yetkili = cells[3]?.DisplayText || "Yetkili yok";
        const faaliyet = cells[4]?.DisplayText || "Faaliyet türü yok";

        let image = SampleImage;
        try {
          const filesJson = cells[16]?.Value || "[]";
          const files = JSON.parse(filesJson);
          if (Array.isArray(files) && files.length > 0) {
            image = files[0].src || SampleImage;
          }
        } catch (err) {
          console.warn("Resim verisi okunamadı:", err);
        }

        return (
          <PageCard
            key={index}
            name={name}
            image={image}
            extraInfo={`Yetkili: ${yetkili} | Tür: ${faaliyet}`}
            onClick={() => console.log(`${name} tıklandı`)}
          />
        );
      })}
    </div>
  );
};

export default TestPartnersList;
