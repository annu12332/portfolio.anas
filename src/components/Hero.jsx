import React, { useState, useEffect } from 'react'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [textIndex, setTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  const roles = ["Web Developer", "MERN Stack Developer", "Web Expert", "Frontend Developer"]

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Typewriter Effect Logic
  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullText = roles[textIndex]
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1))
        if (currentText === fullText) setTimeout(() => setIsDeleting(true), 2000)
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1))
        if (currentText === '') {
          setIsDeleting(false)
          setTextIndex((prev) => (prev + 1) % roles.length)
        }
      }
    }, isDeleting ? 40 : 120)
    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, textIndex])

  const techStack = [
    { icon: 'HTML', color: 'text-orange-500', radius: '160px', speed: '15s' },
    { icon: 'CSS', color: 'text-blue-500', radius: '220px', speed: '25s' },
    { icon: 'JS', color: 'text-yellow-400', radius: '280px', speed: '20s' },
    { icon: 'React', color: 'text-cyan-400', radius: '340px', speed: '35s' },
    { icon: 'Tailwind', color: 'text-sky-400', radius: '190px', speed: '18s' },
    { icon: 'Node', color: 'text-green-500', radius: '400px', speed: '45s' },
    { icon: 'MDB', color: 'text-green-600', radius: '250px', speed: '32s' },
    { icon: 'Next', color: 'text-white', radius: '310px', speed: '28s' },
    { icon: 'Git', color: 'text-red-500', radius: '370px', speed: '40s' },
    { icon: 'Firebase', color: 'text-orange-400', radius: '430px', speed: '50s' },
  ]

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center bg-[#010308] overflow-hidden px-8 md:px-20 py-24 z-0">
      
      {/* ১. রাতের আকাশ ও উল্কা ব্যাকগ্রাউন্ড */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#0f172a_0%,_#010308_100%)]"></div>
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
        <div className="star-container">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="meteor"></div>
          ))}
        </div>
      </div>

      {/* ২. অরবিটিং টেক আইকন (ছবিকে কেন্দ্র করে ঘুরবে) */}
      <div className="absolute right-0 md:right-[15%] top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none z-10 w-full md:w-1/2">
        {techStack.map((tech, index) => (
          <div 
            key={index}
            className="absolute border border-white/5 rounded-full"
            style={{ 
              width: `calc(${tech.radius} * 1.5)`, 
              height: `calc(${tech.radius} * 1.5)`,
              animation: `spin ${tech.speed} linear infinite` 
            }}
          >
            <div 
              className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{ animation: `spin ${tech.speed} linear infinite reverse` }}
            >
              <div className="px-2 py-0.5 bg-slate-900/40 border border-slate-800 rounded-md backdrop-blur-sm">
                <span className={`${tech.color} text-[9px] font-bold font-mono uppercase tracking-tighter`}>
                  {tech.icon}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ৩. মেইন কন্টেন্ট গ্রিড */}
      <div className="relative z-20 w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* বাম পাশ: নাম, টাইপরাইটার এবং বাটন */}
        <div className={`text-center md:text-left transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
          <h3 className='text-xl text-yellow-400 font-bold'>hi there!! Its Me...</h3>
          <h1 className="text-3xl font-serif md:text-6xl lg:text-7xl font-black text-white mb-4 tracking-tighter leading-tight">
            MOHAMMAD <br />
            <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent italic">ANAS</span>
          </h1>
          
          <div className="h-8 flex justify-center md:justify-start items-center">
            <p className="text-lg md:text-xl font-mono text-blue-300/90 font-bold tracking-widest uppercase">
              {currentText}<span className="animate-pulse">|</span>
            </p>
          </div>

          <p className="text-slate-500 text-sm md:text-base max-w-lg mx-auto md:mx-0 mt-6 mb-10 leading-relaxed font-light">
            Crafting high-performance digital architectures and immersive user experiences for the modern web cosmos.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <a 
              href="/resume.pdf" 
              download 
              className="w-full sm:w-auto px-8 py-3 bg-black border-2 border-blue-600 text-blue-500 text-xs font-bold rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-xl text-center"
            >
              DOWNLOAD RESUME
            </a>
            <button className="w-full sm:w-auto px-8 py-3 border border-blue-400 text-white text-xs font-bold rounded-lg hover:bg-slate-900 transition-all uppercase">
              Contact Me
            </button>
          </div>
        </div>

        {/* ডান পাশ: প্রোফাইল ইমেজ */}
        <div className={`flex justify-center md:justify-end transition-all duration-1000 ${isVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
          <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80">
            {/* Glow effect behind image */}
            <div className="absolute -inset-4 bg-blue-500/10 rounded-full blur-[60px]"></div>
            
            <div className="relative w-full h-full rounded-3xl border-2 border-blue-500 p-2 bg-slate-950 overflow-hidden shadow-2xl">
               <img 
                src="/profile.png" 
                alt="Mohammad Anas" 
                className="w-full h-full rounded-3xl object-cover grayscale hover:grayscale-0 transition-all duration-700"
                onError={(e) => { e.target.src = "https://ui-avatars.com/api/?name=Mohammad+Anas&background=02040a&color=fff" }}
              />
            </div>
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        
        .star-container { position: absolute; width: 100%; height: 100%; top: 0; left: 0; transform: rotate(140deg); }
        .meteor {
          position: absolute; width: 80px; height: 1px;
          background: linear-gradient(90deg, rgba(255,255,255,0.8), transparent);
          animation: falling 4s linear infinite; opacity: 0;
        }
        @keyframes falling {
          0% { transform: translateX(0); opacity: 0; }
          5% { opacity: 0.8; }
          100% { transform: translateX(800px); opacity: 0; }
        }

        ${[...Array(12)].map((_, i) => `
          .meteor:nth-child(${i + 1}) {
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            animation-delay: ${Math.random() * 10}s;
          }
        `).join('')}
      `}</style>
    </section>
  )
}

export default Hero