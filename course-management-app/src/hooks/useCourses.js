import { useContext } from 'react';
import { CourseContext } from '../context/CourseContext';

export const useCourses = () => useContext(CourseContext);