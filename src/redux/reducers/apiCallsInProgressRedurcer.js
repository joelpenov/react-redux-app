import actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

function isSuccessApiCallAction(actionType) {
  return actionType.substring(actionType.length - 8) === "_SUCCESS";
}

export default function apiCallsInProgressReducer(
  state = initialState.apiCallsInProgress,
  action
) {
  if (action.type === actionTypes.API_CALL_BEGIN) {
    return state + 1;
  } else if (isSuccessApiCallAction(action.type)) {
    return state - 1;
  }
  return state;
}
