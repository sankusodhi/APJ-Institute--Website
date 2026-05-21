import React from 'react';
import { Navigate } from 'react-router-dom';

export default function StudentPrivateRoute({ children }) {
  const token = localStorage.getItem('apj_student_token');

  if (!token) {
    return <Navigate to="/student/login" replace />;
  }

  return children;
}
