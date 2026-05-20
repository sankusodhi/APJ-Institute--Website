import { motion } from 'framer-motion';
import TopHeaderBar from '../components/home/TopHeaderBar';
import Navbar from '../components/home/Navbar';
import HeroSlider from '../components/home/HeroSlider';
import HighlightCards from '../components/home/HighlightCards';
import UpdatesSection from '../components/home/UpdatesSection';
import AdmissionSection from '../components/home/AdmissionSection';
import AboutSection from '../components/home/AboutSection';
import CoursesSection from '../components/home/CoursesSection';
import GallerySection from '../components/home/GallerySection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import ContactSection from '../components/home/ContactSection';
import Footer from '../components/home/Footer';
import PopupAnnouncement from '../components/PopupAnnouncement';

export default function Home() {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
      <PopupAnnouncement />
      <TopHeaderBar />
      <Navbar />
      <HeroSlider />
      <HighlightCards />
      <UpdatesSection />
      <AdmissionSection />
      <AboutSection />
      <CoursesSection />
      <GallerySection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </motion.main>
  );
}