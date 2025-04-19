import { useCourses } from "../hooks/useCourses";
import CourseList from "../components/CourseList";

const Courses = () => {
  const { courses, loading } = useCourses();

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>All Courses</h2>
      <CourseList courses={courses} />
    </div>
  );
};

export default Courses;