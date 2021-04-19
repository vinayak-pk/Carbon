import {
UPDATE_FUND_RAISER,
GET_FUND_RAISER_REQUEST,
GET_FUND_RAISER_SUCCESS,
GET_FUND_RAISER_FAILURE,
GET_FUND_RAISER,
SET_OPEN_MODAL,
UPDATE_FUND_RAISER_REQUEST,
UPDATE_FUND_RAISER_SUCCESS,
UPDATE_FUND_RAISER_FAILURE
} from "./actionTypes";

const initState = {
    fundRaiser:[],
    isLoading:false,
    isError:false,
    openPaymentModal:false
}

export const reducer = (state = initState, {type, payload}) => {
    switch(type) {
        case GET_FUND_RAISER_REQUEST : 
            return{
                ...state,
                isLoading:true
            }
        case GET_FUND_RAISER_SUCCESS : 
        return {
            ...state,
            isLoading:false,
            fundRaiser:payload
        }
        case GET_FUND_RAISER_FAILURE : 
        return {
            ...state,
            isLoading:false,
            isError:true
        }
        case SET_OPEN_MODAL: 
        return {
            ...state,
            openPaymentModal:!state.openPaymentModal
        }
        case UPDATE_FUND_RAISER:
            return {
                ...state
            }
        case UPDATE_FUND_RAISER_FAILURE:
            return {
                ...state,
                openPaymentModal:false
            }
        case UPDATE_FUND_RAISER_SUCCESS:
            return {
                ...state,
                openPaymentModal:false
            }
        case UPDATE_FUND_RAISER_REQUEST:
            return {
                ...state
            }
        default:
            return state; 
    }
}