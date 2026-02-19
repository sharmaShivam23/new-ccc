// import React from "react";
// import { FaCheckCircle } from "react-icons/fa";
// import { motion } from "framer-motion";
// import Confetti from "./ui/confetti";
// import { useNavigate } from "react-router-dom";
// import ParticlesBackground from "./ParticlesBg";

// const Success = () => {
//   const name = localStorage.getItem("registeredName");
//   const navigate = useNavigate();

//   const handleHome = () => {
//     navigate("/");
//   };

//   return (
//     <div className="relative min-h-screen w-full bg-black flex items-center justify-center overflow-hidden px-4 py-10">
  
     
//     <div className="absolute top-0 inset-0 flex justify-center  pointer-events-none z-[100]">
//   <Confetti spread={1000} />
//   <Confetti spread={1000} />
//   <Confetti spread={1000} />
// </div>
//       <motion.div
//         initial={{ opacity: 0, scale: 0.9, y: 50 }}
//         animate={{ opacity: 1, scale: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         className="relative z-20 w-full max-w-[700px] bg-[#111111] text-white rounded-3xl shadow-[0_0_20px_rgba(255,255,255,0.05)] border border-[#2A2A2A] px-10 py-10 flex flex-col items-center text-center space-y-4"
//       >
        
//         <motion.h1
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3 }}
//           className="text-2xl sm:text-4xl font-bold text-violet-400"
//         >
//           {name}
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.4 }}
//           className="text-lg sm:text-xl text-gray-300"
//         >
//           You are
//         </motion.p>

    
//         <motion.div
//           initial={{ scale: 0 }}
//           animate={{ scale: 1 }}
//           transition={{ delay: 0.5 }}
//           className="text-green-500"
//         >
//           <FaCheckCircle className="text-[100px] sm:text-[150px] drop-shadow-lg" />
//         </motion.div>

//  <ParticlesBackground/>
    
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.6 }}
//           className="bg-violet-700 hover:bg-violet-800 transition-all duration-300 text-white font-semibold text-lg sm:text-xl py-3 px-6 rounded-md shadow-md"
//         >
//           Successfully Registered
//         </motion.div>

//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.7 }}
//           className="text-gray-400 font-medium mt-2"
//         >
//           For
//         </motion.p>

    
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.9 }}
//           className="text-4xl sm:text-5xl font-extrabold text-violet-500 tracking-wider"
//         >
//           SPOCC'25
//         </motion.div>

      
//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1.1 }}
//           className="text-lg sm:text-xl text-white mt-4 font-semibold"
//         >
//           Save the Date :
//           <br />
//           <span className="text-violet-300 font-bold">2nd september 2025</span>
//         </motion.p>

//         {/* Tech message */}
//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1.2 }}
//           className="text-sm sm:text-base text-gray-400 mt-2"
//         >
//           Get ready to stand out from the crowd and level up your skills in
//           <br />
//           emerging and advanced technologies.
//         </motion.p>

//         {/* Go to Home Button */}
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           onClick={handleHome}
//           className="mt-6 bg-white text-black font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-200 transition-all duration-300"
//         >
//           Go to Home
//         </motion.button>
//       </motion.div>

//       {/* Glow effect with Tailwind custom class */}
//       <style>
//         {`
//           .glow-text {
//             text-shadow: 0 0 10px #8b5cf6, 0 0 20px #8b5cf6;
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default Success;


// import React from "react";
// import { FaCheckCircle } from "react-icons/fa";
// import { motion } from "framer-motion";
// import Confetti from "./ui/confetti";
// import { useNavigate } from "react-router-dom";
// import ParticlesBackground from "./ParticlesBg";

// const Success = () => {
//   const name = localStorage.getItem("registeredName");
//   const navigate = useNavigate();

//   const handleHome = () => {
//     navigate("/");
//   };

//   return (
//     <div className="relative min-h-screen w-full bg-gradient-to-b from-[#050505] via-[#0a021f] to-black flex items-center justify-center overflow-hidden px-4 py-10">
//       {/* Animated Particles */}
//       <ParticlesBackground />

//       {/* Confetti burst */}
//       <div className="absolute top-0 inset-0 flex justify-center pointer-events-none z-[100]">
//         <Confetti spread={1000} />
//         <Confetti spread={1000} />
//         <Confetti spread={1000} />
//       </div>

//       {/* Success Card */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.9, y: 50 }}
//         animate={{ opacity: 1, scale: 1, y: 0 }}
//         transition={{ duration: 0.9, ease: "easeOut" }}
//         className="relative z-20 w-full max-w-[720px] bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_0_40px_rgba(168,85,247,0.2)] rounded-3xl p-10 sm:p-12 flex flex-col items-center text-center space-y-5"
//       >
//         {/* Pulsing glow behind icon */}
//         <div className="absolute -top-16 sm:-top-20 w-60 h-60 bg-violet-600/20 rounded-full blur-[100px] animate-pulse" />

