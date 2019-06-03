import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import * as authorActions from "../../redux/actions/authorActions";
import { bindActionCreators } from "redux";

import CourseListComponent from "./CourseListComponent";

class CoursesComponent extends React.Component {
  componentDidMount() {
    Promise.all([
      this.props.actions.loadAuthors(),
      this.props.actions.loadCourses()
    ]).catch(error => {
      console.log("Error loading data ", error);
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
