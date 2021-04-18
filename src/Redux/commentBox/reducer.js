import {
  GET_COMMENT_REQUEST,
  GET_COMMENT_SUCCESS,
  GET_COMMENT_FAILURE,
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAILURE,
} from "./actionTypes";

const initState = {
  isLoading: false,
  error: false,
  comment: [],
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    // get comment

    case GET_COMMENT_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: false,
      };

    case GET_COMMENT_SUCCESS:
      return {
        ...state,
        comment: payload,
        isLoading: false,
      };

    case GET_COMMENT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true,
      };

    // add comment

    case ADD_COMMENT_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: false,
      };

    case ADD_COMMENT_SUCCESS:
      return {
        ...state,
        // comment: [...state.comment, payload],
        isLoading: false,
      };

    case ADD_COMMENT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true,
      };

    default:
      return state;
  }
};
