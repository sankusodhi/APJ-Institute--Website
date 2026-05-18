import { motion } from 'framer-motion';
import { homeData } from '../../data/homeData';

export default function AdmissionSection() {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
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
            Admission <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Process</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Simple and straightforward steps to begin your learning journey
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {homeData.admissionSteps.map((item, idx) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative"
            >
              {/* Connecting Line */}
              {idx < homeData.admissionSteps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-1 bg-gradient-to-r from-blue-600 to-transparent" />
              )}

              {/* Card */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 hover:shadow-2xl hover:border-blue-300 transition-all duration-300 relative z-10">
                {/* Step Number */}
                <div className="absolute -top-6 left-8 w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                  {item.step}
                </div>

                {/* Content */}
                <div className="mt-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>

                  {/* Icon */}
                  <motion.div
                    className="mt-4 text-4xl"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
                  >
                    {['📋', '💬', '📝', '📄', '💳', '✅'][idx]}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-gray-600 mb-4">Ready to start your journey?</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
          >
            Apply Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
