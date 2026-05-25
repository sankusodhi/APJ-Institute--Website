import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaChevronRight, FaPaperPlane } from 'react-icons/fa';
import { courseNames, quickLinks } from '../../data/homepageData';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <footer className="relative border-t border-white/10 bg-gradient-to-b from-slate-900 to-black text-white overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="relative z-10 mx-auto max-w-7xl px-4 py-10 lg:px-8"
      >
        {/* Newsletter Section */}
        <motion.div variants={itemVariants} className="mb-10 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-xl p-6 md:p-10 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">Stay Updated</h3>
            <p className="mt-2 text-blue-100/70">Subscribe to our newsletter for the latest campus news and admission updates.</p>
          </div>
          <form className="w-full lg:w-auto flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              required
              className="w-full sm:w-80 bg-black/40 border border-white/10 rounded-full px-6 py-4 text-sm text-white focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all placeholder:text-slate-500"
            />
            <button 
              type="submit"
              className="bg-[#1e3a5f] hover:bg-[#152842] text-white rounded-full px-8 py-4 text-sm font-bold shadow-[0_0_20px_rgba(30,58,95,0.5)] hover:shadow-[0_0_30px_rgba(30,58,95,0.8)] transition-all flex items-center justify-center gap-2 group"
            >
              Subscribe <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">APJ Institute Dantewada</h3>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-slate-400">
              A premium medical and paramedical institute focused on academic discipline, hands-on training, and career success.
            </p>

            <div className="mt-8 flex gap-4">
              {[
                { icon: FaFacebookF, url: "https://facebook.com", color: "hover:text-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]" },
                { icon: FaInstagram, url: "https://instagram.com", color: "hover:text-pink-500 hover:shadow-[0_0_15px_rgba(236,72,153,0.5)]" },
                { icon: FaLinkedinIn, url: "https://linkedin.com", color: "hover:text-sky-500 hover:shadow-[0_0_15px_rgba(14,165,233,0.5)]" },
                { icon: FaYoutube, url: "https://youtube.com", color: "hover:text-red-500 hover:shadow-[0_0_15px_rgba(239,68,68,0.5)]" }
              ].map(({ icon: Icon, url, color }, index) => (
                <a key={index} href={url} target="_blank" rel="noopener noreferrer" className={`flex h-12 w-12 items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 ${color}`}>
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              {quickLinks.map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase()}`} className="inline-flex items-center gap-2 transition-all duration-300 hover:text-blue-400 hover:translate-x-2">
                    <FaChevronRight className="text-[10px] text-blue-500" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold text-white mb-6">Courses</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              {courseNames.map((course) => (
                <li key={course}>
                  <Link to={`/courses/${course.toLowerCase().replace(/ /g, '-')}`} className="inline-flex items-center gap-2 transition-all duration-300 hover:text-blue-400 hover:translate-x-2">
                    <FaChevronRight className="text-[10px] text-blue-500" />
                    {course}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold text-white mb-6">Contact</h4>
            <div className="space-y-4 text-sm text-slate-400">
              <p className="leading-relaxed hover:text-white transition-colors">APJ Institute Dantewada, Near Medical Campus, Dantewada, Chhattisgarh</p>
              <p className="hover:text-blue-400 transition-colors cursor-pointer">Phone: +91 92437 58191</p>
              <p className="hover:text-blue-400 transition-colors cursor-pointer">Email: info@apjinstitutedantewada.com</p>
            </div>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="mt-10 border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} APJ Institute Dantewada. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}