import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import OurPlatform from "./components/OurPlatform/OurPlatform";
import OurFeatures from "./components/Features/OurFeatures";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <OurPlatform></OurPlatform>
      <OurFeatures></OurFeatures>{" "}
    </div>
  );
};

export default App;
