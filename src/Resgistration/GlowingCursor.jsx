import React, { useEffect, useState, useRef, memo } from 'react';
import { motion, useMotionValue, AnimatePresence } from 'framer-motion';

const CursorDot = memo(({ mouseX, mouseY }) => {
  return (
    <motion.div
      style={{ 
        x: mouseX, y: mouseY, position: 'fixed', left: 0, top: 0, willChange: "transform"
      }}
      className="pointer-events-none z-[9999] hidden md:block w-5 h-5"
    >
      {/* Updated Cursor Color */}
      <div 
        className="w-full h-full bg-violet-500 rounded-full border border-violet-400"
        style={{ 
          boxShadow: "0 0 10px 2px rgba(139, 92, 246, 0.8), 0 0 20px 15px rgba(124, 58, 237, 0.4)" 
        }}
      />
    </motion.div>
  );
});

const EffectsLayer = () => {
  const [ripples, setRipples] = useState([]);
  const [sparkles, setSparkles] = useState([]);
  const lastSparkleTime = useRef(0);

  useEffect(() => {
    const handleInteraction = (e) => {
      const now = Date.now();
      if (e.type === 'mousemove') {
        if (now - lastSparkleTime.current > 40) {
          const newSparkle = {
            id: now, x: e.clientX, y: e.clientY, offsetX: (Math.random() - 0.5) * 10,
          };
          setSparkles(prev => [...prev, newSparkle]);
          lastSparkleTime.current = now;
          setTimeout(() => {
            setSparkles(prev => prev.filter(s => s.id !== newSparkle.id));
          }, 800);
        }
      }
      if (e.type === 'mousedown') {
        const newRipple = { id: Date.now(), x: e.clientX, y: e.clientY };
        setRipples(prev => [...prev, newRipple]);
        setTimeout(() => {
          setRipples(prev => prev.filter(r => r.id !== newRipple.id));
        }, 1000);
      }
    };
    window.addEventListener("mousemove", handleInteraction);
    window.addEventListener("mousedown", handleInteraction);
    return () => {
      window.removeEventListener("mousemove", handleInteraction);
      window.removeEventListener("mousedown", handleInteraction);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9998] overflow-hidden">
      <AnimatePresence>
        {sparkles.map((sparkle) => (
          <motion.div
            key={sparkle.id}
            initial={{ opacity: 1, scale: 0.5, x: sparkle.x, y: sparkle.y }}
            animate={{ opacity: 0, scale: 0, x: sparkle.x + sparkle.offsetX, y: sparkle.y + 40 }}
            transition={{ duration: 0.8, ease: "linear" }}
            // Updated Sparkle Color (Violet/Fuchsia mix)
            className="absolute w-1.5 h-1.5 bg-fuchsia-400 rounded-full blur-[0.5px]"
            style={{ left: 0, top: 0 }}
          />
        ))}
      </AnimatePresence>

      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.div
            key={ripple.id}
            initial={{ opacity: 1, scale: 0, x: ripple.x - 20, y: ripple.y - 20, borderWidth: "3px" }}
            animate={{ opacity: 0, scale: 2.5, borderWidth: "0px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            // Updated Ripple Color
            className="absolute top-0 left-0 w-10 h-10 rounded-full border border-violet-500"
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

const GlowingCursor = () => {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  useEffect(() => {
    const updateMouse = (e) => { mouseX.set(e.clientX - 10); mouseY.set(e.clientY - 10); };
    window.addEventListener("mousemove", updateMouse);
    return () => { window.removeEventListener("mousemove", updateMouse); };
  }, [mouseX, mouseY]);

  return (
    <>
      <style>{` * { cursor: none !important; } input, textarea, select, button, a { cursor: none !important; } `}</style>
      <CursorDot mouseX={mouseX} mouseY={mouseY} />
      <EffectsLayer />
    </>
  );
};

export default GlowingCursor;