import React from 'react';
import { Navigate } from 'react-router-dom';
import { useExamPortal } from '../context/ExamPortalContext';

export default function ExamProtectedRoute({ children, roles = [] }) {
  const { session } = useExamPortal();

  if (!session?.token) {
    return <Navigate to="/examination-dashboard/admin-login" replace />;
  }

  if (roles.length && !roles.includes(session.role)) {
    return <Navigate to="/examination-dashboard" replace />;
  }

  return children;
}
