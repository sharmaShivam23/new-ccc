import React, { useState, useEffect } from 'react';

// --- CONFIGURATION ---
const EVENT_DATE = '2026-02-23T00:00:00'; // Target Date

export const TopDecoration = () => {
  const [daysLeft, setDaysLeft] = useState(0);

  useEffect(() => {
    const calculateDaysLeft = () => {
      const targetDate = new Date(EVENT_DATE);
      const today = new Date();
      
      // Calculate difference in milliseconds
      const difference = targetDate - today;
      
      // Convert to days (ceil to round up, so 4.1 days becomes "5 Days Left")
      const days = Math.ceil(difference / (1000 * 60 * 60 * 24));
      
      // Ensure we don't show negative days
      setDaysLeft(days > 0 ? days : 0);
    };

    calculateDaysLeft();
    
    // Update every minute to keep accurate
    const timer = setInterval(calculateDaysLeft, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="translate-y-[-20%]  w-full z-20 flex items-center justify-center">
       {/* Glowing Line */}
       <div className="absolute w-full h-[1px] bg-violet-500/50 shadow-[0_0_10px_#8b5cf6]" />
       
       {/* Days Left Pill */}
       <div className="relative bg-[#09090b] px-4 py-1 rounded-full border border-white/10 animate-flicker-card z-10 shadow-[0_0_10px_rgba(139,92,246,0.3)]">
         <span className="text-violet-400 font-mono text-xs tracking-[0.2em] font-bold uppercase whitespace-nowrap">
           {daysLeft > 0 ? `${daysLeft} Days Left` : "Event Started"}
         </span>
       </div>
       
       {/* End Dots */}
       <div className="absolute left-0 w-1.5 h-1.5 bg-violet-500 rounded-full shadow-[0_0_5px_#8b5cf6]" />
       <div className="absolute right-0 w-1.5 h-1.5 bg-violet-500 rounded-full shadow-[0_0_5px_#8b5cf6]" />
    </div>
  );
};