import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';

export default function PopupAnnouncement() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Show popup 500ms after page loads (hard refresh or initial visit)
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleApply = () => {
    setIsOpen(false);
    navigate('/admission');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-black/80 backdrop-blur-md p-4"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.85, opacity: 0, y: 20 }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 300, damping: 25 }}
            className="relative flex flex-col items-center justify-center max-h-[98vh] max-w-[95vw] md:max-w-[900px] rounded-3xl bg-[#020617] shadow-[0_0_120px_rgba(37,99,235,0.7)] border border-blue-500/30"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-4 -right-4 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-xl hover:bg-blue-700 hover:scale-110 transition-all border-2 border-white"
              aria-label="Close popup"
            >
              <FaTimes className="text-xl" />
            </button>

            {/* Template Image */}
            <div 
              className="relative w-full cursor-pointer group rounded-3xl overflow-hidden"
              onClick={handleApply}
            >
              <img 
                src="/admission-promo.png" 
                alt="Admission Promo" 
                className="w-full h-auto max-h-[95vh] object-contain transition-all duration-500 hover:scale-[1.02] hover:brightness-110" 
              />
              
              {/* Overlay hint */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent flex items-end justify-center pb-8 pointer-events-none">
                <span className="text-white font-bold text-lg bg-black/60 px-6 py-2 rounded-full backdrop-blur-md shadow-lg animate-bounce border border-white/20">
                  Tap to Apply
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
