import actionTypes from "./actionTypes";
import * as courseApi from "../../api/courseApi";
import {
  beginApiCallAction,
  failedApiCallAction
} from "./apiCallsInProgressAction";

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
    dispatch(beginApiCallAction());
    return courseApi
      .getCourses()
      .then(courses => {
        dispatch(loadCoursesSuccess(courses));
      })
      .catch(errr => {
        dispatch(failedApiCallAction());
        throw errr;
      });
  };
}

export function saveCourse(course) {
  return function(dispatch) {
    dispatch(beginApiCallAction());
    return courseApi
      .saveCourse(course)
      .then(savedCourse => {
        course.id
          ? dispatch(updateCourseSuccess(savedCourse))
          : dispatch(createCourseSuccess(savedCourse));
      })
      .catch(error => {
        dispatch(failedApiCallAction());
        throw error;
      });
  };
}
