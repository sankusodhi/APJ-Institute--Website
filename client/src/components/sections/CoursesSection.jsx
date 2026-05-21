import { motion } from 'framer-motion';
import {
  FaCode, FaPalette, FaCalculator, FaDesktop, FaMobileAlt, FaBullhorn,
} from 'react-icons/fa';
import { homeData } from '../../data/homeData';

const iconMap = {
  FaCode,
  FaPalette,
  FaCalculator,
  FaDesktop,
  FaMobileAlt,
  FaBullhorn,
};

export default function CoursesSection() {
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
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
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
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Courses</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive training programs designed to make you industry-ready
          </p>
        </motion.div>

        {/* Courses Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {homeData.courses.map((course) => {
            const Icon = iconMap[course.icon];
            return (
              <motion.div
                key={course.id}
                variants={itemVariants}
                whileHover={{ y: -15, boxShadow: '0 25px 50px rgba(0, 0, 0, 0.1)' }}
                className="group rounded-2xl overflow-hidden bg-white border border-gray-100 hover:border-transparent transition-all duration-300 shadow-lg hover:shadow-2xl"
              >
                {/* Card Header with Gradient */}
                <div className={`h-32 bg-gradient-to-br ${course.color} p-6 flex items-center justify-center`}>
                  {Icon && <Icon size={48} className="text-white" />}
                </div>

                {/* Card Content */}
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                  <p className="text-sm text-blue-600 font-semibold mb-3">⏱️ {course.duration}</p>
                  <p className="text-gray-600 mb-6 leading-relaxed">{course.description}</p>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    Learn More
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
