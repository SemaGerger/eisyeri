/*import React from "react";
import SectionTitle from "../common/cardTitleButton/SectionTitle";
import { usePartners } from "../common/hooks/usePartners";
import TestPartnersList from "./TestPartnersList";

const TestPartnersSection = () => {
  const { partners, loading } = usePartners(1, 5);

  if (loading) return <p className="text-center">Yükleniyor...</p>;
  if (!partners.length) return <p className="text-center">Veri bulunamadı.</p>;

  return (
    <section className="py-12">
      <SectionTitle>Eşit İşyerleri</SectionTitle>
      <TestPartnersList partners={partners} />
    </section>
  );
};

export default TestPartnersSection;*/
