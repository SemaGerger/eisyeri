import React from "react";
import { useParams } from "react-router-dom";
import { usePartner } from "../../hooks/UsePartner";
import Layout from "../../layouts/Layout";
import PartnerDetailsCard from "../../components/pageCards/ParnerDetailsCard";

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
