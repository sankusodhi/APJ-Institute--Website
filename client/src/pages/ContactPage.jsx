import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  MapPin, Phone, Mail, Clock, Send, ArrowRight,
  ChevronDown, GraduationCap, HelpCircle, PhoneCall,
  Star, Map, CalendarCheck, Users, Briefcase, Award
} from 'lucide-react';
import CountUp from 'react-countup';
import { Typewriter } from 'react-simple-typewriter';

/* ─── FAQ Data ─── */
const faqs = [
  { q: "How can I apply for admission?", a: "You can apply online through our website or visit the campus directly. Fill the enquiry form above and our team will guide you through the complete admission process." },
  { q: "What courses are available at APJ Institute?", a: "We offer BMLT (3 Years), DMLT (2 Years), X-Ray / Radiography Technician (2 Years), OT Technician (2 Years), B.Sc. Nursing (4 Years), and Hospital Assistant Certification (6 Months)." },
  { q: "Is hostel facility available?", a: "Yes, we provide safe and comfortable separate hostel facilities for boys and girls with mess, Wi-Fi, and 24/7 security." },
  { q: "How to contact the administration office?", a: "You can call us at 9243758191 / 9307616474, email info@apjinstitutedantewada.com, or visit us at Sanjay Nagar, near BSNL Exchange Office, Dantewada (C.G.)." },
  { q: "What is the fee structure?", a: "Fee varies by course. BMLT starts at ₹45,000/year. Contact our admission office for the complete fee breakdown and available scholarship options." },
];

/* ─── Testimonials Data ─── */
const testimonials = [
  { name: "Rahul Verma", role: "BMLT Student", text: "The practical labs and expert faculty at APJ Institute helped me gain real-world clinical experience. The campus environment is outstanding.", rating: 5 },
  { name: "Sneha Patel", role: "Nursing Graduate", text: "APJ Institute provided me with the perfect foundation for my nursing career. The placement support is incredible, and I got hired immediately.", rating: 5 },
  { name: "Amit Sharma", role: "X-Ray Technician", text: "State-of-the-art equipment and hands-on training. The teachers are very supportive and focus deeply on our skill development.", rating: 4 },
];

/* ─── Accordion Item ─── */
function FaqItem({ faq, isOpen, onToggle }) {
  return (
    <div className={`border rounded-2xl overflow-hidden transition-all duration-500 ${isOpen ? 'border-cyan-400 bg-white shadow-[0_0_30px_rgba(34,211,238,0.2)] scale-[1.02] z-10 relative' : 'border-slate-200 bg-white hover:border-cyan-200 shadow-sm hover:shadow-md'}`}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 sm:p-6 text-left group"
      >
        <span className={`text-base font-bold pr-4 transition-colors duration-300 ${isOpen ? 'text-[#1e3a5f]' : 'text-slate-800 group-hover:text-[#1e3a5f]'}`}>{faq.q}</span>
        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-cyan-100' : 'bg-slate-100 group-hover:bg-cyan-50'}`}>
          <ChevronDown size={20} className={`shrink-0 transition-transform duration-500 ${isOpen ? 'rotate-180 text-cyan-600' : 'text-slate-400 group-hover:text-cyan-600'}`} />
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="px-5 sm:px-6 pb-5 sm:pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4 mt-2">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Sparkles Icon component
function SparklesIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      <path d="M5 3v4" />
      <path d="M19 17v4" />
      <path d="M3 5h4" />
      <path d="M17 19h4" />
    </svg>
  );
}

