import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import api from '../../services/api';
import { useAuth } from '../../context/AuthContext';

export default function Login() {
  const [email, setEmail] = useState('admin@apjinstitute.com');
  const [password, setPassword] = useState('Admin@123');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await api.post('/auth/login', { email, password });
      // Response shape: { success, message, data: { admin, token } }
      const token = res?.data?.data?.token || res?.data?.token || res?.data?.accessToken || res?.data;
      if (!token) {
        throw new Error('Authentication token not returned by server');
      }
      login(token);
      navigate('/admin');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_35%),linear-gradient(180deg,#eff6ff_0%,#f8fafc_42%,#e0f2fe_100%)] px-4 py-8 text-slate-900">
      <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl overflow-hidden rounded-[2rem] border border-white/70 bg-white/85 shadow-[0_24px_80px_-30px_rgba(15,23,42,0.35)] backdrop-blur-xl lg:grid-cols-[1.05fr_0.95fr]">
        <motion.aside
          initial={{ opacity: 0, x: -18 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 p-8 text-white sm:p-10"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(14,165,233,0.32),_transparent_35%),radial-gradient(circle_at_bottom_left,_rgba(59,130,246,0.24),_transparent_30%)]" />
          <div className="relative z-10 flex h-full flex-col justify-between">
            <div>
              <p className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-sky-200">
                Admin Portal
              </p>
              <h1 className="mt-6 max-w-md text-4xl font-black leading-tight sm:text-5xl">
                Manage APJ Institute from one professional dashboard.
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-6 text-slate-300">
                Review inquiries, publish updates, manage events, gallery content, and faculty records with a clean admin workspace.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <p className="text-sm font-semibold text-white">Student-facing content</p>
                  <p className="mt-1 text-sm text-slate-300">Announcements, notices, events, and gallery posts.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <p className="text-sm font-semibold text-white">Institute operations</p>
                  <p className="mt-1 text-sm text-slate-300">Inquiries, staff data, and publishing controls.</p>
                </div>
              </div>
            </div>

            <div className="mt-10 rounded-3xl border border-sky-400/20 bg-sky-500/10 p-5">
              <p className="text-sm font-semibold text-sky-100">Default login for first use</p>
              <div className="mt-3 grid gap-3 text-sm text-slate-200 sm:grid-cols-2">
                <div>
                  <span className="block text-xs uppercase tracking-[0.25em] text-sky-200/70">Email</span>
                  <span className="font-semibold">admin@apjinstitute.com</span>
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-[0.25em] text-sky-200/70">Password</span>
                  <span className="font-semibold">Admin@123</span>
                </div>
              </div>
            </div>
          </div>
        </motion.aside>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center p-6 sm:p-10"
        >
          <div className="w-full">
            <div className="mb-8 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-600">Secure Access</p>
                <h2 className="mt-2 text-3xl font-black text-slate-900">Admin Login</h2>
                <p className="mt-2 text-sm text-slate-500">Sign in to access the APJ admin console.</p>
              </div>
              <Link to="/" className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
                Back to site
              </Link>
            </div>

            {error && <div className="mb-4 rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">{error}</div>}

            <form onSubmit={handleSubmit} className="space-y-4 rounded-3xl border border-slate-100 bg-slate-50/80 p-5 shadow-sm">
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">Email</label>
                <input
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  required
                  placeholder="admin@apjinstitute.com"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">Password</label>
                <div className="relative">
                  <input
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 pr-20 outline-none transition focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type={showPassword ? 'text' : 'password'}
                    required
                    placeholder="Enter password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full px-3 py-1.5 text-xs font-semibold text-sky-700 transition hover:bg-sky-50"
                  >
                    {showPassword ? 'Hide' : 'Show'}
                  </button>
                </div>
              </div>

              <button
                className="w-full rounded-2xl bg-gradient-to-r from-sky-600 to-blue-700 py-3.5 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
                type="submit"
                disabled={loading}
              >
                {loading ? 'Signing in…' : 'Sign in'}
              </button>
            </form>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
