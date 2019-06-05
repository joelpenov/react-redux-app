import actionTypes from "./actionTypes";
import * as courseApi from "../../api/courseApi";
import beingApiCallAction from "./apiCallsInProgressAction";

export function createCourseSuccess(course) {
  return { type: actionTypes.CREATE_COURSE_SUCCESS, course: course };
}

export function updateCourseSuccess(course) {
  return { type: actionTypes.UPDATE_COURSE_SUCCESS, course: course };
}

export function loadCoursesSuccess(courses) {
  return { type: actionTypes.LOAD_COURSES_SUCCESS, courses: courses };
}

export function loadCourses() {
  return function(dispatch) {
    return courseApi
      .getCourses()
      .then(courses => {
        dispatch(beingApiCallAction());
        return dispatch(loadCoursesSuccess(courses));
      })
      .catch(errr => {
        throw errr;
      });
  };
}

export function saveCourse(course) {
  return function(dispatch, getState) {
    dispatch(beingApiCallAction());
    return courseApi.saveCourse(course).then(savedCourse => {
      return course.id
        ? dispatch(updateCourseSuccess(savedCourse))
        : dispatch(createCourseSuccess(savedCourse));
    });
  };
}
