import React from "react";

import { Link } from "react-router-dom";

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import CustomButton from "../custom-button/CustomButton";

import errorImg from "../../assets/error.svg";

import { TopupErrorContainer, TopupErrorContent } from "./topup-error.styled";

const TopupError = () => {
  return (
    <TopupErrorContainer>
      <TopupErrorContent>
        <h2>Something went wrong with the top up.</h2>
        <ArrowDropDownIcon />
        <p>Please try again.</p>
        <img src={errorImg} alt="Void" />
      </TopupErrorContent>
      <Link to="/">
          <CustomButton>Go home</CustomButton>
      </Link>
    </TopupErrorContainer>
  );
};

export default TopupError;
