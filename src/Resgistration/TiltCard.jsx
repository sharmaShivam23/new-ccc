import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export const TiltCard = ({ children, className = "" }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 500, damping: 50 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 50 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ 
        rotateX, 
        rotateY, 
        transformStyle: "preserve-3d" 
      }}
      className={`relative w-full h-full flex flex-col justify-center items-center perspective-1000 ${className}`}
    >
      {/* Holographic Backing Glow */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-[#00aaff]/10 to-transparent rounded-[20px] -z-10 blur-xl opacity-0 hover:opacity-100 transition-opacity duration-500"
        style={{ transform: "translateZ(-50px)" }}
      />
      
      {/* 3D Container for Content */}
      <div style={{ transform: "translateZ(30px)", width: "100%" }}>
        {children}
      </div>
    </motion.div>
  );
};