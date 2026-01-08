import React, { useState } from 'react'
import { useTheme } from '../contexts/ThemeContext'

const Navbar = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { isDark, toggleTheme } = useTheme()

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    // এখানে bg-white/95 কে কমিয়ে bg-white/10 এবং dark:bg-black/20 করা হয়েছে ব্লার স্পষ্টভাবে বোঝার জন্য
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'py-3 shadow-lg' : 'py-4 shadow-md'
    } bg-white/30 dark:bg-gray-900/30 backdrop-blur-xl border-b border-white/10`}>
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        <div 
          className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent cursor-pointer hover:scale-105 transition-transform"
          onClick={() => scrollToSection('hero')}
        >
          Portfolio
        </div>
        <div className={`md:flex md:gap-8 md:static md:flex-row md:w-auto md:shadow-none md:py-0 ${
          isMenuOpen 
            ? 'fixed left-0 top-16 flex flex-col w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg text-center transition-all duration-300 shadow-xl py-8' 
            : 'fixed -left-full top-16 flex flex-col w-full bg-white dark:bg-gray-900 text-center transition-all duration-300'
        }`}>
          <a 
            href="#hero" 
            onClick={(e) => { e.preventDefault(); scrollToSection('hero') }}
            className="text-gray-800 dark:text-gray-200 font-medium hover:text-primary transition-colors relative py-4 md:py-0 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-primary after:to-secondary hover:after:w-full after:transition-all after:duration-300"
          >
            Home
          </a>
          <a 
            href="#about" 
            onClick={(e) => { e.preventDefault(); scrollToSection('about') }}
            className="text-gray-800 dark:text-gray-200 font-medium hover:text-primary transition-colors relative py-4 md:py-0 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-primary after:to-secondary hover:after:w-full after:transition-all after:duration-300"
          >
            About
          </a>
          <a 
            href="#skills" 
            onClick={(e) => { e.preventDefault(); scrollToSection('skills') }}
            className="text-gray-800 dark:text-gray-200 font-medium hover:text-primary transition-colors relative py-4 md:py-0 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-primary after:to-secondary hover:after:w-full after:transition-all after:duration-300"
          >
            Skills
          </a>
          <a 
            href="#education" 
            onClick={(e) => { e.preventDefault(); scrollToSection('education') }}
            className="text-gray-800 dark:text-gray-200 font-medium hover:text-primary transition-colors relative py-4 md:py-0 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-primary after:to-secondary hover:after:w-full after:transition-all after:duration-300"
          >
            Education
          </a>
          <a 
            href="#experience" 
            onClick={(e) => { e.preventDefault(); scrollToSection('experience') }}
            className="text-gray-800 dark:text-gray-200 font-medium hover:text-primary transition-colors relative py-4 md:py-0 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-primary after:to-secondary hover:after:w-full after:transition-all after:duration-300"
          >
            Experience
          </a>
          <a 
            href="#projects" 
            onClick={(e) => { e.preventDefault(); scrollToSection('projects') }}
            className="text-gray-800 dark:text-gray-200 font-medium hover:text-primary transition-colors relative py-4 md:py-0 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-primary after:to-secondary hover:after:w-full after:transition-all after:duration-300"
          >
            Projects
          </a>
          <a 
            href="#contact" 
            onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}
            className="text-gray-800 dark:text-gray-200 font-medium hover:text-primary transition-colors relative py-4 md:py-0 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-primary after:to-secondary hover:after:w-full after:transition-all after:duration-300"
          >
            Contact
          </a>
          <div className="md:hidden flex justify-center pt-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
          <div 
            className={`md:hidden flex flex-col gap-1.5 cursor-pointer`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className={`w-6 h-0.5 bg-gray-800 dark:bg-gray-200 rounded transition-all duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}></span>
            <span className={`w-6 h-0.5 bg-gray-800 dark:bg-gray-200 rounded transition-all duration-300 ${
              isMenuOpen ? 'opacity-0' : ''
            }`}></span>
            <span className={`w-6 h-0.5 bg-gray-800 dark:bg-gray-200 rounded transition-all duration-300 ${
              isMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}></span>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar