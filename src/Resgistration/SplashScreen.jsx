import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


const SplashScreen = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 1000); 
    }, 3500); 
    return () => clearTimeout(timer);
  }, [onComplete]);

  const titleText = "CLOUD COMPUTING CELL";
  const words = titleText.split(" ");

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="splash"
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050505] text-white px-4"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: 1 }}
        >
          
          
          <motion.div
            initial={{ scale: 0.5, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative mb-6 md:mb-8"
          >
            <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full scale-150 animate-pulse" />
            
            <img 
              src="/cccLogo.png" 
              alt="CCC Logo" 
              className="w-20 h-20 md:w-28 md:h-28 object-contain relative z-10 drop-shadow-[0_0_15px_rgba(0,170,255,0.6)]" 
            />
          </motion.div>

          
          <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 mb-4 max-w-2xl px-2">
            {words.map((word, wordIndex) => {
              const previousLettersCount = words.slice(0, wordIndex).join("").length;

              return (
                <div key={wordIndex} className="flex whitespace-nowrap">
                  {word.split("").map((letter, letterIndex) => {
                    const globalIndex = previousLettersCount + letterIndex;
                    
                    return (
                      <motion.span
                        key={letterIndex}
                        initial={{ y: 40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ 
                          delay: 0.5 + (globalIndex * 0.05),
                          duration: 0.6,
                          ease: "backOut"
                        }}
                        className="text-xl sm:text-2xl md:text-3xl font-serif tracking-widest font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400"
                      >
                        {letter}
                      </motion.span>
                    );
                  })}
                </div>
              );
            })}
          </div>

          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.2, duration: 0.8 }}
            className="relative"
          >
             <div className="absolute -inset-4 bg-blue-500/10 blur-xl rounded-full" />
             <p className="relative text-[#00aaff] tracking-[0.4em] md:tracking-[0.6em] text-xs md:text-sm font-bold uppercase drop-shadow-[0_0_5px_rgba(0,170,255,0.8)]">
               Presents
             </p>
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
};


export default SplashScreen;