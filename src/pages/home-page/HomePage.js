import React from "react";

import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";

import SelectCountry from "../../components/select-country/SelectCountry";

import homeImg from "../../assets/mobile-msg.svg";

import {
  HomeContainer,
  HomeContent,
  HomeImageWrapper,
} from "./home-page.styled";

const Homepage = () => {
  return (
    <HomeContainer>
      <HomeContent>
        <h1>We deliver mobile top-up to millions worldwide</h1>
        <p> Every second, someone, somewhere recharge with Ding.</p>
        <PhoneAndroidIcon className="phone-icon" />
      </HomeContent>
      <SelectCountry />
      <HomeImageWrapper>
        <img src={homeImg}  alt="Mobile Message" />
      </HomeImageWrapper>
    </HomeContainer>
  );
};

export default Homepage;
