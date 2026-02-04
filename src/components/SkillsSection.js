'use client';

import { useState, useEffect, useRef } from 'react';

export default function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedCards, setAnimatedCards] = useState([]);
  const sectionRef = useRef(null);

  const skills = [
    { 
      name: 'HTML', 
      svg: (
        <svg viewBox="0 0 24 24" className="w-8 h-8">
          <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" fill="#E34F26"/>
        </svg>
      ),
      color: 'from-orange-400 to-red-500',
      bgColor: 'bg-slate-800',
      description: 'Markup Language',
      percentage: 96,
      delay: 0,
      side: 'left'
    },
    { 
      name: 'CSS', 
      svg: (
        <svg viewBox="0 0 24 24" className="w-8 h-8">
          <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" fill="#1572B6"/>
        </svg>
      ),
      color: 'from-blue-400 to-blue-600',
      bgColor: 'bg-slate-800',
      description: 'Styling Language',
      percentage: 95,
      delay: 100,
      side: 'right'
    },
    { 
      name: 'Tailwind CSS', 
      svg: (
        <svg viewBox="0 0 24 24" className="w-8 h-8">
          <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" fill="#06B6D4"/>
        </svg>
      ),
      color: 'from-teal-400 to-cyan-500',
      bgColor: 'bg-slate-800',
      description: 'CSS Framework',
      percentage: 98,
      delay: 200,
      side: 'left'
    },
    { 
      name: 'JavaScript', 
      svg: (
        <svg viewBox="0 0 24 24" className="w-8 h-8">
          <rect width="24" height="24" rx="2" fill="#F7DF1E"/>
          <text x="12" y="16" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#323330" fontFamily="Arial, sans-serif">JS</text>
        </svg>
      ),
      color: 'from-yellow-400 to-orange-500',
      bgColor: 'bg-slate-800',
      description: 'Programming Language',
      percentage: 35,
      delay: 300,
      side: 'right'
    },
    { 
      name: 'Figma', 
      svg: (
        <svg viewBox="0 0 24 24" className="w-8 h-8">
          <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.354-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.015-4.49-4.491S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148z" fill="#F24E1E"/>
          <path d="M15.852 24c-2.476 0-4.49-2.014-4.49-4.49v-4.441h4.49c2.476 0 4.49 2.014 4.49 4.49S18.328 24 15.852 24zm-3.019-7.46v2.97c0 1.665 1.355 3.019 3.019 3.019s3.019-1.355 3.019-3.019-1.355-3.019-3.019-3.019h-3.019z" fill="#A259FF"/>
          <path d="M15.852 15.069c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49 4.49 2.014 4.49 4.49-2.014 4.49-4.49 4.49zm0-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019 3.019-1.355 3.019-3.019-1.355-3.019-3.019-3.019z" fill="#1ABCFE"/>
        </svg>
      ),
      color: 'from-purple-400 to-pink-500',
      bgColor: 'bg-slate-800',
      description: 'Design Tool',
      percentage: 82,
      delay: 400,
      side: 'left'
    },
    { 
      name: 'WordPress', 
      svg: (
        <svg viewBox="0 0 24 24" className="w-8 h-8">
          <path d="M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.135-2.85-.135-.584-.03-.661.854-.075.899 0 0 .584.075 1.195.105l1.777 4.872-2.496 7.49-4.144-12.362c.647-.03 1.232-.105 1.232-.105.582-.075.516-.93-.065-.899 0 0-1.755.135-2.88.135-.202 0-.438-.008-.69-.015C4.911 2.015 8.235 0 12.001 0c2.8 0 5.349 1.07 7.268 2.826-.046-.003-.091-.009-.141-.009-1.06 0-1.812.923-1.812 1.914 0 .89.513 1.643 1.06 2.531.411.72.89 1.643.89 2.977 0 .915-.354 1.994-.821 3.479l-1.075 3.585-3.9-11.61.001.014zM12.001 24c-1.439 0-2.825-.269-4.129-.754l4.387-12.756 4.493 12.32c.028.073.069.138.104.205-1.44.63-3.022.985-4.855.985M0 12.001c0-2.83.777-5.49 2.096-7.794l5.774 15.826C3.62 18.143 0 15.378 0 12.001" fill="#21759B"/>
        </svg>
      ),
      color: 'from-blue-600 to-indigo-600',
      bgColor: 'bg-slate-800',
      description: 'CMS Platform',
      percentage: 69,
      delay: 500,
      side: 'right'
    },
    { 
      name: 'React.js', 
      svg: (
        <svg viewBox="0 0 24 24" className="w-8 h-8">
          <circle cx="12" cy="12" r="1.5" fill="#61DAFB"/>
          <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="#61DAFB" strokeWidth="1"/>
          <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="#61DAFB" strokeWidth="1" transform="rotate(60 12 12)"/>
          <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="#61DAFB" strokeWidth="1" transform="rotate(120 12 12)"/>
        </svg>
      ),
      color: 'from-cyan-400 to-blue-500',
      bgColor: 'bg-slate-800',
      description: 'JavaScript Library',
      percentage: 43,
      delay: 600,
      side: 'left'
    },
    { 
      name: 'Next.js', 
      svg: (
        <svg viewBox="0 0 24 24" className="w-8 h-8">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.18 0 2.31-.21 3.37-.6.4-.14.63-.52.63-.94 0-.42-.23-.8-.63-.94C14.31 19.79 13.18 20 12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83-.15.19-.36.3-.59.3-.42 0-.77-.35-.77-.77V12c0-2.21-1.79-4-4-4s-4 1.79-4 4 1.79 4 4 4c.85 0 1.64-.27 2.28-.73.74.46 1.6.73 2.72.73 2.21 0 4-1.79 4-4 0-5.52-4.48-10-10-10z" fill="#00D632"/>
        </svg>
      ),
      color: 'from-green-400 to-emerald-600',
      bgColor: 'bg-slate-800',
      description: 'React Framework',
      percentage: 45,
      delay: 700,
      side: 'right'
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate cards one by one
          skills.forEach((skill, index) => {
            setTimeout(() => {
              setAnimatedCards(prev => [...prev, index]);
            }, skill.delay);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="skills" 
      className="py-20 bg-slate-900 dark:bg-slate-900 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Animated title */}
        <div className="text-center mb-16">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 relative">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
                Technical Skills
              </span>
              {/* Animated underline */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full animate-pulse"></div>
            </h2>
          </div>
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
              These are the core technologies I work with daily. Each skill represents years of hands-on experience building 
              <span className="text-cyan-400 font-semibold"> real-world applications</span> and solving 
              <span className="text-purple-400 font-semibold"> complex problems</span>.
            </p>
          </div>
        </div>

        {/* Animated skills grid with network connections */}
        <div className="relative">
          {/* Network connection lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
            {/* Animated connection lines between skills */}
            <defs>
              <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.3"/>
                <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.6"/>
                <stop offset="100%" stopColor="#EC4899" stopOpacity="0.3"/>
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Central connecting line */}
            <line x1="50%" y1="10%" x2="50%" y2="90%" stroke="url(#connectionGradient)" strokeWidth="2" filter="url(#glow)" className="animate-pulse">
              <animate attributeName="stroke-dasharray" values="0,100;50,50;100,0;50,50;0,100" dur="4s" repeatCount="indefinite"/>
            </line>
            
            {/* Left to center connections */}
            <line x1="25%" y1="20%" x2="50%" y2="30%" stroke="url(#connectionGradient)" strokeWidth="1" filter="url(#glow)" className="animate-pulse" style={{animationDelay: '1s'}}>
              <animate attributeName="stroke-dasharray" values="0,50;25,25;50,0;25,25;0,50" dur="3s" repeatCount="indefinite"/>
            </line>
            <line x1="25%" y1="40%" x2="50%" y2="50%" stroke="url(#connectionGradient)" strokeWidth="1" filter="url(#glow)" className="animate-pulse" style={{animationDelay: '2s'}}>
              <animate attributeName="stroke-dasharray" values="0,50;25,25;50,0;25,25;0,50" dur="3s" repeatCount="indefinite"/>
            </line>
            <line x1="25%" y1="60%" x2="50%" y2="70%" stroke="url(#connectionGradient)" strokeWidth="1" filter="url(#glow)" className="animate-pulse" style={{animationDelay: '0.5s'}}>
              <animate attributeName="stroke-dasharray" values="0,50;25,25;50,0;25,25;0,50" dur="3s" repeatCount="indefinite"/>
            </line>
            <line x1="25%" y1="80%" x2="50%" y2="90%" stroke="url(#connectionGradient)" strokeWidth="1" filter="url(#glow)" className="animate-pulse" style={{animationDelay: '1.5s'}}>
              <animate attributeName="stroke-dasharray" values="0,50;25,25;50,0;25,25;0,50" dur="3s" repeatCount="indefinite"/>
            </line>
            
            {/* Right to center connections */}
            <line x1="75%" y1="20%" x2="50%" y2="30%" stroke="url(#connectionGradient)" strokeWidth="1" filter="url(#glow)" className="animate-pulse" style={{animationDelay: '2.5s'}}>
              <animate attributeName="stroke-dasharray" values="0,50;25,25;50,0;25,25;0,50" dur="3s" repeatCount="indefinite"/>
            </line>
            <line x1="75%" y1="40%" x2="50%" y2="50%" stroke="url(#connectionGradient)" strokeWidth="1" filter="url(#glow)" className="animate-pulse" style={{animationDelay: '3s'}}>
              <animate attributeName="stroke-dasharray" values="0,50;25,25;50,0;25,25;0,50" dur="3s" repeatCount="indefinite"/>
            </line>
            <line x1="75%" y1="60%" x2="50%" y2="70%" stroke="url(#connectionGradient)" strokeWidth="1" filter="url(#glow)" className="animate-pulse" style={{animationDelay: '0.8s'}}>
              <animate attributeName="stroke-dasharray" values="0,50;25,25;50,0;25,25;0,50" dur="3s" repeatCount="indefinite"/>
            </line>
            <line x1="75%" y1="80%" x2="50%" y2="90%" stroke="url(#connectionGradient)" strokeWidth="1" filter="url(#glow)" className="animate-pulse" style={{animationDelay: '1.8s'}}>
              <animate attributeName="stroke-dasharray" values="0,50;25,25;50,0;25,25;0,50" dur="3s" repeatCount="indefinite"/>
            </line>
            
            {/* Floating data particles */}
            <circle r="2" fill="#06B6D4" className="animate-pulse">
              <animateMotion dur="8s" repeatCount="indefinite">
                <path d="M 100 100 Q 300 200 500 100 T 100 100"/>
              </animateMotion>
            </circle>
            <circle r="1.5" fill="#8B5CF6" className="animate-pulse" style={{animationDelay: '2s'}}>
              <animateMotion dur="10s" repeatCount="indefinite">
                <path d="M 500 200 Q 300 100 100 200 T 500 200"/>
              </animateMotion>
            </circle>
          </svg>

          {/* Left-Right alternating skills layout */}
          <div className="relative max-w-6xl mx-auto" style={{ zIndex: 2 }}>
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className={`flex items-center mb-16 ${
                  skill.side === 'left' ? 'justify-start' : 'justify-end'
                } ${
                  animatedCards.includes(index) 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-8 scale-95'
                }`}
                style={{ 
                  transitionDelay: animatedCards.includes(index) ? '0ms' : `${skill.delay}ms`
                }}
              >
                <div className={`flex items-center gap-6 ${
                  skill.side === 'left' ? 'flex-row' : 'flex-row-reverse'
                }`}>
                  {/* Skill card */}
                  <div
                    className={`relative group cursor-pointer transform transition-all duration-500 ${
                      hoveredSkill === index ? 'scale-110 -translate-y-2 z-10' : 'hover:scale-105'
                    }`}
                    onMouseEnter={() => setHoveredSkill(index)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    {/* Network node pulse effect */}
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-30 animate-ping scale-150 -z-10`}></div>
                    
                    <div className={`${skill.bgColor} rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-700 hover:border-slate-500 relative overflow-hidden group-hover:shadow-cyan-500/25 w-32 h-32 flex flex-col items-center justify-center group-hover:border-cyan-400`}>
                      {/* Network connection indicator */}
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                      
                      {/* Animated background glow */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-20 transition-all duration-500 rounded-2xl animate-pulse`}></div>
                      
                      {/* Data flow particles */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute top-2 right-2 w-1 h-1 bg-cyan-400 rounded-full animate-ping"></div>
                        <div className="absolute bottom-3 left-3 w-1 h-1 bg-purple-400 rounded-full animate-ping delay-300"></div>
                        <div className="absolute top-1/2 right-3 w-0.5 h-0.5 bg-pink-400 rounded-full animate-ping delay-700"></div>
                      </div>
                      
                      <div className="text-center relative z-10">
                        {/* Animated SVG icon */}
                        <div className="mb-3 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 animate-bounce-slow flex justify-center">
                          {skill.svg}
                        </div>
                        
                        {/* Skill name */}
                        <h3 className="font-semibold text-white mb-2 text-xs group-hover:text-cyan-300 transition-colors duration-300">
                          {skill.name}
                        </h3>
                        
                        {/* Network status bar */}
                        <div className="mt-3 h-1 bg-slate-700 rounded-full overflow-hidden w-full">
                          <div 
                            className={`h-full bg-gradient-to-r ${skill.color} rounded-full transform transition-all duration-1000 ${
                              hoveredSkill === index ? 'animate-shimmer' : ''
                            } origin-left`}
                            style={{
                              width: animatedCards.includes(index) ? `${skill.percentage}%` : '0%',
                              transitionDelay: animatedCards.includes(index) ? `${skill.delay + 500}ms` : '0ms'
                            }}
                          ></div>
                        </div>
                      </div>

                      {/* Network ripple effect */}
                      <div className={`absolute inset-0 rounded-2xl transition-all duration-500 ${
                        hoveredSkill === index 
                          ? 'bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent animate-ripple' 
                          : ''
                      }`}></div>
                    </div>
                    
                    {/* Enhanced network glow */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-2xl opacity-0 group-hover:opacity-30 transition-all duration-500 -z-10 blur-xl scale-110 animate-pulse`}></div>
                  </div>

                  {/* Skill info */}
                  <div className={`${skill.side === 'left' ? 'text-left' : 'text-right'} max-w-xs`}>
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="text-xl font-bold text-white">{skill.name}</h4>
                      <span className={`text-lg font-bold bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}>
                        {skill.percentage}%
                      </span>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed mb-3">{skill.description}</p>
                    
                    {/* Large progress bar */}
                    <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{
                          width: animatedCards.includes(index) ? `${skill.percentage}%` : '0%',
                          transitionDelay: animatedCards.includes(index) ? `${skill.delay + 800}ms` : '0ms'
                        }}
                      ></div>
                    </div>
                    
                    {/* Skill level indicator */}
                    <div className={`mt-2 text-xs ${skill.side === 'left' ? 'text-left' : 'text-right'}`}>
                      <span className={`${
                        skill.percentage >= 90 ? 'text-green-400' :
                        skill.percentage >= 70 ? 'text-yellow-400' :
                        skill.percentage >= 50 ? 'text-orange-400' :
                        'text-red-400'
                      } font-medium`}>
                        {skill.percentage >= 90 ? 'Expert' :
                         skill.percentage >= 70 ? 'Advanced' :
                         skill.percentage >= 50 ? 'Intermediate' :
                         'Learning'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Animated instruction text */}
        <div className={`text-center mt-12 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}>
          <p className="text-slate-400 text-sm animate-pulse">
            <span className="inline-block animate-bounce mr-2">👆</span>
            Hover over each skill to see more details
            <span className="inline-block animate-bounce ml-2">✨</span>
          </p>
        </div>
      </div>
    </section>
  );
}