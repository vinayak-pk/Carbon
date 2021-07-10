import {
GET_FUND_RAISER_REQUEST,
GET_FUND_RAISER_SUCCESS,
GET_FUND_RAISER_FAILURE,
SET_OPEN_MODAL,
UPDATE_FUND_RAISER_REQUEST,
UPDATE_FUND_RAISER_SUCCESS,
UPDATE_FUND_RAISER_FAILURE
} from "./actionTypes"

import axios from "axios";


export const getFundRaiserRequest = () => {
    return {
        type:GET_FUND_RAISER_REQUEST
    }
}

export const getFundRaiserSucess = (payload) => {
    return {
        type:GET_FUND_RAISER_SUCCESS,
        payload:payload
    }
}

export const getFundRaiserFailure = (payload) => {
    return{
        type:GET_FUND_RAISER_FAILURE,
        payload:payload
    }
}

export const updateFundRaiserRequest = () => {
    return {
        type:UPDATE_FUND_RAISER_REQUEST,
    }
}

export const updateFundRaiserSuccess = (payload) => {
    return {
        type:UPDATE_FUND_RAISER_SUCCESS,
        payload:payload
    }
}

export const updateFundRaiserFailure = (payload) => {
    return {
        type:UPDATE_FUND_RAISER_FAILURE,
        payload:payload
    }
}

export const setOpenPaymentModal = (payload) => {
    return{
        type:SET_OPEN_MODAL,
        payload:payload
    }
}
export const getFundRaisers = (params) => (dispatch) => {
    const requestAction = getFundRaiserRequest();
    dispatch(requestAction);
  
    return axios
      .get("https://carbon-c9c2b-default-rtdb.firebaseio.com/fund_data.json")
      .then((res) => {
        const successAction = getFundRaiserSucess(res.data);
        dispatch(successAction);
      })
      .catch((err) => {
        const errorAction = getFundRaiserFailure(err);
        dispatch(errorAction);
      });
  };
  
  export const updateFundRaisers = (curr_donation, id, {paidAmount}) => (dispatch) => {
    const requestAction = updateFundRaiserRequest();
    dispatch(requestAction);
    return axios
      .patch(`https://carbon-c9c2b-default-rtdb.firebaseio.com/fund_data/${id}.json`, {
          curr_donation: Number(curr_donation) + Number(paidAmount)})
      .then((res) => {
        const successAction = updateFundRaiserSuccess(res.data);
        dispatch(successAction);
      })
      .catch((err) => {
        const errorAction = updateFundRaiserFailure(err);
        dispatch(errorAction);
      });
  };

  export const updateFunds = (id = 0, payload,data) => (dispatch) => {
    const requestAction = updateFundRaiserRequest();
    dispatch(requestAction);
    return axios
      .patch(`https://carbon-c9c2b-default-rtdb.firebaseio.com/fund_data/${id}.json`, {
         donations:[...data.donations,payload]})
      .then((res) => {
        const successAction = updateFundRaiserSuccess(res.data);
        dispatch(successAction);
      })
      .catch((err) => {
        const errorAction = updateFundRaiserFailure(err);
        dispatch(errorAction);
      });
  };
  
