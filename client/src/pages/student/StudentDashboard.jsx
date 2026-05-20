import React from 'react';
import { Link } from 'react-router-dom';
import { clearStudentSession, getStudentProfile } from '../../utils/studentAuth';

export default function StudentDashboard() {
  const user = getStudentProfile();

  const handleLogout = () => {
    clearStudentSession();
    window.location.href = '/student/login';
  };

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Student Dashboard</h1>
            <p className="mt-1 text-sm text-slate-500">Welcome to your APJ student portal.</p>
          </div>
          <button
            onClick={handleLogout}
            className="rounded-lg bg-red-500 px-3 py-2 text-sm font-medium text-white hover:bg-red-600"
          >
            Logout
          </button>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Card title="Profile" value={user?.fullName || user?.name || 'Student'} />
          <Card title="Selected Course" value={user?.course || 'Not available'} />
          <Card title="Email" value={user?.email || 'Not available'} />
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <Link
            to="/student/signup"
            className="rounded-xl border border-blue-100 bg-blue-50 p-4 text-sm text-slate-700 transition hover:border-blue-200 hover:bg-blue-100/60"
          >
            <p className="font-semibold text-blue-900">Create another account</p>
            <p className="mt-1">Register a new student profile from the signup page.</p>
          </Link>

          <Link
            to="/"
            className="rounded-xl border border-blue-100 bg-blue-50 p-4 text-sm text-slate-700 transition hover:border-blue-200 hover:bg-blue-100/60"
          >
            <p className="font-semibold text-blue-900">Back to home</p>
            <p className="mt-1">Check institute notices, courses, and contact details.</p>
          </Link>
        </div>
      </div>
    </main>
  );
}

function Card({ title, value }) {
  return (
    <article className="rounded-xl border border-slate-100 bg-slate-50 p-4">
      <p className="text-xs uppercase tracking-wide text-slate-500">{title}</p>
      <p className="mt-1 text-sm font-semibold text-slate-800">{value}</p>
    </article>
  );
}
