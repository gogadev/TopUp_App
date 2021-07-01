import React from "react";

import { Link } from "react-router-dom";

import TopupError from "../../components/topup-error/TopupError";

import ArrowRightIcon from "@material-ui/icons/ArrowRight";

import successImg from "../../assets/success.svg";

import CustomButton from "../../components/custom-button/CustomButton";

import { useSelector } from "react-redux";

import Zoom from "react-reveal/Zoom";

import {
  TopupSuccessContainer,
  TopupSuccessText,
} from "./topup-success.styled";

const TopupSuccess = () => {
  const state = useSelector((state) => state);

  if (!state.product) return <TopupError />;

  return (
    <TopupSuccessContainer>
      <TopupSuccessText>
        <h3>
          Top-up amount <ArrowRightIcon className="arrow-right" />{" "}
          <span>{state.product}</span>
        </h3>
        <p>Thank you, your top up was sent.</p>
      </TopupSuccessText>
      <Zoom bottom>
        <img src={successImg} alt="Happy Girl" />
      </Zoom>
      <Link to="/">
        <CustomButton>Go Home</CustomButton>
      </Link>
    </TopupSuccessContainer>
  );
};

export default TopupSuccess;
