import { motion } from 'framer-motion';
import HighlightCards from '../components/home/HighlightCards';

export default function FacilitiesPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">Our Facilities</p>
          <h2 className="mt-4 text-3xl font-black text-slate-900 sm:text-4xl">State-of-the-art Infrastructure</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600">
            Discover the world-class facilities and amenities provided to our students to ensure a complete and practical learning experience.
          </p>
        </div>
      </section>
      <HighlightCards />
    </motion.div>
  );
}
