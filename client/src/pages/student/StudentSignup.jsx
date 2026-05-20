import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { courses } from '../../utils/courseData';
import { registerStudentAccount } from '../../utils/studentAuth';

export default function StudentSignup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    course: courses[0]?.name || 'BMLT',
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [touched, setTouched] = useState({});
  const [fieldErrors, setFieldErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      setFieldErrors((prev) => ({ ...prev, [name]: validateField(name, value, { ...form, [name]: value }) }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setFieldErrors((prev) => ({ ...prev, [name]: validateField(name, value, form) }));
  };

  function validateField(name, value, currentForm) {
    if (name === 'fullName') {
      if (!value.trim()) return 'Full name is required.';
      if (value.trim().length < 3) return 'Full name must be at least 3 characters.';
    }

    if (name === 'email') {
      if (!value.trim()) return 'Email is required.';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Enter a valid email address.';
    }

    if (name === 'phone') {
      if (!value.trim()) return 'Phone number is required.';
      if (!/^\d{10}$/.test(value.replace(/\s+/g, ''))) return 'Phone number must be 10 digits.';
    }

    if (name === 'password') {
      if (!value.trim()) return 'Password is required.';
      if (value.length < 6) return 'Password must be at least 6 characters.';
    }

    if (name === 'course' && !currentForm?.course) {
      return 'Please select a course.';
    }

    return '';
  }

  function validateForm(currentForm) {
    const nextErrors = {
      fullName: validateField('fullName', currentForm.fullName, currentForm),
      email: validateField('email', currentForm.email, currentForm),
      phone: validateField('phone', currentForm.phone, currentForm),
      password: validateField('password', currentForm.password, currentForm),
      course: validateField('course', currentForm.course, currentForm),
    };

    setFieldErrors(nextErrors);
    setTouched({ fullName: true, email: true, phone: true, password: true, course: true });

    return Object.values(nextErrors).every((value) => !value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm(form)) {
      return;
    }

    setLoading(true);
    setError('');
    setMessage('');

    try {
      registerStudentAccount(form);
      setMessage('Signup successful. Please login.');
      setTimeout(() => navigate('/student/login'), 800);
    } catch (err) {
      setError(err.message || 'Signup failed');
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
          <h1 className="mt-5 text-3xl font-bold leading-tight">Join APJ Institute as a student</h1>
          <p className="mt-4 max-w-md text-sm text-blue-50">
            Register to access your dashboard, course details, notices, and future updates in one place.
          </p>

          <div className="mt-8 space-y-4">
            <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
              <p className="text-sm font-semibold">Available programs</p>
              <ul className="mt-3 space-y-2 text-sm text-blue-50">
                <li>• BMLT - Bachelor of Medical Lab Technology</li>
                <li>• DMLT - Diploma in Medical Lab Technology</li>
                <li>• X-Ray Technician</li>
                <li>• Lab Technician</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
              <p className="text-sm font-semibold">Student benefits</p>
              <ul className="mt-3 space-y-2 text-sm text-blue-50">
                <li>• Quick signup and login</li>
                <li>• Course-aware onboarding</li>
                <li>• Access to notices and updates</li>
              </ul>
            </div>
          </div>
        </motion.aside>

        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 sm:p-8"
        >
          <h2 className="text-2xl font-bold text-slate-900">Student Signup</h2>
          <p className="mt-1 text-sm text-slate-500">Create your APJ Institute student account.</p>

          {message && <p className="mt-4 rounded-lg bg-green-50 px-3 py-2 text-sm text-green-700">{message}</p>}
          {error && <p className="mt-4 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">{error}</p>}

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label htmlFor="fullName" className="mb-1 block text-sm font-medium text-slate-700">
                Full Name
              </label>
              <input
                id="fullName"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full rounded-xl border px-3 py-2 outline-none ring-blue-100 focus:ring ${fieldErrors.fullName ? 'border-red-300' : 'border-slate-200'}`}
                placeholder="Your full name"
              />
              {fieldErrors.fullName && touched.fullName && (
                <p className="mt-1 text-xs text-red-600">{fieldErrors.fullName}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-700">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full rounded-xl border px-3 py-2 outline-none ring-blue-100 focus:ring ${fieldErrors.email ? 'border-red-300' : 'border-slate-200'}`}
                placeholder="email@example.com"
              />
              {fieldErrors.email && touched.email && (
                <p className="mt-1 text-xs text-red-600">{fieldErrors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="mb-1 block text-sm font-medium text-slate-700">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full rounded-xl border px-3 py-2 outline-none ring-blue-100 focus:ring ${fieldErrors.phone ? 'border-red-300' : 'border-slate-200'}`}
                placeholder="10-digit mobile number"
              />
              {fieldErrors.phone && touched.phone && (
                <p className="mt-1 text-xs text-red-600">{fieldErrors.phone}</p>
              )}
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
                  value={form.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full rounded-xl border px-3 py-2 pr-20 outline-none ring-blue-100 focus:ring ${fieldErrors.password ? 'border-red-300' : 'border-slate-200'}`}
                  placeholder="Create a password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg px-2 py-1 text-xs font-semibold text-blue-700 hover:bg-blue-50"
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
              {fieldErrors.password && touched.password && (
                <p className="mt-1 text-xs text-red-600">{fieldErrors.password}</p>
              )}
            </div>

            <div>
              <label htmlFor="course" className="mb-1 block text-sm font-medium text-slate-700">
                Course Selection
              </label>
              <select
                id="course"
                name="course"
                value={form.course}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full rounded-xl border px-3 py-2 outline-none ring-blue-100 focus:ring ${fieldErrors.course ? 'border-red-300' : 'border-slate-200'}`}
              >
                {courses.map((course) => (
                  <option key={course.id} value={course.name}>
                    {course.fullName}
                  </option>
                ))}
              </select>
              {fieldErrors.course && touched.course && (
                <p className="mt-1 text-xs text-red-600">{fieldErrors.course}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-blue-600 px-4 py-2.5 font-semibold text-white hover:bg-blue-700 disabled:opacity-60"
            >
              {loading ? 'Creating account...' : 'Create Account'}
            </button>
          </form>

          <p className="mt-4 text-sm text-slate-600">
            Already registered?{' '}
            <Link to="/student/login" className="font-semibold text-blue-700">
              Login here
            </Link>
          </p>
        </motion.section>
      </div>
    </main>
  );
}
