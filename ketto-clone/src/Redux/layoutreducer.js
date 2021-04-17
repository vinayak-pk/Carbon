import { REQUEST_SUCCESS,REQUEST_FAIL,NETWORK_REQUEST} from "./layoutactiontype"

let initVal = {
    data:[],
    isLoading:false,
    isError:false
}
export const layoutreducer = (state=initVal,{type,payload})=>{
    switch(type){
        case NETWORK_REQUEST :{
            return {
                ...state,isLoading:true,
            }
        }
        case REQUEST_SUCCESS :{
            return {
                ...state,isLoading:false,data:payload
            }
        }
        case REQUEST_FAIL :{
            return{
                ...state,isLoading:false,isError:true
            }
        }
        default:{
            return state
        }
    }
}