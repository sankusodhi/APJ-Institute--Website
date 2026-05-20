import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { courses } from '../../data/homepageData';

export default function CoursesSection() {
  return (
    <section id="courses" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">Medical Courses</p>
          <h2 className="mt-4 text-3xl font-black text-slate-900 sm:text-4xl">Career-focused programs built for healthcare success</h2>
          <p className="mt-4 text-slate-600">Explore our diploma and certificate pathways designed with laboratory learning, practical exposure, and real-world career value.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {courses.map((course, index) => (
            <motion.article key={course.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.35, delay: index * 0.04 }} whileHover={{ y: -6 }} className="overflow-hidden rounded-[1.8rem] border border-blue-100 bg-white shadow-[0_18px_45px_-30px_rgba(15,23,42,0.35)]">
              <div className="relative h-56 overflow-hidden">
                <img src={course.image} alt={course.title} className="h-full w-full object-cover transition duration-500 hover:scale-105" loading="lazy" />
                <div className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.28em] text-blue-700">{course.duration}</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900">{course.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{course.description}</p>
                <a href="#contact" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-700">
                  Learn More
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