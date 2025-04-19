import { useParams } from 'react-router-dom';
import { useCourses } from '../hooks/useCourses';

const CourseDetail = () => {
  const { id } = useParams();
  const { courses } = useCourses();

  const course = courses.find(c => c.id === id);

  if (!course) return <p>Course not found</p>;

  return (
    <div>
      <h2>{course.title}</h2>
      <p>Level: {course.level}</p>
      <p>Tag: {course.tag}</p>
      <p>Price: ₹{course.price}</p>
      <p>Created By: {course.createdBy}</p>
      <h4>Syllabus:</h4>
      <ul>
        {course.syllabus.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    </div>
  );
};

export default CourseDetail;