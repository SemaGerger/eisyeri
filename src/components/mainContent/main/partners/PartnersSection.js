import React from "react";
import { usePartners } from "../../../common/hooks/usePartners";
import SectionTitle from "../../../common/cardTitleButton/SectionTitle";
import StoryCard from "../../../common/cardTitleButton/StoryCard";

const PartnersSection = () => {

  const { partners, loading } = usePartners(1, 10); 

  if (loading) {
    return <p className="text-center text-gray-500">Yükleniyor...</p>;
  }

  return (
    <div>
      <SectionTitle>Eşit İşyerleri</SectionTitle>
      <StoryCard data={partners} />
    </div>
  );
};

export default PartnersSection;
