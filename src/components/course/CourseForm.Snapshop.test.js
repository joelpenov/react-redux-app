import React from "react";
import CourseFormComponent from "./CourseFormComponent";
import { authors, courses } from "../../../fakeApi/mockData";
import renderer from "react-test-renderer";

it("Should set button text to 'Saving...' when saving is true", () => {
  const tree = renderer.create(
    <CourseFormComponent
      authors={authors}
      courses={courses}
      course={courses[1]}
      saving
      handleOnSubmit={jest.fn()}
      onChange={jest.fn()}
      errors={{}}
    />
  );

  expect(tree).toMatchSnapshot();
});

it("Should set button text to 'Save' when saving is false", () => {
  const tree = renderer.create(
    <CourseFormComponent
      authors={authors}
      courses={courses}
      course={courses[1]}
      saving={false}
      handleOnSubmit={jest.fn()}
      onChange={jest.fn()}
      errors={{}}
    />
  );

  expect(tree).toMatchSnapshot();
});
