import React from "react";
import CourseFormComponent from "./CourseFormComponent";
import { shallow } from "enzyme";
import { newCourse } from "../../../fakeApi/mockData";

function getComponentWithProps(props) {
  let emptyFunc = () => {};
  const defaultProps = {
    course: newCourse,
    authors: [],
    saving: false,
    value: 0,
    errors: {},
    onChange: emptyFunc,
    handleOnSubmit: emptyFunc
  };
  const componentProps = { ...defaultProps, ...props };
  return shallow(<CourseFormComponent {...componentProps} />);
}

it("Should render a form and title", () => {
  const wrapper = getComponentWithProps();
  expect(wrapper.find("form").length).toBe(1);
  expect(wrapper.find("h1").text()).toEqual("Add  course");
});

it("Should label save button with 'Saving...' when saving is true", () => {
  const wrapper = getComponentWithProps({ saving: true });
  expect(wrapper.find("button").text()).toEqual("Saving...");
});

it("Should label save button with 'Saving...' when saving is false", () => {
  const wrapper = getComponentWithProps({ saving: false });
  expect(wrapper.find("button").text()).toEqual("Save");
});
