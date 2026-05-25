import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import {
  Microscope, ActivitySquare, BookOpen, Home, Coffee, Users, Bus, HeartPulse, 
  Sparkles, Play, ChevronRight, Zap, ShieldCheck, Award, GraduationCap, Monitor,
  Syringe, ArrowRight, Star
} from 'lucide-react';

/* ─── Advanced Magnetic Button Component ─── */
const MagneticButton = ({ children, className, onClick }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={ref}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      onClick={onClick}
      className={className}
    >
      {children}
    </motion.button>
  );
};

/* ─── Glowing Particle Component ─── */
const FloatingParticle = ({ size, color, top, left, delay, duration }) => (
  <motion.div
    animate={{ 
      y: [0, -40, 0], 
      x: [0, 20, 0], 
      opacity: [0.2, 0.8, 0.2],
      scale: [1, 1.2, 1]
    }}
    transition={{ duration, repeat: Infinity, delay, ease: "easeInOut" }}
    className={`absolute rounded-full blur-[2px] ${color}`}
    style={{ width: size, height: size, top, left }}
  />
);

/* ─── Main Page Component ─── */
export default function FacilitiesPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  
  // Smooth scroll springs
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 50, damping: 20 });
  
  // Transforms
  const heroY = useTransform(smoothProgress, [0, 0.2], ['0%', '50%']);
  const heroScale = useTransform(smoothProgress, [0, 0.2], [1, 1.1]);
  const heroOpacity = useTransform(smoothProgress, [0, 0.15], [1, 0]);
  
  const bentoY = useTransform(smoothProgress, [0.1, 0.3], ['20%', '0%']);
  
  // Data
  const bentoItems = [
    { title: "Advanced Pathology & Diagnostics", desc: "Train on industry-grade hematology analyzers.", icon: <Microscope size={28}/>, img: "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1200&auto=format&fit=crop", span: "md:col-span-8 md:row-span-2" },
    { title: "Simulation Wards", desc: "Mock OT and ICU setups.", icon: <ActivitySquare size={28}/>, img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop", span: "md:col-span-4 md:row-span-1" },
    { title: "AI Classrooms", desc: "Interactive digital boards.", icon: <Monitor size={28}/>, img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop", span: "md:col-span-4 md:row-span-1" },
    { title: "Digital Library", desc: "50k+ medical e-books.", icon: <BookOpen size={28}/>, img: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800&auto=format&fit=crop", span: "md:col-span-5 md:row-span-1" },
    { title: "Premium Hostels", desc: "Secure living spaces.", icon: <Home size={28}/>, img: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=800&auto=format&fit=crop", span: "md:col-span-7 md:row-span-1" },
  ];

  const features = [
    { title: "24/7 Library", desc: "Access to 50k+ medical resources.", icon: <BookOpen size={24}/>, img: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800&auto=format&fit=crop" },
    { title: "Smart Labs", desc: "Industry-grade testing equipment.", icon: <Microscope size={24}/>, img: "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1200&auto=format&fit=crop" },
    { title: "Premium Hostels", desc: "Safe, secure living spaces.", icon: <Home size={24}/>, img: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=800&auto=format&fit=crop" },
    { title: "Cafeteria", desc: "Hygienic and nutritious meals.", icon: <Coffee size={24}/>, img: "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?q=80&w=800&auto=format&fit=crop" },
    { title: "Transport", desc: "Campus-wide bus services.", icon: <Bus size={24}/>, img: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=800&auto=format&fit=crop" },
    { title: "Recreation", desc: "Sports and wellness facilities.", icon: <Users size={24}/>, img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=800&auto=format&fit=crop" },
  ];

  return (
    <div ref={containerRef} className="bg-slate-100 min-h-screen text-slate-800 overflow-x-hidden font-sans selection:bg-[#1e3a5f]/30">
      <div className="relative z-[100]">
      </div>

      {/* ════════════════════════════════════════════
          1. IMMERSIVE CINEMATIC HERO
      ════════════════════════════════════════════ */}
      <section className="relative h-screen flex flex-col items-center justify-center bg-slate-900 border-b border-slate-800 overflow-hidden">
        <motion.div style={{ y: heroY, scale: heroScale, opacity: heroOpacity }} className="absolute inset-0 w-full h-full z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center mix-blend-luminosity opacity-40"></div>
          {/* Layered Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a5f]/40 to-transparent mix-blend-multiply"></div>
          
          {/* Animated Light Beams */}
          <motion.div animate={{ x: ['-100%', '200%'] }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent shadow-[0_0_20px_rgba(34,211,238,0.8)] blur-[1px] origin-left -rotate-12" />
        </motion.div>

        {/* Particles */}
        <FloatingParticle size="8px" color="bg-cyan-400" top="20%" left="15%" delay={0} duration={4} />
        <FloatingParticle size="12px" color="bg-blue-400" top="30%" left="80%" delay={1} duration={5} />
        <FloatingParticle size="6px" color="bg-indigo-400" top="70%" left="10%" delay={2} duration={3} />
        <FloatingParticle size="10px" color="bg-cyan-300" top="60%" left="75%" delay={0.5} duration={6} />

        <div className="relative z-10 mx-auto max-w-7xl px-4 w-full flex flex-col items-center text-center mt-20">
          
          <motion.div initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }} animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-2xl mb-8 shadow-[0_0_40px_rgba(34,211,238,0.15)] relative overflow-hidden group">
            <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
            <Sparkles className="text-cyan-400 w-5 h-5 animate-pulse" />
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-100">Redefining Healthcare Education</span>
          </motion.div>

          <div className="overflow-hidden mb-6">
            <motion.h1 initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl lg:text-[5.5rem] font-black text-white leading-[1.05] tracking-tighter">
              Experience the <br/>
              <span className="relative">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-[#1e3a5f]">Future</span>
                <motion.span animate={{ opacity: [0.3, 0.8, 0.3] }} transition={{ duration: 3, repeat: Infinity }} className="absolute inset-0 bg-cyan-400/20 blur-[40px] z-0"></motion.span>
              </span> of Learning
            </motion.h1>
          </div>

          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl text-blue-100/70 mb-10 leading-relaxed font-medium max-w-2xl">
            Step into an immersive, ultra-modern campus designed to transform aspiring students into elite healthcare professionals.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-5 relative z-20"
          >
            <MagneticButton className="relative group overflow-hidden px-8 py-4 rounded-full bg-white text-[#020617] font-black text-base flex items-center gap-3 shadow-[0_0_50px_rgba(255,255,255,0.15)]">
              <span className="relative z-10 flex items-center gap-2">Explore Campus <ArrowRight className="group-hover:translate-x-1.5 transition-transform w-5 h-5" /></span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-200 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </MagneticButton>
            
            <MagneticButton className="px-8 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-xl text-white font-bold text-base hover:bg-white/10 transition-colors flex items-center gap-3 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
              <Play className="text-cyan-400" fill="currentColor" size={16} /> Watch Video
            </MagneticButton>
          </motion.div>
        </div>

        {/* INFINITE SCROLLING MARQUEE BANNER (Absolute Bottom) */}
        <div className="absolute bottom-0 left-0 w-full z-30 py-5 bg-[#1e3a5f]/95 backdrop-blur-md border-t border-white/20 shadow-[0_-20px_50px_rgba(0,0,0,0.5)] overflow-hidden flex items-center">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }} 
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="flex whitespace-nowrap items-center w-max"
          >
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center">
                {[
                  "100% PLACEMENT GUARANTEE", "WORLD-CLASS SMART LABS", 
                  "PREMIUM ACCOMMODATION", "EXPERT MEDICAL FACULTY", 
                  "24/7 DIGITAL LIBRARY", "GOVT. APPROVED PROGRAMS"
                ].map((text, j) => (
                  <div key={j} className="flex items-center mx-8">
                    <Star className="text-cyan-400 mr-8 w-8 h-8" fill="currentColor" />
                    <span 
                      className="text-4xl md:text-5xl font-black text-transparent hover:text-white transition-colors duration-500 cursor-default uppercase tracking-widest"
                      style={{ WebkitTextStroke: '1px rgba(255,255,255,0.8)' }}
                    >
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          2. BENTO GRID FACILITY EXPERIENCE
      ════════════════════════════════════════════ */}
      <section className="pt-48 pb-32 relative z-20 mx-auto max-w-7xl px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1 }} className="mb-20">
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-tight mb-6">
              Immersive <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e3a5f] to-blue-500">Campus Ecosystem</span>
            </h2>
          </motion.div>

          <motion.div style={{ y: bentoY }} className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
            {bentoItems.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative rounded-[2.5rem] overflow-hidden bg-white border border-cyan-200 shadow-[0_0_40px_rgba(34,211,238,0.3)] hover:border-cyan-400 hover:shadow-[0_0_80px_rgba(34,211,238,0.7)] transition-all duration-700 ${item.span}`}
              >
                <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-700"></div>
                
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-transparent to-blue-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-overlay"></div>

                <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                  <motion.div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center text-white mb-6 group-hover:-translate-y-4 group-hover:bg-[#1e3a5f] group-hover:text-white group-hover:shadow-[0_0_40px_rgba(30,58,95,0.6)] transition-all duration-500">
                    {item.icon}
                  </motion.div>
                  <h3 className="text-3xl font-black text-white mb-2 group-hover:-translate-y-2 transition-transform duration-500 tracking-tight leading-tight">{item.title}</h3>
                  <p className="text-slate-200 font-medium group-hover:-translate-y-2 transition-transform duration-500 delay-75 line-clamp-2 md:line-clamp-none">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
      </section>

      {/* ════════════════════════════════════════════
          3. MAGAZINE-STYLE STUDENT LIFE COLLAGE
      ════════════════════════════════════════════ */}
      <section className="py-32 relative overflow-hidden bg-white text-slate-900 rounded-[4rem] mx-2 lg:mx-8 shadow-[0_0_100px_rgba(0,0,0,1)]">
        {/* Soft Radial Glows on White */}
        <div className="absolute top-0 right-0 w-full h-[500px] bg-gradient-to-b from-blue-50 to-transparent opacity-80 pointer-events-none"></div>
        <div className="absolute -left-40 top-1/2 w-[600px] h-[600px] bg-cyan-100/50 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="mx-auto max-w-7xl px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}>
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#1e3a5f]/20 bg-blue-50 mb-8">
                <span className="flex h-2 w-2 rounded-full bg-cyan-500 animate-pulse"></span>
                <span className="text-xs font-bold uppercase tracking-widest text-[#1e3a5f]">Campus Life</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-[#020617] mb-8 tracking-tighter leading-[1.1]">
                A Community <br/>That <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e3a5f] to-blue-500">Inspires</span>
              </h2>
              <p className="text-xl text-slate-600 font-medium mb-12 leading-relaxed max-w-xl">
                Beyond rigorous academics, experience a vibrant lifestyle. Our integrated campus fosters holistic growth, ensuring you thrive mentally, physically, and socially.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "24/7 Secure Hostels", desc: "Premium accommodation with modern amenities." },
                  { title: "Hygienic Cafeteria", desc: "Nutritious multi-cuisine dining experiences." },
                  { title: "Sports & Recreation", desc: "Indoor and outdoor facilities for complete wellness." }
                ].map((item, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 + 0.5 }}
                    className="flex gap-6 group cursor-pointer"
                  >
                    <div className="w-1.5 h-auto bg-slate-200 group-hover:bg-[#1e3a5f] rounded-full transition-colors duration-500"></div>
                    <div>
                      <h4 className="text-2xl font-bold text-[#020617] mb-2 group-hover:text-[#1e3a5f] transition-colors">{item.title}</h4>
                      <p className="text-slate-500 font-medium">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Overlapping Collage */}
            <div className="relative h-[600px] w-full hidden md:block">
              {/* Vibrant Blue Glow Behind Images */}
              <motion.div 
                animate={{ opacity: [0.4, 0.7, 0.4], scale: [0.9, 1.1, 0.9] }} 
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 left-1/4 w-[70%] h-[70%] bg-blue-500/30 rounded-full blur-[100px] z-0"
              ></motion.div>
              <div className="absolute top-1/2 right-0 w-[50%] h-[50%] bg-cyan-400/20 rounded-full blur-[120px] z-0"></div>
              <motion.div initial={{ opacity: 0, x: 300, y: -50, rotate: 10 }} whileInView={{ opacity: 1, x: 0, y: 0, rotate: -2 }} viewport={{ once: false, margin: "-50px" }} transition={{ duration: 1, delay: 0.2, type: "spring", bounce: 0.4 }}
                className="absolute top-0 right-10 w-[60%] h-[60%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white z-10 group"
              >
                <img src="https://images.unsplash.com/photo-1525610553991-2bede1a236e2?q=80&w=800&auto=format&fit=crop" alt="Cafeteria" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
              </motion.div>
              
              <motion.div initial={{ opacity: 0, x: 300, y: 150, rotate: -10 }} whileInView={{ opacity: 1, x: 0, y: 0, rotate: 3 }} viewport={{ once: false, margin: "-50px" }} transition={{ duration: 1, delay: 0.4, type: "spring", bounce: 0.4 }}
                className="absolute bottom-10 left-10 w-[65%] h-[55%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white z-20 group"
              >
                <img src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=800&auto=format&fit=crop" alt="Hostel" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
              </motion.div>

              {/* Floating Testimonial Snippet */}
              <motion.div initial={{ opacity: 0, x: -100, scale: 0.5 }} whileInView={{ opacity: 1, x: 0, scale: 1 }} viewport={{ once: false }} transition={{ duration: 1, delay: 0.6, type: "spring", bounce: 0.5 }}
                className="absolute top-1/2 left-0 -translate-y-1/2 z-30 bg-white/90 backdrop-blur-xl p-6 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-white max-w-[250px]"
              >
                <div className="flex text-amber-400 mb-3 gap-1">
                  {[...Array(5)].map((_, idx) => <Star key={idx} size={14} fill="currentColor" />)}
                </div>
                <p className="text-slate-700 text-sm font-bold italic">"Best campus facilities, feels like home."</p>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          4. CINEMATIC VIDEO TOUR
      ════════════════════════════════════════════ */}
      <section className="py-40 relative">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-[4rem] overflow-hidden bg-slate-900 h-[70vh] min-h-[500px] shadow-[0_0_80px_rgba(30,58,95,0.3)] group flex items-center justify-center cursor-pointer border border-slate-800"
          >
            <img src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2000&auto=format&fit=crop" alt="Campus Tour" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-30 group-hover:scale-105 transition-all duration-1000" />
            
            {/* Animated Border Beam */}
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-[-2px] rounded-[4rem] bg-gradient-to-r from-transparent via-[#1e3a5f] to-transparent opacity-0 group-hover:opacity-100 blur-sm group-hover:animate-[spin_4s_linear_infinite] transition-opacity duration-1000"></div>
              <div className="absolute inset-1 rounded-[3.8rem] bg-slate-900/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent z-10"></div>
            
            <div className="relative z-20 flex flex-col items-center">
              <motion.div whileHover={{ scale: 1.15 }} transition={{ type: "spring", stiffness: 200 }}
                className="w-32 h-32 bg-white/10 backdrop-blur-2xl rounded-full border border-white/30 flex items-center justify-center mb-8 shadow-[0_0_80px_rgba(30,58,95,0.4)] group-hover:border-[#1e3a5f] group-hover:shadow-[0_0_80px_rgba(30,58,95,0.8)] transition-all duration-500 relative"
              >
                <div className="absolute inset-0 rounded-full animate-ping bg-[#1e3a5f]/40 opacity-75" style={{ animationDuration: '2s' }}></div>
                <Play className="text-white ml-3 group-hover:text-blue-300 transition-colors duration-500" size={48} fill="currentColor" />
              </motion.div>
              <h3 className="text-5xl md:text-6xl font-black text-white tracking-tighter mb-4 drop-shadow-2xl text-center">Enter The Campus</h3>
              <p className="text-blue-100/90 font-medium text-xl max-w-lg text-center px-4">Watch the cinematic tour.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          5. ADVANCED FEATURE CARDS (WHY CHOOSE US)
      ════════════════════════════════════════════ */}
      <section className="py-24 relative z-10">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1 }} className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-6">Designed For <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e3a5f] to-blue-500">Greatness</span></h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -200 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, margin: "-50px" }} transition={{ duration: 0.8, delay: i * 0.15, type: "spring", bounce: 0.4 }}
                className="group relative p-10 rounded-[3rem] bg-white border border-cyan-200 shadow-[0_0_40px_rgba(34,211,238,0.3)] hover:border-cyan-400 hover:shadow-[0_0_80px_rgba(34,211,238,0.7)] transition-all duration-500 overflow-hidden"
              >
                <img src={feature.img} alt={feature.title} className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-700"></div>
                
                <div className="relative z-10 flex flex-col h-full justify-end">
                  <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center text-[#1e3a5f] mb-8 group-hover:-translate-y-2 group-hover:scale-110 group-hover:bg-[#1e3a5f] group-hover:text-white group-hover:border-transparent transition-all duration-500">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-white transition-colors">{feature.title}</h3>
                  <p className="text-slate-600 text-lg font-medium leading-relaxed group-hover:text-slate-300 transition-colors">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          6. MAGNETIC & GLOWING CTA SECTION
      ════════════════════════════════════════════ */}
      <section className="py-40 relative overflow-hidden">
        <motion.div initial={{ opacity: 0, scale: 0.9, y: 100 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-7xl px-4 lg:px-8 relative z-10 group/cta"
        >
          {/* Intense Outer Glow Aura - Hidden until hovered */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 blur-[80px] opacity-0 group-hover/cta:opacity-60 transition-opacity duration-1000"></div>

          <div className="relative overflow-hidden rounded-[4rem] bg-black text-center p-16 md:p-32 shadow-none group-hover/cta:shadow-[0_0_120px_rgba(34,211,238,0.5)] border border-white/10 group-hover/cta:border-cyan-400/50 transition-all duration-1000">
            
            {/* Blue Background that fades in on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0f1f3a] via-[#1e3a5f] to-[#0f1f3a] opacity-0 group-hover/cta:opacity-100 transition-opacity duration-1000 z-0"></div>

            {/* Professional Background Image Overlay */}
            <img 
              src="/cta_bg.png" 
              alt="Medical Professionals" 
              className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-30 group-hover/cta:opacity-50 group-hover/cta:scale-105 transition-all duration-1000 z-0" 
            />

            {/* Animated Mesh Gradients inside CTA */}
            <motion.div animate={{ rotate: 360, scale: [1, 1.2, 1] }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] bg-blue-400/20 rounded-full blur-[100px] pointer-events-none mix-blend-overlay opacity-0 group-hover/cta:opacity-100 transition-opacity duration-1000 z-0" />
            <motion.div animate={{ rotate: -360, scale: [1, 1.3, 1] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-[20%] -right-[10%] w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-[100px] pointer-events-none mix-blend-overlay opacity-0 group-hover/cta:opacity-100 transition-opacity duration-1000 z-0" />
            
            <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
              <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ type: "spring", delay: 0.4 }}
                className="w-24 h-24 bg-white/10 backdrop-blur-2xl rounded-3xl flex items-center justify-center border border-white/20 mb-10 shadow-[0_0_50px_rgba(30,58,95,0.5)]">
                <Zap size={48} className="text-white" />
              </motion.div>
              
              <h2 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[1.1]">
                Begin Your <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white filter drop-shadow-[0_0_20px_rgba(30,58,95,0.5)]">Legacy</span>
              </h2>
              
              <p className="text-blue-100/90 text-2xl font-medium mb-16 leading-relaxed max-w-2xl mx-auto">
                Join an elite community of medical professionals. Admissions are now open.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center items-center gap-8 w-full">
                <MagneticButton className="relative overflow-hidden w-full sm:w-auto px-16 py-6 rounded-full bg-white text-[#020617] font-black text-xl shadow-[0_0_50px_rgba(255,255,255,0.3)] flex items-center justify-center gap-3 group/btn">
                  <span className="relative z-10 flex items-center gap-2">Apply Online <ArrowRight size={24} className="group-hover/btn:translate-x-2 transition-transform" /></span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-200 to-white opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
                </MagneticButton>
                
                <MagneticButton className="w-full sm:w-auto px-16 py-6 rounded-full border border-white/30 text-white font-black text-xl hover:bg-white/10 transition-colors backdrop-blur-md">
                  Contact Us
                </MagneticButton>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <div className="relative z-50">
      </div>
    </div>
  );
}
