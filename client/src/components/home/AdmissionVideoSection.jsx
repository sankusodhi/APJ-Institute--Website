import { motion } from 'framer-motion';
import { admissionVideo } from '../../data/homepageData';

export default function AdmissionVideoSection() {
  const { title, description, src, poster } = admissionVideo || {};

  return (
    <section id="virtual-tour" className="py-12 sm:py-16 bg-slate-800">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-300">Virtual Tour</p>
          <h3 className="mt-3 text-2xl font-black text-white">{title}</h3>
          <p className="mt-2 text-sm text-blue-200">{description}</p>
        </div>

        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mt-8 flex justify-center">
          <div className="w-full max-w-4xl rounded-xl overflow-hidden shadow-2xl border border-white/6 bg-black">
            <div className="relative pt-[56.25%]">{/* 16:9 aspect */}
              <iframe
                className="absolute inset-0 h-full w-full"
                src={src}
                title={title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
