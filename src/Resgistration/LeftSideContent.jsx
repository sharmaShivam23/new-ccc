import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { flickerStyles } from './AnimationStyles'; 

const GlitchText = ({ text }) => {
  return (
    <div className="relative inline-block group">
      <span className="relative z-10">{text}</span>
      {/* Updated Glitch Colors to Violet */}
      <span className="absolute top-0 left-0 -z-10 w-full h-full text-[#a78bfa] opacity-0 group-hover:opacity-70 animate-pulse translate-x-[2px]">
        {text}
      </span>
      <span className="absolute top-0 left-0 -z-10 w-full h-full text-fuchsia-500 opacity-0 group-hover:opacity-70 animate-pulse -translate-x-[2px] delay-75">
        {text}
      </span>
    </div>
  );
};

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
      onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative w-full h-full flex flex-col justify-center items-center perspective-1000"
    >
      {children}
    </motion.div>
  );
};

export const LeftSideContent = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center perspective-1000 p-2 lg:p-4">
      <style>{flickerStyles}</style>
      <TiltCard>
        <div className="relative w-full h-full flex flex-col justify-start items-center gap-6 pt-4">
            
            <motion.div 
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                style={{ transform: "translateZ(50px)" }} 
                className="flex flex-row items-center justify-center text-center z-20 gap-6"
            >
                <img 
                    src="/cccLogo.png" 
                    // Updated Shadow
                    className="w-20 h-20 md:w-24 md:h-24 object-contain drop-shadow-[0_0_20px_rgba(139,92,246,0.6)] animate-pulse mb-3" 
                    alt="CCC Logo" 
                />

                {/* Updated Title Gradient */}
                <h1 className="text-2xl md:text-4xl font-bold leading-tight font-serif tracking-wide text-transparent bg-clip-text bg-gradient-to-br from-[#7c3aed] via-[#a78bfa] to-white drop-shadow-[0_0_10px_rgba(139,92,246,0.5)]">
                  <span className="text-[#a78bfa] underline decoration-4 underline-offset-8 decoration-violet-500/50 cursor-default">
                    <GlitchText text="Think Develop Deploy" />
                  </span>
                </h1>
            </motion.div>

            <motion.div 
                initial={{ clipPath: 'inset(100% 0% 0% 0%)', opacity: 0 }}
                animate={{ clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.4 }}
                style={{ transform: "translateZ(30px)" }}
                
                className="relative w-[95%] md:w-[90%] flex-grow flex items-center justify-center overflow-hidden rounded-2xl bg-black/30 backdrop-blur-sm border border-[#8b5cf6]/20 shadow-[0_0_40px_rgba(139,92,246,0.15)] group animate-flicker-card min-h-[350px] lg:min-h-[450px]"
            >
               
                <div className="absolute top-0 left-0 w-full h-1 bg-[#8b5cf6]/50 shadow-[0_0_20px_#8b5cf6] animate-[scan_3s_ease-in-out_infinite] z-20 pointer-events-none" />
                
                <img 
                    src="https://new-cccc.vercel.app/assets/nimbusp-Cu5HSp79.jpg" 
                    alt="Event Poster" 
                    className="w-full h-full object-contain p-2 opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                />

                
                <div className="absolute bottom-4 right-6 text-[#a78bfa] text-xs tracking-[0.3em] font-bold z-30 bg-black/60 px-3 py-1 rounded backdrop-blur-md border border-[#8b5cf6]/30">
                    SYSTEM_ONLINE
                </div>
            </motion.div>

        </div>
      </TiltCard>
    </div>
  );
};