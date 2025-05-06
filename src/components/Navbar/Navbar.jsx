import React from "react";
import webpageLogo from "../../assets/webpagemainlogo.png";
import Container from "../Layout/Container";

const Navbar = () => {
  return (
    <div className="absolute w-full">
      <Container>
        <div className="flex justify-between items-center py-8">
          <div>
            <img src={webpageLogo} alt="#logo" />
          </div>
          <div>
            <ul className="flex gap-[50px] font-dm-sans font-medium text-lg text-white">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Service</a>
              </li>
              <li>
                <a href="#">Pages</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>{" "}
          <div className="flex gap-9 font-dm-sans font-medium text-lg items-center">
            <p className="text-white cursor-pointer">Login</p>
            <a className="py-[20px] px-12 bg-primary rounded-[6px] cursor-pointer">
              Register
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
