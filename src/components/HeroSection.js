'use client';

import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = ['Frontend Developer', 'UI/UX Designer', 'Web Developer'];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Typing animation effect
  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    
    const typingSpeed = isDeleting ? 30 : 80; // Faster: typing 80ms, deleting 30ms
    const pauseTime = isDeleting ? 300 : 1500; // Shorter pauses

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayedText.length < currentRole.length) {
          setDisplayedText(currentRole.substring(0, displayedText.length + 1));
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        // Deleting
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.substring(0, displayedText.length - 1));
        } else {
          // Finished deleting, move to next role
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex, roles]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 pt-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-indigo-500/10 to-cyan-600/10 rounded-full blur-3xl animate-float delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-purple-500/5 to-pink-600/5 rounded-full blur-3xl animate-float delay-500"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        {/* Animated particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping delay-700"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-ping delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping delay-300"></div>
        
        {/* Gradient lines */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent animate-pulse"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-purple-500/20 to-transparent animate-pulse delay-500"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[80vh]">
          {/* Left side - Content aligned exactly under navbar "Iqfat" */}
          <div className="text-left max-w-2xl px-4 sm:px-0" style={{ marginLeft: '0' }}>
          {/* Line 1: "Hi, I'm" */}
          <div className={`transition-all duration-500 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-base sm:text-lg md:text-xl text-slate-400 font-medium mb-3 sm:mb-4 animate-fade-in">
              Hi, I'm
            </p>
          </div>

          {/* Line 2: "Iqfat Shaikh" - highlighted/bold/larger font */}
          <div className={`transition-all duration-500 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 relative">
              <span className="bg-gradient-to-r from-white via-blue-100 to-slate-200 bg-clip-text text-transparent animate-gradient-x break-words">
                Iqfat Shaikh
              </span>
              {/* Animated underline */}
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full animate-shimmer origin-left transform scale-x-0 animate-[scaleX_0.6s_ease-out_0.8s_forwards]"></div>
            </h1>
          </div>

          {/* Line 3: "And I'm a Frontend Developer" with typing animation */}
          <div className={`transition-all duration-500 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 sm:mb-8 min-h-[60px] sm:min-h-[80px] flex flex-wrap items-center justify-start">
              <span className="text-slate-300 mr-2 sm:mr-3">And I'm a</span>
              <span className="relative">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent font-bold inline-block animate-gradient-x">
                  {displayedText}
                  <span className="animate-blink">|</span>
                </span>
              </span>
            </div>
          </div>

          {/* Brief about description */}
          <div className={`transition-all duration-500 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-3xl mb-8 sm:mb-10 leading-relaxed">
              I'm a <span className="text-blue-400 font-semibold animate-pulse">B.Voc student</span> passionate about creating 
              <span className="text-purple-400 font-semibold"> beautiful</span> and 
              <span className="text-cyan-400 font-semibold"> functional</span> web applications. 
              I love turning ideas into reality through clean code and modern design.
            </p>
          </div>

          {/* Enhanced buttons */}
          <div className={`transition-all duration-500 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-start">
              <button
                onClick={() => scrollToSection('projects')}
                className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-base sm:text-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden animate-glow w-full sm:w-auto"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0l-4-4m4 4l-4 4" />
                  </svg>
                  View Projects
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {/* Ripple effect */}
                <div className="absolute inset-0 rounded-xl bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-500 opacity-0 group-hover:opacity-100"></div>
              </button>
              
              <button
                onClick={() => scrollToSection('skills')}
                className="group relative px-6 sm:px-8 py-3 sm:py-4 border-2 border-slate-600 text-slate-300 rounded-xl font-semibold text-base sm:text-lg hover:border-blue-500 hover:text-blue-400 transform hover:scale-105 transition-all duration-300 bg-slate-800/50 backdrop-blur-sm hover:bg-slate-700/50 w-full sm:w-auto"
              >
                <span className="flex items-center justify-center relative z-10">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  My Skills
                </span>
                {/* Animated border */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className={`transition-all duration-500 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex justify-start mt-12 sm:mt-16">
              <div className="animate-bounce">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}