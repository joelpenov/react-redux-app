import actionTypes from "./actionTypes";
import * as authorsApi from "../../api/authorApi";
import {
  beginApiCallAction,
  failedApiCallAction
} from "./apiCallsInProgressAction";

export function loadAuthorsSuccess(authors) {
  return { type: actionTypes.LOAD_AUTHORS_SUCCESS, authors: authors };
}

export function loadAuthors() {
  return function(dispatch) {
    dispatch(beginApiCallAction());
    return authorsApi
      .getAuthors()
      .then(authors => {
        return dispatch(loadAuthorsSuccess(authors));
      })
      .catch(error => {
        dispatch(failedApiCallAction());
        throw error;
      });
  };
}
