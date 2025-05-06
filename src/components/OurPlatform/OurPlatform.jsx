import React from "react";
import Container from "../Layout/Container";
import loginIcon from "../../assets/loginicon.png";
import connectWebIcon from "../../assets/connectIcon.png";
import SalesDataicon from "../../assets/salesDataIcon.png";

const OurPlatform = () => {
  return (
    <div className="py-[160px]">
      <Container>
        <div className="flex flex-col gap-[116px]">
          <div className="flex flex-row justify-between items-start ">
            <h1 className="w-[504px] font-chivo text-[46px] font-bold leading-[58px] tracking-[-1px] text-heading">
              How simple is it to use our platform?
            </h1>
            <p className="w-[530px] font-dm-sans text-lg font-normal leading-[30px] tracking-[-0.01em] text-description">
              This Innovate Con guide explores the most popular platforms and
              walks you through how to use them to grow your business.
            </p>
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-col w-[300px] items-center">
              <img className="w-[110px] h-auto mb-[26px]" 
               src={loginIcon} alt="" />
              <h2 className="w-full font-chivo font-bold text-2xl leading-9 text-heading text-center mb-[12px]">
                Login or sign up to be able use our platform
              </h2>
              <p className="w-full font-dm-sans text-lg font-normal leading-[32px] tracking-[-0.01em] text-description text-center">
                This quickstart shows you how to use Identity Platform to sign
                in a user with an email and password.
              </p>
            </div>
            <div className="flex flex-col w-[300px] items-center">
              <img className="w-[110px] h-auto mb-[26px]" 
               src={connectWebIcon} alt="" />
              <h2 className="w-full font-chivo font-bold text-2xl leading-9 text-heading text-center mb-[12px]">
                Login or sign up to be able use our platform
              </h2>
              <p className="w-full font-dm-sans text-lg font-normal leading-[32px] tracking-[-0.01em] text-description text-center">
                This quickstart shows you how to use Identity Platform to sign
                in a user with an email and password.
              </p>
            </div>
            <div className="flex flex-col w-[300px] items-center">
              <img className="w-[110px] h-auto mb-[26px]" 
               src={SalesDataicon} alt="" />
              <h2 className="w-full font-chivo font-bold text-2xl leading-9 text-heading text-center mb-[12px]">
                Login or sign up to be able use our platform
              </h2>
              <p className="w-full font-dm-sans text-lg font-normal leading-[32px] tracking-[-0.01em] text-description text-center">
                This quickstart shows you how to use Identity Platform to sign
                in a user with an email and password.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OurPlatform;
