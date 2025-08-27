import React from "react";
import TestPartnersCard from "../test/TestPartnersCard";
import SectionTitle from "../common/SectionTitle";
import { partnersData } from "../../data/Data";

const TestPartnersSection = () => {
  return (
    <section className="py-12">
      <SectionTitle>Eşit İşyerleri</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {partnersData.map((partner) => (
          <TestPartnersCard
            key={partner.id}
            title={partner.title}
            video={partner.video}
            onClick={() => console.log(partner.title + " tıklandı")}
          />
        ))}
      </div>
    </section>
  );
};

export default TestPartnersSection;
