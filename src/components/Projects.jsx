import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import ProjectDetail from './ProjectDetail';

// --- 3D Tilt Card Component (Same as before) ---
const ProjectTiltCard = ({ children }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
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
      className="relative h-full perspective-1000"
    >
      {children}
    </motion.div>
  );
};

// --- NEW: Floating Space Dust Component ---
const SpaceDust = () => {
  // Generate 30 random dust particles
  const dustParticles = [...Array(30)].map((_, i) => ({
    top: Math.random() * 100 + '%',
    left: Math.random() * 100 + '%',
    size: Math.random() * 3 + 'px',
    duration: Math.random() * 10 + 10, // Random duration between 10-20s
    delay: Math.random() * 5
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {dustParticles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white dark:bg-blue-200"
          style={{
            top: particle.top,
            left: particle.left,
            width: particle.size,
            height: particle.size,
            opacity: Math.random() * 0.3 + 0.1
          }}
          animate={{
            y: [0, -100, 0], // Slowly float up and down
            x: [0, Math.random() * 50 - 25, 0] // Subtle sideways drift
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay
          }}
        />
      ))}
    </div>
  );
};


const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Sample Data
  const projects = [
    {
      id: 1,
      name: 'Blood life',
      image: '/project1.png',
      description: 'A full-stack Blood funding and humanity platform with user authentication, role management, and payment integration.',
      technologies: ['React', 'Node.js', 'MongoDB', 'jwt token', 'firebase'],
      liveLink: 'https://blood-donation-11.vercel.app/',
      githubLink: 'https://github.com/annu12332/Blood-donation-11'
    },
    {
      id: 2,
      name: 'Paw Mart',
      image: '/project2.png',
      description: 'A Pets adoption and buy and sell website.',
      technologies: ['React', 'Firebase', 'Tailwind CSS', 'Mongo DB', 'Context API'],
      liveLink: 'https://assignment-ten-three.vercel.app/',
      githubLink: 'https://github.com/annu12332/assignment-ten'
    },
    {
      id: 3,
      name: 'Pawpaw',
      image: '/project3.png',
      description: 'A Pets care website for pet parents.',
      technologies: ['React', 'Firebase', 'Js', 'Tailwind css'],
      liveLink: 'https://anas-pawpaw.surge.sh/services',
      githubLink: 'https://github.com/annu12332/Assignment-nine'
    }
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  if (selectedProject) {
    return <ProjectDetail project={selectedProject} onBack={() => setSelectedProject(null)} />;
  }

  return (
    <section id="projects" className="py-32 bg-slate-50 dark:bg-[#020617] relative overflow-hidden transition-colors duration-500">

      {/* --- Background Elements with Infinity Animation --- */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Rotating Blue Nebula */}
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.05, 1] }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[150px] -z-10"
        ></motion.div>

        {/* Rotating Purple Nebula */}
        <motion.div
          animate={{ rotate: -360, scale: [1, 1.1, 1] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-[150px] -z-10"
        ></motion.div>

        {/* NEW: Adding Space Dust */}
        <SpaceDust />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-sm font-mono text-blue-500 tracking-[0.5em] uppercase mb-4"
          >
            Portfolio
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            // Add subtle breathing animation to title
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white inline-block"
          >
            Galactic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500">Creations</span>
          </motion.h3>
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
        >
          {projects.map((project, index) => (
            <motion.div key={project.id} variants={cardVariants} className="h-full">
              <ProjectTiltCard>
                <div className="group relative h-full bg-white/80 dark:bg-slate-900/60 backdrop-blur-xl rounded-[2rem] border border-slate-200 dark:border-slate-800/50 overflow-hidden transition-all duration-500 hover:border-blue-500/50 flex flex-col">

                  {/* Glowing Border Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl -z-10 rounded-[2rem]"></div>

                  {/* Image Container */}
                  <div className="relative h-56 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10 opacity-60"></div>
                    {/* Holographic Scanline - Moving continuously now */}
                    <motion.div
                      animate={{ backgroundPosition: ["0% 0%", "0% 100%"] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 z-10 mix-blend-overlay pointer-events-none"
                    ></motion.div>

                    <motion.img
                      src={project.image}
                      alt={project.name}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col flex-grow relative z-20">
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-3 leading-tight group-hover:text-blue-500 transition-colors">
                      {project.name}
                    </h3>

                    <p className="text-slate-600 dark:text-slate-300 mb-6 line-clamp-3 text-sm leading-relaxed flex-grow">
                      {project.description}
                    </p>

                    {/* Tech Stack - Floating Chips */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.technologies.slice(0, 3).map((tech, idx) => (
                        <motion.span
                          key={idx}
                          // --- NEW: Infinity Floating Animation for Chips ---
                          animate={{ y: [0, -4, 0] }}
                          transition={{
                            duration: 2 + idx * 0.5, // varied duration for natural look
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: idx * 0.2
                          }}
                          className="px-3 py-1.5 text-xs font-mono font-bold rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 inline-block"
                        >
                          {tech}
                        </motion.span>
                      ))}
                      {project.technologies.length > 3 && (
                        <motion.span
                          animate={{ y: [0, -4, 0] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                          className="px-3 py-1.5 text-xs font-mono font-bold rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700 inline-block"
                        >
                          +{project.technologies.length - 3}
                        </motion.span>
                      )}
                    </div>

                    {/* Launch Button */}
                    <motion.button
                      onClick={() => setSelectedProject(project)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      // Add slight pulse to button even when not hovered
                      animate={{ boxShadow: ["0 10px 15px -3px rgba(59, 130, 246, 0.2)", "0 10px 20px -3px rgba(59, 130, 246, 0.4)", "0 10px 15px -3px rgba(59, 130, 246, 0.2)"] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl flex items-center justify-center gap-2 group/btn relative overflow-hidden"
                    >
                      <span className="relative z-10">Initiate Launch</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 relative z-10 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                      <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg] group-hover/btn:left-full transition-all duration-700"></div>
                    </motion.button>
                  </div>
                </div>
              </ProjectTiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;