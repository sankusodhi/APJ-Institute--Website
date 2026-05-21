import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { admissionSteps } from '../../data/homepageData';

export default function AdmissionSection() {
  return (
    <section id="admission" className="py-16 sm:py-20 bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-300">Admission Process</p>
          <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">Admission Process</h2>
          <p className="mt-4 mx-auto max-w-2xl text-blue-200">
            Our admission process is simple, transparent and student-friendly. Follow the steps below to complete your enrollment.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {admissionSteps.map((step, index) => (
            <motion.article key={step.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.4, delay: index * 0.06 }} whileHover={{ y: -6 }} className="flex overflow-hidden rounded-2xl bg-white shadow-lg">
              <div className="w-32 shrink-0 overflow-hidden">
                <img src={step.image} alt={step.title} className="h-full w-full object-cover" loading="lazy" />
              </div>
              <div className="p-5 flex-1">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">Step {index + 1}</p>
                <h3 className="mt-2 text-lg font-bold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{step.description}</p>
                <a href="#contact" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-700">
                  Get Started
                  <FiArrowRight />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}