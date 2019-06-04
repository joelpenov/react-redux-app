import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadCourses } from "../../redux/actions/courseActions";
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
  ...noDestructuedProps
}) {
  const [course, setCourse] = useState({ ...noDestructuedProps.course });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const necessaryLoad = [];

    if (authors.length === 0) necessaryLoad.push(loadAuthors());
    if (courses.length === 0) necessaryLoad.push(loadCourses());

    if (necessaryLoad.length === 0) return;

    Promise.all(necessaryLoad).catch(error => {
      throw error;
    });
  }, []);

  return <CourseFormComponent course={course} authors={authors} />;
}

ManageCourseComponent.propTypes = {
  authors: PropTypes.array.isRequired,
  courses: PropTypes.array.isRequired,
  loadAuthors: PropTypes.func.isRequired,
  loadCourses: PropTypes.func.isRequired,
  course: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    authors: state.authors,
    courses: state.courses,
    course: newCourse
  };
}

const mapDispatchToActions = {
  loadAuthors: loadAuthors,
  loadCourses: loadCourses
};

export default connect(
  mapStateToProps,
  mapDispatchToActions
)(ManageCourseComponent);
