import React from "react";
import { useParams } from "react-router-dom";
import { usePartner } from "../../components/common/hooks/usePartner";
import Layout from "../../components/mainContent/header/Layout";
import PartnerDetailsCard from "../../components/common/cardTitleButton/pageCards/PartnerDetailsCard";

const PartnerDetailsPage = () => {
  const { id } = useParams();
  const { partner, loading } = usePartner(id);

  if (loading) return <Layout><p>Yükleniyor...</p></Layout>;
  if (!partner) return <Layout><p>Partner bulunamadı.</p></Layout>;

  return (
    <Layout>
      <PartnerDetailsCard partner={partner} />
    </Layout>
  );
};

export default PartnerDetailsPage;
