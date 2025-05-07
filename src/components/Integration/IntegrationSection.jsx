import React from "react";
import Container from "../Layout/Container";
import appLogos from "../../assets/appLogos.png";

const IntegrationSection = () => {
  return (
    <div className="bg-[#F4FAFA] py-[124px]">
      <Container>
        <div className="flex flex-row justify-between">
          <div className="w-[587px]">
            <p className="font-dm-sans font-medium text-[20px] text-[#FF7364] mb-[4px]">
              Integrations
            </p>
            <h1 className="font-chivo font-bold text-[46px] leading-[58px] text-heading mb-[20px]">
              Easily integrate with your favorite apps
            </h1>
            <p className="font-dm-sans font-normal text-lg text-description leading-[32px] mb-[40px]">
              App integration, in a general sense, is the process of bringing
              resources or capabilities from one application to another. As the
              world of apps continues to evolve, app integration is becoming
              expected in many contexts.App integration, in a general sense, is
              the process of bringing resources or capabilities from one
              application to another. As the world of apps continues to evolve,
              app integration is becoming expected in many contexts.
            </p>
            <button className="font-dm-sans font-medium text-lg leading-[20px] py-5 px-12 bg-secondary rounded-[6px] text-white">
              Get Started
            </button>
          </div>
          <div className="w-[700px] h-auto">
            <img className="w-full h-auto" src={appLogos} alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default IntegrationSection;
