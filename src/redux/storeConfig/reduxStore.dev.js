import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/index";
import reduxImmurableStateInvarian from "redux-immutable-state-invariant";
import thunk from "redux-thunk";

export default function configureStore(initialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //add support for REDUX devtool
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk, reduxImmurableStateInvarian()))
  );
}
