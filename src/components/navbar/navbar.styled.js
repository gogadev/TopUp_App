import styled from "styled-components";

import { NavLink as Link } from "react-router-dom";

import FormatAlignCenterIcon from "@material-ui/icons/FormatAlignCenter";

const NavContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  justify-items: center;
  align-items: center;
  text-align: center;
  margin: 1rem auto;
  z-index: 10;
`;

const NavLeft = styled.div`
  display: flex;
`;

const Logo = styled.div`
  @media screen and (max-width: 768px) {
    img {
      width: 60%;
      transform: translateY(0.3rem);
    }
  }
`;

const NavMenu = styled.div`
  display: flex;
  letter-spacing: var(--spacing);
  font-size: 1.1rem;
  font-weight: var(--bold);
  margin-right: 0.8rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavRight = styled.div`
  display: flex;

  button {
    margin-right: 0.5rem;
    font-weight: var(--bold);
    letter-spacing: var(--spacing);
    border: 1px solid grey;
    border-radius: 999px;
  }

  &:hover {
    button {
      color: var(clr-primary-2);
      transition: all 0.5s ease;
    }
  }

  @media screen and (max-width: 768px) {
    margin-right: 3rem;
    button {
      font-size: 0.6rem;
    }
  }
`;

const NavLink = styled(Link)`
  color: var(--clr-black);
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  transition: 0.2s ease-in;
  cursor: pointer;

  &.active {
    color: var(--clr-primary-2);
  }
`;

const Bars = styled(FormatAlignCenterIcon)`
  display: none;
  opacity: 0 !important;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 1.1%;
    right: 0;
    color: var(--clr-primary-2);
    opacity: 1 !important;
    font-size: 1.5rem !important;
    transform: translate(-100%, 75%);
    cursor: pointer;
  }
`;

export { NavContainer, NavLeft, Logo, NavMenu, NavRight, NavLink, Bars };
