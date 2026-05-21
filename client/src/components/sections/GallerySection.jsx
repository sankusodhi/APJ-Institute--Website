import { motion } from 'framer-motion';
import { homeData } from '../../data/homeData';

export default function GallerySection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Gallery <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Preview</span>
          </h2>
          <p className="text-lg text-gray-600">
            Explore our modern campus and world-class facilities
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {homeData.gallery.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="relative h-64 rounded-2xl overflow-hidden group cursor-pointer shadow-lg"
            >
              {/* Image Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 group-hover:from-blue-600 group-hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                <span className="text-8xl">{item.image}</span>
              </div>

              {/* Overlay */}
              <motion.div
                className="absolute inset-0 bg-black/40 flex items-end justify-start p-6"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-white font-bold text-xl">{item.title}</h3>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
