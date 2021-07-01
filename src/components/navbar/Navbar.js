import React from "react";

import { Button } from "@material-ui/core";

import logo from "../../assets/image001.png";

import CustomButton from "../custom-button/CustomButton";

import Fade from "react-reveal/Fade";

import {
  NavContainer,
  NavLeft,
  Logo,
  NavMenu,
  NavRight,
  NavLink,
  Bars,
} from "./navbar.styled.js";

const Header = () => {
  return (
    <NavContainer>
      <NavLeft>
        <NavLink to="/">
          <Fade left>
            <Logo>
              <img src={logo} alt="Logo" />
            </Logo>
          </Fade>
        </NavLink>
        <Bars />
      </NavLeft>
      <NavMenu>
        <NavLink to="/" activeClassName="active">
          Top-up
        </NavLink>
        <NavLink to="/gift-cards" activeClassName="active">
          Gift Cards
        </NavLink>
        <NavLink to="/company" activeClassName="active">
          Company
        </NavLink>
        <NavLink to="/help" activeClassName="active">
          Help
        </NavLink>
      </NavMenu>
      <NavRight>
        <Fade right>
          <Button>Login</Button>
          <CustomButton>Sign up</CustomButton>
        </Fade>
      </NavRight>
    </NavContainer>
  );
};

export default Header;
