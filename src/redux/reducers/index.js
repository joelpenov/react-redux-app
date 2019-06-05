import { combineReducers } from "redux";
import courseReducer from "./courseReducer";
import authorReducer from "./authorReducer";
import apiCallsInProgress from "./apiCallsInProgressRedurcer";

const rootReducer = combineReducers({
  courses: courseReducer,
  authors: authorReducer,
  apiCallsInProgress: apiCallsInProgress
});

export default rootReducer;
