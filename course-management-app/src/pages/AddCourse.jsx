import CourseForm from '../components/CourseForm';
import { useCourses } from '../hooks/useCourses';
import { useNavigate } from 'react-router-dom';

const AddCourse = () => {
  const { addCourse } = useCourses();
  const navigate = useNavigate();

  const handleSubmit = (data) => {
    addCourse(data);
    navigate('/dashboard');
  };

  return (
    <div>
      <h2>Add Course</h2>
      <CourseForm onSubmit={handleSubmit} />
    </div>
  );
};

export default AddCourse;