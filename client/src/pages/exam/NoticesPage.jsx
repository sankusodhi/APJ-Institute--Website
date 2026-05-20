import React, { useMemo, useState } from 'react';
import { CalendarDays, FileDown, Filter } from 'lucide-react';
import { GlassCard, PageShell, SectionHeading } from '../../components/exam/ExamComponents';
import { initialNotices } from '../../data/examPortalData';

export default function NoticesPage() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');

  const categories = ['All', ...new Set(initialNotices.map((notice) => notice.category))];

  const notices = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return initialNotices.filter((notice) => {
      const matchesQuery = !needle || [notice.title, notice.category, notice.pdf].join(' ').toLowerCase().includes(needle);
      const matchesCategory = category === 'All' || notice.category === category;
      return matchesQuery && matchesCategory;
    });
  }, [query, category]);

  return (
    <PageShell title="Notices" subtitle="Scrollable notices with filters and PDF icons for a clean university-style notice board.">
      <GlassCard className="p-5 sm:p-6">
        <SectionHeading eyebrow="Notice Board" title="Search and filter notices" description="These notices can be managed dynamically from the admin panel and styled for student-friendly reading." />

        <div className="mt-5 grid gap-3 lg:grid-cols-[1fr_220px]">
          <div className="relative">
            <CalendarDays size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search notices by title or PDF name"
              className="w-full rounded-full border border-white/10 bg-white/5 py-3 pl-11 pr-4 text-sm text-white outline-none placeholder:text-slate-400 focus:border-sky-400"
            />
          </div>
          <div className="relative">
            <Filter size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <select
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              className="w-full rounded-full border border-white/10 bg-white/5 py-3 pl-11 pr-4 text-sm text-white outline-none focus:border-sky-400"
            >
              {categories.map((item) => <option key={item}>{item}</option>)}
            </select>
          </div>
        </div>

        <div className="notice-scrollbar mt-5 max-h-[520px] space-y-3 overflow-y-auto pr-2">
          {notices.map((notice) => (
            <article key={notice.id} className="flex items-start gap-4 rounded-3xl border border-white/10 bg-slate-950/55 p-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-sky-500/15 text-sky-200">
                <FileDown size={20} />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-semibold text-white">{notice.title}</h3>
                  {notice.important && <span className="rounded-full bg-rose-500/15 px-2.5 py-1 text-[11px] font-semibold text-rose-100">Important</span>}
                </div>
                <p className="mt-1 text-sm text-slate-300">{notice.category} · {notice.date}</p>
                <p className="mt-2 text-sm text-slate-400">PDF file: {notice.pdf}</p>
              </div>
            </article>
          ))}
        </div>
      </GlassCard>
    </PageShell>
  );
}
