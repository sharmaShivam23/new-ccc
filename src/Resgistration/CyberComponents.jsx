import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

// --- CONFIGURATION ---
const API_URL = import.meta.env.VITE_API_URL;
// You must provide your Admin Key here or via environment variables
const ADMIN_KEY = import.meta.env.VITE_ADMIN_KEY || "YOUR_ADMIN_KEY_HERE"; 

export const RegisteredBadge = () => {
  const [count, setCount] = useState(null);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/v1/registrations`, {
          headers: {
            'x-admin-key': ADMIN_KEY
          }
        });
        
        // Assuming the API returns an array of registrations, the length is the count
        // If your API returns { count: 123 }, change this to response.data.count
        if (Array.isArray(response.data.data)) {
             setCount(response.data.data.length);
        } else if (response.data.count) {
             setCount(response.data.count);
        } else {
             // Fallback if structure is different
             setCount(0); 
        }

      } catch (error) {
        console.error("Failed to fetch registration count:", error);
        setCount(0); // Fallback on error
      }
    };

    fetchCount();
  }, []);

  return (
    <motion.div 
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className="absolute -top-3 -left-3 z-30"
    >
      <div className="relative w-16 h-16 md:w-20 md:h-20 flex flex-col items-center justify-center bg-[#09090b] rounded-full border animate-flicker-card shadow-[0_0_15px_rgba(139,92,246,0.2)]">
        
        {/* Spinning Inner Ring */}
        <div className="absolute inset-1 rounded-full border border-dashed border-violet-500/30 animate-[spin_10s_linear_infinite]" />
        
        {/* Count Number */}
        <span className="text-xl md:text-2xl font-bold text-white font-mono leading-none z-10 mt-1">
            {count !== null ? count : <span className="animate-pulse">--</span>}
        </span>
        
        {/* Label */}
        <span className="text-[7px] md:text-[8px] text-violet-300 uppercase tracking-widest mt-0.5 z-10">
            Registered
        </span>
      </div>
    </motion.div>
  );
};

export const TopDecoration = ({ daysLeft = 8 }) => {
  return (
    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-[80%] z-20 flex items-center justify-center">
       {/* Glowing Line */}
       <div className="absolute w-full h-[1px] bg-violet-500/50 shadow-[0_0_10px_#8b5cf6]" />
       
       <div className="relative bg-[#09090b] px-4 py-1 rounded-full border animate-flicker-card z-10">
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