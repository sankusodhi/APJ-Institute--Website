import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import { homeData } from '../../data/homeData';

export default function TestimonialsSection() {
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
            Student <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Testimonials</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from our successful students about their learning experience
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {homeData.testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-slate-50 to-blue-50 p-6 rounded-2xl border border-blue-100 hover:shadow-lg transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} size={16} className="text-yellow-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>

              {/* Student Info */}
              <div className="border-t border-blue-200 pt-4">
                <div className="text-3xl mb-2">{testimonial.image}</div>
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-blue-600 font-semibold">{testimonial.course}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
