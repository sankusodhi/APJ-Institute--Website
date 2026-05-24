import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiExternalLink, FiCompass, FiLayers, FiImage, FiAward, FiBook, FiArrowRight } from 'react-icons/fi';
import Navbar from '../components/home/Navbar';
import Footer from '../components/home/Footer';

// Importing student portraits (1.jpg to 7.jpg) for the 3D Curved Arc
import student1 from '../1.jpg';
import student2 from '../2.jpg';
import student3 from '../3.jpg';
import student4 from '../4.jpg';
import student5 from '../5.jpg';
import student6 from '../6.jpg';
import student7 from '../7.jpg';

// Importing user's real project medical assets
import docPortrait from '../assets/about/about_doctor_portrait.png';
import labTraining from '../assets/about/about_lab_training.png';
import expertInstructors from '../assets/about/about_expert_instructors.png';
import studentMentorship from '../assets/about/about_student_mentorship.png';
import admissionBg from '../assets/admission_bg.png';
import mainVideo from '../mainvd.mp4';

// Importing standard campus photos
import classroomStudents1 from '../components/home/WhatsApp Image 2026-05-17 at 9.41.09 PM.jpeg';
import classroomStudents2 from '../components/home/WhatsApp Image 2026-05-17 at 9.41.12 PM.jpeg';
import classroomStudents3 from '../components/home/WhatsApp Image 2026-05-17 at 9.41.14 PM.jpeg';
import buildingImage from '../../WhatsApp Image 2026-05-17 at 9.41.22 PM.jpeg';
import labCollageImage from '../../WhatsApp Image 2026-05-17 at 9.41.19 PM.jpeg';
import classroomImage from '../../WhatsApp Image 2026-05-17 at 9.41.02 PM.jpeg';
import posterBanner from '../../WhatsApp Image 2026-05-17 at 9.40.59 PM.jpeg';

// Importing additional project image assets to enrich and densely fill lower sections
import gallery11 from '../11.jpg';
import gallery22 from '../22.jpg';
import gallery33 from '../33.jpg';
import gallery44 from '../44.jpg';
import secImage1 from '../sec1.jpg';
import secImage2 from '../sec2.jpg';

// Importing 8 collage images for Section 3 memory grid showcase
import memory10 from '../10.jpg';
import memory20 from '../20.jpg';
import memory30 from '../30.jpg';
import memory40 from '../40.jpg';
import memory50 from '../50.jpg';
import memory60 from '../60.jpg';
import memory70 from '../70.jpg';
import memory80 from '../80.jpg';

// Array for 3D Perspective Curved Arc Cards
const arcCards = [
  { img: student1, name: "Amit Sahu", course: "BMLT Specialization", transform: "perspective(1200px) rotateY(38deg) translateY(-8px) scale(1.18)" },
  { img: student2, name: "Pooja Patel", course: "DMLT Diagnostics", transform: "perspective(1200px) rotateY(25deg) translateY(4px) scale(1.04)" },
  { img: student3, name: "Rahul Verma", course: "Clinical Pharmacy", transform: "perspective(1200px) rotateY(12deg) translateY(14px) scale(0.95)" },
  { img: student4, name: "Priya Mandavi", course: "Senior Nursing Stream", transform: "perspective(1200px) rotateY(0deg) translateY(18px) scale(0.90)" },
  { img: student5, name: "Karan Dewangan", course: "Ophthalmic Assistant", transform: "perspective(1200px) rotateY(-12deg) translateY(14px) scale(0.95)" },
  { img: student6, name: "Neha Soni", course: "Medical Lab Assistant", transform: "perspective(1200px) rotateY(-25deg) translateY(4px) scale(1.04)" },
  { img: student7, name: "Dr. Alok Sharma", course: "Clinical Pathology Head", transform: "perspective(1200px) rotateY(-38deg) translateY(-8px) scale(1.18)" }
];

// Array for 7 Paramedical Event Slides
const eventSlides = [
  {
    tag: "🎉 ACADEMICS",
    title: "Annual Paramedical Oath Ceremony (Deekshant Samaroh)",
    description: "The solemn white coat and medical oath ceremony welcoming new BMLT and DMLT batches into their clinical journey. Students pledge to uphold patient privacy, clinical ethics, and laboratory diagnostic accuracy under senior health officials.",
    img: gallery44,
    highlights: ["120+ Paramedical Scholars Inducted", "Presided by Senior CMS Doctor"],
    bg: "bg-[#15305b]/5 border-[#15305b]/10"
  },
  {
    tag: "🔬 COMMUNITY SERVICE",
    title: "Free Diagnostics & Community Health Camp",
    description: "APJ Institute's annual community outreach initiative in Dantewada. Paramedical students establish screening stations to test blood glucose, hemoglobin levels, blood group classification, and blood pressure for over 350 rural residents.",
    img: labTraining,
    highlights: ["350+ Free Health Screenings", "Hands-On Clinical Fieldwork Practice"],
    bg: "bg-amber-600/5 border-amber-600/10"
  },
  {
    tag: "🧬 PHARMACY",
    title: "World Pharmacist Day Exhibition",
    description: "Celebrating pharmaceutical sciences with dynamic chemical compounding demonstrations. Students showcase medicine synthesis pathways, modern pharmaceutical dosage formulations, and local herbal pharmacognosy models.",
    img: classroomStudents3,
    highlights: ["20+ Interactive Lab Exhibits", "Highly Appreciated by District Officials"],
    bg: "bg-emerald-600/5 border-emerald-600/10"
  },
  {
    tag: "🏆 SPORTS",
    title: "Annual Sports & Athletics Week (Udaan)",
    description: "Our high-energy inter-batch athletic championship featuring cricket, badminton, volleyball, and track events. A grand campus celebration advocating teamwork, sportsmanship, and physical wellness for future healthcare professionals.",
    img: secImage2,
    highlights: ["6 Major Sports Disciplines", "DMLT Batch Wins Championship Trophy"],
    bg: "bg-purple-600/5 border-purple-600/10"
  },
  {
    tag: "🎓 SEMINARS",
    title: "World Health Day Medical Seminars",
    description: "Expert-led medical seminars covering modern oncology diagnostics, advanced hematology automation, and rural healthcare delivery systems in Chhattisgarh. Prominent medical educators join as keynote speakers.",
    img: expertInstructors,
    highlights: ["5 Keynote Expert Speakers", "Interactive Diagnostics Q&A Forum"],
    bg: "bg-[#15305b]/5 border-[#15305b]/10"
  },
  {
    tag: "🎉 CULTURE",
    title: "Tarang Traditional & Tribal Cultural Fest",
    description: "A vibrant evening celebrating the tribal art forms, folk dances, traditional songs, and cultural heritage of Bastar. Paramedical batches perform standard theatrical plays highlighting public health awareness themes.",
    img: studentMentorship,
    highlights: ["15+ Stage Performances", "Tribal Bastar Dance Highlights"],
    bg: "bg-amber-600/5 border-amber-600/10"
  },
  {
    tag: "🧪 WORKSHOPS",
    title: "Advanced Clinical Laboratory Workshop",
    description: "State-level hands-on training workshop on advanced PCR thermal cycler diagnostics and biochemistry equipment calibration. Mentored by visiting senior research scientists from central pathology institutions.",
    img: labCollageImage,
    highlights: ["Certified Practical Training", "40+ Registered Final-Year Scholars"],
    bg: "bg-emerald-600/5 border-emerald-600/10"
  }
];

