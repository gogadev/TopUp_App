import React from "react";

import { Link } from "react-router-dom";

import { Button } from "@material-ui/core";

import { NotFoundContainer, NotFoundText } from "./not-found.styled";

import notFoundImg from "../../assets/not-found.svg";

const NotFound = () => {
  return (
    <NotFoundContainer>
      <NotFoundText>
        <h1>Oops. Page Not Found.</h1>
      </NotFoundText>
      <img src={notFoundImg} alt="Not Found" />
      <Link to="/">
        <Button>Go Home</Button>
      </Link>
    </NotFoundContainer>
  );
};

export default NotFound;
