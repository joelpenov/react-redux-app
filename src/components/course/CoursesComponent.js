import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import { bindActionCreators } from "redux";

class CoursesComponent extends React.Component {
  componentDidMount() {
    this.props.actions.loadCourses().catch(error => {
      console.log("Error loading courses ", error);
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

            {this.props.courses.map(course => {
              return (
                <a
                  key={course.id}
                  href="#"
                  className="list-group-item list-group-item-action"
                >
                  {course.title}
                </a>
              );
            })}
          </div>
          <ol />
        </div>
      </div>
    );
  }
}

CoursesComponent.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    courses: state.courses
  };
}

function mapDispachToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}
export default connect(
  mapStateToProps,
  mapDispachToProps
)(CoursesComponent);
