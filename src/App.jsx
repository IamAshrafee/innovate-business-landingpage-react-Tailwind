import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import OurPlatform from "./components/OurPlatform/OurPlatform";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <OurPlatform></OurPlatform>
    </div>
  );
};

export default App;
