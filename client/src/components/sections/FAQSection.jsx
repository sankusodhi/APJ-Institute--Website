import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { homeData } from '../../data/homeData';

export default function FAQSection() {
  const [activeId, setActiveId] = useState(null);

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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-lg text-gray-600">
            Find answers to common questions about our courses and admission process
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {homeData.faq.map((item, idx) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
            >
              <button
                onClick={() => setActiveId(activeId === item.id ? null : item.id)}
                className="w-full bg-white p-6 rounded-xl border border-blue-100 hover:border-blue-300 transition-all duration-300 text-left hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">{item.question}</h3>
                  <motion.div
                    animate={{ rotate: activeId === item.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-blue-600 flex-shrink-0 ml-4"
                  >
                    {activeId === item.id ? (
                      <FaMinus size={20} />
                    ) : (
                      <FaPlus size={20} />
                    )}
                  </motion.div>
                </div>
              </button>

              {/* Answer */}
              <AnimatePresence>
                {activeId === item.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-gradient-to-r from-blue-50 to-purple-50 border border-t-0 border-blue-100 rounded-b-xl overflow-hidden"
                  >
                    <p className="p-6 text-gray-700 leading-relaxed">{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
          >
            Contact Us
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
