import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const CourseContext = createContext();
const URL = 'https://your-project-id.firebaseio.com/courses.json';

export const CourseProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);

  const fetchCourses = async () => {
    try {
      const res = await axios.get(URL);
      const data = res.data;
      const courseList = Object.keys(data || {}).map(id => ({
        id,
        ...data[id]
      }));
      setCourses(courseList);
    } catch (err) {
      console.error('Error fetching courses:', err);
    }
  };

  const addCourse = async (newCourse) => {
    try {
      await axios.post(URL, newCourse);
      fetchCourses();
    } catch (err) {
      console.error('Error adding course:', err);
    }
  };

  return (
    <CourseContext.Provider value={{ courses, fetchCourses, addCourse }}>
      {children}
    </CourseContext.Provider>
  );
};