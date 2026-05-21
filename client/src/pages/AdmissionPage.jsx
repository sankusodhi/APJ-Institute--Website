import { motion } from 'framer-motion';
import AdmissionSection from '../components/home/AdmissionSection';

export default function AdmissionPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
      <AdmissionSection />
    </motion.div>
  );
}
