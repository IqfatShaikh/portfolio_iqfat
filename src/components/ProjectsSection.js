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
      title: 'Car Game',
      description: 'An interactive car racing game with smooth controls and engaging gameplay mechanics.',
      techStack: ['JavaScript', 'HTML5 Canvas', 'Tailwind CSS', 'Game Logic'],
      image: '/carGame.png',
      demoUrl: '#',
      githubUrl: 'https://github.com/IqfatShaikh/car-game.git',
      gradient: 'from-green-500 to-teal-600',
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
      title: 'Snapdeal Clone',
      description: 'A Figma design project - complete e-commerce UI/UX design clone of Snapdeal with modern interface.',
      techStack: ['Figma', 'UI/UX Design', 'Prototyping'],
      image: '/snapdeal.png',
      demoUrl: '#',
      figmaUrl: 'https://www.figma.com/design/hCnIVmrqzciSrwNvXonwhh/Animations?node-id=827-1078&t=GmR2LgGROKGg481W-1',
      gradient: 'from-purple-500 to-pink-600',
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
      className="py-20 bg-gradient-to-br from-gray-800 via-slate-700 to-gray-900 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-green-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-emerald-400 rounded-full animate-ping delay-700"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-teal-400 rounded-full animate-ping delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-green-400 rounded-full animate-ping delay-300"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 relative">
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-green-400 bg-clip-text text-transparent animate-gradient-x">
                Featured Projects
              </span>
              {/* Animated underline */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full animate-pulse"></div>
            </h2>
          </div>
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Here are some of my recent projects that showcase my skills and passion for 
              <span className="text-emerald-400 font-semibold"> frontend development</span>
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group transform transition-all duration-700 ${
                animatedCards.includes(index) 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-8 scale-95'
              }`}
              style={{ 
                transitionDelay: animatedCards.includes(index) ? '0ms' : `${project.delay}ms`
              }}
            >
              <div className="bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-emerald-500/25 transform hover:-translate-y-2 transition-all duration-500 border border-slate-700 hover:border-emerald-400 relative group-hover:scale-105">
                
                {/* Project Image with enhanced gradient */}
                <div className="h-48 bg-slate-700 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                  
                  {/* Project Image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-90 transition-opacity duration-300 group-hover:scale-105 transform transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Animated particles */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-4 right-4 w-2 h-2 bg-white rounded-full animate-ping"></div>
                    <div className="absolute bottom-6 left-6 w-1 h-1 bg-cyan-300 rounded-full animate-ping delay-300"></div>
                    <div className="absolute top-1/2 right-6 w-1.5 h-1.5 bg-purple-300 rounded-full animate-ping delay-700"></div>
                  </div>
                  
                  {/* Ripple effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer"></div>
                </div>

                <div className="p-6 relative z-10">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 mb-4 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                    {project.description}
                  </p>

                  {/* Enhanced Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-slate-700 text-emerald-400 text-sm rounded-full font-medium border border-slate-600 hover:border-emerald-400 hover:bg-slate-600 transition-all duration-300 hover:scale-105"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Enhanced Action Buttons */}
                  <div className="flex gap-4">
                    <a
                      href={project.figmaUrl || project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg font-medium hover:from-teal-600 hover:to-green-600 transform hover:scale-105 transition-all duration-300 text-center relative overflow-hidden group/btn"
                    >
                      <span className="relative z-10 flex items-center justify-center">
                        <svg className="w-4 h-4 mr-2 group-hover/btn:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        {project.figmaUrl ? 'Figma' : 'Source Code'}
                      </span>
                      {/* Button ripple effect */}
                      <div className="absolute inset-0 bg-white/20 scale-0 group-hover/btn:scale-100 transition-transform duration-500 opacity-0 group-hover/btn:opacity-100 rounded-lg"></div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className={`text-center mt-12 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}>
          <p className="text-slate-400 text-sm animate-pulse mb-4">
            Want to see more projects?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg font-medium hover:from-teal-600 hover:to-green-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-emerald-500/25"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Let's Work Together
          </a>
        </div>
      </div>
    </section>
  );
}