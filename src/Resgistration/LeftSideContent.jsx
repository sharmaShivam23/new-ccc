import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { flickerStyles } from './AnimationStyles';
import { InfoFlipper } from './InfoFlipper';
import { TopDecoration } from './CyberComponents'; // Correct import kept

const TiltCard = ({ children }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 500, damping: 50 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 50 });
  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const xPct = (e.clientX - rect.left) / width - 0.5;
    const yPct = (e.clientY - rect.top) / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };
  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative w-full h-full flex flex-col justify-center items-center perspective-1000"
    >
      {children}
    </motion.div>
  );
};

export const LeftSideContent = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center p-0">
      <style>{flickerStyles}</style>
      
      <TiltCard>
        <div className="relative w-full h-full rounded-[20px] p-[1px] bg-transparent flex flex-col animate-flicker-card border border-[#8b5cf6]/30">
            <div className="bg-[#050505] bg-blur-xl rounded-[19px] p-4 lg:p-6 relative flex-grow flex flex-col h-full overflow-hidden items-center">
                
                {/* Decoration Area */}
                <div className="w-full relative z-20 mb-3 h-14 lg:h-16 flex justify-center"> 
                    <TopDecoration />
                </div>

                {/* Poster Container */}
                <div className="relative flex-1 w-full rounded-2xl overflow-hidden border border-violet-500/20 bg-[#050505] group shadow-2xl z-10 flex items-center justify-center">
                    
                    {!isLoaded && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/80 z-20">
                        <div className="w-8 h-8 border-2 border-violet-500 border-t-transparent rounded-full animate-spin"></div>
                      </div>
                    )}

                    {/* 1. BLURRED BACKGROUND (Kept to fill gaps nicely) */}
                    <div 
                        className="absolute inset-0 bg-cover bg-center blur-xl opacity-40 scale-110"
                        style={{ backgroundImage: `url('/numbus300.svg')` }}
                    />

                    {/* 2. MAIN POSTER (Fully Visible - object-contain) */}
                    <motion.img 
                      src="/numbus300.svg" 
                      alt="Event Poster" 
                      onLoad={() => setIsLoaded(true)}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.8 }}
                      className="relative z-10 max-w-full max-h-full object-contain shadow-2xl"
                    />

                    {/* --- DESKTOP ONLY SIDE SHADOWS --- */}
                    {/* 'hidden lg:block' means they are invisible on mobile, visible on large screens */}
                    <div className="hidden lg:block absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#050505] to-transparent z-20 pointer-events-none" />
                    <div className="hidden lg:block absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#050505] to-transparent z-20 pointer-events-none" />
                    
                </div>

                <div className="w-full mt-4 h-auto z-20">
                      <InfoFlipper />
                </div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-violet-500/10 blur-[100px] -z-10 rounded-full pointer-events-none" />
            </div>
        </div>
      </TiltCard>
    </div>
  );
};