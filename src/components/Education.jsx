import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

// --- 1. 3D Tilt Card Component ---
const TiltCard = ({ children, theme }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative group cursor-pointer"
    >
      {/* Dynamic Border Glow */}
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${theme} rounded-[2.5rem] opacity-20 group-hover:opacity-100 blur-sm transition duration-500`}></div>
      {children}
    </motion.div>
  );
};

// --- 2. Realistic Spaceship with Sine-Wave Movement ---
const AdvancedSpaceship = ({ img, delay, duration, yPos }) => (
  <motion.img
    src={img}
    className="absolute w-16 md:w-28 opacity-20 dark:opacity-40 z-0 pointer-events-none"
    initial={{ x: "-20vw", y: yPos }}
    animate={{ 
      x: "110vw",
      y: [yPos, yPos - 50, yPos + 50, yPos], // Sine-wave floating
      rotate: [85, 95, 85]
    }}
    transition={{ duration, delay, repeat: Infinity, ease: "linear" }}
  />
);

const Education = () => {
  const educationData = [
    {
      degree: 'Diploma in Engineering',
      major: 'Computer Science and Technology',
      institution: 'CSTI, Chittagong',
      year: '2022 - running',
      gpa: 'Loading',
      details: 'Deep dived into system architecture, networking, and advanced web ecosystems.',
      icon: '🚀',
      theme: 'from-blue-500 via-cyan-400 to-indigo-500'
    },
    {
      degree: 'Secondary School Certificate',
      major: 'Commerce Group',
      institution: 'Jafrabad High School',
      year: '2022',
      gpa: '4.38 / 5.0',
      details: 'Learned the fundamentals of economics, accounting, and business management.',
      icon: '👨‍🚀',
      theme: 'from-purple-600 via-fuchsia-500 to-pink-500'
    }
  ];

  // Random Star Generator for Parallax
  const stars = [...Array(60)].map((_, i) => ({
    size: Math.random() * 3,
    top: Math.random() * 100 + "%",
    left: Math.random() * 100 + "%",
    delay: Math.random() * 5,
    duration: 2 + Math.random() * 3,
  }));

  return (
    <section id="education" className="py-32 bg-[#fcfcfd] dark:bg-[#020617] relative overflow-hidden perspective-1000">
      
      {/* --- BACKGROUND ELEMENTS --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Layer 1: Twinkling Far Stars */}
        {stars.map((star, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-slate-400 dark:bg-white"
            style={{ 
              width: star.size, height: star.size, 
              top: star.top, left: star.left,
              boxShadow: star.size > 2 ? '0 0 10px white' : 'none'
            }}
            animate={{ opacity: [0.2, 0.8, 0.2], scale: [1, 1.2, 1] }}
            transition={{ duration: star.duration, delay: star.delay, repeat: Infinity }}
          />
        ))}

        {/* Layer 2: Flying Objects */}
        <AdvancedSpaceship 
          img="https://cdn-icons-png.flaticon.com/512/2026/2026462.png" 
          delay={0} duration={30} yPos="20%" 
        />
        <AdvancedSpaceship 
          img="https://cdn-icons-png.flaticon.com/512/1124/1124115.png" 
          delay={15} duration={45} yPos="70%" 
        />

        {/* Nebula Glows */}
        <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <span className="text-blue-500 font-mono tracking-widest text-xs uppercase bg-blue-500/5 px-4 py-2 rounded-full border border-blue-500/20">
            Journey Map
          </span>
          <h2 className="text-5xl md:text-8xl font-black text-slate-900 dark:text-white mt-6 tracking-tighter">
            Academic <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-blue-700">Orbit</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {educationData.map((edu, index) => (
            <TiltCard key={index} theme={edu.theme}>
              <div className="relative h-full bg-white/70 dark:bg-slate-900/40 backdrop-blur-xl border border-white/20 dark:border-slate-800 p-10 md:p-14 rounded-[2.5rem] shadow-2xl overflow-hidden">
                
                {/* 3D Floating Icon */}
                <motion.div 
                   style={{ translateZ: "50px" }}
                   animate={{ y: [0, -15, 0] }}
                   transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                   className="absolute top-10 right-10 text-6xl opacity-20 pointer-events-none"
                >
                  {edu.icon}
                </motion.div>

                <div style={{ translateZ: "40px" }} className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-500/10 text-blue-500 text-xs font-bold mb-6 border border-blue-500/20">
                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping"></span>
                    {edu.year}
                  </div>

                  <h3 className="text-3xl md:text-4xl font-black text-slate-800 dark:text-white mb-4 leading-tight">
                    {edu.degree}
                  </h3>
                  
                  <p className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-8 tracking-wide">
                    {edu.institution}
                  </p>

                  <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-10 max-w-md">
                    {edu.details}
                  </p>

                  <div className="flex items-end justify-between">
                    <div className="bg-slate-900 dark:bg-white text-white dark:text-black px-6 py-3 rounded-2xl">
                      <p className="text-[10px] uppercase font-bold opacity-60">Success Rate</p>
                      <p className="text-2xl font-black">{edu.gpa}</p>
                    </div>
                    
                    {/* Artistic Line */}
                    <div className={`h-1 w-24 bg-gradient-to-r ${edu.theme} rounded-full`}></div>
                  </div>
                </div>

                {/* Subtle Scanline Effect */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;