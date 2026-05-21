import React from 'react';
import { Outlet } from 'react-router-dom';
import MainNavbar from '../components/navigation/MainNavbar';

export default function PublicLayout() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <MainNavbar />
      <Outlet />
    </div>
  );
}
