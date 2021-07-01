import {
  ENTER_NUMBER,
  FETCH_DATA,
  FETCH_DATA_FAILURE,
  FETCH_DATA_SUCCESS,
  SELECT_COUNTRY,
  SELECT_OPERATOR,
  SELECT_PRODUCT,
} from "../actions/constants";

const initState = {
  countries: [],
  operators: [],
  products: [],
  country: "",
  number: null,
  operator: "",
  product: "",
  loading: false,
  error: null,
};

export const topupReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_DATA: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        countries: action.payload.countries,
        operators: action.payload.operators,
        products: action.payload.products,
        loading: false,
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case SELECT_COUNTRY:
      return {
        ...state,
        country: action.payload,
      };
    case ENTER_NUMBER:
      return {
        ...state,
        number: action.payload,
      };
    case SELECT_OPERATOR:
      return {
        ...state,
        operator: action.payload,
      };
    case SELECT_PRODUCT:
      return {
        ...state,
        product: action.payload,
      };

    default:
      return state;
  }
};
