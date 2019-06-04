import actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function courseReducer(state = initialState.courses, action) {
  debugger;
  switch (action.type) {
    case actionTypes.CREATE_COURSES_SUCCESS:
      return [...state, { ...action.course }];
    case actionTypes.UPDATE_COURSE_SUCCESS:
      return state.map(course => {
        return course.id === action.course.id ? action.course : course;
      });
    case actionTypes.LOAD_COURSES_SUCCESS:
      return action.courses;
    default:
      return state;
  }
}
