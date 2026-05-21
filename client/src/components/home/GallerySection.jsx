import { motion } from 'framer-motion';
import { galleryImages } from '../../data/homepageData';

export default function GallerySection() {
  return (
    <section id="gallery" className="bg-medical-grid py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">Gallery</p>
          <h2 className="mt-4 text-3xl font-black text-slate-900 sm:text-4xl">A glimpse into institute life and medical training</h2>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {galleryImages.map((image, index) => (
            <motion.div key={image} initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.35, delay: index * 0.04 }} className="group overflow-hidden rounded-[1.75rem] shadow-soft">
              <img src={image} alt={`Gallery ${index + 1}`} className="h-72 w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}