import { createStore } from "redux";
import rootReducer from "./reducers";
import initialState from "./reducers/initialState";
import * as courseActions from "./actions/courseActions";

const course = {
  title: "Clean Code"
};

initialState.courses = [course];

it("Should handle creating courses", function() {
  // arrange
  const store = createStore(rootReducer, initialState);

  // act
  const action = courseActions.createCourseSuccess(course);

  store.dispatch(action);

  // assert
  const createdCourse = store.getState().courses[0];

  expect(createdCourse).toEqual(course);
});