//         {/* Registered Name */}
//         <motion.h1
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3 }}
//           className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400 drop-shadow-[0_0_10px_rgba(139,92,246,0.4)]"
//         >
//           {name}
//         </motion.h1>

//         {/* Subtext */}
//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.4 }}
//           className="text-lg sm:text-xl text-gray-300"
//         >
//           You are officially
//         </motion.p>

//         {/* Check Icon with pulse ring */}
//         <motion.div
//           initial={{ scale: 0 }}
//           animate={{ scale: 1 }}
//           transition={{ delay: 0.5, type: "spring", stiffness: 120 }}
//           className="relative flex items-center justify-center"
//         >
//           <div className="absolute w-40 h-40 sm:w-56 sm:h-56 rounded-full bg-green-500/10 animate-ping" />
//           <FaCheckCircle className="text-green-400 text-[100px] sm:text-[150px] drop-shadow-[0_0_30px_rgba(34,197,94,0.4)] relative z-10" />
//         </motion.div>

//         {/* Successfully Registered Banner */}
//         <motion.div
//           initial={{ opacity: 0, y: 15 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.6 }}
//           className="bg-gradient-to-r from-violet-600 to-fuchsia-500 px-8 py-3 rounded-xl text-white font-semibold text-lg sm:text-xl shadow-[0_0_20px_rgba(139,92,246,0.4)]"
//         >
//           Successfully Registered
//         </motion.div>

//         {/* “For” line */}
//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.8 }}
//           className="text-gray-400 font-medium mt-2"
//         >
//           For
//         </motion.p>

//         {/* SPOCC Title */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 1 }}
//           className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-fuchsia-400 to-violet-500 tracking-widest drop-shadow-[0_0_25px_rgba(168,85,247,0.5)]"
//         >
//           SPOCC'25
//         </motion.div>

//         {/* Event Date */}
//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1.2 }}
//           className="text-lg sm:text-xl text-white mt-4 font-semibold"
//         >
//           Save the Date:
//           <br />
//           <span className="text-violet-300 font-bold glow-text">
//             2nd September 2025
//           </span>
//         </motion.p>

//         {/* Description */}
//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1.3 }}
//           className="text-sm sm:text-base text-gray-400 mt-3 leading-relaxed"
//         >
//           Get ready to stand out and unlock your potential in
//           <br />
//           cutting-edge and emerging technologies.
//         </motion.p>

//         {/* Button */}
//         <motion.button
//           whileHover={{
//             scale: 1.05,
//             boxShadow: "0 0 25px rgba(168,85,247,0.5)",
//           }}
//           whileTap={{ scale: 0.95 }}
//           onClick={handleHome}
//           className="mt-6 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:opacity-90 transition-all duration-300"
//         >
//           Go to Home
//         </motion.button>
//       </motion.div>

//       {/* Neon Text Glow */}
//       <style>{`
//         .glow-text {
//           text-shadow: 0 0 8px #8b5cf6, 0 0 15px #8b5cf6;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Success;




import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CheckCircle2, 
  Calendar, 
  Home, 
  ShieldCheck, 
  Cpu, 
  Radio, 
  Sparkles,
  ChevronRight,
  Terminal,
  ArrowRight
} from "lucide-react";

/**
 * GlitchText: Randomized character shuffling effect to match the 
 * "decoding" aesthetic of the technical society.
 */
const GlitchText = ({ text, className }) => {
  const [display, setDisplay] = useState(text);
  const chars = "!@#$%^&*()_+{}:<>?|1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplay(text.split("").map((char, index) => {
        if (index < iteration) return text[index];
        return chars[Math.floor(Math.random() * chars.length)];
      }).join(""));
      if (iteration >= text.length) clearInterval(interval);
      iteration += 1/3;
    }, 40);
    return () => clearInterval(interval);
  }, [text]);

  return <span className={className}>{display}</span>;
};

/**
 * SuccessTerminal: The final landing state after successful data ingestion.
 * This component is designed to be displayed after a successful API call.
 */
