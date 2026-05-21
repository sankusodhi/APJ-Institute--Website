import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, Lock, Mail, ShieldCheck, Sparkles, UserRound } from 'lucide-react';
import { GlassCard, PageShell } from '../../components/exam/ExamComponents';
import { useExamPortal } from '../../context/ExamPortalContext';

const config = {
  student: {
    title: 'Student Login',
    subtitle: 'Access exam notices, results, attendance and downloadable forms from the portal.',
    accent: 'from-sky-500 to-blue-600',
    helper: 'Use your university roll number or registered email to sign in.',
    next: '/examination-dashboard/results',
  },
  admin: {
    title: 'Admin Login',
    subtitle: 'Manage notices, forms, important dates, users and analytics from the admin console.',
    accent: 'from-violet-500 to-fuchsia-600',
    helper: 'JWT-ready admin access for backend integration.',
    next: '/examination-dashboard/admin-panel',
  },
  teacher: {
    title: 'Teacher Login',
    subtitle: 'Faculty can review schedules, submit marks and manage attendance workflows.',
    accent: 'from-orange-500 to-amber-500',
    helper: 'Teacher access is connected to role-based routes.',
    next: '/examination-dashboard/notices',
  },
};

export default function ExamLoginPage({ role }) {
  const selected = config[role] || config.student;
  const navigate = useNavigate();
  const { login, notify } = useExamPortal();
  const [form, setForm] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);

    window.setTimeout(() => {
      login({ role, name: role === 'admin' ? 'Admin Officer' : role === 'teacher' ? 'Faculty Member' : 'Student User', email: form.email });
      notify(`${selected.title} complete.`, 'success');
      navigate(selected.next);
      setLoading(false);
    }, 650);
  }

  return (
    <PageShell
      title={selected.title}
      subtitle={selected.subtitle}
      action={
        <Link to="/examination-dashboard" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:bg-white/10">
          <Sparkles size={16} /> Back to dashboard
        </Link>
      }
    >
      <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
        <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }}>
          <GlassCard className="relative overflow-hidden p-6 sm:p-8">
            <div className={`absolute inset-0 bg-gradient-to-br ${selected.accent} opacity-90`} />
            <div className="relative z-10 text-white">
              <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em]">
                {role} portal
              </div>
              <h3 className="mt-5 text-3xl font-black leading-tight">Professional access for the {role} portal</h3>
              <p className="mt-4 text-sm leading-6 text-white/90">{selected.helper}</p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  ['Secure session', 'JWT-ready'],
                  ['Role control', 'Enabled'],
                  ['Responsive UI', 'Mobile first'],
                  ['Theme toggle', 'Dark & light'],
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
              {role === 'admin' ? <ShieldCheck className="text-violet-400" /> : role === 'teacher' ? <UserRound className="text-orange-400" /> : <Mail className="text-sky-400" />}
              <div>
                <h4 className="text-2xl font-bold text-white">Sign in securely</h4>
                <p className="text-sm text-slate-300">Enter your credentials to continue.</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-200">Email / Roll Number</label>
                <div className="relative">
                  <Mail size={16} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    required
                    value={form.email}
                    onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
                    className="w-full rounded-2xl border border-white/10 bg-white/6 py-3 pl-11 pr-4 text-white outline-none placeholder:text-slate-400 focus:border-sky-400"
                    placeholder="name@apj.institute or roll number"
                  />
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
                    onChange={(event) => setForm((current) => ({ ...current, password: event.target.value }))}
                    className="w-full rounded-2xl border border-white/10 bg-white/6 py-3 pl-11 pr-4 text-white outline-none placeholder:text-slate-400 focus:border-sky-400"
                    placeholder="Enter password"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full rounded-2xl bg-gradient-to-r ${selected.accent} px-4 py-3.5 text-sm font-semibold text-white shadow-soft transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70`}
              >
                {loading ? 'Signing in...' : 'Login'}
              </button>
            </form>

            <div className="mt-5 rounded-3xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm font-semibold text-white">Demo hint</p>
              <p className="mt-1 text-sm text-slate-300">This frontend is JWT-ready. Connect the login form to your backend auth API when ready.</p>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </PageShell>
  );
}
