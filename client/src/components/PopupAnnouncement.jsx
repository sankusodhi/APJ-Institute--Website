import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';
import medicalFlyer from '../assets/medical_flyer.jpg';

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
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[60] flex items-center justify-center min-h-[100vh] p-4 sm:p-6 lg:p-8 overflow-y-auto"
          onClick={() => setIsOpen(false)}
        >
          {/* Simple Dark Overlay */}
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm"></div>

          {/* Main Content Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 40 }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 100, damping: 20 }}
            className="relative w-full max-w-[850px] z-10 flex flex-col items-center my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-5 -right-5 md:-top-7 md:-right-7 z-50 inline-flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-slate-900 text-white shadow-[0_0_20px_rgba(59,130,246,0.6)] border border-blue-400/40 transition-all duration-300 hover:bg-slate-800 hover:scale-110 active:scale-95"
              aria-label="Close popup"
            >
              <X size={24} />
            </button>

            {/* Just the Poster with Blue Glow */}
            <motion.div
              className="relative w-full shadow-[0_0_80px_rgba(59,130,246,0.6)]"
            >
              <Link 
                to="/contact" 
                onClick={() => setIsOpen(false)}
                className="relative w-full block cursor-pointer"
              >
                <img
                  src={medicalFlyer}
                  alt="APJ Paramedical Admissions Open Flyer"
                  className="w-full h-auto max-h-[85vh] object-contain block"
                />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
