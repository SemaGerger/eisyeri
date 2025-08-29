import React from "react";
import StoryCard from "../common/StoryCard";
import SectionTitle from "../common/SectionTitle";
import { usePartners } from "../../hooks/usePartners";

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
