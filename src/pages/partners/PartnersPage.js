import React from "react";

import Layout from "../../components/mainContent/header/Layout";
import PartnersList from "../../components/mainContent/main/partners/PartnersList";
import SectionTitle from "../../components/common/cardTitleButton/SectionTitle";


const PartnersPage = () => {
  return (
    <Layout>
     <section className="py-12">
      <SectionTitle>Eşit İşyerleri</SectionTitle>
      <PartnersList partners={partners} />
    </section>
    </Layout>
  );
};

export default PartnersPage;
