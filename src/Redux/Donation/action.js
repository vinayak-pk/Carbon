import axios from "axios";
import {
  GET_DONATE_REQUEST,
  GET_DONATE_SUCCESS,
  GET_DONATE_FAILURE,
} from "./actionTypes";

// get DONATE

export const get_donate_request = () => {
  return {
    type: GET_DONATE_REQUEST,
  };
};

export const get_donate_success = (payload) => {
  return {
    type: GET_DONATE_SUCCESS,
    payload,
  };
};

export const get_donate_failure = () => {
  return {
    type: GET_DONATE_FAILURE,
  };
};

export const get_donate = (payload) => (dispatch) => {
  dispatch(get_donate_request());
  return axios
    .get(`https://carbon-c9c2b-default-rtdb.firebaseio.com/fund_data.json`)
    .then((res) => {
      dispatch(get_donate_success(res.data));
      console.log(res.data);
    })
    .catch((err) => {
      dispatch(get_donate_failure());
    });
};
