import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Cloud, Github, Code, Cpu } from 'lucide-react';

export const InfoFlipper = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  // --- ADDED: Auto-flip logic ---
  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipped((prev) => !prev);
    }, 3000); // Flip every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div 
      className="relative w-full h-[45px] mt-4 perspective-1000 cursor-pointer group z-40"
      onClick={() => setIsFlipped(!isFlipped)} // Manual click still works
    >
      <motion.div
        className="w-full h-full relative preserve-3d transition-all duration-500"
        animate={{ rotateX: isFlipped ? 180 : 0 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* --- FRONT SIDE (Topics) --- */}
        <div 
            className="absolute inset-0 backface-hidden"
            style={{ backfaceVisibility: "hidden" }}
        >
            <div className="w-full h-full border rounded-xl bg-[#0f0f12] flex items-center justify-between px-6 animate-flicker-card">
                
                {/* Icons + Text Container */}
                <div className="flex w-full justify-between items-center px-2">
                    <div className="flex items-center gap-1.5">
                        <Cloud size={12} className="text-violet-400" />
                        <span className="text-[10px] text-violet-200 font-mono uppercase tracking-wider">Cloud</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                        <Github size={12} className="text-violet-400" />
                        <span className="text-[10px] text-violet-200 font-mono uppercase tracking-wider">Git</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                        <Code size={12} className="text-violet-400" />
                        <span className="text-[10px] text-violet-200 font-mono uppercase tracking-wider">Web</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                        <Cpu size={12} className="text-violet-400" />
                        <span className="text-[10px] text-violet-200 font-mono uppercase tracking-wider">AI</span>
                    </div>
                </div>

            </div>
        </div>

        {/* --- BACK SIDE (Details) --- */}
        <div 
            className="absolute inset-0 backface-hidden"
            style={{ 
                transform: "rotateX(180deg)", 
                backfaceVisibility: "hidden"
            }}
        >
             <div className="w-full h-full border rounded-xl bg-[#0f0f12] flex items-center justify-center gap-6 px-4 animate-flicker-card">
                
                <div className="flex items-center gap-2">
                    <Calendar size={14} className="text-violet-400" />
                    <div className="flex flex-col leading-none">
                        <span className="text-[8px] text-gray-400 uppercase">When</span>
                        <span className="text-[10px] font-bold text-white">24-25 FEB</span>
                    </div>
                </div>
                
                {/* Divider */}
                <div className="w-[1px] h-5 bg-white/20" />
                
                <div className="flex items-center gap-2">
                    <MapPin size={14} className="text-violet-400" />
                    <div className="flex flex-col leading-none">
                        <span className="text-[8px] text-gray-400 uppercase">Where</span>
                        <span className="text-[10px] font-bold text-white">CS/IT Block</span>
                    </div>
                </div>

            </div>
        </div>
      </motion.div>
    </div>
  );
};