import React from 'react';
import { SparklesCore } from "./sparkles";
import { Facebook, Linkedin, Instagram } from 'lucide-react';

export const Footer = () => {
  return (
    <div className="relative w-full mt-auto z-20 bg-black/60 border-t border-[#00aaff]/30 backdrop-blur-md">
      
     
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <SparklesCore 
            background="transparent" 
            minSize={0.4} 
            maxSize={1.2} 
            particleDensity={50} 
            className="w-full h-full" 
            particleColor="#FFFFFF" 
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center gap-8 py-16 px-4 text-center w-full">
         
        
         <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

       
         <p className="font-serif text-sm md:text-base tracking-[0.5em] text-white/80 uppercase">
            Think. Develop. Deploy
         </p>
         
        
         <div className="flex flex-col md:flex-row items-center gap-4">
            <img src="/cccLogo.png" alt="CCC Logo" className="w-12 h-12 object-contain drop-shadow-[0_0_10px_rgba(0,170,255,0.5)]" />
            <span className="text-2xl md:text-3xl font-bold tracking-widest text-white drop-shadow-md">
                CLOUD COMPUTING CELL
            </span>
         </div>

         
         <p className="text-gray-400 text-base md:text-lg font-light max-w-2xl leading-relaxed">
            Empowering students to innovate, collaborate, and lead in the world of technology.
         </p>

       
         <div className="flex gap-10 mt-4">
            <a href="#" className="text-gray-400 hover:text-[#00aaff] transition-colors transform hover:scale-125 hover:rotate-6 duration-300">
                <Facebook size={28} />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#00aaff] transition-colors transform hover:scale-125 hover:rotate-6 duration-300">
                <Linkedin size={28} />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#00aaff] transition-colors transform hover:scale-125 hover:rotate-6 duration-300">
                <Instagram size={28} />
            </a>
         </div>

        
         <p className="text-white/20 text-xs mt-4 tracking-wider">
            © {new Date().getFullYear()} CCC. All rights reserved.
         </p>
      </div>
    </div>
  );
};