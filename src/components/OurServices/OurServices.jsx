import React from "react";
import Container from "../Layout/Container";
import neuronIcon from "../../assets/neuronIcon.png";
import pcDataIcon from "../../assets/pcDataIcon.png";
import pcIcon from "../../assets/pcIcon.png";
import userIcon from "../../assets/userIcon.png";
import arrowIcon from "../../assets/arrowIcon.png";

const OurServices = () => {
  return (
    <div className="py-[140px]">
      <Container>
        <div className="flex flex-col items-center justify-center">
          <p className="font-dm-sans font-medium text-5 text-[#FF7364]">
            Our Services
          </p>
          <h1 className="font-chivo text-heading font-bold text-5xl leading-[58px] mt-[4px]">
            How It Works
          </h1>

          <div className="my-[80px] flex flex-row justify-between w-full flex-wrap">
            <div className="group flex flex-col p-[36px] border-[1px] border-[#DCE7FE] rounded-[6px] w-[330px] hover:bg-secondary hover:text-white transition">
              <img src={pcIcon} alt="" className="w-[92px] mb-[26px]" />
              <h3 className="font-chivo font-bold text-[22px] mb-2 leading-[34px] text-heading group-hover:text-white">
                Plan Product Roadmap
              </h3>
              <p className="mb-6 font-dm-sans font-normal text-[16px] leading-[24px] text-description group-hover:text-white">
                A product roadmap is a shared source of truth that outlines the
                vision, direction, priorities
              </p>
              <div className="flex flex-row items-center">
                <a
                  href="#"
                  className="font-dm-sans font-medium text-base leading-[26px] text-secondary mr-[4px] group-hover:text-white"
                >
                  Read More
                </a>
                <img src={arrowIcon} alt="" className="h-full w-auto" />
              </div>
            </div>

            <div className="group flex flex-col p-[36px] border-[1px] border-[#DCE7FE] rounded-[6px] w-[330px] hover:bg-secondary hover:text-white transition">
              <img src={pcDataIcon} alt="" className="w-[92px] mb-[26px]" />
              <h3 className="font-chivo font-bold text-[22px] mb-2 leading-[34px] text-heading group-hover:text-white">
                Plan Product Roadmap
              </h3>
              <p className="mb-6 font-dm-sans font-normal text-[16px] leading-[24px] text-description group-hover:text-white">
                A product roadmap is a shared source of truth that outlines the
                vision, direction, priorities
              </p>
              <div className="flex flex-row items-center">
                <a
                  href="#"
                  className="font-dm-sans font-medium text-base leading-[26px] text-secondary mr-[4px] group-hover:text-white"
                >
                  Read More
                </a>
                <img src={arrowIcon} alt="" className="h-full w-auto" />
              </div>
            </div>

            <div className="group flex flex-col p-[36px] border-[1px] border-[#DCE7FE] rounded-[6px] w-[330px] hover:bg-secondary hover:text-white transition">
              <img src={neuronIcon} alt="" className="w-[92px] mb-[26px]" />
              <h3 className="font-chivo font-bold text-[22px] mb-2 leading-[34px] text-heading group-hover:text-white">
                Plan Product Roadmap
              </h3>
              <p className="mb-6 font-dm-sans font-normal text-[16px] leading-[24px] text-description group-hover:text-white">
                A product roadmap is a shared source of truth that outlines the
                vision, direction, priorities
              </p>
              <div className="flex flex-row items-center">
                <a
                  href="#"
                  className="font-dm-sans font-medium text-base leading-[26px] text-secondary mr-[4px] group-hover:text-white"
                >
                  Read More
                </a>
                <img src={arrowIcon} alt="" className="h-full w-auto" />
              </div>
            </div>

            <div className="group flex flex-col p-[36px] border-[1px] border-[#DCE7FE] rounded-[6px] w-[330px] hover:bg-secondary hover:text-white transition">
              <img src={pcIcon} alt="" className="w-[92px] mb-[26px]" />
              <h3 className="font-chivo font-bold text-[22px] mb-2 leading-[34px] text-heading group-hover:text-white">
                Plan Product Roadmap
              </h3>
              <p className="mb-6 font-dm-sans font-normal text-[16px] leading-[24px] text-description group-hover:text-white">
                A product roadmap is a shared source of truth that outlines the
                vision, direction, priorities
              </p>
              <div className="flex flex-row items-center">
                <a
                  href="#"
                  className="font-dm-sans font-medium text-base leading-[26px] text-secondary mr-[4px] group-hover:text-white"
                >
                  Read More
                </a>
                <img src={arrowIcon} alt="" className="h-full w-auto" />
              </div>
            </div>
          </div>

          <button className="py-[16px] px-[48px] font-dm-sans font-medium text-base leading-[26px] text-secondary border-[1px] border-secondary hover:bg-secondary hover:text-white transition">
            View More
          </button>
        </div>
      </Container>
    </div>
  );
};

export default OurServices;
