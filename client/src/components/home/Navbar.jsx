import { useState } from 'react';
import { FiMenu, FiX, FiArrowRight, FiMail, FiPhone } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../Logo';
import { Link, NavLink } from 'react-router-dom';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Courses', href: '/courses' },
  { label: 'Admission', href: '/admission' },
  { label: 'News & Announcements', href: '/news' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Facilities', href: '/facilities' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45 }}
      className="sticky top-0 z-50 flex flex-col shadow-[0_10px_30px_-20px_rgba(15,23,42,0.25)]"
    >
      {/* Top Bar */}
      <div className="hidden bg-[#0f172a] py-2 text-slate-300 md:block border-b border-slate-800">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 text-[11px] font-medium tracking-wider lg:px-8">
          <a href="mailto:info@apjinstitutedantewada.com" className="flex items-center gap-2 transition-colors hover:text-white">
            <FiMail size={14} className="text-cyan-400" /> info@apjinstitutedantewada.com
          </a>
          <a href="tel:+919243403201" className="flex items-center gap-2 transition-colors hover:text-white">
            <FiPhone size={14} className="text-cyan-400" /> +91-9243403201
          </a>
          <a href="tel:+919243758191" className="flex items-center gap-2 transition-colors hover:text-white">
            <FiPhone size={14} className="text-cyan-400" /> +91-9243758191
          </a>
        </div>
      </div>

      <div className="border-b border-blue-100/80 bg-white/90 backdrop-blur-xl">
        <div id="top" className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-blue-100 bg-white p-1 shadow-soft">
              <Logo size="md" className="h-full w-full" />
            </div>
            <div className="hidden sm:block">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-600">APJ Institute</p>
              <h1 className="text-lg font-bold leading-tight text-slate-900">Dantewada</h1>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 xl:flex">
            {navLinks.map((link) => (
              <NavLink key={link.label} to={link.href} className={({ isActive }) => `rounded-full px-4 py-2 text-sm font-semibold transition hover:bg-blue-50 hover:text-blue-700 ${isActive ? 'text-blue-700 bg-blue-50' : 'text-slate-700'}`}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2 lg:gap-3">
            <Link
              to="/admin/login"
              className="hidden items-center justify-center rounded-full bg-purple-50 px-4 py-1.5 text-center text-[10px] font-bold leading-tight text-purple-700 transition hover:bg-purple-100 xl:flex flex-col"
            >
              <span>Administration</span>
              <span>Dashboard</span>
            </Link>

            <Link
              to="/contact"
              className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-blue-700 to-sky-500 px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:scale-[1.02] hover:shadow-lg md:inline-flex"
            >
              Enquire Now
              <FiArrowRight />
            </Link>

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
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.label}
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) => `rounded-2xl px-4 py-3 text-sm font-semibold transition hover:bg-blue-50 hover:text-blue-700 ${isActive ? 'text-blue-700 bg-blue-50' : 'text-slate-700'}`}
                    >
                      {link.label}
                    </NavLink>
                  ))}
                </div>

                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="mt-3 flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-700 to-sky-500 px-4 py-3 text-sm font-semibold text-white"
                >
                  Enquire Now
                  <FiArrowRight />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      </div>
    </motion.header>
  );
}