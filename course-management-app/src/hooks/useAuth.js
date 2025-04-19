import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext'; // path again check

export const useAuth = () => {
  return useContext(AuthContext);
};