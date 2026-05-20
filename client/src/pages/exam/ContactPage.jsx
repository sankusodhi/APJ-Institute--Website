import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { GlassCard, PageShell, SectionHeading } from '../../components/exam/ExamComponents';
import { contactCards } from '../../data/examPortalData';
import { useExamPortal } from '../../context/ExamPortalContext';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const { notify } = useExamPortal();

  function handleSubmit(event) {
    event.preventDefault();
    notify('Your message has been sent to the examination cell.', 'success');
    setForm({ name: '', email: '', message: '' });
  }

  return (
    <PageShell title="Contact" subtitle="Connect with the examination department, ask a question, or request support.">
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <GlassCard className="p-5 sm:p-6">
          <SectionHeading eyebrow="Contact Cards" title="Department details" description="The examination cell can be reached through phone, email, or in-person campus visits." />
          <div className="mt-5 space-y-4">
            {contactCards.map((item, index) => (
              <div key={item.title} className="rounded-3xl border border-white/10 bg-slate-950/55 p-4">
                <p className="text-xs uppercase tracking-[0.24em] text-sky-300">{item.title}</p>
                <p className="mt-2 text-lg font-semibold text-white">{item.value}</p>
                <p className="mt-1 text-sm text-slate-400">{item.note}</p>
              </div>
            ))}
          </div>
        </GlassCard>

        <GlassCard className="p-5 sm:p-6">
          <SectionHeading eyebrow="Contact Form" title="Send a message" description="This form is ready for backend API integration and toast notifications on submit." />

          <form onSubmit={handleSubmit} className="mt-5 space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-200">Name</label>
              <input value={form.name} onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))} className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-400 focus:border-sky-400" placeholder="Your name" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-200">Email</label>
              <input value={form.email} onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))} className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-400 focus:border-sky-400" placeholder="name@example.com" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-200">Message</label>
              <textarea value={form.message} onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))} rows="5" className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-400 focus:border-sky-400" placeholder="Write your query here" />
            </div>
            <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-violet-600 px-5 py-3 text-sm font-semibold text-white transition hover:scale-[1.01]">
              <Send size={16} /> Send Message
            </button>
          </form>
        </GlassCard>
      </div>
    </PageShell>
  );
}
