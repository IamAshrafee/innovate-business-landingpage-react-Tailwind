import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import OurPlatform from "./components/OurPlatform/OurPlatform";
import OurFeatures from "./components/Features/OurFeatures";
import IntegrationSection from "./components/Integration/IntegrationSection";
import OurServices from "./components/OurServices/OurServices";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <OurPlatform></OurPlatform>
      <OurFeatures></OurFeatures>
      <IntegrationSection></IntegrationSection>
      <OurServices></OurServices>
    </div>
  );
};

export default App;
