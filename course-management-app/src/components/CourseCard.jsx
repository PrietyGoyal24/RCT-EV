import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => (
  <div>
    <h3>{course.title}</h3>
    <p>{course.description}</p>
    <Link to={`/courses/${course.id}`}>View Details</Link>
  </div>
);

export default CourseCard;