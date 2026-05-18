import { motion } from 'framer-motion';
import {
  FaUsers, FaCode, FaBriefcase, FaLaptop, FaBook, FaGraduationCap,
} from 'react-icons/fa';
import { homeData } from '../../data/homeData';

const iconMap = {
  FaUsers,
  FaCode,
  FaBriefcase,
  FaLaptop,
  FaBook,
  FaGraduationCap,
};

export default function HighlightsSection() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
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
            Why Choose <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">APJ Institute?</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive training with industry experts and real-world experience
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {homeData.highlights.map((highlight) => {
            const Icon = iconMap[highlight.icon];
            return (
              <motion.div
                key={highlight.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50 border border-blue-100 hover:border-blue-300 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl"
              >
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white mb-6 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {Icon && <Icon size={32} />}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{highlight.title}</h3>
                <p className="text-gray-600 leading-relaxed">{highlight.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
