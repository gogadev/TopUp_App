import axios from "axios";

import {
  ENTER_NUMBER,
  FETCH_DATA,
  FETCH_DATA_FAILURE,
  FETCH_DATA_SUCCESS,
  SELECT_COUNTRY,
  SELECT_OPERATOR,
  SELECT_PRODUCT,
} from "./constants";

const url = "https://app.fakejson.com/q/xdOdc9ZF?token=M37SFqOXjnZXOBpUuOCRXA";

export const fetchData = () => async (dispatch) => {
  dispatch({ type: FETCH_DATA });

  try {
    const response = await axios.get(url);
    dispatch({ type: FETCH_DATA_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_DATA_FAILURE, error });
  }
};

export const selectCountry = (country) => ({
  type: SELECT_COUNTRY,
  payload: country,
});

export const enterNumber = (number) => ({
  type: ENTER_NUMBER,
  payload: number,
});

export const selectOperator = (operator) => ({
  type: SELECT_OPERATOR,
  payload: operator,
});

export const selectProduct = (product) => ({
  type: SELECT_PRODUCT,
  payload: product,
});
