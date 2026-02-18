import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Cloud, Github, Code, Cpu, // Front icons
  Calendar, MapPin, Trophy    // Back icons (Updated)
} from 'lucide-react';

export const InfoFlipper = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  // Auto-flip logic
  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipped((prev) => !prev);
    }, 4000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className="relative w-full h-[45px] mt-4 perspective-1000 cursor-pointer group z-40"
      onClick={() => setIsFlipped(!isFlipped)}
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
                        <span className="text-[10px] text-violet-200 font-mono uppercase tracking-wider">AI/ML</span>
                    </div>
                </div>

            </div>
        </div>

        {/* --- BACK SIDE (Logistics Info) --- */}
        <div 
            className="absolute inset-0 backface-hidden"
            style={{ 
                transform: "rotateX(180deg)", 
                backfaceVisibility: "hidden"
            }}
        >
             <div className="w-full h-full border rounded-xl bg-[#0f0f12] flex items-center justify-between px-4 animate-flicker-card">
                
                {/* 1. Date */}
                <div className="flex items-center gap-2">
                    <Calendar size={14} className="text-violet-400" />
                    <div className="flex flex-col leading-none">
                        <span className="text-[7px] text-gray-400 uppercase tracking-wide">Date</span>
                        <span className="text-[10px] font-bold text-white font-mono">23-24 Feb</span>
                    </div>
                </div>
                
                {/* Divider */}
                <div className="w-[1px] h-5 bg-white/10" />
                
                {/* 2. Venue */}
                <div className="flex items-center gap-2">
                    <MapPin size={14} className="text-violet-400" />
                    <div className="flex flex-col leading-none">
                        <span className="text-[7px] text-gray-400 uppercase tracking-wide">Venue</span>
                        <span className="text-[10px] font-bold text-white font-mono">CS/IT Block</span>
                    </div>
                </div>

                {/* Divider */}
                <div className="w-[1px] h-5 bg-white/10" />

                {/* 3. Prize Pool */}
                <div className="flex items-center gap-2">
                    <Trophy size={14} className="text-yellow-500" />
                    <div className="flex flex-col leading-none">
                        <span className="text-[7px] text-gray-400 uppercase tracking-wide">Prizes</span>
                        <span className="text-[10px] font-bold text-white font-mono">₹ 2K+</span>
                    </div>
                </div>

            </div>
        </div>
      </motion.div>
    </div>
  );
};