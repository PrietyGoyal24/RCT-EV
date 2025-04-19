import { useCourses } from '../hooks/useCourses';
import { useAuth } from '../hooks/useAuth';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { user } = useAuth();
  const courseContext = useCourses();

  // Check if course context is not loaded
  if (!courseContext) {
    return <div>Loading courses...</div>;
  }

  const { courses, deleteCourse } = courseContext;

  const userCourses = courses.filter(course => course.createdBy === user.email);

  return (
    <div>
      <h2>Your Courses</h2>
      <Link to="/dashboard/new">+ Add New</Link>
      {userCourses.map(course => (
        <div key={course.id}>
          <h4>{course.title}</h4>
          <Link to={`/dashboard/edit/${course.id}`}>Edit</Link>
          <button onClick={() => deleteCourse(course.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;