// Array for the 8 Spoke Slices inside the Rotating Wedge Wheel
const facultyList = [
  { label: "ANNUAL OATH", img: gallery44, angle: 0 },
  { label: "LAB SCREENING", img: labTraining, angle: 45 },
  { label: "PHARMACY EXHIBIT", img: classroomStudents3, angle: 90 },
  { label: "SPORTS MEET", img: secImage2, angle: 135 },
  { label: "MEDICAL SEMINAR", img: expertInstructors, angle: 180 },
  { label: "CULTURAL FEST", img: studentMentorship, angle: 225 },
  { label: "ADVANCED PCR", img: labCollageImage, angle: 270 },
  { label: "ACADEMICS WING", img: docPortrait, angle: 315 }
];

export default function CinematicGallery() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [wheelRotation, setWheelRotation] = React.useState(0);
  const [activeWedgeIdx, setActiveWedgeIdx] = React.useState(0);
  const [isManual, setIsManual] = React.useState(false);

  const timeoutRef = React.useRef(null);

  // Autoplay for Paramedical Events slide
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === eventSlides.length - 1 ? 0 : prev + 1));
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === eventSlides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? eventSlides.length - 1 : prev - 1));
  };

  // Ambient Slow Continuous Spin loop (mesmerizing 40fps GPU flow)
  React.useEffect(() => {
    if (isManual) return;
    const continuousTimer = setInterval(() => {
      setWheelRotation((prev) => {
        const nextRot = prev - 0.35;
        // Keep active index aligned with closest 45-degree wedge
        const positiveRot = Math.abs(nextRot) % 360;
        const normalizedWedge = Math.round(positiveRot / 45) % facultyList.length;
        setActiveWedgeIdx(normalizedWedge);
        return nextRot;
      });
    }, 25);
    return () => clearInterval(continuousTimer);
  }, [isManual]);

  const triggerManualInteraction = (targetRotation, targetWedgeIdx) => {
    setIsManual(true);
    setWheelRotation(targetRotation);
    setActiveWedgeIdx(targetWedgeIdx);
    
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      // Resume slow continuous rotation from current snap position
      setIsManual(false);
    }, 7000);
  };

  const spinNext = () => {
    // Snap to the next closest 45 degree slice
    const currentAngle = Math.round(wheelRotation / 45) * 45;
    const targetRot = currentAngle - 45;
    const positiveRot = Math.abs(targetRot) % 360;
    const targetIdx = Math.round(positiveRot / 45) % facultyList.length;
    triggerManualInteraction(targetRot, targetIdx);
  };

  const spinPrev = () => {
    // Snap to the previous closest 45 degree slice
    const currentAngle = Math.round(wheelRotation / 45) * 45;
    const targetRot = currentAngle + 45;
    const positiveRot = Math.abs(targetRot) % 360;
    const targetIdx = Math.round(positiveRot / 45) % facultyList.length;
    triggerManualInteraction(targetRot, targetIdx);
  };

  // ---------------- STATE & LOGIC FOR SECTION 4 SHUFFLING LIFESTYLE CARDS ----------------
  const [shuffleIndex, setShuffleIndex] = React.useState(0);
  
  const shuffleData = [
    {
      id: "clinical",
      image: labTraining,
      title: "Clinical Mastery",
      desc: "The standard of modern Diagnostics with hands-on compounding and state-of-the-art laboratory training pathways."
    },
    {
      id: "academic",
      image: student6,
      title: "Academic Focus",
      desc: "Comprehensive academic support systems, library resources, and personalized faculty mentorship."
    },
    {
      id: "practical",
      image: student7,
      title: "Practical Care",
      desc: "Dedicated clinical training, diagnostic operations, and real-world nurse mentorship inside active hospitals."
    }
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setShuffleIndex((prev) => (prev + 1) % 3);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const handleShuffleNext = () => {
    setShuffleIndex((prev) => (prev + 1) % 3);
  };

  const selectWedge = (idx) => {
    // Calculate rotation to snap the clicked wedge smoothly to the active slot
    const currentAngle = Math.round(wheelRotation / 360) * 360;
    const targetRot = currentAngle - (idx * 45);
    triggerManualInteraction(targetRot, idx);
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 font-sans selection:bg-[#15305b]/10 selection:text-[#15305b] overflow-x-hidden">
      
      {/* Fixed Navigation Desk */}
      <div className="relative z-50 bg-slate-900">
        <Navbar />
      </div>

      {/* ---------------- SECTION 1: CURVED 3D TEAM & STUDENT ARC ---------------- */}
      <section className="bg-[#FAF7F0] relative overflow-hidden border-b border-slate-200/60 lg:h-screen lg:min-h-0 lg:flex lg:flex-col lg:justify-center py-20 lg:py-0">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          {/* Top Header Block matching the screenshot style */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans tracking-tight text-[#15305b] font-light leading-tight">
              Empowering Healthcare Leaders, <br />
              <span className="font-extrabold text-slate-900">Explore Dantewada's Finest Paramedical Campus</span>
            </h2>
            <p className="mt-4 text-slate-600 font-light text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
              APJ Institute offers state-approved degrees and diplomas in Medical Laboratory Technology, Pharmacy, and Nursing — cultivating expert clinical skills for immediate hospital careers.
            </p>

            {/* Circular CTA Button matching screenshot */}
            <div className="mt-8 flex justify-center">
              <a
                href="#contact"
                className="inline-flex items-center gap-4 bg-slate-900 hover:bg-slate-950 text-white rounded-full pl-6 pr-2.5 py-2.5 text-xs font-black uppercase tracking-widest transition duration-300 shadow-lg hover:scale-105"
              >
                Enquire For Admissions
                <span className="h-8 w-8 rounded-full bg-white/20 text-white flex items-center justify-center text-xs font-bold shrink-0">
                  <FiArrowRight size={14} className="stroke-[2.5]" />
                </span>
              </a>
            </div>
          </div>

          {/* Curved 3D Perspective Photo Arc */}
          <div className="relative w-full flex justify-center py-12 md:py-16 overflow-x-auto lg:overflow-x-visible scrollbar-none snap-x snap-mandatory pointer-events-auto">
            <div className="flex justify-center items-end gap-2 sm:gap-3 md:gap-4 lg:gap-5 min-w-[900px] lg:min-w-0 pointer-events-auto">
              {arcCards.map((card, index) => (
                <div
                  key={index}
                  style={{ transform: card.transform }}
                  className="w-[125px] sm:w-[145px] md:w-[165px] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-white/60 bg-slate-100 relative group transition-all duration-500 shrink-0 pointer-events-auto hover:!transform hover:perspective-[1000px] hover:!rotate-0 hover:!translate-y-[-16px] hover:!scale-110 hover:z-30 hover:border-[#15305b]/40"
                >
                  <img
                    src={card.img}
                    alt={card.name}
                    className="w-full h-full object-cover select-none pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none" />
                  <div className="absolute bottom-3 left-3 right-3 text-left opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none">
                    <p className="text-[10px] font-black text-white leading-tight truncate uppercase">{card.name}</p>
                    <p className="text-[8px] font-bold text-amber-400 mt-0.5 uppercase tracking-wider">{card.course}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom 3-Column Clinical Features Bar */}
          <div className="mt-16 sm:mt-20 border-t border-slate-300/40 pt-12 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-left">
              
              {/* Feature 1 */}
              <div className="relative md:pr-6">
                <h4 className="text-base font-black text-[#15305b] tracking-tight uppercase">
                  100% Practical Exposure
                </h4>
                <p className="mt-2 text-slate-500 text-xs font-light leading-relaxed">
                  Gain intensive practical bedside and laboratory experience through mandatory training rotations in active primary healthcare hospitals.
                </p>
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-slate-300/40" />
              </div>

              {/* Feature 2 */}
              <div className="relative md:px-6">
                <h4 className="text-base font-black text-[#15305b] tracking-tight uppercase">
                  State-Affiliated Syllabi
                </h4>
                <p className="mt-2 text-slate-500 text-xs font-light leading-relaxed">
                  Study from comprehensive syllabus modules designed and certified directly under the regulations of state health universities.
                </p>
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-slate-300/40" />
              </div>

              {/* Feature 3 */}
              <div className="md:pl-6">
                <h4 className="text-base font-black text-[#15305b] tracking-tight uppercase">
                  Direct Placement Pathways
                </h4>
                <p className="mt-2 text-slate-500 text-xs font-light leading-relaxed">
                  Benefit from our established linkages with diagnostics laboratories, hospital networks, and primary clinical organizations.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ---------------- SECTION 2: PARAMEDICAL EVENT SLIDER SHOWCASE ---------------- */}
      <section className="bg-slate-50 relative overflow-hidden border-b border-slate-100 lg:h-screen lg:min-h-0 lg:flex lg:flex-col lg:justify-center py-20 lg:py-0">
        
        {/* Dynamic circular background gradients */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#15305b]/5 rounded-full blur-[100px] pointer-events-none z-0" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-blue-900/5 rounded-full blur-[100px] pointer-events-none z-0" />

        {/* Top-Left Looping Video Bubble element */}
        <div className="hidden sm:block absolute left-[2%] lg:left-[3%] top-[3%] lg:top-[5%] z-20 w-32 h-32 lg:w-48 lg:h-48 xl:w-56 xl:h-56 rounded-full overflow-hidden border-[6px] lg:border-[8px] border-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] hover:scale-105 transition-all duration-300 pointer-events-auto cursor-pointer">
          <video
            src={mainVideo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

        {/* Top-Right Looping Video Bubble element */}
        <div className="hidden sm:block absolute right-[2%] lg:right-[3%] top-[3%] lg:top-[5%] z-20 w-32 h-32 lg:w-48 lg:h-48 xl:w-56 xl:h-56 rounded-full overflow-hidden border-[6px] lg:border-[8px] border-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] hover:scale-105 transition-all duration-300 pointer-events-auto cursor-pointer">
          <video
            src={mainVideo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.3em] text-[#15305b] bg-[#15305b]/5 px-3.5 py-1.5 rounded-full border border-[#15305b]/10 mb-4">
              🎉 CAMPUS LIFE IN ACTION
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight uppercase leading-tight font-sans">
              APJ Campus Events & Galas
            </h2>
            <p className="mt-3 text-slate-500 text-sm sm:text-base font-light max-w-xl mx-auto">
              Swipe through the milestones, cultural workshops, sports weeks, and community diagnostics camps that shape our active student ecosystem.
            </p>
          </div>

          {/* Premium Custom Split-Slider Grid Container - Expanded Width & Horizontal Slide Viewport */}
          <div className="relative max-w-[1360px] mx-auto overflow-hidden">
            
            <div className="w-full overflow-hidden rounded-[2.5rem] bg-white border border-slate-100 shadow-2xl">
              
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {eventSlides.map((slide, idx) => (
                  <div 
                    key={idx}
                    className="w-full shrink-0 p-6 sm:p-8 lg:p-10"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                      
                      {/* Left Side: Event Image Frame */}
                      <div className="lg:col-span-7 relative rounded-2xl overflow-hidden shadow-md min-h-[260px] sm:min-h-[380px] lg:min-h-[420px] bg-slate-100 group">
                        <img
                          src={slide.img}
                          alt={slide.title}
                          className="absolute inset-0 w-full h-full object-cover transition duration-700 scale-100 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
                        
                        {/* Floating Category Badge */}
                        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow border border-slate-100 text-[9px] font-black text-[#15305b] uppercase tracking-wider">
                          {slide.tag}
                        </div>
                      </div>

                      {/* Right Side: Event Details Panel */}
                      <div className="lg:col-span-5 flex flex-col justify-between text-left py-2 sm:py-4">
                        
                        {/* Header Information */}
                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <span className={`px-3 py-1 rounded-full border text-[9px] font-black uppercase tracking-wider ${slide.bg}`}>
                              Active Campus Gala
                            </span>
                          </div>

                          <h3 className="text-xl sm:text-2xl font-black text-[#15305b] uppercase tracking-tight leading-snug mt-2">
                            {slide.title}
                          </h3>

                          <p className="mt-4 text-slate-500 font-light text-xs sm:text-sm leading-relaxed">
                            {slide.description}
                          </p>
                        </div>

                        {/* Bullets Highlight List */}
                        <div className="my-6 pt-6 border-t border-slate-100 space-y-3">
                          {slide.highlights.map((bullet, bulletIdx) => (
                            <div key={bulletIdx} className="flex items-center gap-3">
                              <span className="h-5 w-5 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center text-[10px] font-black shrink-0">
                                ✓
                              </span>
                              <span className="text-xs font-bold text-slate-700 leading-tight">{bullet}</span>
                            </div>
                          ))}
                        </div>

                        {/* Slider Controls / Navigation Panel inside the slide */}
                        <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                          
                          {/* Dot Indicators */}
                          <div className="flex gap-1.5">
                            {eventSlides.map((_, dotIdx) => (
                              <button
                                key={dotIdx}
                                onClick={() => setCurrentSlide(dotIdx)}
                                className={`h-2 rounded-full transition-all duration-300 ${
                                  currentSlide === dotIdx ? "w-6 bg-[#15305b]" : "w-2 bg-slate-200 hover:bg-slate-300"
                                }`}
                              />
                            ))}
                          </div>

                          {/* Arrow Buttons */}
                          <div className="flex gap-2">
                            <button
                              onClick={prevSlide}
                              className="h-10 w-10 rounded-full border border-slate-200 bg-white text-slate-600 hover:text-[#15305b] hover:border-[#15305b] hover:bg-slate-50 transition flex items-center justify-center shadow-sm"
                            >
                              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                              </svg>
                            </button>
                            <button
                              onClick={nextSlide}
                              className="h-10 w-10 rounded-full border border-slate-200 bg-white text-slate-600 hover:text-[#15305b] hover:border-[#15305b] hover:bg-slate-50 transition flex items-center justify-center shadow-sm"
                            >
                              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                              </svg>
                            </button>
                          </div>

                        </div>

                      </div>

                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ---------------- SECTION 3: EXACT RENEW-STYLE SEMI-CIRCLE WHEEL SHOWCASE (Pixel-Perfect Replicated) ---------------- */}
      <section className="bg-[#15305b] text-white relative overflow-hidden select-none lg:h-screen lg:min-h-0 lg:flex lg:flex-col lg:justify-center py-24 sm:py-32 lg:py-0">
        
        {/* Top-Left Back Arrow Button exactly from screenshot */}
        <div className="absolute top-8 left-8 z-50">
          <button className="h-14 w-14 rounded-3xl bg-white text-[#15305b] flex items-center justify-center shadow-[0_4px_30px_rgba(0,0,0,0.2)] transition hover:scale-105 active:scale-95 duration-200">
            <svg className="h-6 w-6 stroke-[3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>
        </div>

        {/* Absolute Outer Decorative Glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-white/5 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-white/5 blur-[120px] pointer-events-none" />

        {/* Dynamic Navigation Controllers placed on the bottom right corner */}
        <div className="absolute bottom-8 right-8 z-50 flex gap-3">
          <button
            onClick={spinPrev}
            className="h-12 w-12 rounded-2xl bg-[#15305b]/30 hover:bg-[#15305b]/50 text-white flex items-center justify-center shadow-lg transition duration-200 active:scale-90 border border-white/20"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={spinNext}
            className="h-12 w-12 rounded-2xl bg-white text-[#15305b] flex items-center justify-center shadow-lg transition duration-200 active:scale-90 hover:bg-slate-50"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Full-width responsive Layout Container */}
        <div className="w-full relative">
          
          {/* 
            Wheel Viewport Container.
            Centers the rotation axis exactly at `left-0 top-1/2`.
            Offsets by `-translate-x-[45%]` so a gorgeous semi-circular ring fans out on the right.
          */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full flex items-center">
            
            {/* 1. THE ROTATING SPHERE VIEWPORT (Z-10) - Concentrically Centered & Scaled Up */}
            <div 
              className="absolute left-0 top-1/2 rounded-full border-[12px] border-white bg-white shadow-[0_0_80px_rgba(0,0,0,0.25)] overflow-hidden pointer-events-auto w-[740px] h-[740px] sm:w-[920px] sm:h-[920px] lg:w-[1080px] lg:h-[1080px]"
              style={{ 
                transform: `translate(-50%, -50%) rotate(${wheelRotation}deg)`, 
                transition: isManual ? 'transform 1000ms cubic-bezier(0.19, 1, 0.22, 1)' : 'none' 
              }}
            >
              
              {/* Seamless mathematically fanned pie wedges separating each image */}
              {facultyList.map((faculty, idx) => {
                const isActive = activeWedgeIdx === idx;
                return (
                  <div
                    key={idx}
                    className="absolute inset-0 origin-center pointer-events-auto cursor-pointer"
                    style={{ 
                      transform: `rotate(${faculty.angle}deg)`
                    }}
                    onClick={() => selectWedge(idx)}
                  >
                    
                    {/* 
                      Mathematical Pie Wedge Sector via CSS clip-path:
                      Fans from center (50% 50%) to the outer corners of a 45 degree top sector.
                    */}
                    <div 
                      className={`absolute inset-0 transition-all duration-500 overflow-hidden ${
                        isActive 
                          ? "brightness-105 contrast-105 scale-102" 
                          : "brightness-90 hover:brightness-100 transition-all"
                      }`}
                      style={{ 
                        clipPath: 'polygon(50% 50%, 28.5% 0%, 71.5% 0%)' 
                      }}
                    >
                      {/* Image stretched inside the wedge top half (h-[60%] to prevent gaps with hub) */}
                      <img 
                        src={faculty.img} 
                        alt={faculty.label} 
                        className="absolute top-0 left-0 w-full h-[60%] object-cover pointer-events-none select-none transition-transform duration-700 hover:scale-105"
                      />
                      
                      {/* Dark overlay sheet inside the wedge */}
                      <div className="absolute top-0 left-0 w-full h-[60%] bg-gradient-to-b from-black/25 via-transparent to-black/5 pointer-events-none" />
 
                      {/* 
                        Radial Pill Label Badge aligned centered inside the slice,
                        matching the exact layout style from the screenshot!
                      */}
                      <div className="absolute top-[8%] left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
                        <span className={`text-[8px] sm:text-[10px] font-black uppercase tracking-[0.25em] px-3.5 py-1.5 rounded-full shadow-2xl whitespace-nowrap transition-colors duration-300 ${
                          isActive 
                            ? "bg-white text-[#15305b] font-black shadow-lg" 
                            : "bg-[#15305b] text-white border border-white/20"
                        }`}>
                          {faculty.label}
                        </span>
                      </div>
 
                    </div>
 
                    {/* Fanning bold black divider borders to cleanly separate wedges exactly like screenshot */}
                    <div 
                      className="absolute top-1/2 left-1/2 w-[650px] h-[8px] bg-white origin-left pointer-events-none -translate-y-1/2"
                      style={{ transform: `rotate(${22.5}deg)` }}
                    />
                    <div 
                      className="absolute top-1/2 left-1/2 w-[650px] h-[8px] bg-white origin-left pointer-events-none -translate-y-1/2"
                      style={{ transform: `rotate(${-22.5}deg)` }}
                    />
 
                  </div>
                );
              })}
 
            </div>
 
            {/* 2. LAYERED STATIC SEMI-CIRCULAR HUB (Z-30) - Concentrically Centered & Scaled Up */}
            <div 
              className="absolute left-0 top-1/2 rounded-full bg-white border-[12px] border-white z-30 shadow-[10px_0_50px_rgba(21,48,91,0.15)] pointer-events-none w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] lg:w-[640px] lg:h-[640px]"
              style={{ 
                transform: `translate(-50%, -50%)` 
              }}
            >
              {/* GALLERY bold text beautifully aligned in the visible right half of the semi-circle */}
              <div className="absolute right-5 sm:right-8 lg:right-12 top-0 w-auto h-full flex items-center justify-end whitespace-nowrap">
                <span className="text-[#15305b] font-black text-xl sm:text-2xl lg:text-3.5xl xl:text-4xl tracking-[0.18em] uppercase select-none leading-none">
                  GALLERY
                </span>
              </div>
            </div>
 
            {/* Hub concentric edge border rings */}
            <div 
              className="absolute left-0 top-1/2 rounded-full border border-white/20 pointer-events-none z-40 w-[420px] h-[420px] sm:w-[520px] sm:h-[520px] lg:w-[660px] lg:h-[660px]"
              style={{ 
                transform: `translate(-50%, -50%)` 
              }}
            />

          </div>

          {/* Vertical APJ INSTITUTE watermark text channel in the empty space gap */}
          <div className="absolute left-[34%] lg:left-[36%] xl:left-[36.5%] top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col items-center justify-center select-none pointer-events-none font-black text-3xl lg:text-4.5xl xl:text-5xl tracking-widest text-white uppercase gap-1.5 sm:gap-2 drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)]">
            <span>A</span>
            <span>P</span>
            <span>J</span>
            <div className="h-6 sm:h-8" /> {/* Spacing */}
            <span>I</span>
            <span>N</span>
            <span>S</span>
            <span>T</span>
            <span>I</span>
            <span>T</span>
            <span>U</span>
            <span>T</span>
            <span>E</span>
          </div>

          {/* 3. RIGHT-SIDE EXQUISITE POLAROID/ART GRID SHOWCASE of the 8 images (10.jpg to 80.jpg) */}
          <div className="relative z-40 ml-auto mr-4 sm:mr-6 lg:mr-8 xl:mr-12 w-full lg:w-[50%] xl:w-[54%] mt-[460px] sm:mt-[560px] lg:mt-0 px-4 sm:px-6 pointer-events-auto">
            
            {/* Elegant Header Text matching the Polaroid / memory book theme */}
            <div className="mb-8 select-none">
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-white/50 bg-white/5 px-3.5 py-1.5 rounded-lg border border-white/10">
                📸 CAMPUS MEMORIES & ACTIVITIES
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight mt-3 uppercase">
                Life at APJ Dantewada
              </h3>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-light mt-2 max-w-lg">
                Explore our high-quality visual memory collections, clinical exhibitions, sport meets, student festivals, and interactive classroom learning portfolios.
              </p>
            </div>

            {/* Premium Bento-style Grid of the 8 White Polaroid Art Frames */}
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-3 xl:gap-4">
              
              {/* Photo Card 1: 10.jpg */}
              <div className="bg-white border border-slate-100 rounded-[24px] p-2.5 sm:p-3.5 shadow-[0_15px_40px_rgba(0,0,0,0.3)] hover:shadow-white/10 hover:-translate-y-2 hover:scale-[1.03] transition-all duration-300 group select-none">
                <div className="rounded-xl overflow-hidden aspect-[4/3] bg-slate-900 shadow-inner">
                  <img src={memory10} alt="Campus Event 10" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="mt-2.5 text-center">
                  <span className="text-[10px] sm:text-xs font-bold text-slate-800 tracking-wide uppercase">Clinical Expo</span>
                </div>
              </div>

              {/* Photo Card 2: 20.jpg */}
              <div className="bg-white border border-slate-100 rounded-[24px] p-2.5 sm:p-3.5 shadow-[0_15px_40px_rgba(0,0,0,0.3)] hover:shadow-white/10 hover:-translate-y-2 hover:scale-[1.03] transition-all duration-300 group select-none">
                <div className="rounded-xl overflow-hidden aspect-[4/3] bg-slate-900 shadow-inner">
                  <img src={memory20} alt="Campus Event 20" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="mt-2.5 text-center">
                  <span className="text-[10px] sm:text-xs font-bold text-slate-800 tracking-wide uppercase">Academic Meet</span>
                </div>
              </div>

              {/* Photo Card 3: 30.jpg */}
              <div className="bg-white border border-slate-100 rounded-[24px] p-2.5 sm:p-3.5 shadow-[0_15px_40px_rgba(0,0,0,0.3)] hover:shadow-white/10 hover:-translate-y-2 hover:scale-[1.03] transition-all duration-300 group select-none">
                <div className="rounded-xl overflow-hidden aspect-[4/3] bg-slate-900 shadow-inner">
                  <img src={memory30} alt="Campus Event 30" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="mt-2.5 text-center">
                  <span className="text-[10px] sm:text-xs font-bold text-slate-800 tracking-wide uppercase">Youth Fest</span>
                </div>
              </div>

              {/* Photo Card 4: 40.jpg */}
              <div className="bg-white border border-slate-100 rounded-[24px] p-2.5 sm:p-3.5 shadow-[0_15px_40px_rgba(0,0,0,0.3)] hover:shadow-white/10 hover:-translate-y-2 hover:scale-[1.03] transition-all duration-300 group select-none">
                <div className="rounded-xl overflow-hidden aspect-[4/3] bg-slate-900 shadow-inner">
                  <img src={memory40} alt="Campus Event 40" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="mt-2.5 text-center">
                  <span className="text-[10px] sm:text-xs font-bold text-slate-800 tracking-wide uppercase">Lab Seminars</span>
                </div>
              </div>

              {/* Photo Card 5: 50.jpg */}
              <div className="bg-white border border-slate-100 rounded-[24px] p-2.5 sm:p-3.5 shadow-[0_15px_40px_rgba(0,0,0,0.3)] hover:shadow-white/10 hover:-translate-y-2 hover:scale-[1.03] transition-all duration-300 group select-none">
                <div className="rounded-xl overflow-hidden aspect-[4/3] bg-slate-900 shadow-inner">
                  <img src={memory50} alt="Campus Event 50" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="mt-2.5 text-center">
                  <span className="text-[10px] sm:text-xs font-bold text-slate-800 tracking-wide uppercase">Sports Day</span>
                </div>
              </div>

              {/* Photo Card 6: 60.jpg */}
              <div className="bg-white border border-slate-100 rounded-[24px] p-2.5 sm:p-3.5 shadow-[0_15px_40px_rgba(0,0,0,0.3)] hover:shadow-white/10 hover:-translate-y-2 hover:scale-[1.03] transition-all duration-300 group select-none">
                <div className="rounded-xl overflow-hidden aspect-[4/3] bg-slate-900 shadow-inner">
                  <img src={memory60} alt="Campus Event 60" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="mt-2.5 text-center">
                  <span className="text-[10px] sm:text-xs font-bold text-slate-800 tracking-wide uppercase">Cultural Gala</span>
                </div>
              </div>

              {/* Photo Card 7: 70.jpg */}
              <div className="bg-white border border-slate-100 rounded-[24px] p-2.5 sm:p-3.5 shadow-[0_15px_40px_rgba(0,0,0,0.3)] hover:shadow-white/10 hover:-translate-y-2 hover:scale-[1.03] transition-all duration-300 group select-none">
                <div className="rounded-xl overflow-hidden aspect-[4/3] bg-slate-900 shadow-inner">
                  <img src={memory70} alt="Campus Event 70" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="mt-2.5 text-center">
                  <span className="text-[10px] sm:text-xs font-bold text-slate-800 tracking-wide uppercase">Annual Meetup</span>
                </div>
              </div>

              {/* Photo Card 8: 80.jpg */}
              <div className="bg-white border border-slate-100 rounded-[24px] p-2.5 sm:p-3.5 shadow-[0_15px_40px_rgba(0,0,0,0.3)] hover:shadow-white/10 hover:-translate-y-2 hover:scale-[1.03] transition-all duration-300 group select-none">
                <div className="rounded-xl overflow-hidden aspect-[4/3] bg-slate-900 shadow-inner">
                  <img src={memory80} alt="Campus Event 80" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="mt-2.5 text-center">
                  <span className="text-[10px] sm:text-xs font-bold text-slate-800 tracking-wide uppercase">Farewell Celebration</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ---------------- SECTION 4: HIGH-END CINEMATIC LIFESTYLE PORTFOLIO (Ditto Reference Screenshot) ---------------- */}
      <section className="bg-[#FAF7F0] relative overflow-hidden border-t border-slate-200/60 lg:h-screen lg:min-h-0 lg:flex lg:flex-col lg:justify-center py-20 lg:py-0 select-none">
        
        {/* Inline CSS styling injection for premium micro-animations */}
        <style>{`
          @keyframes slideFadeIn {
            from {
              opacity: 0.5;
              filter: blur(4px);
              transform: scale(0.97);
            }
            to {
              opacity: 1;
              filter: blur(0);
              transform: scale(1);
            }
          }
          .animate-slide-fade {
            animation: slideFadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
        `}</style>

        {/* Curved Orange Spline flowing horizontally behind components */}
        <div className="absolute inset-x-0 w-full h-[300px] top-[40%] sm:top-[45%] pointer-events-none z-0">
          <svg className="w-full h-full" fill="none" viewBox="0 0 1440 300" preserveAspectRatio="none">
            <path
              d="M -50,150 C 250,50 450,260 720,150 C 990,40 1190,250 1490,150"
              stroke="#FF7A30"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Scattered Sparkle Stars */}
        <div className="absolute left-[15%] top-[35%] z-10 pointer-events-none animate-pulse">
          <svg className="w-8 h-8 text-slate-800" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
          </svg>
        </div>
        <div className="absolute right-[22%] top-[38%] z-10 pointer-events-none animate-pulse">
          <svg className="w-6 h-6 text-slate-800" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
          </svg>
        </div>
        <div className="absolute right-[46%] bottom-[12%] z-10 pointer-events-none animate-pulse">
          <svg className="w-7 h-7 text-slate-800" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
          </svg>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
          
          {/* Main Editorial Serif Header matching exact typography and smiley */}
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-sans tracking-tight text-slate-900 font-light leading-tight text-center max-w-4xl select-none mb-12">
            Learning is nothing <br /> but a 
            <span className="inline-flex items-center justify-center mx-2.5 sm:mx-4 transform translate-y-1 sm:translate-y-2">
              <svg className="w-12 h-12 sm:w-16 sm:h-16 lg:w-[4.5rem] lg:h-[4.5rem] text-slate-800 stroke-[1.8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 9h.01M15 9h.01M9 15c1.5 2 4.5 2 6 0" />
              </svg>
            </span>
            choice
          </h2>

          {/* Three-Capsule Horizontal Layout with exact screenshot elements */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-16 w-full mt-4">
            
            {/* Left Capsule (Vertical, Rounded-Full) */}
            <div className="w-[150px] sm:w-[190px] lg:w-[230px] aspect-[1/1.6] rounded-[100px] overflow-hidden border-[6px] border-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] bg-slate-100 shrink-0 transform -rotate-2 hover:rotate-0 transition duration-500">
              <img
                key={shuffleData[(shuffleIndex + 2) % 3].id}
                src={shuffleData[(shuffleIndex + 2) % 3].image}
                alt="Left Shuffling Portrait"
                className="w-full h-full object-cover select-none pointer-events-none animate-slide-fade"
              />
            </div>

            {/* Center Capsule Piece (Large center focus with circular cutout and text) */}
            <div className="w-[250px] sm:w-[300px] lg:w-[350px] aspect-[1/1.5] rounded-[100px] sm:rounded-[120px] bg-[#EAE5D9] border-[8px] border-white shadow-[0_25px_60px_rgba(0,0,0,0.18)] p-2.5 sm:p-3.5 flex flex-col justify-between relative shrink-0">
              
              {/* Circular Cutout Container */}
              <div className="rounded-full overflow-hidden aspect-square border-[5px] border-white shadow-inner bg-slate-900 w-full relative">
                <img
                  key={shuffleData[shuffleIndex].id}
                  src={shuffleData[shuffleIndex].image}
                  alt="Center Shuffling Cutout"
                  className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none animate-slide-fade"
                />
              </div>

              {/* Text Description Block */}
              <div key={shuffleData[shuffleIndex].id} className="text-left px-5 sm:px-7 py-3 sm:py-5 select-none animate-slide-fade">
                <h4 className="font-serif italic text-lg sm:text-xl lg:text-2xl text-slate-800 font-light">
                  {shuffleData[shuffleIndex].title}
                </h4>
                <p className="text-[9px] sm:text-[11px] lg:text-xs text-slate-600 font-light mt-1.5 leading-relaxed">
                  {shuffleData[shuffleIndex].desc}
                </p>
              </div>

              {/* Interactive circular finger-tap pointer exactly from screenshot */}
              <div 
                onClick={handleShuffleNext}
                className="absolute -right-6 sm:w-16 sm:h-16 lg:w-20 lg:h-20 w-14 h-14 rounded-full bg-[#2C2C2C] text-white flex flex-col items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 pointer-events-auto cursor-pointer bottom-[28%] z-20 group"
              >
                {/* Small horizontal left arrow and tap hand pointer */}
                <div className="flex flex-col items-center justify-center gap-0.5">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF7A30] stroke-[3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  <svg className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 text-white/90" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7 10H3v2h4v-2zm0 4H3v2h4v-2z" />
                  </svg>
                </div>
              </div>

            </div>

            {/* Right Capsule (Vertical, Rounded-Full with layered badges) */}
            <div className="w-[150px] sm:w-[190px] lg:w-[230px] aspect-[1/1.6] rounded-[100px] overflow-hidden border-[6px] border-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] bg-slate-100 shrink-0 transform rotate-2 hover:rotate-0 transition duration-500 relative">
              <img
                key={shuffleData[(shuffleIndex + 1) % 3].id}
                src={shuffleData[(shuffleIndex + 1) % 3].image}
                alt="Right Shuffling Portrait"
                className="w-full h-full object-cover select-none pointer-events-none animate-slide-fade"
              />
              
              {/* Overlay Fullscreen Diagonal Arrow Badge */}
              <div 
                onClick={handleShuffleNext}
                className="absolute bottom-5 left-5 bg-white/90 backdrop-blur-md w-11 h-11 sm:w-13 sm:h-13 rounded-2xl shadow-lg border border-slate-100 flex items-center justify-center hover:scale-105 transition duration-200 cursor-pointer pointer-events-auto z-20 active:scale-95"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-slate-800 stroke-[2.2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4h4M20 8V4h-4M4 16v4h4M20 16v4h-4" />
                </svg>
              </div>

            </div>

          </div>

          {/* Bottom CTA Pill Badge matching screenshot footer */}
          <div className="mt-14 sm:mt-16 w-full flex justify-end max-w-5xl">
            <div className="flex items-center gap-3 bg-white/70 backdrop-blur-md px-5 py-2.5 rounded-full shadow-md border border-white/60 pointer-events-auto cursor-pointer hover:bg-white transition duration-200">
              <span className="text-[10px] font-black uppercase tracking-wider text-slate-800">
                See All Campus Portfolios
              </span>
              <div className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center">
                <svg className="w-3.5 h-3.5 stroke-[3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 5: THE ARCHIVAL JOURNAL & CAMPUS ALBUMS (DÉLEYA High-Fashion Visual Concept Grid) ---------------- */}
      <section className="bg-[#F2F1ED] relative overflow-hidden w-full select-none p-0 m-0 border-t border-slate-200/60 pb-24">
        
        {/* Visual Concept Widescreen Header Block */}
        <div className="flex flex-col items-center justify-center text-center pt-24 pb-16 relative z-10 px-4 bg-[#F2F1ED]">
          <h2 className="font-serif text-[#4d0912] text-6xl sm:text-7xl lg:text-9xl font-light tracking-[0.25em] leading-none select-none uppercase">
            VISUAL
          </h2>
          <div className="mt-4 sm:mt-6 bg-[#D8D4CC]/60 backdrop-blur-md px-6 py-2 rounded-md shadow-sm border border-[#C5BFAF]/30">
            <span className="text-slate-800 text-xs sm:text-sm font-sans tracking-[0.15em] font-medium block">
              APJ GALLERY CONCEPT
            </span>
          </div>
        </div>

        {/* Four Floating Stories Circles Row */}
        <div className="w-full flex justify-center bg-[#F2F1ED] pb-20 relative z-10 px-4">
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10 max-w-5xl">
            {/* Circle 1: Split Vertical (B&W portrait / Maroon text block) */}
            <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden border-2 border-white/60 shadow-lg flex relative hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="w-1/2 h-full bg-[#fcfbf9] overflow-hidden">
                <img src={student1} className="w-full h-full object-cover object-top grayscale brightness-90 contrast-125" alt="T1_L" />
              </div>
              <div className="w-1/2 h-full bg-[#4d0912] flex flex-col justify-center px-1.5 text-left select-none">
                <span className="text-[7.5px] sm:text-[9px] text-[#E5D5C5] font-black font-sans leading-none tracking-widest uppercase">
                  CAMPUS
                </span>
                <span className="text-[7.5px] sm:text-[9px] text-[#E5D5C5] font-black font-sans leading-none tracking-widest uppercase mt-0.5">
                  LIFE
                </span>
              </div>
            </div>

            {/* Circle 2: Portrait of Woman sitting in chair with maroon backdrop */}
            <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden border-2 border-white/60 shadow-lg relative hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="absolute inset-0 bg-[#4d0912]/40 mix-blend-multiply z-10" />
              <img src={student2} className="w-full h-full object-cover object-top contrast-110 brightness-95" alt="T2" />
            </div>

            {/* Circle 3: Solid Maroon Circle with "ОТЗЫВЫ" (Reviews) */}
            <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden border-2 border-white/60 shadow-lg bg-[#4d0912] flex items-center justify-center select-none hover:scale-105 transition-all duration-300 cursor-pointer">
              <span className="text-[#E5D5C5] text-[10px] sm:text-[11px] lg:text-xs font-black font-sans tracking-[0.18em] uppercase">
                REVIEWS
              </span>
            </div>

            {/* Circle 4: Quilted Leather Grid Texture with "DÉLEYA" */}
            <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden border-2 border-white/60 shadow-lg relative flex items-center justify-center hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="absolute inset-0 bg-[#4d0912]/85 mix-blend-multiply z-0" />
              <img src={labTraining} className="absolute w-full h-full object-cover scale-150 grayscale blur-[1px] opacity-75" alt="T4_BG" />
              <span className="relative z-10 text-[#E5D5C5] text-[10px] sm:text-[11px] lg:text-xs font-serif font-bold tracking-[0.25em] uppercase">
                APJ INST.
              </span>
            </div>
          </div>
        </div>

        {/* 100% Filled Edge-to-Edge 3x3 Custom Grid Collage */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 p-0 m-0 border-t border-l border-slate-200/60 relative z-10">
          
          {/* Card 1: DÉLEYA Large Serif Typography Block */}
          <div className="bg-white p-8 sm:p-12 relative overflow-hidden border-r border-b border-slate-200/60 flex flex-col justify-center items-center h-[380px] hover:bg-[#FAF9F5] transition duration-300">
            <div className="text-center select-none">
              <h3 className="font-serif text-slate-900 text-5xl sm:text-6xl font-light tracking-[0.2em] uppercase leading-none">
                APJ
              </h3>
              <h3 className="font-serif text-slate-900 text-4xl sm:text-5xl font-light tracking-[0.12em] uppercase leading-none mt-3">
                INST.
              </h3>
              <div className="h-[1px] w-12 bg-slate-300 mx-auto my-6" />
              <p className="text-[9.5px] sm:text-[10.5px] text-slate-500 font-sans tracking-[0.1em] font-medium uppercase">
                Education with Purpose
              </p>
            </div>
          </div>

          {/* Card 2: High-Fashion Close-up Portrait (Row 1 Middle) */}
          <div className="bg-white relative overflow-hidden border-r border-b border-slate-200/60 h-[380px] group cursor-pointer">
            <div className="absolute inset-0 bg-[#2d1c1a]/25 mix-blend-multiply z-10 group-hover:bg-transparent transition duration-500" />
            <img src={student3} className="w-full h-full object-cover object-top grayscale brightness-[0.78] contrast-125 transition duration-700 group-hover:scale-105" alt="C2" />
          </div>

          {/* Card 3: Burgundy "New Trend" Silhouette Showcase (Row 1 Right) */}
          <div className="bg-[#4d0912] p-6 sm:p-8 relative overflow-hidden border-r border-b border-slate-200/60 flex h-[380px] justify-between items-center hover:bg-[#43070f] transition duration-300">
            <div className="h-full flex items-center select-none pt-8">
              <span className="font-serif italic text-[#E5D5C5] text-2xl sm:text-3xl tracking-[0.05em] block transform -rotate-90 origin-left whitespace-nowrap opacity-90 uppercase">
                new trend
              </span>
            </div>
            <div className="w-[58%] h-[85%] rounded-md overflow-hidden shadow-2xl border border-white/10 relative">
              <div className="absolute inset-0 bg-[#4d0912]/30 mix-blend-color z-10" />
              <img src={docPortrait} className="w-full h-full object-cover object-top grayscale brightness-75 contrast-125" alt="C3" />
            </div>
          </div>

          {/* Card 4: Dark Violet Staggered Portrait & Manifesto Overlay (Row 2 Left) */}
          <div className="bg-white relative overflow-hidden border-r border-b border-slate-200/60 h-[380px] group flex flex-col justify-end p-6 cursor-pointer">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10" />
              <img src={student4} className="w-full h-full object-cover object-top contrast-115 brightness-90 group-hover:scale-105 transition duration-700" alt="C4" />
            </div>
            <div className="relative z-20 select-none max-w-xs">
              <p className="text-[10px] sm:text-[11px] text-[#F3EFE9] font-sans font-black uppercase tracking-[0.15em] leading-relaxed text-left drop-shadow-sm">
                Empowering clinical safety, nursing values, and medical care excellence
              </p>
            </div>
          </div>

          {/* Card 5: Dark Burgundy Quilted Texture Serif Logo (Row 2 Middle) */}
          <div className="bg-[#4d0912] p-8 relative overflow-hidden border-r border-b border-slate-200/60 flex flex-col justify-center items-center h-[380px] hover:bg-[#43070f] transition duration-300 select-none">
            <div className="absolute inset-0 opacity-40 mix-blend-multiply bg-cover bg-center" style={{ backgroundImage: `url(${labTraining})` }} />
            <div className="absolute inset-0 bg-gradient-to-br from-[#4d0912]/95 via-[#3d060c]/98 to-black/90 z-0" />
            <h4 className="relative z-10 font-serif text-[#E5D5C5] text-3xl sm:text-4xl font-light tracking-[0.15em] uppercase">
              APJ INSTITUTE
            </h4>
          </div>

          {/* Card 6: White Luxury Handbag & Philosophy Layout (Row 2 Right) */}
          <div className="bg-white p-6 sm:p-8 relative overflow-hidden border-r border-b border-slate-200/60 flex h-[380px] justify-between items-center hover:bg-[#FAF9F5] transition duration-300">
            <div className="w-[50%] flex flex-col justify-between h-[85%] py-2 text-left">
              <p className="text-[9.5px] sm:text-[10.5px] text-slate-500 font-sans leading-relaxed text-justify tracking-wide font-medium">
                Providing comprehensive healthcare credentials, nursing diagnostics facilities, and bedside training programs to form expert clinical specialists.
              </p>
              <span className="font-serif italic text-slate-900 text-[11px] sm:text-xs font-black tracking-widest mt-4 uppercase block">
                APJ INSTITUTE
              </span>
            </div>
            <div className="w-[45%] h-[80%] rounded-md overflow-hidden border border-slate-100 shadow-md">
              <img src={studentMentorship} className="w-full h-full object-cover contrast-110 brightness-95" alt="C6" />
            </div>
          </div>

          {/* Card 7: High-Contrast Close-up Profile (Row 3 Left) */}
          <div className="bg-white relative overflow-hidden border-r border-b border-slate-200/60 h-[380px] group cursor-pointer">
            <div className="absolute inset-0 bg-[#221513]/15 mix-blend-multiply z-10 group-hover:bg-transparent transition duration-500" />
            <img src={expertInstructors} className="w-full h-full object-cover object-top grayscale brightness-90 contrast-125 transition duration-700 group-hover:scale-105" alt="C7" />
          </div>

          {/* Card 8: Red Dress New Collection Showcase (Row 3 Middle) */}
          <div className="bg-white relative overflow-hidden border-r border-b border-slate-200/60 h-[380px] group flex flex-col justify-between p-6 sm:p-8 cursor-pointer">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40 z-10" />
              <img src={student5} className="w-full h-full object-cover object-top contrast-115 brightness-90 group-hover:scale-105 transition duration-700" alt="C8" />
            </div>
            <div className="relative z-20 text-left select-none">
              <h4 className="font-serif text-[#F3EFE9] text-3xl sm:text-4xl font-light leading-none tracking-wide">
                APJ
              </h4>
              <h4 className="font-serif text-[#F3EFE9] text-3xl sm:text-4xl font-light leading-none tracking-wide mt-1">
                Campuses
              </h4>
            </div>
          </div>

          {/* Card 9: Solid Burgundy manifesto brand Philosophy (Row 3 Right) */}
          <div className="bg-[#4d0912] p-8 sm:p-10 relative overflow-hidden border-r border-b border-slate-200/60 flex flex-col justify-center items-left text-left h-[380px] hover:bg-[#43070f] transition duration-300 select-none">
            <h4 className="font-serif text-[#E5D5C5] text-2xl sm:text-3xl font-light tracking-[0.15em] uppercase leading-none mb-6">
              APJ INSTITUTE
            </h4>
            <p className="text-[10px] sm:text-[11px] text-[#DBC5B3] font-sans leading-relaxed tracking-wider text-justify">
              Developing compassionate paramedical experts and pioneering future healthcare champions through exceptional learning systems.
            </p>
          </div>

        </div>
      </section>
      {/* Common Page Footer */}
      <Footer />

    </div>
  );
}
