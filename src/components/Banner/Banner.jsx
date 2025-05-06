import React from "react";
import Container from "../Layout/Container";

const Banner = () => {
  return (
    <div className="bg-[url(./assets/laptopScreen.png)] bg-no-repeat h-full bg-cover bg-center">
      <div className="bg-[url(./assets/bgShape.png)] h-[1063px] pt-48 bg-no-repeat bg-cover bg-center ">
        <Container>
          <div className="flex flex-col items-center ">
            <h1 className="font-chivo font-bold text-[56px] leading-16 w-[796px] text-center mb-5 text-white">
              Get your work done with Management Tool
            </h1>
            <p className="font-dm-sans font-normal text-lg leading-8 text-center w-[467px] mb-8 text-white tracking-[-0.02em]">
              The world's first project management platform that connects
              everything
            </p>
            <div className="relative">
              <input
                className=" w-[480px] bg-white py-5 pl-6 font-chivo font-normal text-base leading-[26px] outline-0 rounded-[6px]"
                type="text"
                placeholder="Your business mail"
              />
              <button className="absolute py-[15px] px-[28.5px] bg-primary text-[#2C2643] font-dm-sans text-lg font-medium leading-[20px] rounded-[6px] top-2 right-2">
                Try for free
              </button>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Banner;
