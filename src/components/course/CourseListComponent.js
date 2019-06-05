import React from "react";
import PropTypes from "prop-types";
import { Link, Redirect } from "react-router-dom";

class CourseListComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      goToCreateNewCourse: false
    };
  }

  render() {
    const courses = this.props.courses;

    return (
      <div>
        {this.state.goToCreateNewCourse && <Redirect to="/course" />}
        <div className="row " style={{ marginBotton: 20, marginTop: 20 }}>
          <button
            className="btn btn-primary "
            onClick={() => this.setState({ goToCreateNewCourse: true })}
          >
            New
          </button>
        </div>
        <div className="row ">
          <table className="table table-hover">
            <thead>
              <tr>
                <th />
                <th>Title</th>
                <th>Author</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              {courses.map(course => {
                const watchOnPluralsightLink = `https://app.pluralsight.com/library/courses/${
                  course.slug
                }/table-of-contents`;
                return (
                  <tr key={course.id}>
                    <td>
                      <a
                        target="_black"
                        href={watchOnPluralsightLink}
                        className="btn btn-light"
                      >
                        View
                      </a>
                    </td>
                    <td>
                      <Link to={"/course/" + course.slug}>{course.title}</Link>
                    </td>
                    <td>{course.authorName}</td>
                    <td>{course.category}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

CourseListComponent.propTypes = {
  courses: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired
};

export default CourseListComponent;
