import React from "react";
import StoryCard from "../../components/section/StoryCard";
import SampleImage from "../../assets/logos/esitisyeri-kalp-logo.png";

const StoryCardContainer = ({ partners }) => {
  return (
    <div className="flex overflow-x-auto gap-4 py-4 px-2">
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
   // Partner ID’yi bul
        const objectCell = cells.find(c => c.ColumnName === "vw_esit_isyeri.objectid");
        const objectId = objectCell?.Value ? String(objectCell.Value) : null;

        return (
          <StoryCard
          key={objectId || index}   // güvenli key
            id={objectId} //id idi ama objectId olması gerekti

            name={name}
            image={image}  
            extraInfo={`Yetkili: ${yetkili} | Tür: ${faaliyet}`}
          />
        );
      })}
    </div>
  );
};

export default StoryCardContainer;