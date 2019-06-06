import actionTypes from "./actionTypes";

export function beginApiCallAction() {
  return { type: actionTypes.API_CALL_BEGIN };
}

export function failedApiCallAction() {
  return { type: actionTypes.API_CALL_FAILED };
}
