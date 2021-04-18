import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import { reducer as fundRaiserReducer } from './FundRaiserUI/reducer';
//import thunk from "redux-thunk";

const rootReducer = combineReducers({
    fundRaiser: fundRaiserReducer
//   app: reducer,
//   auth: reducer
});
const middlewareFunctionHandler = (store) => (next) => (action) => {
  if (typeof action === "function") {
    return action(store.dispatch, store.getState);
  }
  return next(action);
};

// const middlewareLogger = (store) => (next) => (action) => {
//   console.log(arguments);
//   console.log("dispatching action 1", action);
//   console.table(store.getState());
//   const val = next(action);
//   console.log("done updating 1 ", action);
//   console.table(store.getState());
//   return val;
// };

// const middlewareLogger2 = (store) => (next) => (action) => {
//   console.log("dispatching action 2", action);
//   console.table(store.getState());
//   const val = next(action);
//   console.log("done updating 2", action);
//   console.table(store.getState());
//   return val;
// };

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(middlewareFunctionHandler),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

console.log(store.getState());
