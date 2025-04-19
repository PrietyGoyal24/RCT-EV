import CourseCard from './CourseCard';

const CourseList = ({ courses }) => (
  <div>
    {courses.map(course => (
      <CourseCard key={course.id} course={course} />
    ))}
  </div>
);

export default CourseList;