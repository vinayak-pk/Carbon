import {
  GET_DONATE_FAILURE,
  GET_DONATE_REQUEST,
  GET_DONATE_SUCCESS,
} from "./actionTypes";

const initState = {
  isLoading: false,
  error: false,
  donate:[],
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {

    case GET_DONATE_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: false,
      };

    case GET_DONATE_SUCCESS:
      return {
        ...state,
        donate: payload,
        isLoading: false,
      };

    case GET_DONATE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true,
      };

    default:
      return state;
  }
};
