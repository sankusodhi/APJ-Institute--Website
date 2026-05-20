import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { courses } from '../utils/courseData';

export default function Courses() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10 md:px-6">
      <section className="mb-8 rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 p-8 text-white">
        <h1 className="text-3xl font-bold">Medical Courses at APJ Institute</h1>
        <p className="mt-2 max-w-2xl text-blue-50">
          Industry-ready allied health programs designed with practical training and modern lab exposure.
        </p>
      </section>

      <section className="grid gap-5 md:grid-cols-2">
        {courses.map((course, index) => (
          <motion.article
            key={course.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm"
          >
            <h2 className="text-xl font-semibold text-slate-900">{course.fullName}</h2>
            <p className="mt-2 text-sm text-slate-600">{course.description}</p>
            <div className="mt-4 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
              <p>
                <span className="font-semibold">Duration:</span> {course.duration}
              </p>
              <p>
                <span className="font-semibold">Eligibility:</span> {course.eligibility}
              </p>
            </div>
            <Link to={`/courses/${course.id}`} className="mt-5 inline-flex rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">
              View Full Details
            </Link>
          </motion.article>
        ))}
      </section>
    </main>
  );
}
