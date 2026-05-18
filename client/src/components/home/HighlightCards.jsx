import { motion } from 'framer-motion';
import { FaUserTie, FaGraduationCap, FaHandsHelping, FaBriefcase, FaAward } from 'react-icons/fa';
import { highlights } from '../../data/homepageData';

const icons = {
  faculty: FaUserTie,
  excellence: FaGraduationCap,
  activity: FaHandsHelping,
  placement: FaBriefcase,
  package: FaAward,
};

export default function HighlightCards() {
  return (
    <section className="bg-white py-16 sm:py-20" id="facilities">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {highlights.map((item, index) => {
            const Icon = icons[item.icon];
            return (
              <motion.article key={item.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.35, delay: index * 0.05 }} whileHover={{ y: -6 }} className="group rounded-3xl border border-blue-100 bg-gradient-to-b from-white to-blue-50 p-6 shadow-[0_18px_45px_-30px_rgba(15,23,42,0.35)] transition">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-2xl text-white shadow-lg shadow-blue-200 transition group-hover:scale-105">
                  <Icon />
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}