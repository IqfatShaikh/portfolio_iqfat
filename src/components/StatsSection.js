'use client';

import { useState, useEffect, useRef } from 'react';

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [visitors, setVisitors] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Set visitor count to 0 and keep it fixed
  useEffect(() => {
    setVisitors(0);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-slate-800 via-gray-800 to-slate-700 relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-cyan-400/10 to-indigo-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Total Experience Card */}
          <div 
            className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 transform hover:scale-105 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            <div className="flex items-start gap-4">
              {/* Icon */}
              <div className="w-14 h-14 bg-cyan-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">Total Experience</h3>
                <p className="text-slate-400 text-sm">6 Months in Web Development</p>
              </div>
            </div>
          </div>

          {/* Projects Completed Card */}
          <div 
            className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 transform hover:scale-105 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="flex items-start gap-4">
              {/* Icon */}
              <div className="w-14 h-14 bg-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">Projects Completed</h3>
                <p className="text-slate-400 text-sm">5+ Successful Projects</p>
              </div>
            </div>
          </div>

          {/* Visitors Card */}
          <div 
            className={`bg-gradient-to-br from-slate-800/50 to-blue-900/30 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-500 transform hover:scale-105 relative overflow-hidden ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-50"></div>
            
            <div className="relative z-10">
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">Visitors</h3>
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-bold text-blue-400">{visitors}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
