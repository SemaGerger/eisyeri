import React from "react";
import SectionCard from "../common/SectionCard";
import SectionTitle from "../common/SectionTitle";
import { pressData } from "../../data/DefaultData";

const PressSection = () => {
  return (
    <div>
      <SectionTitle>Basında Biz</SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {pressData.map((item) => (
          <SectionCard
            key={item.id}
            name={item.title}
            video={item.video}
            extraInfo={item.extraInfo}
          />
        ))}
      </div>
    </div>
  );
};

export default PressSection;
