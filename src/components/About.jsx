import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  // Common animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section id="about" className="py-32 bg-slate-50 dark:bg-[#020617] relative overflow-hidden">
      
      {/* --- Infinity Background Elements --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating Astronaut - Infinity Animation */}
        <motion.div
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, 5, -5, 0],
            x: [0, 10, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-[10%] opacity-10 dark:opacity-20 text-[150px] md:text-[250px] hidden lg:block select-none"
        >
          👨‍🚀
        </motion.div>

        {/* Orbiting Ring */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -left-40 w-96 h-96 border-[1px] border-blue-500/20 rounded-full border-dashed"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          className="text-center mb-24"
        >
          <span className="text-blue-500 font-mono tracking-[0.4em] text-xs uppercase bg-blue-500/5 px-4 py-2 rounded-full border border-blue-500/20">
            Biographical Scan
          </span>
          <h2 className="text-5xl md:text-8xl font-black text-slate-900 dark:text-white mt-6 tracking-tighter">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Commander</span>
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Column: Terminal Style Intro */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="lg:col-span-8 space-y-8"
            >
              <div className="relative p-8 rounded-[2rem] bg-white/70 dark:bg-slate-900/50 backdrop-blur-xl border border-slate-200 dark:border-slate-800 shadow-2xl">
                {/* Decorative Terminal Dots */}
                <div className="flex gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>

                <div className="space-y-6 text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                  <p className="text-xl md:text-2xl text-slate-800 dark:text-white font-bold leading-tight">
                    Hello! I'm a passionate full-stack developer turning complex problems into <span className="text-blue-500 underline decoration-blue-500/30 underline-offset-4">simple, elegant solutions.</span>
                  </p>

                  <p>
                    <span className="text-blue-500 font-bold mr-2">01.</span>
                    My journey in web development started with a simple curiosity that turned into a mission. From the first line of HTML to architecting complex React & Node.js ecosystems, I've always been driven by the power of code to bring ideas to life.
                  </p>

                  <p>
                    <span className="text-blue-500 font-bold mr-2">02.</span>
                    I thrive on work that has a real impact. Whether it's an e-commerce platform or a high-performance API, I believe in writing code that isn't just functional, but clean and maintainable.
                  </p>
                </div>
              </div>

              {/* Hobbies / Personal Info */}
              <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 className="p-8 rounded-[2rem] border border-dashed border-slate-300 dark:border-slate-700"
              >
                <h4 className="text-xl font-bold dark:text-white mb-4 flex items-center gap-2">
                  <span>🎨</span> Beyond the Code
                </h4>
                <p className="text-slate-600 dark:text-slate-400 italic">
                  When I'm not in the digital realm, you'll find me on the basketball court, painting digital art, or exploring the strategy of chess. I believe a balanced life fuels a creative mind.
                </p>
              </motion.div>
            </motion.div>

            {/* Right Column: Character Stats Cards */}
            <div className="lg:col-span-4 space-y-6">
              {[
                { title: 'Problem Solver', desc: 'Creative solution seeker', icon: '🧠', color: 'from-blue-500 to-cyan-400' },
                { title: 'Continuous Learner', desc: 'Tech skill explorer', icon: '🚀', color: 'from-purple-500 to-indigo-500' },
                { title: 'Team Player', desc: 'Collaborative architect', icon: '🤝', color: 'from-pink-500 to-rose-500' }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.05, rotate: [0, 1, -1, 0] }}
                  className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl group cursor-default"
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center text-2xl mb-4 shadow-lg`}>
                    {stat.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 dark:text-white group-hover:text-blue-500 transition-colors">
                    {stat.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                    {stat.desc}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;