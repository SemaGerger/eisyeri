import React from "react";
import TestPartnersSection from "./TestPartnersSection";
import Layout from "../layout/Layout";

const TestPage = () => {
  return (
    <Layout>
      <h1>Test Sayfası</h1>
      <div className="py-6 px-6 text-center">
        <TestPartnersSection />
      </div>
    </Layout>
  );
};

export default TestPage;
