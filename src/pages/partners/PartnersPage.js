import React from "react";
import TestPartnersSection from "../../components/test/TestPartnersSection";
import Layout from "../../components/mainContent/header/Layout";

const PartnersPage = () => {
  return (
    <Layout>
      <div className="py-6 px-6 mt-6 text-center">
        <TestPartnersSection />
      </div>
    </Layout>
  );
};

export default PartnersPage;
