import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import Loading from "../loading/Loading";

import { useDispatch, useSelector } from "react-redux";

import { fetchData, selectCountry } from "../../actions/actions";

import { Button } from "@material-ui/core";

import {
  SelectCountryContainer,
  SelectCountryForm,
  Buttons,
} from "./select-country.styled";

const SearchCountry = () => {
  const [country, setCountry] = useState("");

  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  if (state.loading) {
    return <Loading />;
  }

  /***
   Using ES2020 optional chaining operator and 
   nullish coalescing operator in order to build 
   a default value when none is found. 
   Optional chaining operator enables you to 
   read the value of deeply nested objects and 
   the optional chaining operator returns 
   right-hand side operand if the left-hand side operand
   is null or undefined. ***/
  const selectedOption = state.countries.map((country) => {
    return (
      <option key={country.name} value={country.name}>
        {country?.name ?? "NA"}
      </option>
    );
  });

  return (
    <SelectCountryContainer>
      <SelectCountryForm>
        <form onSubmit={(e) => e.preventDefault()}>
          <p>Who are you sending top-up to?</p>
          <select
            name="country"
            onChange={(e) => setCountry(e.target.value)}
            required
          >
            <option value="">Search Country</option>
            {selectedOption}
          </select>
          <Buttons>
            {country && (
              <Link to="/phone">
                <Button
                  type="submit"
                  onClick={() => dispatch(selectCountry(country))}
                >
                  Continue
                </Button>
              </Link>
            )}
          </Buttons>
        </form>
      </SelectCountryForm>
    </SelectCountryContainer>
  );
};

export default SearchCountry;
