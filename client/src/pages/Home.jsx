import { motion } from 'framer-motion';
import HeroSlider from '../components/home/HeroSlider';
import HighlightCards from '../components/home/HighlightCards';
import UpdatesSection from '../components/home/UpdatesSection';
import TestimonialsSection from '../components/home/TestimonialsSection';

export default function HomePage() {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
      <HeroSlider />
      <HighlightCards />
      <UpdatesSection />
      <TestimonialsSection />
    </motion.main>
  );
}