import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX, FiArrowRight, FiChevronDown } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../Logo';
import { courses as courseCatalog } from '../../utils/courseData';

const featuredCourseIds = ['bmlt', 'dmlt', 'xray', 'lab-tech'];

const navLinks = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#about' },
  { label: 'Faculty', href: '#faculty' },
  { label: 'Events', href: '#events' },
  { label: 'Courses', href: '#courses' },
  { label: 'Admission', href: '#admission' },
  { label: 'News & Announcements', href: '#news' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Facilities', href: '#facilities' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45 }}
        className="fixed left-0 right-0 top-[52px] z-50 border-b border-blue-100/80 bg-white/90 backdrop-blur-xl shadow-[0_10px_30px_-20px_rgba(15,23,42,0.25)] sm:top-[52px]"
      >
        <div id="top" className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex h-20 items-center justify-between gap-4">
            <a href="#top" className="flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-blue-100 bg-white p-1 shadow-soft">
                <Logo size="md" className="h-full w-full" />
              </div>
              <div className="hidden sm:block">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-600">APJ Institute</p>
                <h1 className="text-lg font-bold leading-tight text-slate-900">Dantewada</h1>
              </div>
            </a>

            <nav className="hidden items-center gap-1 xl:flex">
              {navLinks.map((link) =>
                link.label === 'Courses' ? (
                  <div key={link.label} className="relative">
                    <button
                      type="button"
                      onClick={() => setCoursesOpen((value) => !value)}
                      className="inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-blue-50 hover:text-blue-700"
                      aria-expanded={coursesOpen}
                      aria-haspopup="menu"
                    >
                      {link.label}
                      <FiChevronDown className={`text-xs transition ${coursesOpen ? 'rotate-180' : ''}`} />
                    </button>

                    <AnimatePresence>
                      {coursesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.18 }}
                          className="absolute left-1/2 top-full mt-3 w-[340px] -translate-x-1/2 rounded-3xl border border-blue-100 bg-white p-3 shadow-[0_18px_50px_rgba(15,23,42,0.18)]"
                        >
                          <div className="grid gap-2">
                            <Link to="/courses" onClick={() => setCoursesOpen(false)} className="rounded-2xl bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-blue-50 hover:text-blue-700">
                              All Courses
                            </Link>
                            {courseCatalog.filter((course) => featuredCourseIds.includes(course.id)).map((course) => (
                              <Link
                                key={course.id}
                                to={`/courses/${course.id}`}
                                onClick={() => setCoursesOpen(false)}
                                className="rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-blue-50 hover:text-blue-700"
                              >
                                <span className="block text-[11px] uppercase tracking-[0.28em] text-blue-500">{course.name}</span>
                                <span className="mt-1 block text-sm font-semibold text-slate-900">{course.fullName}</span>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <a key={link.label} href={link.href} className="rounded-full px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-blue-50 hover:text-blue-700">
                    {link.label}
                  </a>
                ),
              )}
            </nav>

            <div className="flex items-center gap-3">
              <Link
                to="/examination-dashboard"
                className="hidden items-center rounded-full border border-violet-200 px-4 py-3 text-sm font-semibold text-violet-700 transition hover:bg-violet-50 md:inline-flex"
              >
                Examination Dashboard
              </Link>

              <a
                href="#contact"
                className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-blue-700 to-sky-500 px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:scale-[1.02] hover:shadow-lg md:inline-flex"
              >
                Enquire Now
                <FiArrowRight />
              </a>

              <button
                type="button"
                aria-label="Open menu"
                aria-expanded={isOpen}
                onClick={() => setIsOpen((value) => !value)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-blue-100 text-slate-700 transition hover:bg-blue-50 xl:hidden"
              >
                {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <div className="h-20" aria-hidden="true" />

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="pb-4 xl:hidden"
          >
            <div className="rounded-3xl border border-blue-100 bg-white p-3 shadow-soft">
              <div className="grid gap-1 sm:grid-cols-2">
                {navLinks.map((link) =>
                  link.label === 'Courses' ? (
                    <div key={link.label} className="rounded-2xl border border-blue-100 bg-blue-50/60 p-2 sm:col-span-2">
                      <button
                        type="button"
                        onClick={() => setCoursesOpen((value) => !value)}
                        className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-sm font-semibold text-slate-800"
                      >
                        <span>Courses</span>
                        <FiChevronDown className={`transition ${coursesOpen ? 'rotate-180' : ''}`} />
                      </button>

                      {coursesOpen && (
                        <div className="mt-2 grid gap-2">
                          <Link
                            to="/courses"
                            onClick={() => {
                              setIsOpen(false);
                              setCoursesOpen(false);
                            }}
                            className="rounded-xl bg-white px-3 py-3 text-sm font-semibold text-slate-900 transition hover:bg-blue-50 hover:text-blue-700"
                          >
                            All Courses
                          </Link>
                          {courseCatalog.filter((course) => featuredCourseIds.includes(course.id)).map((course) => (
                            <Link
                              key={course.id}
                              to={`/courses/${course.id}`}
                              onClick={() => {
                                setIsOpen(false);
                                setCoursesOpen(false);
                              }}
                              className="rounded-xl bg-white px-3 py-3 text-sm text-slate-700 transition hover:bg-blue-50 hover:text-blue-700"
                            >
                              {course.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-blue-50 hover:text-blue-700"
                    >
                      {link.label}
                    </a>
                  ),
                )}
              </div>

              <Link
                to="/examination-dashboard"
                onClick={() => setIsOpen(false)}
                className="mt-3 block rounded-2xl border border-violet-200 px-4 py-3 text-center text-sm font-semibold text-violet-700 transition hover:bg-violet-50"
              >
                Examination Dashboard
              </Link>

              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-3 flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-700 to-sky-500 px-4 py-3 text-sm font-semibold text-white"
              >
                Enquire Now
                <FiArrowRight />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}