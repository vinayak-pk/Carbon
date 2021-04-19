import authTypes from "./auth.types";

export const setCurrentUser = (user) => {
  return {
    type: authTypes.SET_CURRENT_USER,
    payload: user,
  };
};
export const setUser = (user) => {
  return {
    type: authTypes.SET_USER,
    payload: user,
  };
};
export const clearCurrentUser = () => {
  return {
    type: authTypes.CLEAR_CURRENT_USER,
  
  };
};
