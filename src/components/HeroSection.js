'use client';

import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);

  const roles = ['Frontend Developer', 'UI/UX Designer', 'Web Developer'];

  useEffect(() => {
    setIsVisible(true);
    
    // Animate role text with longer interval
    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 4000);

    return () => clearInterval(roleInterval);
  }, []);

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
          <div className="text-left max-w-2xl" style={{ marginLeft: '0' }}>
          {/* Line 1: "Hi, I'm" */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-lg md:text-xl text-slate-400 font-medium mb-4 animate-fade-in">
              <span className="inline-block animate-wave">👋</span> Hi, I'm
            </p>
          </div>

          {/* Line 2: "Iqfat Shaikh" - highlighted/bold/larger font */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 relative whitespace-nowrap">
              <span className="bg-gradient-to-r from-white via-blue-100 to-slate-200 bg-clip-text text-transparent animate-gradient-x">
                Iqfat Shaikh
              </span>
              {/* Animated underline */}
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full animate-shimmer origin-left transform scale-x-0 animate-[scaleX_1s_ease-out_1.5s_forwards]"></div>
            </h1>
          </div>

          {/* Line 3: "And I'm a Frontend Developer" */}
          <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 h-16 flex items-center justify-start">
              <span className="text-slate-300 mr-3">And I'm a</span>
              <span className="relative overflow-hidden">
                <span 
                  key={currentRole}
                  className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent font-bold inline-block animate-[fadeInUp_0.8s_ease-out] animate-gradient-x"
                >
                  {roles[currentRole]}
                </span>
              </span>
            </div>
          </div>

          {/* Brief about description */}
          <div className={`transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-lg md:text-xl text-slate-400 max-w-3xl mb-10 leading-relaxed">
              I'm a <span className="text-blue-400 font-semibold animate-pulse">B.Voc student</span> passionate about creating 
              <span className="text-purple-400 font-semibold"> beautiful</span> and 
              <span className="text-cyan-400 font-semibold"> functional</span> web applications. 
              I love turning ideas into reality through clean code and modern design.
            </p>
          </div>

          {/* Enhanced buttons */}
          <div className={`transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex flex-col sm:flex-row gap-6 justify-start">
              <button
                onClick={() => scrollToSection('projects')}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden animate-glow"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                className="group relative px-8 py-4 border-2 border-slate-600 text-slate-300 rounded-xl font-semibold text-lg hover:border-blue-500 hover:text-blue-400 transform hover:scale-105 transition-all duration-300 bg-slate-800/50 backdrop-blur-sm hover:bg-slate-700/50"
              >
                <span className="flex items-center justify-center relative z-10">
                  <svg className="w-5 h-5 mr-2 group-hover:animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <div className={`transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex justify-start mt-16">
              <div className="animate-bounce">
                <svg className="w-6 h-6 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
          </div>
          </div>
          
          {/* Right side - Floating Tech Elements */}
          <div className="hidden lg:block relative">
            <div className="relative w-full h-96 flex items-center justify-center">
              {/* Animated floating elements */}
              <div className="absolute inset-0">
                {/* React Icon */}
                <div className="absolute top-16 left-20 w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg animate-float shadow-lg shadow-cyan-500/30">
                  ⚛️
                </div>
                
                {/* JavaScript Icon */}
                <div className="absolute top-32 right-16 w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm animate-float delay-500 shadow-lg shadow-yellow-500/30">
                  JS
                </div>
                
                {/* UI Icon */}
                <div className="absolute bottom-20 left-16 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm animate-float delay-1000 shadow-lg shadow-purple-500/30">
                  UI
                </div>
                
                {/* Large background circles */}
                <div className="absolute top-8 right-8 w-32 h-32 border-2 border-slate-600/30 rounded-full animate-pulse"></div>
                <div className="absolute bottom-12 right-20 w-24 h-24 border-2 border-slate-500/20 rounded-full animate-pulse delay-700"></div>
                <div className="absolute top-1/2 left-8 w-20 h-20 border border-slate-600/20 rounded-full animate-pulse delay-300"></div>
                
                {/* Floating gradient blobs */}
                <div className="absolute top-20 right-32 w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-sm animate-float delay-200"></div>
                <div className="absolute bottom-32 left-24 w-20 h-20 bg-gradient-to-br from-cyan-500/15 to-blue-500/15 rounded-full blur-sm animate-float delay-800"></div>
                <div className="absolute top-1/3 right-12 w-12 h-12 bg-gradient-to-br from-purple-500/25 to-pink-500/25 rounded-full blur-sm animate-float delay-1200"></div>
                
                {/* Small accent dots */}
                <div className="absolute top-24 left-32 w-3 h-3 bg-cyan-400 rounded-full animate-ping delay-300"></div>
                <div className="absolute bottom-28 right-28 w-2 h-2 bg-purple-400 rounded-full animate-ping delay-700"></div>
                <div className="absolute top-1/2 right-6 w-4 h-4 bg-blue-400 rounded-full animate-ping delay-1000"></div>
                
                {/* Connecting lines */}
                <div className="absolute top-20 left-36 w-16 h-px bg-gradient-to-r from-cyan-400/50 to-transparent animate-pulse delay-500"></div>
                <div className="absolute bottom-24 right-32 w-12 h-px bg-gradient-to-l from-purple-400/50 to-transparent animate-pulse delay-900"></div>
                
                {/* Geometric shapes */}
                <div className="absolute top-40 right-24 w-8 h-8 border border-slate-500/30 rotate-45 animate-spin-slow"></div>
                <div className="absolute bottom-16 left-28 w-6 h-6 bg-gradient-to-br from-slate-600/40 to-slate-700/40 transform rotate-12 animate-pulse delay-600"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}