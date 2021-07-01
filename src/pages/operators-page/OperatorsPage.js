import React, { useState } from "react";

import { Link } from "react-router-dom";

import { Button } from "@material-ui/core";

import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

import LanguageIcon from "@material-ui/icons/Language";

import { useDispatch, useSelector } from "react-redux";

import { selectOperator } from "../../actions/actions";

import operatorImg from "../../assets/selection.svg";

import { Buttons } from "../phone-page/phone-page.styled";

import {
  OperatorContainer,
  Summary,
  OperatorList,
  OperatorImage,
} from "./operators-page.styled";

const OperatorsPage = () => {
  const [operator, setOperator] = useState("");

  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const selectedOperator = state.operators
    .filter((operator) => operator.name.startsWith(state.country))
    .map((operator) => {
      return (
        <option key={operator.id} value={operator.name}>
          {operator?.name ?? "NA"}
        </option>
      );
    });

  return (
    <OperatorContainer>
      <Summary>
        <h2>Summary</h2>
        <LanguageIcon className="globe-icon" />
        <p>
          Country <ArrowForwardIosIcon className="arrow-icon" />{" "}
          <span>{state.country}</span>
        </p>
        <p>
          Phone Number <ArrowForwardIosIcon className="arrow-icon" />{" "}
          <span>{state.number}</span>
        </p>
      </Summary>
      <OperatorList>
        <form onSubmit={(e) => e.preventDefault()}>
          <h2>Choose the correct operator</h2>
          <select onChange={(e) => setOperator(e.target.value)} required>
            <option value="">Select Operator</option>
            {selectedOperator}
          </select>
          <OperatorImage>
            <img src={operatorImg} alt="Selection" />
          </OperatorImage>
          <Buttons>
            <Link to="/phone">
              <Button className="go-back">Go Back</Button>
            </Link>
            {operator && (
              <Link to="/products">
                <Button
                  type="submit"
                  onClick={() => dispatch(selectOperator(operator))}
                >
                  Confirm
                </Button>
              </Link>
            )}
          </Buttons>
        </form>
      </OperatorList>
    </OperatorContainer>
  );
};

export default OperatorsPage;
