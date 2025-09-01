import React from "react";
import Layout from "../../components/mainContent/header/Layout";
import PartnersList from "../../components/mainContent/main/partners/PartnersList"
import { usePartners } from "../../components/common/hooks/usePartners";
import SectionTitle from "../../components/common/cardTitleButton/section/SectionTitle";

const PartnersPage = () => {
  const {partners, loading } = usePartners(1, 20);

  return (
    <Layout>
      <div className="py-12 px-6 mt-8">
          <SectionTitle>Eşit İşyerleri</SectionTitle>

        {loading && <p className="text-center">Yükleniyor...</p>}
        {!loading && !partners.length && (
          <p className="text-center">Veri bulunamadı.</p>
        )}

        {!loading && partners.length > 0 && (
        
          <PartnersList partners={partners} />
        )}
      </div>
    </Layout>
  );
};

export default PartnersPage;
