import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import * as authorActions from "../../redux/actions/authorActions";
import { bindActionCreators } from "redux";
import { Redirect } from "react-router-dom";

import CourseListComponent from "./CourseListComponent";

class CoursesComponent extends React.Component {
  componentDidMount() {
    const necessaryLoad = [];

    if (this.props.authors.length === 0)
      necessaryLoad.push(this.props.actions.loadAuthors());
    if (this.props.courses.length === 0)
      necessaryLoad.push(this.props.actions.loadCourses());

    if (necessaryLoad.length === 0) return;

    Promise.all(necessaryLoad).catch(error => {
      throw error;
    });
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="list-group">
            <a
              href="#"
              className="list-group-item list-group-item-action active"
            >
              Courses
            </a>
            <CourseListComponent
              courses={this.props.courses}
              authors={this.props.authors}
            />
          </div>
          <ol />
        </div>
      </div>
    );
  }
}

CoursesComponent.propTypes = {
  courses: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    courses:
      state.authors.length === 0
        ? []
        : state.courses.map(course => {
            return {
              ...course,
              authorName: state.authors.find(a => a.id === course.authorId).name
            };
          }),
    authors: state.authors
  };
}

const componentActions = { ...courseActions, ...authorActions };

function mapDispachToProps(dispatch) {
  return {
    actions: bindActionCreators(componentActions, dispatch)
  };
}
export default connect(
  mapStateToProps,
  mapDispachToProps
)(CoursesComponent);
