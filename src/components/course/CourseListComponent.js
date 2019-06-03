import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class CourseListComponent extends React.Component {
  render() {
    const courses = this.props.courses;
    return (
      <div>
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
    );
  }
}

CourseListComponent.propTypes = {
  courses: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired
};

export default CourseListComponent;
