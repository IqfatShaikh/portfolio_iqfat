'use client';

import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 relative overflow-hidden">
      <Navbar />
      
      {/* Animated background elements for the entire page */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating geometric shapes */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-indigo-500/10 to-cyan-600/10 rounded-full blur-3xl animate-float delay-1000"></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-gradient-to-br from-purple-500/5 to-pink-600/5 rounded-full blur-3xl animate-float delay-500"></div>
        <div className="absolute bottom-1/3 left-1/4 w-56 h-56 bg-gradient-to-br from-blue-500/8 to-indigo-600/8 rounded-full blur-3xl animate-float delay-1500"></div>
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        {/* Moving particles */}
        <div className="absolute top-1/4 left-1/5 w-2 h-2 bg-blue-400 rounded-full animate-ping delay-700"></div>
        <div className="absolute top-2/3 right-1/5 w-1 h-1 bg-purple-400 rounded-full animate-ping delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping delay-300"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-indigo-400 rounded-full animate-ping delay-1200"></div>
        
        {/* Gradient lines */}
        <div className="absolute top-0 left-1/5 w-px h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent animate-pulse"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-500/20 to-transparent animate-pulse delay-500"></div>
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-500/15 to-transparent animate-pulse delay-1000"></div>
        
        {/* AI/ML themed floating elements */}
        <div className="absolute top-20 right-32 text-blue-400/30 text-4xl animate-bounce delay-200 font-mono">AI</div>
        <div className="absolute bottom-32 left-32 text-purple-400/30 text-3xl animate-bounce delay-800 font-mono">ML</div>
        <div className="absolute top-1/2 left-20 text-cyan-400/30 text-2xl animate-bounce delay-1400 font-mono">∑</div>
        <div className="absolute bottom-20 right-1/4 text-indigo-400/30 text-3xl animate-bounce delay-600 font-mono">∞</div>
      </div>
      
      <main className="pt-20 pb-16 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Enhanced Hero Section with Visual Elements - Full Screen */}
          <div className="min-h-screen flex items-center justify-center -mt-20 pt-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center w-full relative z-10">
              {/* Left side - Title and Description aligned exactly under navbar "Iqfat" */}
              <div className="text-left max-w-2xl" style={{ marginLeft: '0' }}>
                <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <div className="mb-6">
                    <span className="px-4 py-2 bg-slate-800 border border-blue-400/50 rounded-full text-blue-400 text-sm font-medium">
                      Frontend Developer || B.Voc in AI & ML
                    </span>
                  </div>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
                    <span className="text-slate-300 block text-lg md:text-xl lg:text-2xl font-medium">Hello, I'm</span>
                    <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x whitespace-nowrap">
                      Iqfat Shaikh
                    </span>
                  </h1>
                </div>
                <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <p className="text-lg text-slate-400 max-w-2xl mb-10 leading-relaxed">
                    I specialize in modern web development as a frontend developer and 
                    B.Voc in AI & ML student, building responsive websites and intelligent web 
                    applications. Currently learning AI & ML technologies with a future goal of becoming an 
                    <span className="text-blue-400 font-semibold"> AI & ML Engineer</span>.
                  </p>
                  
                  {/* Social Links */}
                  <div className="flex gap-4 mb-10">
                    <a
                      href="https://www.linkedin.com/in/iqfat-shaikh-a63640379?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-700 transition-colors duration-300 transform hover:scale-110"
                      aria-label="LinkedIn"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a
                      href="https://github.com/IqfatShaikh"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center text-white hover:bg-slate-600 transition-colors duration-300 transform hover:scale-110"
                      aria-label="GitHub"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                    <a
                      href="https://www.instagram.com/shaikhiffat_21?igsh=MXFpZHZ2d3h6Z2syZQ=="
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center text-white hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-110"
                      aria-label="Instagram"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                  </div>

                  {/* Contact Button */}
                  <a
                    href="/contact"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 mb-16"
                  >
                    Contact Me
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Right side - Profile Picture with enhanced styling */}
              <div className={`flex items-center justify-center relative transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="relative">
                  {/* Profile picture container with enhanced glow */}
                  <div className="relative w-80 h-80">
                    {/* Enhanced glowing background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute inset-2 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
                    
                    {/* Main profile container */}
                    <div className="absolute inset-4 bg-gradient-to-br from-slate-700 to-slate-800 rounded-full border-4 border-blue-400/50 overflow-hidden group hover:border-purple-400 transition-all duration-500 shadow-2xl">
                      {/* Placeholder content - you can replace this with actual image */}
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-900/50 to-purple-900/50">
                        <div className="text-center">
                          <div className="text-6xl mb-2">👨‍💻</div>
                          <div className="text-slate-300 text-sm font-medium">That's Me!</div>
                        </div>
                      </div>
                      
                      {/* Enhanced hover overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    
                    {/* Floating decorative elements */}
                    <div className="absolute top-4 right-4 w-4 h-4 bg-blue-400 rounded-full animate-ping"></div>
                    <div className="absolute bottom-8 left-8 w-3 h-3 bg-purple-400 rounded-full animate-ping delay-500"></div>
                    <div className="absolute top-1/2 right-2 w-2 h-2 bg-cyan-400 rounded-full animate-ping delay-1000"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Main Content */}
          <div className="space-y-12 max-w-4xl mx-auto">
            {/* My Journey */}
            <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <section className="bg-black/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-800 hover:border-emerald-400 transition-all duration-500 relative overflow-hidden group">
                {/* Animated glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl"></div>
                
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <span className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full mr-3 flex items-center justify-center">
                      <span className="text-white text-sm">🚀</span>
                    </span>
                    My Journey
                  </h2>
                  <div className="space-y-6">
                    <div className="border-l-4 border-blue-500 pl-6 hover:border-cyan-400 transition-colors duration-300 group/item">
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover/item:text-cyan-400 transition-colors duration-300">
                        The Beginning
                      </h3>
                      <p className="text-slate-300 group-hover/item:text-slate-200 transition-colors duration-300">
                        My journey started with <span className="text-orange-400 font-semibold">HTML and CSS</span>, where I discovered the joy of 
                        bringing designs to life. The ability to create something visual and 
                        interactive from code fascinated me and set me on this path.
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-green-500 pl-6 hover:border-emerald-400 transition-colors duration-300 group/item">
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover/item:text-emerald-400 transition-colors duration-300">
                        Expanding Skills
                      </h3>
                      <p className="text-slate-300 group-hover/item:text-slate-200 transition-colors duration-300">
                        As I progressed, I dove into <span className="text-yellow-400 font-semibold">JavaScript</span> and modern frameworks like 
                        <span className="text-cyan-400 font-semibold"> React and Next.js</span>. Each new technology opened up new possibilities and ways to 
                        create more dynamic and engaging user experiences.
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-emerald-500 pl-6 hover:border-teal-400 transition-colors duration-300 group/item">
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover/item:text-teal-400 transition-colors duration-300">
                        Current Focus - AI & ML
                      </h3>
                      <p className="text-slate-300 group-hover/item:text-slate-200 transition-colors duration-300">
                        Currently pursuing <span className="text-emerald-400 font-semibold">B.Voc in AI & ML</span>, I'm exploring the fascinating world of 
                        artificial intelligence and machine learning. Learning algorithms, data science, and how to build 
                        <span className="text-teal-400 font-semibold"> intelligent applications</span> that can solve real-world problems.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* What I'm Learning */}
            <div className={`transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <section className="bg-black/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-800 hover:border-teal-400 transition-all duration-500 relative overflow-hidden group">
                {/* Animated glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl"></div>
                
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <span className="w-8 h-8 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-full mr-3 flex items-center justify-center">
                      <span className="text-white text-sm">📚</span>
                    </span>
                    What I'm Learning
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-white">
                        AI & ML Focus Areas
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-center group/skill hover:transform hover:translate-x-2 transition-all duration-300">
                          <span className="w-3 h-3 bg-emerald-500 rounded-full mr-3 group-hover/skill:animate-pulse"></span>
                          <span className="text-slate-300 group-hover/skill:text-emerald-400 transition-colors duration-300">Machine Learning Algorithms</span>
                        </li>
                        <li className="flex items-center group/skill hover:transform hover:translate-x-2 transition-all duration-300">
                          <span className="w-3 h-3 bg-teal-500 rounded-full mr-3 group-hover/skill:animate-pulse"></span>
                          <span className="text-slate-300 group-hover/skill:text-teal-400 transition-colors duration-300">Backend Development with Node.js</span>
                        </li>
                        <li className="flex items-center group/skill hover:transform hover:translate-x-2 transition-all duration-300">
                          <span className="w-3 h-3 bg-green-500 rounded-full mr-3 group-hover/skill:animate-pulse"></span>
                          <span className="text-slate-300 group-hover/skill:text-green-400 transition-colors duration-300">Deep Learning & Neural Networks</span>
                        </li>
                        <li className="flex items-center group/skill hover:transform hover:translate-x-2 transition-all duration-300">
                          <span className="w-3 h-3 bg-cyan-500 rounded-full mr-3 group-hover/skill:animate-pulse"></span>
                          <span className="text-slate-300 group-hover/skill:text-cyan-400 transition-colors duration-300">Database Management & APIs</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-white">
                        Frontend Technologies
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-center group/goal hover:transform hover:translate-x-2 transition-all duration-300">
                          <span className="w-3 h-3 bg-blue-500 rounded-full mr-3 group-hover/goal:animate-pulse"></span>
                          <span className="text-slate-300 group-hover/goal:text-blue-400 transition-colors duration-300">Advanced React patterns and hooks</span>
                        </li>
                        <li className="flex items-center group/goal hover:transform hover:translate-x-2 transition-all duration-300">
                          <span className="w-3 h-3 bg-purple-500 rounded-full mr-3 group-hover/goal:animate-pulse"></span>
                          <span className="text-slate-300 group-hover/goal:text-purple-400 transition-colors duration-300">Modern JavaScript frameworks and libraries</span>
                        </li>
                        <li className="flex items-center group/goal hover:transform hover:translate-x-2 transition-all duration-300">
                          <span className="w-3 h-3 bg-yellow-500 rounded-full mr-3 group-hover/goal:animate-pulse"></span>
                          <span className="text-slate-300 group-hover/goal:text-yellow-400 transition-colors duration-300">AI-powered web applications</span>
                        </li>
                        <li className="flex items-center group/goal hover:transform hover:translate-x-2 transition-all duration-300">
                          <span className="w-3 h-3 bg-pink-500 rounded-full mr-3 group-hover/goal:animate-pulse"></span>
                          <span className="text-slate-300 group-hover/goal:text-pink-400 transition-colors duration-300">Performance optimization techniques</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* My Goals */}
            <div className={`transition-all duration-1000 delay-1100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <section className="bg-black/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-900 hover:border-emerald-400 hover:bg-slate-900/95 transition-all duration-500 relative overflow-hidden group hover:shadow-emerald-500/25">
                {/* Enhanced animated glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-green-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl animate-gradient-x"></div>
                
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center group-hover:text-emerald-400 transition-colors duration-300">
                    <span className="w-8 h-8 bg-gradient-to-r from-emerald-400 via-teal-400 to-green-400 rounded-full mr-3 flex items-center justify-center animate-gradient-x group-hover:from-teal-400 group-hover:via-green-400 group-hover:to-emerald-400 transition-all duration-300 group-hover:scale-110">
                      <span className="text-white text-sm">🎯</span>
                    </span>
                    My Goals
                  </h2>
                  <div className="space-y-4">
                    <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                      My primary goal is to become an <span className="text-emerald-400 font-semibold group-hover:text-emerald-300 transition-colors duration-300">AI & ML Engineer</span>, combining my frontend 
                      development skills with artificial intelligence and machine learning expertise. I believe 
                      in the power of AI to solve complex problems and create intelligent applications that can make 
                      a meaningful impact on society.
                    </p>
                    <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                      I'm passionate about building <span className="text-teal-400 font-semibold group-hover:text-teal-300 transition-colors duration-300">AI-powered web applications</span> that provide 
                      intelligent user experiences. Whether it's implementing machine learning models in web interfaces, 
                      creating data visualization dashboards, or developing predictive analytics tools, I approach every 
                      project with curiosity and dedication to push the boundaries of what's possible with AI and web technologies.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}