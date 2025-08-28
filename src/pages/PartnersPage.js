import React from "react";
import TestPartnersSection from "../components/test/TestPartnersSection";
import Layout from "../components/layout/Layout";

const PartnersPage = () => {
  return (
    <Layout>
      <br/><br/><br/>      
      <h1>Test Sayfası</h1>
      <div className="py-6 px-6 text-center">
        <TestPartnersSection />
      </div>
    </Layout>
  );
};

export default PartnersPage;
