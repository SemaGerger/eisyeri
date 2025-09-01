import React from "react";
import { usePartners } from "../../../common/hooks/usePartners";
import SectionTitle from "../../../common/cardTitleButton/section/SectionTitle";
import StoryCardContainer from "../../../common/cardTitleButton/section/StoryCards/StoryCardContainer";

const PartnersSection = () => {
  const { partners, loading } = usePartners(1, 10); 

  if (loading) {
    return <p className="text-center text-gray-500">Yükleniyor...</p>;
  }

  return (
    <section className="my-10">
      <SectionTitle>Eşit İşyerleri</SectionTitle>
      <StoryCardContainer data={partners} />
    </section>
  );
};

export default PartnersSection;
