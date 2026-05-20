import { motion } from 'framer-motion';
import { FlaskConical, Monitor, BookOpen, Home, Coffee, ActivitySquare, ShieldCheck, Award, GraduationCap } from 'lucide-react';

const facilities = [
  {
    title: "Advanced Medical Labs",
    desc: "Fully Equipped • Practical Exposure",
    icon: <FlaskConical size={24} className="text-cyan-400" />,
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Virtual Simulation Ward",
    desc: "Hands-on Ward Training • Emergency Skills",
    icon: <ActivitySquare size={24} className="text-cyan-400" />,
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "High-Tech Computer Labs",
    desc: "Med. Software • Fast Internet",
    icon: <Monitor size={24} className="text-cyan-400" />,
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Central Library & Study Center",
    desc: "E-Resources • Silent Study Zones",
    icon: <BookOpen size={24} className="text-cyan-400" />,
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Separate Hostels (Men & Women)",
    desc: "Secure Accommodation • Mess Facility",
    icon: <Home size={24} className="text-cyan-400" />,
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Modern Cafeteria & Dining Hall",
    desc: "Hygienic Food • Social Space",
    icon: <Coffee size={24} className="text-cyan-400" />,
    image: "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?q=80&w=800&auto=format&fit=crop",
  }
];

const nextStepCards = [
  {
    title: "Job-Ready Skill Certification",
    desc: "Gain industry-aligned skills with guaranteed certification in special procedures.",
    badges: ["BMLT Certified Procedures", "DMLT Skill Focus"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Hospital & Lab Tie-ups",
    desc: "Strategic partnerships with 20+ top hospitals for clinical practices and lab opportunities.",
    badges: ["Guaranteed Internship", "Direct Interviews"],
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=600&auto=format&fit=crop"
  }
];

const admissionCards = [
  {
    title: "Transparent Admission Process",
    desc: "Clear guidelines on entry requirements, fees, and deadlines.",
    badges: [{text: "Online Form: Step 1", style: "bg-slate-800 text-blue-300 border-slate-700"}, {text: "OFFLINE COUNSELING", style: "bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-transparent"}],
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Guided Counseling",
    desc: "Personal counseling sessions to help you choose the right healthcare path.",
    badges: [{text: "Meet an Advisor: Step 2", style: "bg-slate-800 text-blue-300 border-slate-700"}, {text: "EXPLORE ADMISSIONS", style: "bg-gradient-to-r from-blue-600 to-cyan-500 text-white border-transparent"}],
    image: "https://images.unsplash.com/photo-1560439514-4e9645039924?q=80&w=600&auto=format&fit=crop"
  }
];

const highlights = [
  {
    title: "Hands-on Practical Focus",
    desc: "Over 70% curriculum focused on practical skill development in simulated ward environments.",
    icon: <ActivitySquare size={28} className="text-blue-600" />
  },
  {
    title: "Experienced Medical Faculty",
    desc: "Guided learning by practicing doctors and senior medical professionals.",
    icon: <GraduationCap size={28} className="text-blue-600" />
  },
  {
    title: "Government Approved Labs",
    desc: "Laboratories recognized and audited by medical boards.",
    icon: <ShieldCheck size={28} className="text-blue-600" />
  },
  {
    title: "Job-Ready Skill Certification",
    desc: "Certification in advanced diagnostics and procedures.",
    icon: <Award size={28} className="text-blue-600" />
  }
];

export default function FacilitiesPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }} className="bg-slate-50 min-h-screen pb-20">
      
      {/* Header */}
      <section className="pt-24 pb-12 sm:pt-32 sm:pb-16 text-center">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight uppercase mb-4">
            APJ INSTITUTE - STATE-OF-THE-ART FACILITIES
          </h1>
          <p className="mx-auto max-w-3xl text-base md:text-lg text-slate-600 font-medium">
            Explore our integrated campus, advanced practical labs, comfortable residential spaces, and student-focused amenities designed for holistic healthcare education.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-8">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative h-64 md:h-[280px] w-full overflow-hidden rounded-2xl shadow-[0_0_30px_rgba(37,99,235,0.25)] hover:shadow-[0_0_60px_rgba(37,99,235,0.55)] transition-all duration-500 cursor-pointer"
              >
                <img 
                  src={facility.image} 
                  alt={facility.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay matching the screenshot */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-90"></div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 p-5 flex items-end gap-4 w-full">
                  <div className="w-12 h-12 rounded-xl border border-white/10 bg-black/40 backdrop-blur-md flex items-center justify-center shrink-0 shadow-lg group-hover:bg-cyan-500/20 transition-colors duration-300">
                    {facility.icon}
                  </div>
                  <div className="flex-1 pb-1">
                    <h3 className="text-white text-lg font-bold mb-1 leading-tight group-hover:text-cyan-300 transition-colors">{facility.title}</h3>
                    <p className="text-blue-100/80 text-sm font-medium tracking-wide">• {facility.desc.split(' • ').join(' • ')}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + (index * 0.1), duration: 0.5 }}
                className="flex items-start gap-4 p-5 rounded-2xl border border-blue-100 bg-white shadow-[0_0_20px_rgba(37,99,235,0.1)] hover:shadow-[0_0_40px_rgba(37,99,235,0.35)] hover:border-blue-300 transition-all duration-500"
              >
                <div className="shrink-0">
                  {highlight.icon}
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold text-sm mb-1.5 leading-tight">{highlight.title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">{highlight.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dark Sections (Page 4 & 5 Content) */}
      <section className="relative py-24 bg-slate-950 overflow-hidden">
        {/* Cinematic Background */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2000&auto=format&fit=crop')] opacity-[0.03] mix-blend-screen object-cover"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
          
          {/* SECTION: Take the Next Step */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Take the Next Step</h2>
              <p className="text-slate-400">Equip yourself with the medical healthcare parameters you need to learn</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {nextStepCards.map((card, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2, duration: 0.6 }}
                  className="flex flex-col sm:flex-row gap-5 p-5 rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 hover:bg-slate-800/80 hover:border-blue-500/50 transition-all duration-500 shadow-[0_0_30px_rgba(37,99,235,0.15)] hover:shadow-[0_0_60px_rgba(37,99,235,0.45)]"
                >
                  <div className="w-full sm:w-2/5 shrink-0 h-48 sm:h-auto rounded-2xl overflow-hidden relative">
                    <img src={card.image} alt={card.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                  </div>
                  <div className="flex flex-col justify-center py-2">
                    <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
                    <p className="text-sm text-slate-300 mb-4 leading-relaxed">{card.desc}</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {card.badges.map((badge, bIdx) => (
                        <span key={bIdx} className="px-3 py-1 text-[10px] font-bold tracking-wider uppercase rounded-full bg-slate-800 text-blue-300 border border-slate-700">
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* SECTION: Admissions & Institutional Overview */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Admissions & Institutional Overview</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {admissionCards.map((card, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2, duration: 0.6 }}
                  className="flex flex-col sm:flex-row gap-5 p-5 rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 hover:bg-slate-800/80 hover:border-blue-500/50 transition-all duration-500 shadow-[0_0_30px_rgba(37,99,235,0.15)] hover:shadow-[0_0_60px_rgba(37,99,235,0.45)]"
                >
                  <div className="w-full sm:w-2/5 shrink-0 h-48 sm:h-auto rounded-2xl overflow-hidden relative">
                    <img src={card.image} alt={card.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                  </div>
                  <div className="flex flex-col justify-center py-2">
                    <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
                    <p className="text-sm text-slate-300 mb-4 leading-relaxed">{card.desc}</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {card.badges.map((badge, bIdx) => (
                        <span key={bIdx} className={`px-3 py-1 text-[10px] font-bold tracking-wider uppercase rounded-full border ${badge.style}`}>
                          {badge.text}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </motion.div>
  );
}
