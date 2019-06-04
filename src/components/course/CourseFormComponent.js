import React from "react";
import PropTypes from "prop-types";
import InputComponent from "../htmlElements/InputComponent";
import SelectComponent from "../htmlElements/SelectComponent";

function CourseFormComponent({ course, authors, saving, errors, onChange }) {
  const nameInputProps = {
    name: "title",
    label: "Course Name",
    onChange: onChange,
    placeholder: "Course Name",
    error: errors.title || ""
  };

  const categoryProps = {
    name: "category",
    label: "Category",
    onChange: onChange,
    placeholder: "Category",
    error: errors.category || "",
    inputType: "text"
  };

  let mappedAuthors = authors.map(a => {
    return { value: a.id, text: a.name };
  });

  const selectProps = {
    options: mappedAuthors,
    onChange: onChange,
    label: "Author",
    name: "authorId",
    error: errors.author || ""
  };

  return (
    <div>
      <h1>{course.id ? "Edit " : "Add "} course</h1>
      <form>
        <InputComponent value={course.title} {...nameInputProps} />
        <SelectComponent value={course.authorId} {...selectProps} />
        <InputComponent value={course.category} {...categoryProps} />
        <button type="submit" disabled={saving} className="btn btn-primary">
          {saving ? "Saving..." : "Save"}
        </button>
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
