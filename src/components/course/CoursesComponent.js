import React from "react";
import PropTypes from "prop-types";
import * as courseActions from "../../redux/actions/courseActions";
import { connect } from "react-redux";

class CoursesComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      course: {
        title: ""
      }
    };
  }

  handleOnChange = event => {
    const newCourse = { ...this.state.course, title: event.target.value };
    this.setState({ course: newCourse });
  };

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.createCourse(this.state.course);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <div className="form-group">
            <label htmlFor="courseName">Course Name</label>
            <input
              type="text"
              className="form-control"
              id="courseName"
              aria-describedby="courseNameHelp"
              placeholder="Enter Course Name"
              onChange={this.handleOnChange}
              value={this.state.course.title}
            />
            <small id="courseNameHelp" className="form-text text-muted">
              {"This is the name that will be associated with this course."}
            </small>
          </div>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
        <div className="row">
          <ol>
            {this.props.courses.map(course => {
              return <li key={course.title}>{course.title}</li>;
            })}
          </ol>
        </div>
      </div>
    );
  }
}

CoursesComponent.propTypes = {
  createCourse: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired
};

function mapStateToProps(props) {
  return {
    courses: props.courses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createCourse: course => dispatch(courseActions.createCourse(course))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoursesComponent);
