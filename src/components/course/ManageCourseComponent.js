import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadCourses, saveCourse } from "../../redux/actions/courseActions";
import { loadAuthors } from "../../redux/actions/authorActions";
import PropTypes from "prop-types";
import CourseFormComponent from "./CourseFormComponent";

const newCourse = {
  id: null,
  title: "",
  authorId: null,
  category: ""
};

function ManageCourseComponent({
  authors,
  courses,
  loadAuthors,
  loadCourses,
  saveCourse,
  ...noDestructuedProps
}) {
  const [course, setCourse] = useState({ ...noDestructuedProps.course });
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const necessaryLoad = [];

    if (authors.length === 0) necessaryLoad.push(loadAuthors());
    if (courses.length === 0) {
      necessaryLoad.push(loadCourses());
    } else {
      setCourse({ ...noDestructuedProps.course });
    }

    if (necessaryLoad.length === 0) return;

    Promise.all(necessaryLoad).catch(error => {
      throw error;
    });
  }, [noDestructuedProps.course]);

  function handleOnSubmit(event) {
    setSaving(true);
    saveCourse(course)
      .then(() => {
        setSaving(false);
        noDestructuedProps.history.push("/courses");
      })
      .catch(error => {
        setSaving(false);
        throw error;
      });
    event.preventDefault();
  }

  function handleChange(event) {
    const { name, value } = event.target;

    const newCourse = {
      ...course,
      [name]: name === "authorId" ? parseInt(value, 10) : value
    };

    setCourse(newCourse);
  }
  return (
    <div>
      <CourseFormComponent
        saving={saving}
        course={course}
        authors={authors}
        onChange={handleChange}
        errors={errors}
        handleOnSubmit={handleOnSubmit}
      />
    </div>
  );
}

ManageCourseComponent.propTypes = {
  authors: PropTypes.array.isRequired,
  courses: PropTypes.array.isRequired,
  loadAuthors: PropTypes.func.isRequired,
  loadCourses: PropTypes.func.isRequired,
  course: PropTypes.object.isRequired,
  saveCourse: PropTypes.func.isRequired
};

function getCourseBySlug(courses, slug) {
  return courses.find(c => c.slug === slug) || null;
}

function mapStateToProps(state, ownProps) {
  const slug = ownProps.match.params.slug;
  const course =
    slug && state.courses.length > 0
      ? getCourseBySlug(state.courses, slug)
      : newCourse;

  return {
    authors: state.authors,
    courses: state.courses,
    course: course
  };
}

const mapDispatchToActions = {
  loadAuthors: loadAuthors,
  loadCourses: loadCourses,
  saveCourse: saveCourse
};

export default connect(
  mapStateToProps,
  mapDispatchToActions
)(ManageCourseComponent);
