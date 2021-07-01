import React, { useState } from "react";

import { Link } from "react-router-dom";

import { Button } from "@material-ui/core";

import PhoneIcon from "@material-ui/icons/Phone";

import { useDispatch, useSelector } from "react-redux";

import { enterNumber } from "../../actions/actions";

import Rotate from "react-reveal/Rotate";

import phoneImg from "../../assets/globe.png";

import {
  PhoneContainer,
  PhoneContent,
  PhoneForm,
  Buttons,
} from "./phone-page.styled";

const PhonePage = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const selectedCountry = state.country;
  const selectedPrefix = state.countries.find(
    (country) => country.name === selectedCountry
  );

  const prefix = selectedPrefix.prefix;

  const enteredPhoneNumber = `+${prefix} ${phoneNumber}`;

  return (
    <PhoneContainer>
      <PhoneContent>
        <h2>A little goes a long way</h2>
        <p>
          Send phone credit home or top-up your own phone with our secure mobile
          recharge service.
        </p>
        <Rotate top left>
          <img src={phoneImg} alt="Globe" />
        </Rotate>
        <h4>Recipient Country</h4>
        <span>{state.country}</span>
      </PhoneContent>
      <PhoneForm>
        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="phoneNumber">Enter recipient phone number</label>
            <PhoneIcon className="phone-icon" />
          <input
            id="phoneNumber"
            type="number"
            value={phoneNumber}
            placeholder="Phone Number"
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
          <Buttons>
            <Link to="/">
              <Button className="go-back">Go Back</Button>
            </Link>
            {phoneNumber && (
              <Link to="/operators">
                <Button
                  className="confirm"
                  type="submit"
                  onClick={() => dispatch(enterNumber(enteredPhoneNumber))}
                >
                  Continue
                </Button>
              </Link>
            )}
          </Buttons>
        </form>
      </PhoneForm>
    </PhoneContainer>
  );
};

export default PhonePage;
