import React, { useState } from 'react';
import { motion } from 'framer-motion';

// --- 1. Background Animation: Shooting Star (Ulkapat) ---
const ShootingStar = () => (
  <motion.div
    initial={{ x: "-10%", y: "0%", opacity: 0 }}
    animate={{ 
      x: "120vw", 
      y: "100vh", 
      opacity: [0, 1, 0] 
    }}
    transition={{ 
      duration: 2, 
      repeat: Infinity, 
      repeatDelay: 8, 
      ease: "linear" 
    }}
    className="absolute w-[150px] h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-white rotate-[35deg] z-0 pointer-events-none"
  />
);

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signal Sent:', formData);
    alert('Message transmitted to the mothership! 🚀');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-32 bg-slate-50 dark:bg-[#020617] relative overflow-hidden transition-colors duration-500">
      
      {/* --- Background Galactic Elements --- */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Twinkling Stars Layer */}
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-slate-400 dark:bg-white rounded-full"
            style={{
              width: Math.random() * 3,
              height: Math.random() * 3,
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
            }}
            animate={{ opacity: [0.1, 0.8, 0.1] }}
            transition={{ duration: 2 + Math.random() * 3, repeat: Infinity }}
          />
        ))}

        <ShootingStar />

        {/* Pulsing Comms Satellite Icon (Animated) */}
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-[10%] opacity-20 dark:opacity-40 hidden lg:block text-8xl"
        >
          🛰️
          <motion.div 
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute top-0 left-0 w-full h-full bg-blue-500 rounded-full blur-3xl -z-10"
          />
        </motion.div>

        {/* Nebula Glows */}
        <div className="absolute top-1/2 left-[-10%] w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-sm font-mono text-blue-500 tracking-[0.5em] uppercase mb-4"
          >
            Transmission
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white"
          >
            Connect <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">Hub</span>
          </motion.h3>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Contact Information (Comms Dashboard style) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-10"
          >
            <h4 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
              Frequency Details
            </h4>
            
            <div className="space-y-8">
              {[
                { label: 'Subspace Email', val: 'your.email@example.com', icon: '📧', link: 'mailto:anas2542wy@gmail.com' },
                { label: 'Voice Frequency', val: '+1 (234) 567-890', icon: '📞', link: 'tel:01851336985' },
                { label: 'Sub-Link WhatsApp', val: 'Direct Signal', icon: '💬', link: 'https://wa.me/01851336985'}
              ].map((item, idx) => (
                <motion.a
                  key={idx}
                  href={item.link}
                  whileHover={{ x: 10 }}
                  className="flex items-center p-4 rounded-2xl bg-white/50 dark:bg-slate-900/40 backdrop-blur-md border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 transition-all group"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-2xl shadow-lg shadow-blue-500/20 mr-6 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase text-slate-400 tracking-widest">{item.label}</p>
                    <p className="text-lg font-bold text-slate-700 dark:text-white group-hover:text-blue-500 transition-colors">{item.val}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form (The Transmission Terminal) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            {/* Form Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-20"></div>
            
            <form 
              onSubmit={handleSubmit}
              className="relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl p-8 md:p-12 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl space-y-6"
            >
              <div className="space-y-2">
                <label className="text-xs font-mono font-bold text-blue-500 uppercase ml-1">Callsign (Name)</label>
                <input
                  type="text" name="name" value={formData.name} onChange={handleChange} required
                  className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-slate-800 dark:text-white"
                  placeholder="Enter your name..."
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono font-bold text-blue-500 uppercase ml-1">Return Frequency (Email)</label>
                <input
                  type="email" name="email" value={formData.email} onChange={handleChange} required
                  className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-slate-800 dark:text-white"
                  placeholder="your@galaxy.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono font-bold text-blue-500 uppercase ml-1">The Message</label>
                <textarea
                  name="message" value={formData.message} onChange={handleChange} required rows="4"
                  className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-slate-800 dark:text-white resize-none"
                  placeholder="Type your message here..."
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-black rounded-xl shadow-xl shadow-blue-500/30 uppercase tracking-widest text-sm flex items-center justify-center gap-3 group"
              >
                <span>Initialize Transmission</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;