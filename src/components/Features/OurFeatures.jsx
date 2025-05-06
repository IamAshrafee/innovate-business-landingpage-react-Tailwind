import React from "react";
import Container from "../Layout/Container";
import ourFeaturesImage from "../../assets/ourFeaturesImage.png";
import customizedIcon from "../../assets/customizedIcon.png";
import rocketIcon from "../../assets/rocketIcon.png";
import secureIcon from "../../assets/secureIcon.png";

const OurFeatures = () => {
  return (
    <div className="mb-[55px]">
      <Container>
        <div className="flex flex-row justify-between gap-[162px]">
          <div>
            <img className="h-full w-auto" src={ourFeaturesImage} alt="" />
          </div>
          <div className="flex flex-col">
            <h1 className="w-[553px] font-chivo font-bold text-[46px] leading-[58px] text-heading mb-[64px]">
              We provide features for your Business
            </h1>
            <div className="flex flex-col gap-[40px]">
              <div className="flex flex-row gap-[100px]">
                <div className="w-[220px]">
                  <img
                    className="w-[50px] h-auto mb-[14px]"
                    src={rocketIcon}
                    alt=""
                  />
                  <h3 className=" font-chivo text-[22px] font-bold leading-[34px] text-heading tracking-[-.03px] mb-[14px]">
                    Fast and Easy to use
                  </h3>
                  <p className="font-dm-sans font-normal text-lg text-description leading-[32px]">
                    Easily to convert API with just a few clicks
                  </p>
                </div>
                <div className="w-[220px]">
                  <img
                    className="w-[50px] h-auto mb-[14px]"
                    src={secureIcon}
                    alt=""
                  />
                  <h3 className=" font-chivo text-[22px] font-bold leading-[34px] text-heading tracking-[-.03px] mb-[14px]">
                    Fast and Easy to use
                  </h3>
                  <p className="font-dm-sans font-normal text-lg text-description leading-[32px]">
                    Easily to convert API with just a few clicks
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-end justify-between">
                <div className="w-[220px]">
                  <img
                    className="w-[50px] h-auto mb-[14px]"
                    src={customizedIcon}
                    alt=""
                  />
                  <h3 className=" font-chivo text-[22px] font-bold leading-[34px] text-heading tracking-[-.03px] mb-[14px]">
                    Fast and Easy to use
                  </h3>
                  <p className="font-dm-sans font-normal text-lg text-description leading-[32px]">
                    Easily to convert API with just a few clicks
                  </p>
                </div>
                <div>
                  <button className="font-dm-sans text-lg font-medium leading-5 py-[20px] px-[48px] bg-secondary rounded-[6px] text-white">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OurFeatures;
