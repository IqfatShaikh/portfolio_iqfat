'use client';

import { useEffect, useState } from 'react';

export default function BubbleCursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });

      // Check if hovering over interactive elements
      const target = e.target;
      const isInteractive = target.matches('button, a, [role="button"], input, textarea, select, .cursor-pointer') ||
                           target.closest('button, a, [role="button"], input, textarea, select, .cursor-pointer');
      
      setIsHovering(isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Main cursor dot with outer ring */}
      <div
        className={`fixed pointer-events-none z-[9999] transition-all duration-300 ${
          isHovering ? 'scale-150' : 'scale-100'
        }`}
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          transform: 'translate(-50%, -50%)',
          transition: 'left 0.05s ease-out, top 0.05s ease-out, transform 0.3s ease',
        }}
      >
        {/* Outer glowing ring */}
        <div className={`absolute rounded-full transition-all duration-300 ${
          isHovering 
            ? 'w-16 h-16 border-2 border-emerald-400/60 shadow-[0_0_20px_rgba(16,185,129,0.4)]' 
            : 'w-12 h-12 border border-emerald-400/40 shadow-[0_0_15px_rgba(16,185,129,0.3)]'
        }`} style={{ transform: 'translate(-50%, -50%)', left: '50%', top: '50%' }}></div>
        
        {/* Inner glow area */}
        <div className={`absolute rounded-full transition-all duration-300 ${
          isHovering 
            ? 'w-10 h-10 bg-emerald-400/10' 
            : 'w-8 h-8 bg-emerald-400/5'
        }`} style={{ transform: 'translate(-50%, -50%)', left: '50%', top: '50%' }}></div>
        
        {/* Center dot */}
        <div className={`absolute rounded-full transition-all duration-300 ${
          isHovering 
            ? 'w-4 h-4 bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]' 
            : 'w-3 h-3 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]'
        }`} style={{ transform: 'translate(-50%, -50%)', left: '50%', top: '50%' }}></div>
      </div>
    </>
  );
}
