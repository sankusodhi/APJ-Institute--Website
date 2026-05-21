import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, Lock, Mail, Sparkles, UserRound } from 'lucide-react';
import { GlassCard, PageShell } from '../../components/exam/ExamComponents';
import { useExamPortal } from '../../context/ExamPortalContext';
import { registerStudentAccount } from '../../utils/studentAuth';
import { courses } from '../../utils/courseData';

export default function ExamStudentSignupPage() {
  const navigate = useNavigate();
  const { notify } = useExamPortal();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    course: courses[0]?.name || 'BMLT',
  });

  function updateField(name, value) {
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setError('');

    try {
      registerStudentAccount(form);
      notify('Student account created successfully.', 'success');
      navigate('/examination-dashboard/student-login');
    } catch (err) {
      setError(err.message || 'Unable to create account');
    } finally {
      setLoading(false);
    }
  }

  return (
    <PageShell
      title="Student Signup"
      subtitle="Create a student account directly inside the examination dashboard portal."
      action={
        <Link
          to="/examination-dashboard/student-login"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:bg-white/10"
        >
          <Sparkles size={16} /> Already have account?
        </Link>
      }
    >
      <div className="grid gap-6 lg:grid-cols-[0.96fr_1.04fr]">
        <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }}>
          <GlassCard className="relative overflow-hidden p-6 sm:p-8">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 opacity-90" />
            <div className="relative z-10 text-white">
              <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em]">
                Student access
              </div>
              <h3 className="mt-5 text-3xl font-black leading-tight">Create your examination account</h3>
              <p className="mt-4 text-sm leading-6 text-white/90">
                Signup ke baad aap examination forms, notices, results, attendance updates aur certificates section access kar paoge.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  ['Fast onboarding', '2 minutes'],
                  ['Role ready', 'Student'],
                  ['Forms access', 'Enabled'],
                  ['Results tracking', 'Enabled'],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-3xl border border-white/20 bg-white/10 p-4 backdrop-blur">
                    <p className="text-xs uppercase tracking-[0.24em] text-white/70">{label}</p>
                    <p className="mt-2 text-lg font-semibold">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </GlassCard>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
          <GlassCard className="p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <UserRound className="text-cyan-400" />
              <div>
                <h4 className="text-2xl font-bold text-white">Student Registration</h4>
                <p className="text-sm text-slate-300">Use institute details to create your account.</p>
              </div>
            </div>

            {error && (
              <div className="mt-4 rounded-2xl border border-rose-400/30 bg-rose-500/15 px-4 py-3 text-sm text-rose-100">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-200">Full Name</label>
                <input
                  required
                  value={form.fullName}
                  onChange={(event) => updateField('fullName', event.target.value)}
                  className="w-full rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-white outline-none placeholder:text-slate-400 focus:border-sky-400"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-slate-200">Email</label>
                <div className="relative">
                  <Mail size={16} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(event) => updateField('email', event.target.value)}
                    className="w-full rounded-2xl border border-white/10 bg-white/6 py-3 pl-11 pr-4 text-white outline-none placeholder:text-slate-400 focus:border-sky-400"
                    placeholder="student@apj.institute"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-200">Phone</label>
                  <input
                    required
                    value={form.phone}
                    onChange={(event) => updateField('phone', event.target.value)}
                    className="w-full rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-white outline-none placeholder:text-slate-400 focus:border-sky-400"
                    placeholder="10 digit number"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-200">Course</label>
                  <select
                    value={form.course}
                    onChange={(event) => updateField('course', event.target.value)}
                    className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none focus:border-sky-400"
                  >
                    {courses.map((course) => (
                      <option key={course.id} value={course.name}>
                        {course.fullName}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-slate-200">Password</label>
                <div className="relative">
                  <Lock size={16} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    required
                    type="password"
                    value={form.password}
                    onChange={(event) => updateField('password', event.target.value)}
                    className="w-full rounded-2xl border border-white/10 bg-white/6 py-3 pl-11 pr-4 text-white outline-none placeholder:text-slate-400 focus:border-sky-400"
                    placeholder="Create password"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-3.5 text-sm font-semibold text-white shadow-soft transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? 'Creating account...' : 'Create Student Account'}
              </button>
            </form>

            <div className="mt-5 rounded-3xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 size={18} className="mt-0.5 text-emerald-300" />
                <p className="text-sm text-slate-300">
                  Account banne ke baad yahin portal ke <Link to="/examination-dashboard/student-login" className="font-semibold text-cyan-300">Student Login</Link> se sign in karein.
                </p>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </PageShell>
  );
}
