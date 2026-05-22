import { useState } from 'react';
import { FiMenu, FiX, FiArrowRight } from 'react-icons/fi';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
=======
>>>>>>> 6bdf3fe (feat: integration of admin/user portal, notices, and UI refinements)
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../Logo';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Courses', href: '/courses' },
  { label: 'Admission', href: '/admission' },
<<<<<<< HEAD
  { label: 'News & Announcements', href: '#news' },
=======
>>>>>>> 6bdf3fe (feat: integration of admin/user portal, notices, and UI refinements)
  { label: 'Gallery', href: '/gallery' },
  { label: 'Facilities', href: '/facilities' },
  { label: 'Contact', href: '/contact' },
];

function NavItem({ link, onClick }) {
  const commonClassName =
    'rounded-full px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-blue-50 hover:text-blue-700';

  if (link.href.startsWith('#')) {
    return (
      <a href={link.href} onClick={onClick} className={commonClassName}>
        {link.label}
      </a>
    );
  }

  return (
    <Link to={link.href} onClick={onClick} className={commonClassName}>
      {link.label}
    </Link>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45 }}
      className="sticky top-0 z-50 border-b border-blue-100/80 bg-white/90 backdrop-blur-xl shadow-[0_10px_30px_-20px_rgba(15,23,42,0.25)]"
    >
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
<<<<<<< HEAD
              <NavItem key={link.label} link={link} />
=======
              <Link
                key={link.label}
                to={link.href}
                className="rounded-full px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-blue-50 hover:text-blue-700"
              >
                {link.label}
              </Link>
>>>>>>> 6bdf3fe (feat: integration of admin/user portal, notices, and UI refinements)
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-blue-700 to-sky-500 px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:scale-[1.02] hover:shadow-lg md:inline-flex"
            >
              Enquire Now
              <FiArrowRight />
<<<<<<< HEAD
            </Link>

=======
            </Link>

            {/* Login Button */}
            <Link
              to="/portal"
              className="hidden md:inline-flex items-center gap-2 rounded-full border-2 border-blue-700 px-5 py-2 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
            >
              Login
            </Link>

            {/* Sign Up Button */}
            <Link
              to="/portal"
              className="hidden md:inline-flex items-center gap-2 rounded-full bg-blue-700 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-800"
            >
              Sign Up
            </Link>

>>>>>>> 6bdf3fe (feat: integration of admin/user portal, notices, and UI refinements)
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
                    <NavItem key={link.label} link={link} onClick={() => setIsOpen(false)} />
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

                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  <button 
                    onClick={() => { navigate('/portal'); setIsOpen(false); }}
                    className="w-full rounded-2xl border-2 border-blue-700 bg-white px-4 py-3 text-sm font-semibold text-blue-700 hover:bg-blue-50 transition"
                  >
                    👤 Login
                  </button>
                  <button 
                    onClick={() => { navigate('/portal'); setIsOpen(false); }}
                    className="w-full rounded-2xl border-2 border-blue-700 bg-blue-700 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-800 transition"
                  >
                    🚀 Sign Up
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
