import React from "react";
import PropTypes from "prop-types";
import { Link, Redirect } from "react-router-dom";
import SpinnerComponent from "../ui/SpinnerComponent";

class CourseListComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      goToCreateNewCourse: false
    };
  }

  render() {
    const { loading, courses, handleDeleteCourse } = this.props;
    return (
      <div>
        <div className="row">
          <div className="col-lg-12">{!loading && <h1>Courses</h1>}</div>
          <div className="col-lg-12">
            {loading && (
              <div className="col-lg-12">
                <div className="">
                  <SpinnerComponent />
                </div>
              </div>
            )}
            {!loading && (
              <div>
                <div className="row">
                  <div className="col-lg-12">
                    {this.state.goToCreateNewCourse && (
                      <Redirect to="/course" />
                    )}
                  </div>
                </div>
                <div
                  className="row "
                  style={{ marginBotton: 20, marginTop: 20 }}
                >
                  <div className="col-lg-6">
                    <button
                      className="btn btn-primary "
                      onClick={() =>
                        this.setState({ goToCreateNewCourse: true })
                      }
                    >
                      New
                    </button>
                  </div>
                </div>
                <div className="row ">
                  <div className="col-lg-12">
                    <table className="table table-hover">
                      <thead>
                        <tr>
                          <th />
                          <th>Title</th>
                          <th>Author</th>
                          <th>Category</th>
                          <th />
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
                                <Link to={"/course/" + course.slug}>
                                  {course.title}
                                </Link>
                              </td>
                              <td>{course.authorName}</td>
                              <td>{course.category}</td>
                              <td>
                                <a
                                  type="button"
                                  onClick={() => {
                                    handleDeleteCourse(course.id);
                                  }}
                                  className="btn btn-danger"
                                >
                                  Delete
                                </a>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

CourseListComponent.propTypes = {
  courses: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  handleDeleteCourse: PropTypes.func.isRequired
};

export default CourseListComponent;
