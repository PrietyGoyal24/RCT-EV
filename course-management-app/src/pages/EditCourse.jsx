import { useParams, useNavigate } from 'react-router-dom';
import CourseForm from '../components/CourseForm';
import { useCourses } from '../hooks/useCourses';

const EditCourse = () => {
  const { id } = useParams();
  const { courses, updateCourse } = useCourses();
  const navigate = useNavigate();

  const course = courses.find(c => c.id === id);

  const handleSubmit = (data) => {
    updateCourse(id, data);
    navigate('/dashboard');
  };

  if (!course) return <p>Course not found</p>;

  return (
    <div>
      <h2>Edit Course</h2>
      <CourseForm onSubmit={handleSubmit} initialData={course} />
    </div>
  );
};

export default EditCourse;