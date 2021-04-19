import authTypes from "./auth.types";
import { getlData,savelData } from "./persistData";


let user = getlData('user')
console.log(user)
const initialState = {
  isAuth:false,
  currentUser: "",
  User:user||""
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
      case authTypes.SET_USER:
        savelData('user',action.payload)
        return {
          ...state,isAuth:true
        };
    case authTypes.CLEAR_CURRENT_USER:
      return {
        ...state,
        currentUser: null,isAuth:false
      };
    default:
      return state;
  }
};

export default authReducer;
