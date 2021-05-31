import authTypes from "./auth.types";
import { getlData,savelData } from "./persistData";


let user = getlData('user')
const initialState = {
  isAuth:false,
  currentUser: "",
  uid:"",
  User:user||""
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload.user,
        uid:action.payload.uid
      };
      case authTypes.SET_USER:
        savelData('user',action.payload)
        return {
          ...state,isAuth:true
        };
    case authTypes.CLEAR_CURRENT_USER:
      return {
        ...state,
        currentUser: null,uid:"",isAuth:false
      };
    default:
      return state;
  }
};

export default authReducer;
