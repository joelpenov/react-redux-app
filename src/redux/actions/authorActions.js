import actionTypes from "./actionTypes";
import * as authorsApi from "../../api/authorApi";

export function loadAuthorsSuccess(authors) {
  return { type: actionTypes.LOAD_AUTHORS_SUCCESS, authors: authors };
}

export function loadAuthors() {
  return function(dispatch) {
    return authorsApi
      .getAuthors()
      .then(authors => {
        return dispatch(loadAuthorsSuccess(authors));
      })
      .catch(error => {
        throw error;
      });
  };
}
