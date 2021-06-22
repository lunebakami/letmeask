import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

export function useAuth() {
  const authContext = useContext(AuthContext);
  
  return authContext;
}