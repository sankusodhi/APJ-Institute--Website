import { Link } from 'react-router-dom';
import { 
  MapPin, Phone, Mail, 
  Facebook, Twitter, Instagram, Linkedin, Youtube,
  ChevronRight, ArrowRight, HeartPulse
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const handleSubscribe = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing to our newsletter!');
  };

  return (
    <footer className="w-full flex flex-col mt-auto relative z-10">
      {/* Top CTA Banner - Cinematic Admission Banner */}
      <section className="relative w-full overflow-hidden shrink-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f1f3a] via-[#1e3a5f] to-[#0f1f3a]"></div>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-40"></div>
        
        <div className="relative z-10 mx-auto px-4 lg:px-8 py-16 text-center text-white border-b border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <div className="flex flex-col items-center justify-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4 drop-shadow-md">
              Ready to Save Lives?
            </h2>
            <p className="text-base md:text-xl text-blue-100 font-light mb-8 max-w-2xl">
              Take the first step towards a rewarding healthcare career. Our expert admission counselors are ready to guide you.
            </p>
            <Link
              to="/admission"
              className="group inline-flex items-center gap-2 rounded-full bg-[#1e3a5f] px-8 py-4 text-sm font-black text-white shadow-[0_0_30px_rgba(30,58,95,0.5)] hover:bg-[#2a4d75] hover:scale-105 active:scale-95 transition-all duration-300"
            >
              Start Your Admission Process
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Main Footer Block */}
      <section className="bg-[#060a16] text-slate-300 pt-20 pb-10 px-4 lg:px-8 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="mx-auto max-w-7xl relative z-10">
          {/* 4-column Grid */}
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            
            {/* Column 1: Brand & Logo */}
            <div className="flex flex-col">
              <Link to="/" className="flex items-center gap-3 group">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1e3a5f] text-white shadow-[0_0_20px_rgba(30,58,95,0.4)] group-hover:scale-110 transition-transform duration-300">
                  <HeartPulse size={24} className="stroke-[2.5]" />
                </div>
                <div>
                  <h3 className="text-xl font-black leading-none tracking-wide text-white group-hover:text-[#4a7ab5] transition-colors">APJ Institute</h3>
                  <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#4a7ab5] mt-1.5 block">Dantewada</span>
                </div>
              </Link>
              <p className="mt-6 text-sm leading-relaxed text-slate-400 max-w-sm font-light">
                Empowering the next generation of healthcare heroes with world-class paramedical and nursing education, modern labs, and assured placements.
              </p>
              
              {/* Glowing Social Icons */}
              <div className="mt-8 flex gap-3">
                {[
                  { icon: <Facebook size={18} />, color: "hover:bg-blue-600 hover:shadow-[0_0_15px_rgba(37,99,235,0.6)]" },
                  { icon: <Twitter size={18} />, color: "hover:bg-sky-500 hover:shadow-[0_0_15px_rgba(14,165,233,0.6)]" },
                  { icon: <Instagram size={18} />, color: "hover:bg-pink-600 hover:shadow-[0_0_15px_rgba(219,39,119,0.6)]" },
                  { icon: <Linkedin size={18} />, color: "hover:bg-blue-700 hover:shadow-[0_0_15px_rgba(29,78,216,0.6)]" },
                  { icon: <Youtube size={18} />, color: "hover:bg-red-600 hover:shadow-[0_0_15px_rgba(220,38,38,0.6)]" }
                ].map((social, idx) => (
                  <a key={idx} href="#" className={`flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800/80 text-slate-400 border border-white/5 hover:text-white transition-all duration-300 ${social.color}`}>
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="text-base font-bold uppercase tracking-widest text-white border-l-4 border-[#1e3a5f] pl-4 mb-6 drop-shadow-sm">
                Explore
              </h4>
              <ul className="space-y-4 text-sm text-slate-400 font-medium">
                {['Home', 'About Institute', 'Paramedical Courses', 'Nursing Programs', 'Admissions'].map((link) => (
                  <li key={link}>
                    <Link to={link === 'Home' ? '/' : `/${link.split(' ')[0].toLowerCase()}`} className="group inline-flex items-center gap-2 hover:text-[#4a7ab5] transition-colors">
                      <ChevronRight size={14} className="text-slate-600 group-hover:text-[#4a7ab5] group-hover:translate-x-1 transition-all" />
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Resources */}
            <div>
              <h4 className="text-base font-bold uppercase tracking-widest text-white border-l-4 border-[#1e3a5f] pl-4 mb-6 drop-shadow-sm">
                Resources
              </h4>
              <ul className="space-y-4 text-sm text-slate-400 font-medium">
                {['Student Portal', 'Placement Cell', 'Hostel Facility', 'Events & Gallery', 'Fee Structure'].map((link) => (
                  <li key={link}>
                    <Link to="/admission" className="group inline-flex items-center gap-2 hover:text-[#4a7ab5] transition-colors">
                      <ChevronRight size={14} className="text-slate-600 group-hover:text-[#4a7ab5] group-hover:translate-x-1 transition-all" />
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact Us */}
            <div>
              <h4 className="text-base font-bold uppercase tracking-widest text-white border-l-4 border-[#1e3a5f] pl-4 mb-6 drop-shadow-sm">
                Get In Touch
              </h4>
              <ul className="space-y-5 text-sm text-slate-400 font-medium">
                <li className="flex gap-4 items-start group">
                  <div className="w-10 h-10 rounded-lg bg-slate-800/80 border border-white/5 flex items-center justify-center shrink-0 group-hover:bg-blue-900/50 group-hover:border-blue-500/30 transition-colors">
                    <MapPin size={18} className="text-[#4a7ab5]" />
                  </div>
                  <span className="leading-relaxed pt-1">
                    APJ Institute Campus, Sanjay Nagar, Near BSNL Exchange Office, Dantewada (C.G.)
                  </span>
                </li>
                <li className="flex gap-4 items-center group">
                  <div className="w-10 h-10 rounded-lg bg-slate-800/80 border border-white/5 flex items-center justify-center shrink-0 group-hover:bg-blue-900/50 group-hover:border-blue-500/30 transition-colors">
                    <Phone size={18} className="text-[#4a7ab5]" />
                  </div>
                  <span className="pt-1">9243758191, 930761647</span>
                </li>
                <li className="flex gap-4 items-center group">
                  <div className="w-10 h-10 rounded-lg bg-slate-800/80 border border-white/5 flex items-center justify-center shrink-0 group-hover:bg-blue-900/50 group-hover:border-blue-500/30 transition-colors">
                    <Mail size={18} className="text-[#4a7ab5]" />
                  </div>
                  <a href="mailto:info@apjinstitute.edu" className="hover:text-[#4a7ab5] transition-colors pt-1">
                    info@apjinstitute.edu
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="my-12 h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent opacity-50"></div>

          {/* Bottom Area: Newsletter & Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col items-center md:items-start max-w-md w-full">
              <h5 className="text-lg font-bold text-white mb-2">Subscribe to our Newsletter</h5>
              <form onSubmit={handleSubscribe} className="relative w-full group">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  className="w-full bg-slate-900/80 border border-slate-700 rounded-full pl-6 pr-32 py-3.5 text-sm text-slate-200 focus:border-[#1e3a5f] focus:ring-1 focus:ring-[#1e3a5f] focus:outline-none transition-all placeholder-slate-500"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 bottom-1.5 bg-[#1e3a5f] hover:bg-[#2a4d75] text-white font-bold px-6 rounded-full text-sm transition-all duration-300 shadow-[0_0_20px_rgba(30,58,95,0.3)] hover:shadow-[0_0_30px_rgba(30,58,95,0.5)]"
                >
                  Join
                </button>
              </form>
            </div>
            
            <div className="text-center md:text-right text-xs font-medium text-slate-500 tracking-wider">
              <p className="mb-2 hover:text-slate-400 transition-colors">© 2026 APJ Institute Dantewada. All rights reserved.</p>
              <div className="flex items-center justify-center md:justify-end gap-4">
                <Link to="/privacy" className="hover:text-[#4a7ab5] transition-colors">Privacy Policy</Link>
                <Link to="/terms" className="hover:text-[#4a7ab5] transition-colors">Terms of Service</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}