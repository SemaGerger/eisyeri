import React from "react";
import Layout from "../../layouts/Layout";
import { usePartners } from "../../hooks/UsePartners";
import TestPartnersList from "./TestPartnersList";

const TestPage = () => {
  const { partners, loading } = usePartners(1, 20);

  return (
    <Layout>
      <div className="py-12 px-6 mt-8">
        <h1 className="text-2xl font-bold text-center mb-8">Eşit İşyerleri</h1>

        {loading && <p className="text-center">Yükleniyor...</p>}
        {!loading && !partners.length && (
          <p className="text-center">Veri bulunamadı.</p>
        )}

        {!loading && partners.length > 0 && (
          <TestPartnersList partners={partners} />
        )}
      </div>
    </Layout>
  );
};

export default TestPage;
