import React from "react";
import { mount } from "enzyme";
import { newCourse, authors, courses } from "../../../fakeApi/mockData";
import { ManageCourseComponent } from "./ManageCourseComponent";

function render(args) {
  const defaultProps = {
    authors: authors,
    courses: courses,
    loadAuthors: jest.fn(),
    loadCourses: jest.fn(),
    saveCourse: jest.fn(),
    loading: false,
    course: newCourse,
    location: {},
    match: {}
  };

  const componentProps = { ...defaultProps, ...args };
  return mount(<ManageCourseComponent {...componentProps} />);
}

it("Should set errors when attempting to save an empty form", () => {
  const wrapper = render();
  wrapper.find("form").simulate("submit");
  const error = wrapper
    .find(".invalid-feedback")
    .first()
    .text();
  expect(error).toBe("Title is required.");
});

it("Should NOT set errors when attempting to save a valid form", () => {
  const wrapper = render({
    course: { title: "Title", authorId: 55, category: "Category" }
  });
  wrapper.find("form").simulate("submit");
  const error = wrapper.find(".invalid-feedback");
  expect(error.isEmpty()).toBe(true);
});
