'use client';

import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
      <Navbar />
      
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping delay-700"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-ping delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping delay-300"></div>
      </div>
      
      <main className="pt-20 pb-16 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Enhanced Hero Section */}
          <div className="text-center mb-16">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 relative">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
                  Get In Touch
                </span>
                {/* Animated underline */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"></div>
              </h1>
            </div>
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                Have a project in mind or just want to say hello? I'd 
                <span className="text-cyan-400 font-semibold"> love to hear</span> from you!
              </p>
            </div>
          </div>

          <div className="max-w-2xl mx-auto">
            {/* Enhanced Contact Information */}
            <div className="space-y-8">
              <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-700 hover:border-purple-400 transition-all duration-500 relative overflow-hidden group">
                  {/* Animated glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl"></div>
                  
                  <div className="relative z-10">
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center justify-center">
                      <span className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3 flex items-center justify-center">
                        <span className="text-white text-sm">🤝</span>
                      </span>
                      Let's connect
                    </h2>
                    <p className="text-slate-300 mb-8 leading-relaxed text-center">
                      I'm always interested in new opportunities, collaborations, and 
                      interesting projects. Whether you have a question about my work 
                      or just want to say hi, feel free to reach out!
                    </p>

                    <div className="space-y-6">
                      <div className="flex items-center group/contact hover:transform hover:translate-x-2 transition-all duration-300">
                        <div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center mr-4 group-hover/contact:bg-blue-800/50 transition-colors duration-300">
                          <svg className="w-6 h-6 text-blue-400 group-hover/contact:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-semibold text-white group-hover/contact:text-blue-400 transition-colors duration-300">Email</h3>
                          <p className="text-slate-400 group-hover/contact:text-slate-300 transition-colors duration-300">shaikhiqfat@gmail.com</p>
                        </div>
                      </div>

                      <div className="flex items-center group/contact hover:transform hover:translate-x-2 transition-all duration-300">
                        <div className="w-12 h-12 bg-green-900/30 rounded-lg flex items-center justify-center mr-4 group-hover/contact:bg-green-800/50 transition-colors duration-300">
                          <svg className="w-6 h-6 text-green-400 group-hover/contact:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-semibold text-white group-hover/contact:text-green-400 transition-colors duration-300">WhatsApp</h3>
                          <p className="text-slate-400 group-hover/contact:text-slate-300 transition-colors duration-300">+91 8108557503</p>
                        </div>
                      </div>

                      <div className="flex items-center group/contact hover:transform hover:translate-x-2 transition-all duration-300">
                        <div className="w-12 h-12 bg-orange-900/30 rounded-lg flex items-center justify-center mr-4 group-hover/contact:bg-orange-800/50 transition-colors duration-300">
                          <svg className="w-6 h-6 text-orange-400 group-hover/contact:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-semibold text-white group-hover/contact:text-orange-400 transition-colors duration-300">Location</h3>
                          <p className="text-slate-400 group-hover/contact:text-slate-300 transition-colors duration-300">Mumbai, Maharashtra</p>
                        </div>
                      </div>

                      <div className="flex items-center group/contact hover:transform hover:translate-x-2 transition-all duration-300">
                        <div className="w-12 h-12 bg-purple-900/30 rounded-lg flex items-center justify-center mr-4 group-hover/contact:bg-purple-800/50 transition-colors duration-300">
                          <svg className="w-6 h-6 text-purple-400 group-hover/contact:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-semibold text-white group-hover/contact:text-purple-400 transition-colors duration-300">Response Time</h3>
                          <p className="text-slate-400 group-hover/contact:text-slate-300 transition-colors duration-300">Usually within 24 hours</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Social Links */}
              <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-700 hover:border-cyan-400 transition-all duration-500 relative overflow-hidden group">
                  {/* Animated glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl"></div>
                  
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center justify-center">
                      <span className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mr-3 flex items-center justify-center">
                        <span className="text-white text-sm">🌐</span>
                      </span>
                      Follow me
                    </h3>
                    <div className="flex justify-center space-x-4">
                      <a
                        href="#"
                        className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center text-slate-400 hover:bg-blue-900/30 hover:text-blue-400 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 group/social"
                        aria-label="GitHub"
                      >
                        <svg className="w-6 h-6 group-hover/social:animate-spin" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center text-slate-400 hover:bg-blue-900/30 hover:text-blue-400 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 group/social"
                        aria-label="LinkedIn"
                      >
                        <svg className="w-6 h-6 group-hover/social:animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center text-slate-400 hover:bg-blue-900/30 hover:text-blue-400 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 group/social"
                        aria-label="Twitter"
                      >
                        <svg className="w-6 h-6 group-hover/social:animate-bounce" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}