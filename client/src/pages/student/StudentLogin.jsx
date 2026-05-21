import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { createStudentSession, findStudentAccount } from '../../utils/studentAuth';

export default function StudentLogin() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const account = findStudentAccount(form.email);

      if (!account || account.password !== form.password) {
        throw new Error('Invalid email or password');
      }

      createStudentSession(account);
      setSuccess('Login successful. Redirecting...');
      navigate('/student/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-[calc(100vh-80px)] bg-gradient-to-b from-blue-50 via-white to-cyan-50 px-4 py-10">
      <div className="mx-auto grid w-full max-w-5xl overflow-hidden rounded-3xl border border-blue-100 bg-white/90 shadow-xl lg:grid-cols-[1.05fr_1fr]">
        <motion.aside
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500 p-8 text-white"
        >
          <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest">
            Student Portal
          </p>
          <h1 className="mt-5 text-3xl font-bold leading-tight">Welcome back to APJ Institute</h1>
          <p className="mt-4 max-w-md text-sm text-blue-50">
            Sign in to view your dashboard, course information, notices, and student updates in one place.
          </p>

          <div className="mt-8 space-y-4">
            <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
              <p className="text-sm font-semibold">What you can access</p>
              <ul className="mt-3 space-y-2 text-sm text-blue-50">
                <li>• Student dashboard</li>
                <li>• Course and admission updates</li>
                <li>• Notifications and announcements</li>
                <li>• Inquiry support</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
              <p className="text-sm font-semibold">Need a new account?</p>
              <p className="mt-2 text-sm text-blue-50">
                Create your student profile first, then use this page to access the portal.
              </p>
              <Link
                to="/student/signup"
                className="mt-4 inline-flex items-center justify-center rounded-xl bg-white px-4 py-2 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
              >
                Sign up as student
              </Link>
            </div>
          </div>
        </motion.aside>

        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 sm:p-8"
        >
          <h2 className="text-2xl font-bold text-slate-900">Student Login</h2>
          <p className="mt-1 text-sm text-slate-500">Access your APJ student portal dashboard.</p>

          {success && <p className="mt-4 rounded-lg bg-green-50 px-3 py-2 text-sm text-green-700">{success}</p>}
          {error && <p className="mt-4 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">{error}</p>}

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-700">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 px-3 py-2 outline-none ring-blue-100 focus:ring"
                placeholder="student@email.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="mb-1 block text-sm font-medium text-slate-700">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={form.password}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-200 px-3 py-2 pr-20 outline-none ring-blue-100 focus:ring"
                  placeholder="Enter password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg px-2 py-1 text-xs font-semibold text-blue-700 hover:bg-blue-50"
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-blue-600 px-4 py-2.5 font-semibold text-white hover:bg-blue-700 disabled:opacity-60"
            >
              {loading ? 'Signing in...' : 'Login'}
            </button>
          </form>

          <p className="mt-4 text-sm text-slate-600">
            New student?{' '}
            <Link to="/student/signup" className="font-semibold text-blue-700">
              Create account
            </Link>
          </p>
        </motion.section>
      </div>
    </main>
  );
}
