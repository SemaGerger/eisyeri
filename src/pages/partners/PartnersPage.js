import React from "react";
import Layout from "../../layouts/Layout";
import { usePartners } from "../../hooks/UsePartners";

import PageContainer from "../../components/pageCards/PageContainer";
import PageTitle from "../../components/pageCards/PageTitle";




const PartnersPage = () => {
  const { partners } = usePartners(1, 20);

  return (
    <Layout>
      <div className="py-12 px-6 mt-16">
         <PageTitle
          title="Eşit İşyerleri"
          subtitle="Eşitlik, çeşitlilik ve kapsayıcılık ilkelerini benimseyen işyerlerini keşfedin"
        />
        <PageContainer partners={partners} />
    
      </div>
    </Layout>
  );
};

export default PartnersPage;
