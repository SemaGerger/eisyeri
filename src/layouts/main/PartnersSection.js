import React from "react";
import { usePartners } from "../../hooks/UsePartners";
import SectionTitle from "../../components/section/SectionTitle";
import StoryCardContainer from "../../components/section/StoryCardContainer";

const PartnersSection = () => {
  const { partners, loading } = usePartners(1, 10); 

  if (loading) {
    return <p className="text-center text-gray-500">Yükleniyor...</p>;
  }

  return (
    <section>
      
      <SectionTitle>Eşit İşyerleri</SectionTitle>
      <StoryCardContainer partners={partners} />
    </section>
  );
};

export default PartnersSection;
