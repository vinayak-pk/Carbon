import {QUERY_DATA,REQUEST_FAIL,REQUEST_SUCCESS,POST_REQUEST} from "./cf_actiontype"

let initVal = {
    query:{},
    isLoading:false,
    isError:false,
    success:false,
}

export const formReducer = (state=initVal,{type,payload})=>{
    switch(type){
        case QUERY_DATA:
            return {
                ...state,query:{...state.query,payload}
            }
        case POST_REQUEST:{
            return{
                ...state,isLoading:true,
            }
        }
        case REQUEST_SUCCESS:
            return{
            ...state,success:true,isLoading:false
        }
        case REQUEST_FAIL:
            return{
            ...state,isError:true,success:false,isLoading:false
        }
        default:{
            return state
        }
    }
}