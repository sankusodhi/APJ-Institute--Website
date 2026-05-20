import React, { useMemo, useState } from 'react';
import { BarChart3, CalendarRange, PenLine, Trash2, Users } from 'lucide-react';
import { GlassCard, PageShell, SectionHeading } from '../../components/exam/ExamComponents';
import { initialForms, initialNotices, importantDates } from '../../data/examPortalData';
import { useExamPortal } from '../../context/ExamPortalContext';

const initialUsers = [
  { id: 1, name: 'Aditi Sahu', role: 'student', status: 'active' },
  { id: 2, name: 'Dr. Meena Verma', role: 'teacher', status: 'active' },
  { id: 3, name: 'Exam Admin', role: 'admin', status: 'active' },
];

export default function AdminPanel() {
  const { notify } = useExamPortal();
  const [tab, setTab] = useState('notices');
  const [notices, setNotices] = useState(initialNotices);
  const [forms, setForms] = useState(initialForms);
  const [dates, setDates] = useState(importantDates);
  const [users, setUsers] = useState(initialUsers);
  const [noticeDraft, setNoticeDraft] = useState({ title: '', category: '', pdf: '' });
  const [formDraft, setFormDraft] = useState({ name: '', description: '', type: 'Examination' });
  const [dateDraft, setDateDraft] = useState({ academicYear: '2025-26', event: '', startDate: '', endDate: '' });

  const analytics = useMemo(
    () => [
      { title: 'Notices', value: notices.length, icon: BarChart3 },
      { title: 'Forms', value: forms.length, icon: PenLine },
      { title: 'Important Dates', value: dates.length, icon: CalendarRange },
      { title: 'Users', value: users.length, icon: Users },
    ],
    [notices.length, forms.length, dates.length, users.length]
  );

  function addNotice(event) {
    event.preventDefault();
    const item = { id: Date.now(), title: noticeDraft.title, category: noticeDraft.category, pdf: noticeDraft.pdf || 'notice.pdf', date: new Date().toISOString().slice(0, 10), important: false };
    setNotices((current) => [item, ...current]);
    setNoticeDraft({ title: '', category: '', pdf: '' });
    notify('Notice added successfully.', 'success');
  }

  function removeNotice(id) {
    setNotices((current) => current.filter((notice) => notice.id !== id));
    notify('Notice deleted.', 'info');
  }

  function addForm(event) {
    event.preventDefault();
    const item = { id: Date.now(), name: formDraft.name, description: formDraft.description, type: formDraft.type, file: `${formDraft.name.toLowerCase().replace(/\s+/g, '-')}.pdf` };
    setForms((current) => [item, ...current]);
    setFormDraft({ name: '', description: '', type: 'Examination' });
    notify('Form saved.', 'success');
  }

  function addDate(event) {
    event.preventDefault();
    const item = { id: Date.now(), ...dateDraft };
    setDates((current) => [item, ...current]);
    setDateDraft({ academicYear: '2025-26', event: '', startDate: '', endDate: '' });
    notify('Important date added.', 'success');
  }

  return (
    <PageShell title="Admin Panel" subtitle="Add, edit, and manage portal content with analytics and user controls.">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {analytics.map((item) => (
          <GlassCard key={item.title} className="p-5">
            <item.icon className="text-sky-300" />
            <p className="mt-4 text-sm uppercase tracking-[0.24em] text-slate-400">{item.title}</p>
            <p className="mt-2 text-3xl font-black text-white">{item.value}</p>
          </GlassCard>
        ))}
      </div>

      <GlassCard className="mt-6 p-5 sm:p-6">
        <div className="flex flex-wrap gap-2">
          {['notices', 'forms', 'dates', 'users'].map((item) => (
            <button key={item} type="button" onClick={() => setTab(item)} className={`rounded-full px-4 py-2 text-sm font-semibold transition ${tab === item ? 'bg-sky-500 text-white' : 'bg-white/5 text-slate-200 hover:bg-white/10'}`}>
              {item.toUpperCase()}
            </button>
          ))}
        </div>

        {tab === 'notices' && (
          <div className="mt-6 grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
            <form onSubmit={addNotice} className="space-y-4 rounded-3xl border border-white/10 bg-slate-950/55 p-5">
              <SectionHeading eyebrow="Manage Notices" title="Add notice" description="Create or replace notices with PDF file names and categories." />
              <input value={noticeDraft.title} onChange={(e) => setNoticeDraft((current) => ({ ...current, title: e.target.value }))} placeholder="Notice title" className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none" />
              <input value={noticeDraft.category} onChange={(e) => setNoticeDraft((current) => ({ ...current, category: e.target.value }))} placeholder="Category" className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none" />
              <input value={noticeDraft.pdf} onChange={(e) => setNoticeDraft((current) => ({ ...current, pdf: e.target.value }))} placeholder="PDF filename" className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none" />
              <button type="submit" className="rounded-full bg-gradient-to-r from-sky-500 to-violet-600 px-5 py-3 text-sm font-semibold text-white">Save Notice</button>
            </form>
            <div className="space-y-3">
              {notices.map((notice) => (
                <div key={notice.id} className="rounded-3xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-semibold text-white">{notice.title}</p>
                      <p className="text-sm text-slate-300">{notice.category} · {notice.pdf}</p>
                    </div>
                    <button type="button" onClick={() => removeNotice(notice.id)} className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-rose-500/15 text-rose-100">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === 'forms' && (
          <div className="mt-6 grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
            <form onSubmit={addForm} className="space-y-4 rounded-3xl border border-white/10 bg-slate-950/55 p-5">
              <SectionHeading eyebrow="Manage Forms" title="Upload or map forms" description="Add admissions, scholarship, or examination forms with easy placeholder PDF names." />
              <input value={formDraft.name} onChange={(e) => setFormDraft((current) => ({ ...current, name: e.target.value }))} placeholder="Form name" className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none" />
              <input value={formDraft.description} onChange={(e) => setFormDraft((current) => ({ ...current, description: e.target.value }))} placeholder="Description" className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none" />
              <select value={formDraft.type} onChange={(e) => setFormDraft((current) => ({ ...current, type: e.target.value }))} className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none">
                <option>Examination</option>
                <option>Admission</option>
                <option>Scholarship</option>
              </select>
              <button type="submit" className="rounded-full bg-gradient-to-r from-sky-500 to-violet-600 px-5 py-3 text-sm font-semibold text-white">Save Form</button>
            </form>
            <div className="space-y-3">
              {forms.map((form) => (
                <div key={form.id} className="rounded-3xl border border-white/10 bg-white/5 p-4">
                  <p className="font-semibold text-white">{form.name}</p>
                  <p className="mt-1 text-sm text-slate-300">{form.description}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.24em] text-sky-300">{form.type}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === 'dates' && (
          <div className="mt-6 grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
            <form onSubmit={addDate} className="space-y-4 rounded-3xl border border-white/10 bg-slate-950/55 p-5">
              <SectionHeading eyebrow="Manage Dates" title="Add important date" description="Publish academic dates in a structured exam-calendar format." />
              <input value={dateDraft.academicYear} onChange={(e) => setDateDraft((current) => ({ ...current, academicYear: e.target.value }))} placeholder="Academic year" className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none" />
              <input value={dateDraft.event} onChange={(e) => setDateDraft((current) => ({ ...current, event: e.target.value }))} placeholder="Event name" className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none" />
              <input type="date" value={dateDraft.startDate} onChange={(e) => setDateDraft((current) => ({ ...current, startDate: e.target.value }))} className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none" />
              <input type="date" value={dateDraft.endDate} onChange={(e) => setDateDraft((current) => ({ ...current, endDate: e.target.value }))} className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none" />
              <button type="submit" className="rounded-full bg-gradient-to-r from-sky-500 to-violet-600 px-5 py-3 text-sm font-semibold text-white">Save Date</button>
            </form>
            <div className="overflow-x-auto rounded-3xl border border-white/10 bg-white/5 p-4">
              <table className="min-w-full text-left text-sm text-slate-200">
                <thead className="text-xs uppercase tracking-[0.24em] text-slate-400">
                  <tr>
                    <th className="py-3 pr-4">Year</th>
                    <th className="py-3 pr-4">Event</th>
                    <th className="py-3 pr-4">Start</th>
                    <th className="py-3 pr-4">End</th>
                  </tr>
                </thead>
                <tbody>
                  {dates.map((date) => (
                    <tr key={date.id} className="border-t border-white/10">
                      <td className="py-3 pr-4">{date.academicYear}</td>
                      <td className="py-3 pr-4">{date.event}</td>
                      <td className="py-3 pr-4">{date.startDate}</td>
                      <td className="py-3 pr-4">{date.endDate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {tab === 'users' && (
          <div className="mt-6 space-y-3">
            {users.map((user) => (
              <div key={user.id} className="flex flex-wrap items-center justify-between gap-3 rounded-3xl border border-white/10 bg-white/5 p-4">
                <div>
                  <p className="font-semibold text-white">{user.name}</p>
                  <p className="text-sm text-slate-300">{user.role}</p>
                </div>
                <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-100">{user.status}</span>
              </div>
            ))}
          </div>
        )}
      </GlassCard>
    </PageShell>
  );
}
