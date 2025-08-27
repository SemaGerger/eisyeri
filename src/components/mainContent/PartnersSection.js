import React from "react";
import StoryCard from "../common/StoryCard";
import SectionTitle from "../common/SectionTitle";
import { partnersData } from "../../data/DefaultData";


const PartnersSection = () => {
  return (
    <div className="">
      <SectionTitle>Eşit İşyerleri</SectionTitle>
      <StoryCard data={partnersData} />
    </div>
  );
};

export default PartnersSection;
