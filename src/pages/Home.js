import React from "react";

import Layout from "../components/mainContent/header/Layout";
import Hero from '../components/mainContent/hero/Hero';
import Main from "../components/mainContent/Main";


const Home = () => {
  return (
    <Layout>
   
        <Hero />
        <Main />  
    
    </Layout>
  );
};

export default Home;
