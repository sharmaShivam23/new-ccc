import React from 'react';
import { motion } from 'framer-motion';

export const RegisteredBadge = ({ count }) => {
  return (
    <motion.div 
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className="absolute -top-3 -left-3 z-30"
    >
      {/* ADDED: animate-flicker-card
          REMOVED: static border-violet-500/50 and static shadow 
          Now it flickers with the rest of the UI
      */}
      <div className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-[#09090b] rounded-full border animate-flicker-card">
        
        {/* Spinning Inner Ring */}
        <div className="absolute inset-1 rounded-full border border-dashed border-violet-500/30 animate-[spin_10s_linear_infinite]" />
        
        <div className="flex flex-col items-center justify-center">
            <span className="text-xl font-bold text-white font-mono leading-none">
                {count !== null ? count : "--"}
            </span>
            <span className="text-[7px] text-violet-300 uppercase tracking-widest mt-0.5">
                Registered
            </span>
        </div>
      </div>
    </motion.div>
  );
};

export const TopDecoration = ({ daysLeft = 8 }) => {
  return (
    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-[80%] z-20 flex items-center justify-center">
       {/* Glowing Line */}
       <div className="absolute w-full h-[1px] bg-violet-500/50 shadow-[0_0_10px_#8b5cf6]" />
       
       {/* ADDED: animate-flicker-card to the Pill 
           This makes the "8 Days Left" box flicker too
       */}
       <div className="relative bg-[#09090b] px-4 py-1 rounded-full border animate-flicker-card">
         <span className="text-violet-400 font-mono text-xs tracking-[0.2em] font-bold uppercase whitespace-nowrap">
           {daysLeft} Days Left
         </span>
       </div>
       
       {/* End Dots */}
       <div className="absolute left-0 w-1.5 h-1.5 bg-violet-500 rounded-full shadow-[0_0_5px_#8b5cf6]" />
       <div className="absolute right-0 w-1.5 h-1.5 bg-violet-500 rounded-full shadow-[0_0_5px_#8b5cf6]" />
    </div>
  );
};