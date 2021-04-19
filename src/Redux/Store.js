import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import authReducer from "./Auth/auth.reducer";
import {reducer as fund_raiser} from "./FundRaiserUI/reducer"
import { layoutreducer } from './layoutreducer';
import {reducer as commentReducer} from "./commentBox/reducer"
const rootReducer = combineReducers({
  auth: authReducer,
  fundRaiser: fund_raiser,
  layout:layoutreducer,
  Comment: commentReducer
});

let composeEnhancer = compose;

if (process.env.NODE_ENV !== "production") {
  composeEnhancer =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : compose;
}

const enhancer = composeEnhancer(applyMiddleware(thunk));

const store = createStore(rootReducer, enhancer);

export default store;