/* ─── Main Contact Page ─── */
export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  // Auto-slide testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardItemVariants = {
    hidden: { opacity: 0, x: -200 },
    show: { opacity: 1, x: 0, transition: { type: "spring", bounce: 0.4, duration: 0.8 } }
  };

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen text-slate-800 overflow-x-hidden selection:bg-cyan-500/30">

      {/* ════════════════════════════════════════════
          1. HERO SECTION (ULTRA MODERN)
      ════════════════════════════════════════════ */}
      <section className="relative min-h-[75vh] flex flex-col justify-center items-center py-32 overflow-hidden bg-slate-950">
        {/* Animated Background Gradients & Particles */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center bg-fixed opacity-40 mix-blend-overlay"
          ></motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f1f3a]/90 via-slate-900/80 to-slate-950"></div>
          
          {/* Particles */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -100, 0],
                x: [0, Math.random() * 50 - 25, 0],
                opacity: [0, 0.5, 0],
                scale: [0, Math.random() * 1.5 + 0.5, 0]
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 5
              }}
              className="absolute w-2 h-2 rounded-full bg-cyan-400 blur-[1px]"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
            />
          ))}

          {/* Glowing Orbs */}
          <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-600/30 rounded-full blur-[150px]"></motion.div>
          <motion.div animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] bg-cyan-500/20 rounded-full blur-[150px]"></motion.div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center mt-16">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, type: "spring" }}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-cyan-400/50 bg-cyan-500/10 backdrop-blur-md mb-8 shadow-[0_0_30px_rgba(34,211,238,0.3)]">
            <SparklesIcon className="text-cyan-300 w-5 h-5" />
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-50">Connect With Us</span>
          </motion.div>

          <motion.h1 initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-6xl md:text-8xl font-black tracking-tight text-white mb-6 leading-tight">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500 filter drop-shadow-[0_0_20px_rgba(34,211,238,0.4)]">APJ Institute</span>
          </motion.h1>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }}
            className="h-16 flex items-center justify-center">
            <p className="mx-auto max-w-2xl text-xl md:text-2xl text-blue-100 mb-10 font-medium">
              <Typewriter
                words={['Your healthcare career begins here.', 'Reach out for admissions guidance.', 'Schedule a personalized campus tour.']}
                loop={true}
                cursor
                cursorStyle='|'
                typeSpeed={50}
                deleteSpeed={30}
                delaySpeed={2000}
              />
            </p>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          2. ANIMATED STATISTICS SECTION
      ════════════════════════════════════════════ */}
      <section className="relative z-20 -mt-20 mx-auto max-w-6xl px-4 mb-24">
        <motion.div 
          variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: false, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-white/70 backdrop-blur-2xl rounded-[2.5rem] border border-white/50 shadow-[0_30px_60px_rgba(30,58,95,0.1)]"
        >
          {[
            { icon: <Users />, count: 5000, suffix: '+', label: 'Enrolled Students', color: 'text-blue-500' },
            { icon: <Briefcase />, count: 95, suffix: '%', label: 'Placement Rate', color: 'text-cyan-500' },
            { icon: <Award />, count: 20, suffix: '+', label: 'Advanced Labs', color: 'text-indigo-500' },
            { icon: <GraduationCap />, count: 15, suffix: '+', label: 'Expert Faculty', color: 'text-purple-500' },
          ].map((stat, i) => (
            <motion.div key={i} variants={cardItemVariants}
              className="flex flex-col items-center justify-center p-8 text-center group bg-white/80 rounded-3xl shadow-sm hover:shadow-[0_10px_40px_rgba(34,211,238,0.2)] transition-all duration-500 border border-transparent hover:border-cyan-200"
            >
              <div className={`w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 ${stat.color}`}>
                {stat.icon}
              </div>
              <h3 className="text-4xl font-black text-slate-900 mb-2">
                <CountUp end={stat.count} duration={3} enableScrollSpy scrollSpyOnce={false} />{stat.suffix}
              </h3>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════
          3. CONTACT INFO CARDS (Slide Animation)
      ════════════════════════════════════════════ */}
      <section className="mx-auto max-w-6xl px-4 mb-32">
        <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: false, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { icon: <MapPin size={28} />, label: 'Our Address', value: 'Sanjay Nagar, Dantewada', color: 'text-blue-600', bg: 'bg-blue-50' },
            { icon: <Phone size={28} />, label: 'Phone Number', value: '92437 58191', color: 'text-cyan-600', bg: 'bg-cyan-50' },
            { icon: <Mail size={28} />, label: 'Email Address', value: 'info@apjinstitute.com', color: 'text-indigo-600', bg: 'bg-indigo-50' },
            { icon: <Clock size={28} />, label: 'Working Hours', value: 'Mon – Sat: 9 AM – 5 PM', color: 'text-purple-600', bg: 'bg-purple-50' },
          ].map((card, i) => (
            <motion.div key={i} variants={cardItemVariants}
              className="flex flex-col items-center justify-center p-8 text-center group bg-white rounded-3xl shadow-sm hover:shadow-[0_20px_50px_rgba(30,58,95,0.08)] transition-all duration-500 border border-slate-100 hover:border-blue-200 hover:-translate-y-2 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-slate-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className={`w-20 h-20 rounded-full ${card.bg} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 ease-out shadow-inner`}>
                <div className={`${card.color}`}>{card.icon}</div>
              </div>
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest my-2">{card.label}</h3>
              <p className="text-lg font-extrabold text-slate-800 leading-relaxed whitespace-pre-line">{card.value}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════
          4. INTERACTIVE MAP & ENHANCED FORM
      ════════════════════════════════════════════ */}
      <section className="mx-auto max-w-7xl px-4 lg:px-8 pb-32 relative">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-200/40 rounded-full blur-[120px] pointer-events-none -z-10"></div>
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-300/20 rounded-full blur-[150px] pointer-events-none -z-10"></div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
          
          {/* Enhanced Form */}
          <motion.div variants={fadeUpVariant} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <div className="mb-10">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">Send Us a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Message</span></h2>
              <p className="text-slate-500 text-lg font-medium">Fill out the form below and our admissions team will contact you within 24 hours.</p>
            </div>

            <form onSubmit={handleSubmit} className="bg-white border border-slate-100 rounded-[2.5rem] p-8 md:p-12 shadow-[0_20px_60px_rgba(30,58,95,0.05)] relative overflow-hidden group/form">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-50 rounded-full blur-3xl -z-10 transition-opacity duration-700 opacity-0 group-focus-within/form:opacity-100"></div>

              <div className="space-y-6 relative z-10">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="relative group/input">
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder=" "
                      className="peer w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 pt-8 pb-3 text-sm text-slate-900 focus:bg-white focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/10 focus:outline-none transition-all" />
                    <label htmlFor="name" className="absolute left-6 top-5 text-sm font-bold text-slate-400 transition-all duration-300 peer-focus:-translate-y-2 peer-focus:text-[10px] peer-focus:text-cyan-600 peer-focus:uppercase peer-focus:tracking-widest peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:text-slate-500 peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-widest cursor-text">
                      Full Name
                    </label>
                  </div>
                  <div className="relative group/input">
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required placeholder=" "
                      className="peer w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 pt-8 pb-3 text-sm text-slate-900 focus:bg-white focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/10 focus:outline-none transition-all" />
                    <label htmlFor="phone" className="absolute left-6 top-5 text-sm font-bold text-slate-400 transition-all duration-300 peer-focus:-translate-y-2 peer-focus:text-[10px] peer-focus:text-cyan-600 peer-focus:uppercase peer-focus:tracking-widest peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:text-slate-500 peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-widest cursor-text">
                      Phone Number
                    </label>
                  </div>
                </div>
                
                <div className="relative">
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder=" "
                    className="peer w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 pt-8 pb-3 text-sm text-slate-900 focus:bg-white focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/10 focus:outline-none transition-all" />
                  <label htmlFor="email" className="absolute left-6 top-5 text-sm font-bold text-slate-400 transition-all duration-300 peer-focus:-translate-y-2 peer-focus:text-[10px] peer-focus:text-cyan-600 peer-focus:uppercase peer-focus:tracking-widest peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:text-slate-500 peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-widest cursor-text">
                    Email Address
                  </label>
                </div>
                
                <div className="relative">
                  <select id="subject" name="subject" value={formData.subject} onChange={handleChange} required
                    className="peer w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 pt-8 pb-3 text-sm text-slate-900 focus:bg-white focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/10 focus:outline-none transition-all appearance-none cursor-pointer">
                    <option value="" disabled hidden></option>
                    <option value="admission">Admission Enquiry</option>
                    <option value="course">Course Information</option>
                    <option value="placement">Placement Support</option>
                    <option value="hostel">Hostel Facility</option>
                    <option value="other">Other</option>
                  </select>
                  <label htmlFor="subject" className={`absolute left-6 transition-all duration-300 font-bold uppercase tracking-widest cursor-pointer ${formData.subject ? 'top-3 text-[10px] text-slate-500' : 'top-5 text-sm text-slate-400 normal-case tracking-normal peer-focus:top-3 peer-focus:text-[10px] peer-focus:text-cyan-600 peer-focus:uppercase peer-focus:tracking-widest'}`}>
                    Subject
                  </label>
                  <ChevronDown className="absolute right-6 top-6 text-slate-400 pointer-events-none" size={20} />
                </div>
                
                <div className="relative">
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} placeholder=" "
                    className="peer w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 pt-8 pb-3 text-sm text-slate-900 focus:bg-white focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/10 focus:outline-none transition-all resize-none" />
                  <label htmlFor="message" className="absolute left-6 top-5 text-sm font-bold text-slate-400 transition-all duration-300 peer-focus:-translate-y-2 peer-focus:text-[10px] peer-focus:text-cyan-600 peer-focus:uppercase peer-focus:tracking-widest peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:text-slate-500 peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-widest cursor-text">
                    Your Message
                  </label>
                </div>

                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                      className="flex items-center gap-4 p-5 bg-emerald-50 border border-emerald-200 rounded-2xl text-emerald-700 font-bold text-sm">
                      <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center shrink-0 shadow-sm text-lg">✅</div>
                      Message sent successfully! We'll get back to you shortly.
                    </motion.div>
                  ) : (
                    <motion.button key="btn" type="submit" 
                      whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                      className="w-full px-10 py-5 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-black text-sm uppercase tracking-widest shadow-[0_15px_30px_rgba(34,211,238,0.3)] hover:shadow-[0_20px_40px_rgba(34,211,238,0.5)] transition-all duration-300 flex items-center justify-center gap-3 group"
                    >
                      Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </motion.button>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </motion.div>

          {/* Interactive Map */}
          <motion.div variants={fadeUpVariant} initial="hidden" whileInView="show" viewport={{ once: true }} className="flex flex-col gap-6 h-full">
            <div className="mb-4">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">Visit Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Campus</span></h2>
              <p className="text-slate-500 text-lg font-medium">Experience our world-class facilities and labs in person.</p>
            </div>

            <div className="relative flex-1 min-h-[500px] rounded-[2.5rem] overflow-hidden border-2 border-white shadow-[0_30px_60px_rgba(30,58,95,0.1)] bg-white group">
              <iframe
                title="APJ Institute Dantewada Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.0!2d81.35!3d18.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sDantewada%2C+Chhattisgarh!5e0!3m2!1sen!2sin!4v1"
                className="absolute inset-0 w-full h-full grayscale-[80%] hover:grayscale-0 transition-all duration-1000 object-cover"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute inset-0 bg-blue-900/10 pointer-events-none transition-opacity duration-700 group-hover:opacity-0"></div>
              
              {/* Floating Glassmorphism Location Card */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-xl border border-white rounded-[2rem] p-6 flex flex-col sm:flex-row items-center sm:items-start gap-5 shadow-[0_20px_40px_rgba(0,0,0,0.15)] hover:scale-[1.02] transition-transform duration-500"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-cyan-50 rounded-2xl flex items-center justify-center shrink-0 border border-blue-200/50 shadow-inner relative">
                  <MapPin size={32} className="text-blue-600 relative z-10" />
                  <div className="absolute inset-0 bg-blue-400 rounded-2xl animate-ping opacity-20"></div>
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-slate-900 font-black text-lg">APJ Institute Main Campus</p>
                  <p className="text-slate-500 text-sm font-medium mt-1 leading-relaxed">Sanjay Nagar, Near BSNL Exchange, Dantewada, Chhattisgarh</p>
                  <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 mt-3 text-cyan-600 font-bold text-sm hover:text-cyan-700">
                    Get Directions <ArrowRight size={16} />
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          5. TESTIMONIALS SLIDER
      ════════════════════════════════════════════ */}
      <section className="bg-slate-950 py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-900/20 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-900/20 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="mx-auto max-w-7xl px-4 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Student <span className="text-cyan-400">Success Stories</span></h2>
          <p className="text-slate-400 text-lg mb-16 max-w-2xl mx-auto">Hear what our graduates have to say about their journey and career growth at APJ Institute.</p>

          <div className="relative max-w-4xl mx-auto min-h-[300px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -50, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-10 md:p-16 w-full shadow-2xl"
              >
                <div className="flex justify-center gap-1 mb-8">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-yellow-400 w-6 h-6" />
                  ))}
                </div>
                <p className="text-2xl md:text-3xl text-blue-50 font-medium leading-relaxed mb-10 italic">
                  "{testimonials[currentTestimonial].text}"
                </p>
                <div>
                  <h4 className="text-xl font-bold text-white">{testimonials[currentTestimonial].name}</h4>
                  <p className="text-cyan-400 font-semibold mt-1 uppercase tracking-widest text-xs">{testimonials[currentTestimonial].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="absolute -bottom-12 left-0 right-0 flex justify-center gap-3">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentTestimonial(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${currentTestimonial === idx ? 'bg-cyan-400 w-10' : 'bg-white/20 hover:bg-white/50'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          6. BOOK CAMPUS VISIT CTA
      ════════════════════════════════════════════ */}
      <section className="mx-auto max-w-6xl px-4 py-32">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 shadow-[0_30px_60px_rgba(37,99,235,0.3)]">
          
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[80px] pointer-events-none"></div>
          
          <div className="relative z-10 p-12 md:p-20 text-center flex flex-col items-center">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center mb-8 border border-white/30">
              <CalendarCheck size={36} className="text-white" />
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">Ready to Take the Next Step?</h2>
            <p className="text-blue-100 text-xl font-medium max-w-2xl mb-12 leading-relaxed">
              Book a personalized campus tour. Meet our faculty, explore the advanced labs, and experience student life.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <a href="tel:9243758191" className="px-10 py-5 rounded-full bg-white text-blue-700 font-black text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all flex items-center gap-3">
                <PhoneCall size={20} /> Schedule Visit
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════
          7. FAQ SECTION
      ════════════════════════════════════════════ */}
      <section className="mx-auto max-w-4xl px-4 lg:px-8 pb-32">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-cyan-200 bg-cyan-50 shadow-sm mb-6">
            <HelpCircle size={18} className="text-cyan-600" />
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-800">Have Questions?</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-5 tracking-tight">Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Questions</span></h2>
          <p className="text-slate-500 text-lg font-medium max-w-2xl mx-auto">Find quick answers to common queries about admissions, courses, and campus life.</p>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div key={i} variants={cardItemVariants}>
              <FaqItem faq={faq} isOpen={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? null : i)} />
            </motion.div>
          ))}
        </motion.div>
      </section>

    </div>
  );
}
