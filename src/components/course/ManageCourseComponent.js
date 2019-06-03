import React from "react";
import { connect } from "react-redux";
import { loadCourses } from "../../redux/actions/courseActions";
import { loadAuthors } from "../../redux/actions/authorActions";
import PropTypes from "prop-types";

class ManageCourseComponent extends React.Component {
  componentDidMount() {
    const necessaryLoad = [];
    const { loadAuthors, loadCourses } = this.props;

    if (this.props.authors.length === 0) necessaryLoad.push(loadAuthors());
    if (this.props.courses.length === 0) necessaryLoad.push(loadCourses());

    if (necessaryLoad.length === 0) return;

    Promise.all(necessaryLoad).catch(error => {
      throw error;
    });
  }

  render() {
    return <h1>ManageCourseComponent</h1>;
  }
}

ManageCourseComponent.propTypes = {
  authors: PropTypes.array.isRequired,
  courses: PropTypes.array.isRequired,
  loadAuthors: PropTypes.func.isRequired,
  loadCourses: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    authors: state.authors,
    courses: state.courses
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
