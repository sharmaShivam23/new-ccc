import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { flickerStyles } from './AnimationStyles';
import { TopDecoration } from './CyberComponents';
import { InfoFlipper } from './InfoFlipper';

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
            <div className="bg-blur-xl rounded-[19px] p-4 lg:p-6 relative flex-grow flex flex-col h-full overflow-hidden items-center">
                
                {/* Decoration Area */}
                <div className="w-full relative z-20 mb-3 h-14 lg:h-16 flex justify-center"> 
                    <TopDecoration />
                </div>

                {/* Poster Container with Reveal Animation */}
                <div className="relative flex-1 w-full rounded-2xl overflow-hidden border border-violet-500/20 bg-[#050505] group shadow-2xl z-10">
                    
                    {/* Loading Spinner */}
                    {!isLoaded && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/80 z-20">
                        <div className="w-8 h-8 border-2 border-violet-500 border-t-transparent rounded-full animate-spin"></div>
                      </div>
                    )}

                    <motion.img 
                      src="https://new-cccc.vercel.app/assets/nimbusp-Cu5HSp79.jpg" 
                      alt="Event Poster" 
                      onLoad={() => setIsLoaded(true)}
                      initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
                      animate={isLoaded ? { clipPath: 'inset(0% 0% 0% 0%)' } : {}}
                      transition={{ duration: 1.2, ease: "easeInOut" }}
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
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