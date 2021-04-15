import { applyMiddleware, createStore,compose } from "redux"
import {formReducer} from "./crowdfunding_register/cf_reducer" 
import Thunk from "redux-thunk"

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(formReducer,createComposer(applyMiddleware(Thunk)));