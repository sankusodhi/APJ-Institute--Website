import { motion } from 'framer-motion';
import { FiArrowRight, FiCheckCircle, FiClock, FiShield } from 'react-icons/fi';
import { admissionSteps } from '../../data/homepageData';
import AdmissionVideoSection from './AdmissionVideoSection';

export default function AdmissionSection() {
  return (
    <section id="admission" className="relative overflow-hidden py-16 sm:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(132,204,22,0.12),transparent_28%),linear-gradient(180deg,#06111f_0%,#0f172a_100%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.35fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5 }}
            className="rounded-[2rem] border border-white/10 bg-white/8 p-6 text-white shadow-[0_24px_80px_rgba(2,6,23,0.35)] backdrop-blur-xl sm:p-8"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-200/90">Admission Process</p>
            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
              Smooth, professional and student-friendly admission flow
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-blue-100/85 sm:text-base">
              Complete your enrollment in a clean, transparent process with guided support at every step. The cards below are designed to feel premium, readable and visually balanced.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {[
                { icon: FiCheckCircle, title: 'Clear steps', text: 'No confusion' },
                { icon: FiShield, title: 'Verified process', text: 'Trusted guidance' },
                { icon: FiClock, title: 'Quick support', text: 'Fast response' },
              ].map((item) => (
                <div key={item.title} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/8 px-4 py-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400/15 text-cyan-200">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">{item.title}</p>
                    <p className="text-xs text-blue-100/70">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href="#contact" className="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-lime-500 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-[1.02]">
              Start Admission Enquiry
              <FiArrowRight />
            </a>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {admissionSteps.map((step, index) => (
              <motion.article
                key={step.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.42, delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/95 shadow-[0_18px_45px_rgba(2,6,23,0.2)] transition"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/10 to-transparent" />
                  <div className="absolute left-4 top-4 inline-flex items-center rounded-full border border-white/15 bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-white backdrop-blur-md">
                    Step {index + 1}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-cyan-200/90">Admission Step</p>
                    <h3 className="mt-1 text-xl font-bold leading-tight text-white">{step.title}</h3>
                  </div>
                </div>

                <div className="p-5">
                  <p className="text-sm leading-6 text-slate-600">{step.description}</p>
                  <a href="#contact" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition group-hover:gap-3">
                    Get Started
                    <FiArrowRight />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Render the video section just below the admission section
export function AdmissionSectionWithVideo() {
  return (
    <>
      <AdmissionSection />
      <AdmissionVideoSection />
    </>
  );
}