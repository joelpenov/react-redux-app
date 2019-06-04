import React from "react";
import PropTypes from "prop-types";
import InputComponent from "../htmlElements/InputComponent";
import SelectComponent from "../htmlElements/SelectComponent";

function CourseFormComponent({ course, authors }) {
  const onChangeCourseName = e => {};

  const nameInputProps = {
    name: "courseName",
    label: "Course Name",
    onChange: onChangeCourseName,
    placeholder: "Course Name",
    value: "",
    error: ""
  };

  const categoryProps = {
    name: "courseCategory",
    label: "Category",
    onChange: onChangeCourseName,
    placeholder: "Category",
    value: "",
    error: "",
    inputType: "text"
  };

  let mappedAuthors = authors.map(a => {
    return { value: a.id, text: a.name };
  });

  const selectProps = {
    options: mappedAuthors,
    onChange: () => {},
    label: "Author",
    name: "Author",
    value: 0,
    error: ""
  };

  return (
    <div>
      <h1>{course.id ? "Edit " : "Add "} course</h1>
      <form>
        <InputComponent {...nameInputProps} />
        <SelectComponent {...selectProps} />
        <InputComponent {...categoryProps} />
      </form>
    </div>
  );
}

CourseFormComponent.propTypes = {
  authors: PropTypes.array,
  course: PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.number,
    slug: PropTypes.string,
    authorId: PropTypes.number
  })
};

export default CourseFormComponent;
