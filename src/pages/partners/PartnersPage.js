import React from "react";
import Layout from "../../layouts/Layout";
import { usePartners } from "../../hooks/UsePartners";
import SectionTitle from "../../components/section/SectionTitle";
import PageContainer from "../../components/pageCards/PageContainer";




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