const SuccessTerminal = () => {
  const name = localStorage.getItem("registeredName") || "AUTHENTICATED_USER";

  // Simple navigation handler
  const handleHome = () => {
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen w-full bg-[#020202] text-white font-mono flex items-center justify-center p-4 overflow-hidden relative">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#1e1b4b_0%,#020202_70%)] opacity-40 pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-violet-600/10 rounded-full blur-[150px] animate-pulse" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-fuchsia-600/10 rounded-full blur-[150px] animate-pulse" />

      {/* Main Success Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-3xl bg-black/40 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-8 md:p-16 flex flex-col items-center text-center shadow-[0_0_80px_rgba(139,92,246,0.1)]"
      >
        {/* Top Scanning Bar */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[2px] bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
        
        {/* Success Header Area */}
        <div className="space-y-4 mb-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-3 text-violet-400 font-black text-[10px] tracking-[0.4em] uppercase"
          >
            <Terminal size={12} />
            Transmission Received
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-white to-fuchsia-300 drop-shadow-[0_0_15px_rgba(139,92,246,0.3)] italic tracking-tighter"
          >
            {name}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-500 font-bold uppercase tracking-[0.3em] text-[11px]"
          >
            Credential Verification: <span className="text-green-500">PASSED</span>
          </motion.p>
        </div>

        {/* Central Kinetic Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -45 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.5, type: "spring", damping: 12 }}
          className="relative mb-12"
        >
          {/* Animated Rings */}
          <motion.div 
            animate={{ scale: [1, 1.4], opacity: [0.3, 0] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
            className="absolute inset-0 border-2 border-green-500 rounded-full"
          />
          <motion.div 
            animate={{ scale: [1, 1.2], opacity: [0.5, 0] }}
            transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
            className="absolute inset-0 border border-violet-500 rounded-full"
          />
          
          <div className="w-36 h-36 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-white/5 to-transparent border border-white/10 flex items-center justify-center relative z-10">
            <CheckCircle2 size={84} className="text-green-400 drop-shadow-[0_0_20px_rgba(74,222,128,0.5)]" />
            
            {/* Rotating Tech Ring */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
              className="absolute inset-0 border-t border-b border-violet-500/20 rounded-full scale-125"
            />
          </div>
        </motion.div>

        {/* Success Message Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-violet-600/10 border border-violet-500/20 px-12 py-5 rounded-2xl mb-12 relative group"
        >
          <div className="absolute inset-0 bg-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity blur-xl rounded-2xl" />
          <span className="text-white font-black text-xl md:text-2xl tracking-[0.2em] uppercase italic">
            Registration Confirmed
          </span>
        </motion.div>

        {/* SPOCC Branding Section */}
        <div className="space-y-2 mb-10">
          <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest">Designated Event</p>
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-6xl md:text-8xl font-black text-white italic tracking-tighter leading-none"
          >
            SPOCC<span className="text-violet-500">'25</span>
          </motion.h2>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-lg mb-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            className="bg-white/5 border border-white/5 p-6 rounded-3xl flex flex-col items-start gap-2 text-left"
          >
            <div className="p-2 rounded-lg bg-violet-600/20 text-violet-400">
              <Calendar size={18} />
            </div>
            <div>
              <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Timeline</p>
              <p className="text-sm font-bold text-white uppercase tracking-tighter">02 SEPT 2025</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1 }}
            className="bg-white/5 border border-white/5 p-6 rounded-3xl flex flex-col items-start gap-2 text-left"
          >
            <div className="p-2 rounded-lg bg-fuchsia-600/20 text-fuchsia-400">
              <Sparkles size={18} />
            </div>
            <div>
              <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Potential</p>
              <p className="text-sm font-bold text-white uppercase tracking-tighter">UNLOCKED</p>
            </div>
          </motion.div>
        </div>

        {/* Subtext Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-xs md:text-sm text-gray-500 leading-relaxed font-medium mb-12 max-w-md px-4"
        >
          Prepare for system integration. You are now part of a network driving the 
          future of <span className="text-violet-400 font-bold">emerging technologies</span>. 
          Stand by for further transmission via college gateway.
        </motion.p>

        {/* Navigation Button */}
        <motion.button
          whileHover={{ 
            scale: 1.05, 
            boxShadow: "0 0 30px rgba(139,92,246,0.4)",
            backgroundColor: "rgba(139,92,246,1)"
          }}
          whileTap={{ scale: 0.95 }}
          onClick={handleHome}
          className="bg-violet-600 text-white font-black uppercase tracking-[0.4em] py-5 px-14 rounded-2xl shadow-xl transition-all flex items-center gap-4 text-xs group"
        >
          <Home size={16} />
          Go to Home
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </motion.div>

      {/* Background Style Overrides */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700;800&display=swap');
        
        body { 
          background: #020202;
          font-family: 'JetBrains Mono', monospace;
        }

        /* Technical pulse ring animation */
        @keyframes orbit {
          from { transform: rotate(0deg) scale(1.25); }
          to { transform: rotate(360deg) scale(1.25); }
        }
      `}</style>
    </div>
  );
};

export default SuccessTerminal;