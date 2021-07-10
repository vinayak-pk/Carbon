import {QUERY_DATA,REQUEST_FAIL,REQUEST_SUCCESS,POST_REQUEST} from "./cf_actiontype"

export const queryData = (payload)=>{
    return{
        type:QUERY_DATA,
        payload
    }
}

export  const postRequest = ()=>{
    return {
        type:POST_REQUEST,

    }
}

export const requestSuccess = ()=>{
    return{
        type:REQUEST_SUCCESS
    }
}

export const requestFail = ()=>{
    return{
        type:REQUEST_FAIL
    }
}

export const addData = (params)=>(dispatch)=>{
    return{
        type:REQUEST_SUCCESS
    }
}