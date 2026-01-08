import React from 'react';
import { motion } from 'framer-motion';

// --- Background Spaceship Animation ---
const FloatingSpaceship = ({ icon, delay = 0, duration = 20 }) => {
  return (
    <motion.img
      src={icon}
      alt="spaceship"
      className="absolute w-10 md:w-20 opacity-10 dark:opacity-20 pointer-events-none"
      initial={{ left: "-15%", top: Math.random() * 100 + "%", rotate: 90 }}
      animate={{ 
        left: "115%", 
        top: [
          Math.random() * 100 + "%", 
          Math.random() * 100 + "%", 
          Math.random() * 100 + "%"
        ]
      }}
      transition={{ 
        duration: duration, 
        repeat: Infinity, 
        delay: delay, 
        ease: "linear" 
      }}
    />
  );
};

const Skills = () => {
  const skillCategories = {
    'Frontend': [
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    ],
    'Backend': [
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
    ],
    'Tools': [
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
      { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    ]
  };

  const bgIcons = [
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
  ];

  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-[#020617] relative overflow-hidden transition-colors duration-500 min-h-screen">
      
      {/* Background Continuous Spaceships */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {bgIcons.map((icon, i) => (
          <FloatingSpaceship key={i} icon={icon} delay={i * 5} duration={15 + i * 2} />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header with Continuous Pulse */}
        <div className="text-center mb-20">
          <motion.h3 
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="text-4xl md:text-7xl font-black text-slate-900 dark:text-white"
          >
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500">Tech Universe</span>
          </motion.h3>
          <div className="w-20 h-1.5 bg-blue-500 mx-auto mt-6 rounded-full opacity-50"></div>
        </div>

        {/* Categories */}
        <div className="space-y-20">
          {Object.entries(skillCategories).map(([category, skills]) => (
            <div key={category}>
              <h4 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-200 mb-10 flex items-center gap-4">
                <span className="h-1 w-12 bg-blue-500 rounded-full"></span>
                {category}
              </h4>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-8">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ 
                      duration: 3 + Math.random() * 2, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: index * 0.2
                    }}
                    whileHover={{ scale: 1.05 }}
                    className="group relative p-6 md:p-8 rounded-[2rem] bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center hover:border-blue-500 transition-all duration-300"
                  >
                    {/* Breathing Glow */}
                    <motion.div 
                      animate={{ opacity: [0.1, 0.3, 0.1] }}
                      transition={{ duration: 2.5, repeat: Infinity }}
                      className="absolute inset-0 bg-blue-500/10 blur-2xl rounded-full"
                    />

                    <img 
                      src={skill.icon} 
                      alt={skill.name} 
                      className={`w-12 h-12 md:w-16 md:h-16 mb-4 relative z-10 group-hover:rotate-12 transition-transform ${skill.name === 'Express' && 'dark:invert'}`} 
                    />
                    <span className="text-xs md:text-sm font-bold text-slate-600 dark:text-slate-400 relative z-10 group-hover:text-blue-500 uppercase tracking-wider">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;