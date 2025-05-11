import React from "react";
import Container from "../Layout/Container";
import illustration from "../../assets/illustration.png";
const Facts = () => {
  return (
    <div className="pb-[140px]">
      <Container>
        <div className="bg-[url(./assets/factSection.png)] bg-cover bg-no-repeat bg-center w-full flex  gap-[45px] flex-row rounded-[40px]">
          <div className="flex items-end">
            <img src={illustration} alt="" className="w-[646px] h-[424px]" />
          </div>
          <div className="flex flex-col justify-center py-[77px]">
            <h2 className=" font-chivo text-[44px] font-medium leading[52px] text-white">
              Trusted by 35,000+ happy customers.
            </h2>
            <div className="flex gap-10 mt-[64px] justify-start">
              <div>
                <h4 className="font-chivo text-[44px] font-[900] leading[54px] text-white">
                  720+
                </h4>
                <p className="w-[176px] opacity-[0.7] font-dm-sans text-[18px] font-medium leading-8 text-white">
                  Over 500 business powered with us
                </p>
              </div>
              <div>
                <h4 className="font-chivo text-[44px] font-[900] leading[54px] text-white">
                  720+
                </h4>
                <p className="w-[176px] opacity-[0.7] font-dm-sans text-[18px] font-medium leading-8 text-white">
                  Over 500 business powered with us
                </p>
              </div>
              <div>
                <h4 className="font-chivo text-[44px] font-[900] leading[54px] text-white">
                  720+
                </h4>
                <p className="w-[176px] opacity-[0.7] font-dm-sans text-[18px] font-medium leading-8 text-white">
                  Over 500 business powered with us
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Facts;
