import React from "react";
import OrbitingCircles from "./ui/orbiting-circles";
import logo from "../images/logo.svg";
import TypingAnimation from "./ui/typing-animation";
import A from "../images/A.png";
import B from "../images/B.png";
import C from "../images/C.png";
import D from "../images/D.png";
import black from "../images/black.jpeg";
import orbitbg from "../images/orbitbg.jpeg";
import { motion } from "framer-motion";
import ui from "../images/ui.png";
import Particles from "./ui/particles";
import Meteors from "./ui/meteors";
import ShimmerButton from "./ui/shimmer-button";
import ShineBorder from "./ui/shine-border";
import { BorderBeam } from "./ui/border-beam";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  let navigate = useNavigate();
  function register() {
    navigate("/Register");
  }

  return (
    <>
      <div className="">
        <div className="h-screen w-screen bg-black z-40 relative  overflow-hidden">
          <Particles />
          <Meteors />
          <OrbitingCircles className="">
            <Particles />
          </OrbitingCircles>

          <div className="absolute inset-0 flex flex-col mt-20 sm:mt-0 mb-96 justify-center items-center text-white text-center px-4">
            <TypingAnimation
              duration={60}
              delay={0}
              startOnView={true}
              className="text-white z-10 text-2xl md:text-3xl lg:text-5xl font-jetbrains font-bold"
            >
              {"Join the Future of Cloud Computing"}
            </TypingAnimation>
            {/* <TypingAnimation
              duration={100}
              delay={200}
              startOnView={true}
              className="text-white text-md z-10 md:text-2xl  lg:text-3xl mt-1 sm:mt-4 font-jetbrains font-bold"
            > */}
            {/* {"Innovating the World of Technology and Coding"} */}
            {/* </TypingAnimation> */}
            <motion.p className="text-white mt-2 sm:mt-4 z-10 text-xs md:text-xl font-jetbrains">
              Our society is a space for tech enthusiasts to learn, code, and
              grow together. <br className="sm:mt-3 mt-0" /> We explore cloud
              computing, programming, and modern technologies.{" "}
              {/*through <br className="sm:mt-3 mt-0"/> hands-on projects and teamwork. 
              <br className="sm:mt-3 mt-0"/>*/}
            </motion.p>
            {/* <motion.p  className="text-white mt-2 sm:mt-7 z-10 text-xs md:text-xl font-jetbrains">
               our society empowers tech enthusiasts and professionals to explore coding   and 
              <br className="sm:mt-3 mt-0"/>innovative technologies,  shaping the future with passion and expertise
            </motion.p> */}

            <div className="text-white z-40 text-xl hidden  sm:flex md:text-xl mt-4 font-bold right-10 absolute top-0  sm:top-5 sm:right-36">
              <ShimmerButton
                onClick={register}
                shimmerSize = "4px"
                  background = "rgba(36, 36, 36, 1)"
                className="cursor-pointer  shadow-md shake shadow-violet-700  hover:scale-125 font-poppins transition-all ease-in-out duration-1000 delay-0"
              >
               
                <motion.div
                  className="h-[15px]  w-[15px] mr-4 rounded-full bg-violet-700 border-4 border-violet-400"
                  initial={{ scale: 1, borderColor: "#7c3aed" }}
                  animate={{
                    scale: [1, 1.2, 1],
                    borderColor: ["#7c3aed", "#9b4de6", "#7c3aed"], 
                  }}
                  transition={{
                    duration: 1.5,
                    ease: "easeOut",
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                />
                Register
              </ShimmerButton>
            </div>
            <div className="text-white z-40 sm:hidden text-xl md:text-xl mt-4 font-bold">
             
               <ShimmerButton
                shimmerSize = "4px"
                  background = "rgba(36, 36, 36, 1)"
                onClick={register}
                className="cursor-pointer shake shadow-sm shadow-violet-700  hover:scale-125 font-poppins transition-all ease-in-out duration-1000 delay-0"
              >
              
                <motion.div
                  className="h-[10px] w-[10px] mr-2 rounded-full bg-violet-700 border-4 border-white"
                  initial={{ scale: 1, borderColor: "#7c3aed" }}
                  animate={{
                    scale: [1, 1.2, 1],
                    borderColor: ["#7c3aed", "#9b4de6", "#7c3aed"], 
                  }}
                  transition={{
                    duration: 1.5,
                    ease: "easeOut",
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                />
                Register
              </ShimmerButton>
            </div>
          </div>

          <div className="absolute inset-0 flex sm:flex-col gap-10 justify-center items-center sm:max-w-[90vw] w-full  text-white text-center px-4">
            {/* <ShineBorder
              borderRadius={8}
              borderWidth={1}
              duration={2}
              color={["#ff00ff", "#00ff00"]}
              className="shadow-lg animate-bounce2 z-40 cursor-pointer hidden md:block  absolute left-36 bottom-40"
            >
              <h1 className="text-xl font-bold bg-transparent z-50 hover:scale-125 transition-all ease-in-out duration-1000 delay-0 font-poppins cursor-pointer  text-white text-center">
                Hello, World!
              </h1>
            </ShineBorder> */}

            {/* <ShineBorder
              borderRadius={8}
              borderWidth={1}
              duration={2}
              color={["#ff00ff", "#00ff00"]}
              className="shadow-lg animate-bounce2 hidden z-40   hover:scale-125 transition-all ease-in-out duration-1000 delay-0 cursor-pointer md:block justify-center  text-center  absolute ml-7 right-0 bottom-40"
            >
              <h1 className="text-2xl font-bold  hover:scale-110 transition-all ease-in-out duration-1000 delay-0 font-poppins cursor-pointer  bg-transparent text-white text-center">
                Hello, Coders!
              </h1>
            </ShineBorder>

            <ShineBorder
              borderRadius={5}
              borderWidth={1}
              duration={2}
              color={["#ff00ff", "#00ff00"]}
              className="shadow-lg animate-bounce2 md:hidden block  cursor-pointer  justify-center  text-center  absolute bottom-40"
            >
              <h1 className=" text-lg sm:text-xl font-bold cursor-pointer font-playwrite bg-transparent text-white text-center">
                Hello, Coders!
              </h1>
            </ShineBorder> */}
            <div className="absolute max-[950px]:hidden flex max-[650px]:flex right-10 gap-10 sm:right-16  max-[400px]:hidden">
              <img
                src={D}
                className="h-28 sm:h-40 z-50 max-[1000px]:h-24 animate-bounce"
                alt="D"
              />
            </div>
            <div className="absolute  left-10 max-[950px]:hidden flex max-[650px]:flex z-[2px] sm:left-60 max-[400px]:hidden">
              <img
                src={C}
                className="h-28 sm:h-40 z-50 max-[1000px]:h-24 animate-bounce"
                alt="C"
              />
            </div>
          </div>

          <div className="absolute top-1/2 left-1/2 -z-10 mt-10 -translate-x-1/2 -translate-y-1/2">
            <motion.div
              initial={{ y: 600 }}
              animate={{ y: 450 }}
              transition={{ duration: 2, ease: "easeIn" }}
            >
              <img src={orbitbg} className="hidden lg:block" alt="" />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};



export default Landing;

// import React, { useState, useEffect, useRef } from "react";
// import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import { 
//   Cloud, 
//   Server, 
//   Database, 
//   Code, 
//   Cpu, 
//   Globe, 
//   ArrowRight, 
//   Zap,
//   Terminal,
//   Cpu as ChipIcon
// } from "lucide-react";

// // --- Advanced UI Components ---

// // 1. Dynamic Background with Moving Stars & Grid
// const CosmicBackground = () => {
//   return (
//     <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
//       <div className="absolute inset-0 bg-[#020005]" /> {/* Deepest Violet-Black */}
      
//       {/* Radial Gradient Glow */}
//       <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-violet-900/20 rounded-full blur-[120px] mix-blend-screen" />
//       <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-indigo-900/10 rounded-full blur-[120px] mix-blend-screen" />

//       {/* Moving Grid */}
//       <div 
//         className="absolute inset-0 opacity-[0.2]" 
//         style={{
//           backgroundImage: `linear-gradient(to right, rgba(124, 58, 237, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(124, 58, 237, 0.1) 1px, transparent 1px)`,
//           backgroundSize: '4rem 4rem',
//           maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)'
//         }}
//       />
      
//       {/* Tiny Floating Stars */}
//       <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
//     </div>
//   );
// };

// // 2. Border Beam Effect (Animated Border)
// const BorderBeam = ({ children, className = "" }) => {
//   return (
//     <div className={`relative group ${className}`}>
//       <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-violet-600 via-indigo-500 to-violet-600 opacity-30 blur-sm group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-border-spin" />
//       <div className="relative h-full bg-black/90 backdrop-blur-xl rounded-xl border border-white/10 overflow-hidden">
//         {children}
//       </div>
//     </div>
//   );
// };

// // 3. Cinematic Text Reveal
// const CinematicText = ({ text, className }) => {
//   const words = text.split(" ");
//   return (
//     <motion.h1 className={className}>
//       {words.map((word, i) => (
//         <motion.span
//           key={i}
//           initial={{ opacity: 0, filter: "blur(20px)", y: 20 }}
//           animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
//           transition={{ 
//             duration: 0.8, 
//             delay: 0.1 + i * 0.15,
//             ease: [0.2, 0.65, 0.3, 0.9]
//           }}
//           className="inline-block mr-[0.2em]"
//         >
//           {word}
//         </motion.span>
//       ))}
//     </motion.h1>
//   );
// };

// // 4. Glowing Corner Button (Specialized for Top Right)
// const GlowingCornerButton = ({ onClick, children }) => {
//   return (
//     <motion.button
//       whileHover={{ scale: 1.05 }}
//       whileTap={{ scale: 0.95 }}
//       onClick={onClick}
//       className="relative group cursor-pointer isolate"
//     >
//       {/* Animated Glow Layer */}
//       <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-lg blur opacity-60 group-hover:opacity-100 group-hover:blur-md transition duration-500 animate-pulse" />
      
//       <div className="relative px-6 py-2.5 bg-black rounded-lg border border-violet-500/50 flex items-center gap-2 overflow-hidden shadow-2xl">
//         <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:animate-shine" />
        
//         <span className="text-white font-medium text-sm tracking-wide font-jetbrains z-10 flex items-center gap-2">
//           {children}
//           <ArrowRight className="w-4 h-4 text-violet-300 group-hover:translate-x-1 transition-transform" />
//         </span>
//       </div>
//     </motion.button>
//   );
// };

// // 5. Floating Tech Stack (Improved Orbit)
// const FloatingTechIcons = () => {
//   const icons = [
//     { icon: <Cloud className="w-5 h-5 md:w-6 md:h-6 text-cyan-300" />, delay: 0, x: -120, y: -50 },
//     { icon: <Database className="w-5 h-5 md:w-6 md:h-6 text-violet-300" />, delay: 1, x: 140, y: -20 },
//     { icon: <Server className="w-5 h-5 md:w-6 md:h-6 text-indigo-300" />, delay: 2, x: -90, y: 100 },
//     { icon: <ChipIcon className="w-5 h-5 md:w-6 md:h-6 text-fuchsia-300" />, delay: 3, x: 100, y: 80 },
//     { icon: <Code className="w-5 h-5 md:w-6 md:h-6 text-emerald-300" />, delay: 4, x: 0, y: -110 },
//   ];

//   return (
//     <div className="absolute inset-0 pointer-events-none flex justify-center items-center z-10 max-w-[100vw] overflow-hidden">
//       {icons.map((item, index) => (
//         <motion.div
//           key={index}
//           initial={{ opacity: 0, scale: 0 }}
//           animate={{ 
//             opacity: [0.3, 0.8, 0.3], 
//             scale: [1, 1.1, 1],
//             y: [item.y, item.y - 10, item.y],
//           }}
//           transition={{
//             duration: 3 + index,
//             delay: item.delay,
//             repeat: Infinity,
//             repeatType: "reverse",
//             ease: "easeInOut"
//           }}
//           className="absolute p-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/5 shadow-[0_0_15px_rgba(139,92,246,0.15)]"
//           style={{ x: item.x, y: item.y }}
//         >
//           {item.icon}
//         </motion.div>
//       ))}
//     </div>
//   );
// };

// // 6. Terminal Code Block
// const TerminalBlock = () => {
//   return (
//     <div className="w-full max-w-[500px] mx-auto mt-12 perspective-1000">
//       <motion.div
//         initial={{ rotateX: 15, opacity: 0, y: 40 }}
//         animate={{ rotateX: 0, opacity: 1, y: 0 }}
//         transition={{ duration: 1, delay: 0.6, type: "spring" }}
//       >
//         <BorderBeam>
//           {/* Terminal Header */}
//           <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/5">
//             <div className="flex gap-1.5">
//               <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
//               <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
//               <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
//             </div>
//             <div className="text-[10px] text-gray-500 font-mono tracking-widest uppercase">cloud_protocol.sh</div>
//           </div>
          
//           {/* Terminal Content */}
//           <div className="p-5 font-mono text-xs md:text-sm text-gray-300 space-y-2 leading-relaxed">
//             <div className="flex items-center">
//               <span className="text-green-400 mr-2">➜</span>
//               <span className="text-violet-400">~/society</span>
//               <span className="ml-2 text-white">init connect</span>
//             </div>
            
//             <div className="text-gray-500 pl-4">
//               <span className="text-blue-400">ℹ</span> Establishing secure uplink...
//             </div>
            
//             <div className="pl-4 space-y-1 text-xs text-gray-500/80">
//               <div className="flex justify-between border-b border-white/5 pb-1">
//                 <span>[✓] Core Systems</span>
//                 <span className="text-emerald-500">Active</span>
//               </div>
//               <div className="flex justify-between pt-1">
//                 <span>[✓] Community Hub</span>
//                 <span className="text-emerald-500">Online</span>
//               </div>
//             </div>

//             <div className="flex items-center pt-2">
//               <span className="text-green-400 mr-2">➜</span>
//               <span className="text-violet-400">~/society</span>
//               <span className="ml-2 animate-pulse text-violet-200">awaiting_user_input_</span>
//             </div>
//           </div>
//         </BorderBeam>
//       </motion.div>
//     </div>
//   );
// }

// // --- Main Page ---

// const Landing = () => {
//   let navigate = useNavigate();
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

//   function register() {
//     navigate("/Register");
//   }

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePos({ x: e.clientX, y: e.clientY });
//     };
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   return (
//     <div className="relative w-full min-h-screen bg-[#030005] text-white selection:bg-violet-500/30 overflow-x-hidden font-sans">
      
//       {/* Background Layer */}
//       <CosmicBackground />
      
//       {/* Spotlight Follower */}
//       <div 
//         className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-500"
//         style={{
//           background: `radial-gradient(500px circle at ${mousePos.x}px ${mousePos.y}px, rgba(139, 92, 246, 0.06), transparent 80%)`
//         }}
//       />

//       {/* Top Right Floating Button (Replaces Navbar) */}
//       <div className="fixed top-6 right-6 md:top-8 md:right-10 z-50">
//         <GlowingCornerButton onClick={register}>
//           Register Now
//         </GlowingCornerButton>
//       </div>

//       {/* Hero Content */}
//       <main className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 py-20 text-center">
        
//         {/* Logo/Identity (Small, centered at top relative to content) */}
//         <div className="absolute top-10 left-6 md:top-10 md:left-10 z-40 flex items-center gap-3 opacity-80 hover:opacity-100 transition-opacity cursor-default">
//            <div className="w-8 h-8 flex items-center justify-center bg-white/5 rounded-lg border border-white/10">
//              <Zap className="text-violet-400 w-4 h-4" />
//            </div>
//            <span className="font-semibold text-sm tracking-widest uppercase text-gray-400">CloudSociety</span>
//         </div>

//         {/* Floating Icons behind text */}
//         <FloatingTechIcons />

//         {/* Status Badge */}
//         <motion.div 
//           initial={{ opacity: 0, y: -10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/20 bg-violet-950/20 backdrop-blur-sm"
//         >
//           <span className="relative flex h-1.5 w-1.5">
//             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
//             <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-violet-500"></span>
//           </span>
//           <span className="text-[10px] md:text-xs font-medium text-violet-300 tracking-wider uppercase">Recruitment Live</span>
//         </motion.div>

//         {/* Main Headline - REDUCED SIZE for Professional Look */}
//         <div className="relative z-20 max-w-4xl mx-auto space-y-2">
//           <CinematicText 
//             text="Deploy Your Potential" 
//             className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white/90"
//           />
//           <motion.h1 
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter"
//           >
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-300 to-white animate-gradient-x pb-2">
//               Into The Cloud
//             </span>
//           </motion.h1>
//         </div>

//         {/* Description - Smaller, more refined */}
//         <motion.p 
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.8, delay: 0.6 }}
//           className="mt-6 text-base md:text-lg text-gray-400 max-w-xl font-light leading-relaxed mx-auto"
//         >
//           We are the <span className="text-violet-200 font-medium">Cloud Computing Cell</span>. 
//           A collective of architects building the digital infrastructure of tomorrow.
//         </motion.p>

//         {/* Terminal/Code Section */}
//         <TerminalBlock />

//       </main>

//       {/* Footer Vignette */}
//       <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#020005] to-transparent z-20 pointer-events-none" />
      
//       {/* Global Styles for Keyframes */}
//       <style jsx>{`
//         @keyframes shine {
//           from { transform: translateX(-100%) skewX(12deg); }
//           to { transform: translateX(200%) skewX(12deg); }
//         }
//         .animate-shine {
//           animation: shine 3s infinite linear;
//         }
//         @keyframes gradient-x {
//           0%, 100% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//         }
//         .animate-gradient-x {
//           background-size: 200% 200%;
//           animation: gradient-x 6s ease infinite;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Landing;