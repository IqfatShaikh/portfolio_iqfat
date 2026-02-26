'use client';

import { useState, useEffect, useRef } from 'react';

export default function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedCards, setAnimatedCards] = useState([]);
  const sectionRef = useRef(null);

  const projects = [
    {
      title: 'Admin Dashboard',
      description: 'A comprehensive admin dashboard built with HTML and Tailwind CSS featuring modern design and responsive layout.',
      techStack: ['HTML', 'Tailwind CSS', 'CSS3'],
      image: '/Dashboard.png',
      demoUrl: '#',
      githubUrl: 'https://github.com/IqfatShaikh/admin-dashboard.git',
      gradient: 'from-blue-500 to-purple-600',
      delay: 0
    },
    {
      title: 'Snapdeal Clone',
      description: 'A Figma design project - complete e-commerce UI/UX design clone of Snapdeal with modern interface.',
      techStack: ['Figma', 'UI/UX Design', 'Prototyping'],
      image: '/snapdeal.png',
      demoUrl: '#',
      figmaUrl: 'https://www.figma.com/design/hCnIVmrqzciSrwNvXonwhh/Animations?node-id=827-1078&t=IiLYQFU7aoJ8nndB-1',
      gradient: 'from-purple-500 to-pink-600',
      delay: 200
    },
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio website showcasing projects and skills with modern design and animations.',
      techStack: ['JavaScript', 'Next.js', 'Tailwind CSS'],
      image: '/portfolio.png',
      demoUrl: '#',
      githubUrl: 'https://github.com/IqfatShaikh/next-portfolio.git',
      gradient: 'from-orange-500 to-red-600',
      delay: 400
    },
    {
      title: 'Car Game',
      description: 'An interactive car racing game with smooth controls and engaging gameplay mechanics.',
      techStack: ['JavaScript', 'HTML5', 'Tailwind CSS'],
      image: '/carGame.png',
      demoUrl: '#',
      githubUrl: 'https://github.com/IqfatShaikh/car-game.git',
      gradient: 'from-green-500 to-teal-600',
      delay: 600
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate cards one by one with faster timing
          projects.forEach((project, index) => {
            setTimeout(() => {
              setAnimatedCards(prev => [...prev, index]);
            }, index * 100); // Reduced from project.delay to index * 100
          });
        }
      },
      { threshold: 0.1 } // Reduced from 0.3 to 0.1 for earlier trigger
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="projects" 
      className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 relative overflow-hidden"
    >
      {/* Enhanced animated background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated mesh gradient with multiple layers */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tl from-cyan-500/5 via-blue-500/5 to-purple-500/5 animate-gradient-x"></div>
        
        {/* Multiple floating orbs with different animations */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-indigo-500/10 to-cyan-600/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1s', animationDuration: '8s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-gradient-to-br from-purple-500/5 to-pink-600/5 rounded-full blur-3xl animate-float" style={{animationDelay: '0.5s', animationDuration: '10s'}}></div>
        <div className="absolute bottom-1/3 left-1/4 w-56 h-56 bg-gradient-to-br from-blue-500/8 to-indigo-600/8 rounded-full blur-3xl animate-float" style={{animationDelay: '1.5s', animationDuration: '12s'}}></div>
        
        {/* Animated grid with glow */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        {/* More glowing particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{animationDelay: '0.7s'}}></div>
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-pink-400 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute bottom-1/4 right-1/2 w-1.5 h-1.5 bg-blue-300 rounded-full animate-ping" style={{animationDelay: '0.3s'}}></div>
        
        {/* Gradient lines */}
        <div className="absolute top-0 left-1/5 w-px h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent animate-pulse"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-500/20 to-transparent animate-pulse" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-500/15 to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 relative inline-block">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x drop-shadow-2xl">
                Featured Projects
              </span>
              {/* Enhanced glowing underline with animation */}
              <div className="absolute -bottom-3 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-2xl shadow-purple-500/60 animate-pulse"></div>
              {/* Additional glow layer */}
              <div className="absolute -bottom-3 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full blur-sm opacity-75"></div>
            </h2>
          </div>
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mt-8">
              Explore my latest work showcasing 
              <span className="text-blue-400 font-bold"> innovative solutions</span>, 
              <span className="text-purple-400 font-bold"> modern design</span>, and 
              <span className="text-pink-400 font-bold"> clean code</span>
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group perspective-1000 ${
                animatedCards.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: animatedCards.includes(index) ? '0ms' : `${project.delay}ms`,
                transition: 'all 0.7s ease-out'
              }}
            >
              <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-2xl rounded-2xl overflow-hidden border-2 border-slate-700/50 hover:border-purple-500/70 transition-all duration-700 transform hover:-translate-y-2 shadow-2xl hover:shadow-purple-500/40 group-hover:shadow-[0_20px_60px_-15px_rgba(168,85,247,0.4)]">
                
                {/* Enhanced glowing border effect with multiple layers */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-purple-500/30 to-pink-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl"></div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Animated corner accents */}
                <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-blue-500/40 to-transparent rounded-br-full opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-pink-500/40 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm"></div>
                
                {/* Project Image Section */}
                <div className="relative h-48 overflow-hidden">
                  {/* Image with enhanced zoom */}
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover object-top transform group-hover:scale-110 transition-transform duration-1000 ease-out"
                  />
                  
                  {/* Animated overlay with shimmer */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-pink-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-overlay"></div>
                  
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500"></div>
                  </div>
                  
                  {/* Enhanced corner glows */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-400/40 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"></div>
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-blue-400/40 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"></div>
                </div>

                {/* Content Section */}
                <div className="relative p-6 space-y-4">
                  {/* Title with enhanced styling */}
                  <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:via-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-500">
                    {project.title}
                  </h3>
                  
                  {/* Description with better styling */}
                  <p className="text-slate-300 leading-relaxed text-sm group-hover:text-slate-200 transition-colors duration-300">
                    {project.description}
                  </p>

                  {/* Tech Stack with enhanced badges */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-4 py-2 bg-gradient-to-r from-slate-700/60 to-slate-800/60 backdrop-blur-sm text-blue-300 text-xs rounded-full font-semibold border border-slate-600/50 hover:border-purple-400/70 hover:bg-gradient-to-r hover:from-blue-900/30 hover:to-purple-900/30 hover:text-purple-300 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/30 transform"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Enhanced Action Button */}
                  <div className="pt-4">
                    <a
                      href={project.figmaUrl || project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 text-white font-bold text-base rounded-xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/60 relative overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center">
                        <svg className="w-5 h-5 mr-2 group-hover/btn:rotate-45 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        {project.figmaUrl ? 'View Design' : 'View Code'}
                      </span>
                      {/* Enhanced button shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
                      {/* Pulsing glow */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-purple-400/20 to-pink-400/0 opacity-0 group-hover/btn:opacity-100 animate-pulse"></div>
                    </a>
                  </div>
                </div>
                
                {/* Enhanced bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left shadow-lg shadow-purple-500/50"></div>
                
                {/* Additional animated accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-right opacity-60"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}>
          <p className="text-slate-300 text-base animate-pulse mb-6 font-medium">
            Want to see more projects?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-2xl font-bold text-lg hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 transform hover:scale-110 transition-all duration-500 shadow-2xl hover:shadow-purple-500/60 relative overflow-hidden group"
          >
            <svg className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Let's Work Together
            {/* Button shine */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </a>
        </div>
      </div>
    </section>
  );
}