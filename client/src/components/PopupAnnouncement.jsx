import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import { newsImage } from '../data/homepageData';

export default function PopupAnnouncement() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup 500ms after page loads
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/60 p-2 backdrop-blur-sm sm:items-center sm:p-4"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.85, opacity: 0, y: 20 }}
            transition={{ duration: 0.4, type: 'spring', stiffness: 300, damping: 30 }}
            className="relative flex max-h-[calc(100svh-1rem)] w-full max-w-[42rem] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl sm:max-h-[90vh] sm:rounded-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-3 top-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-slate-900 shadow-md transition-colors hover:bg-white sm:right-4 sm:top-4 sm:h-10 sm:w-10"
              aria-label="Close popup"
            >
              <FaTimes className="text-lg" />
            </button>

            {/* Image */}
            <div className="overflow-hidden bg-slate-50 sm:aspect-auto aspect-[3/4]">
              <img
                src={newsImage}
                alt="Admissions Open 2026-27"
                className="h-full w-full object-contain sm:h-auto sm:max-h-[58vh]"
              />
            </div>

            {/* Call to Action */}
            <div className="flex-1 overflow-y-auto bg-gradient-to-r from-blue-50 to-white p-3 sm:p-6">
              <h3 className="mb-2 text-base font-bold text-slate-900 sm:mb-3 sm:text-xl">
                🎓 Admissions Open for 2026-27
              </h3>
              <p className="mb-4 text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6">
                Don't miss this opportunity! Apply now for BMLT, DMLT, DOA, CCH and other paramedical programs at APJ Institute Dantewada.
              </p>
              <div className="flex flex-col gap-2 sm:flex-row sm:gap-3">
                <a
                  href="#admission"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex flex-1 items-center justify-center rounded-xl bg-gradient-to-r from-blue-700 to-sky-500 px-4 py-2.5 text-sm font-bold text-white shadow-soft transition hover:scale-[1.02] sm:px-5 sm:py-3"
                >
                  Apply Now
                </a>
                <button
                  onClick={() => setIsOpen(false)}
                  className="inline-flex flex-1 items-center justify-center rounded-xl border-2 border-slate-300 px-4 py-2.5 text-sm font-bold text-slate-900 transition hover:bg-slate-50 sm:px-5 sm:py-3"
                >
                  Learn More Later
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
