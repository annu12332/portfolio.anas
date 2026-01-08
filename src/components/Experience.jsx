import React from 'react';
import { motion } from 'framer-motion';

// --- 1. Background Animation: Drifting Asteroids ---
const Asteroid = ({ size, delay, duration, yStart }) => (
  <motion.div
    className="absolute bg-slate-400/20 dark:bg-white/10 rounded-full blur-[1px] z-0"
    style={{ width: size, height: size, top: yStart }}
    initial={{ x: "110vw", rotate: 0 }}
    animate={{ 
      x: "-10vw", 
      rotate: 360,
      y: [yStart, yStart + 100, yStart] 
    }}
    transition={{ duration: duration, delay: delay, repeat: Infinity, ease: "linear" }}
  />
);

const Experience = () => {
  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Tech Innovators Inc.',
      duration: 'Jan 2023 - Present',
      location: 'Remote',
      status: 'Current Mission',
      description: [
        'Developed and maintained web applications using React and Node.js',
        'Collaborated with cross-functional teams to deliver high-quality software',
        'Implemented responsive designs and optimized application performance',
        'Mentored junior developers and conducted code reviews'
      ],
      color: 'from-blue-500 to-indigo-600'
    },
    {
      title: 'Frontend Developer Intern',
      company: 'Startup Galaxy',
      duration: 'Jun 2022 - Dec 2022',
      location: 'Dhaka, Bangladesh',
      status: 'Completed',
      description: [
        'Built user interfaces using React and modern CSS frameworks',
        'Assisted in debugging and fixing frontend issues',
        'Participated in daily standups and sprint planning meetings'
      ],
      color: 'from-purple-500 to-pink-600'
    }
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="experience" className="py-32 bg-slate-50 dark:bg-[#020617] relative overflow-hidden transition-colors duration-500">
      
      {/* --- Background Atmosphere --- */}
      <div className="absolute inset-0 pointer-events-none">
        <Asteroid size={40} delay={0} duration={25} yStart="10%" />
        <Asteroid size={20} delay={5} duration={35} yStart="60%" />
        <Asteroid size={60} delay={10} duration={40} yStart="80%" />
        
        {/* Deep Space Glows */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-sm font-mono text-blue-500 tracking-[0.5em] uppercase mb-4"
          >
            Career Roadmap
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white"
          >
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500">Odyssey</span>
          </motion.h3>
        </div>

        {/* Timeline Content */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Laser Line */}
          <div className="absolute left-0 md:left-8 top-0 h-full w-[2px] bg-gradient-to-b from-blue-500 via-purple-500 to-transparent"></div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-16"
          >
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="relative pl-12 md:pl-24"
              >
                {/* Timeline Node (Orbital Dot) */}
                <div className="absolute left-[-7px] md:left-[25px] top-2">
                   <div className="relative">
                      <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${exp.color} z-10 relative shadow-[0_0_15px_rgba(59,130,246,0.8)]`}></div>
                      <div className={`absolute -inset-2 rounded-full bg-gradient-to-r ${exp.color} opacity-20 animate-ping`}></div>
                   </div>
                </div>

                {/* Experience Card */}
                <motion.div 
                  whileHover={{ x: 10 }}
                  className="bg-white/80 dark:bg-slate-900/50 backdrop-blur-xl border border-slate-200 dark:border-slate-800 p-8 rounded-[2rem] shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                    <div>
                      <span className={`inline-block px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest text-white bg-gradient-to-r ${exp.color} mb-3`}>
                        {exp.status}
                      </span>
                      <h4 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white leading-tight">
                        {exp.title}
                      </h4>
                      <p className="text-blue-500 font-bold text-lg mt-1">{exp.company}</p>
                    </div>
                    <div className="text-left md:text-right">
                      <p className="text-slate-500 dark:text-slate-400 font-mono text-sm">{exp.duration}</p>
                      <p className="text-slate-400 text-xs mt-1 flex items-center md:justify-end gap-1">
                        <span className="w-3 h-3">📍</span> {exp.location}
                      </p>
                    </div>
                  </div>

                  {/* Mission Points (Description) */}
                  <ul className="grid grid-cols-1 gap-4">
                    {exp.description.map((item, idx) => (
                      <motion.li 
                        key={idx}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start gap-3 group/item"
                      >
                        <span className={`mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r ${exp.color} group-hover/item:scale-150 transition-transform`}></span>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
                          {item}
                        </p>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Hover Decoration */}
                  <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r ${exp.color} group-hover:w-1/2 transition-all duration-500 rounded-full`}></div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;