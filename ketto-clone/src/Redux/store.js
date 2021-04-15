import { applyMiddleware, createStore } from "redux"
import {formReducer} from "./crowdfunding_register/cf_reducer" 
import thunk from "react-thunk"

export const store = createStore(formReducer);