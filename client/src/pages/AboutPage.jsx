import { motion } from 'framer-motion';
import AboutSection from '../components/home/AboutSection';

export default function AboutPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
      <AboutSection />
    </motion.div>
  );
}
