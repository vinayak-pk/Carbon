import axios from "axios";
import {
  GET_COMMENT_REQUEST,
  GET_COMMENT_SUCCESS,
  GET_COMMENT_FAILURE,
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAILURE,
} from "./actionTypes";

// get comment

export const get_comment_request = () => {
  return {
    type: GET_COMMENT_REQUEST,
  };
};

export const get_comment_success = (payload) => {
  return {
    type: GET_COMMENT_SUCCESS,
    payload,
  };
};

export const get_comment_failure = () => {
  return {
    type: GET_COMMENT_FAILURE,
  };
};

export const get_comment = (payload) => (dispatch) => {
  dispatch(get_comment_request());
  return axios
    .get(`https://carbon-c9c2b-default-rtdb.firebaseio.com/comments/3.json`)
    .then((res) => {
      dispatch(get_comment_success(res.data));
      console.log(res.data);
    })
    .catch((err) => {
      dispatch(get_comment_failure());
    });
};

// add comment

export const add_comment_request = () => {
  return {
    type: ADD_COMMENT_REQUEST,
  };
};

export const add_comment_success = (payload) => {
  return {
    type: ADD_COMMENT_SUCCESS,
    payload,
  };
};

export const add_comment_failure = () => {
  return {
    type: ADD_COMMENT_FAILURE,
  };
};

export const add_comment = (payload, data) => (dispatch) => {
  dispatch(add_comment_request());
  return axios
    .put(`https://carbon-c9c2b-default-rtdb.firebaseio.com/comments/3.json`, [
      payload,
      ...data,
    ])
    .then((res) => {
      dispatch(add_comment_success(res.data));
      console.log(res.data);
    })
    .catch((err) => {
      dispatch(add_comment_failure());
    });
};
