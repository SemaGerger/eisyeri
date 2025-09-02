import React from "react";
import Layout from "../../components/mainContent/header/Layout";
import { usePartners } from "../../components/common/hooks/usePartners";
import SectionTitle from "../../components/common/cardTitleButton/section/SectionTitle";
import PageContainer from "../../components/common/cardTitleButton/pageCards/PageContainer";




const PartnersPage = () => {
  const { partners, loading } = usePartners(1, 20);

  return (
    <Layout>
      <div className="py-12 px-6 mt-8">
        <SectionTitle>Eşit İşyerleri</SectionTitle>
        <PageContainer partners={partners} loading={loading} />
    
      </div>
    </Layout>
  );
};

export default PartnersPage;
