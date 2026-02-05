import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react'; // Make sure to install lucide-react if not present
import { useNavigate } from 'react-router-dom';
import GlowingCursor from './GlowingCursor';
import { InteractiveBackground } from './InteractiveBackground';

export default function SuccessPage() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full flex flex-col font-sans bg-[#000000] text-white overflow-hidden items-center justify-center">
      <GlowingCursor />
      <InteractiveBackground />
      <div className="fixed inset-0 bg-black/40 z-0 pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-10 p-8 rounded-2xl bg-black/30 backdrop-blur-xl border border-[#00aaff]/30 shadow-[0_0_40px_rgba(0,170,255,0.2)] text-center max-w-md w-[90%]"
      >
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          className="w-20 h-20 bg-[#00aaff]/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-[#00aaff]/50"
        >
          <CheckCircle className="w-10 h-10 text-[#00aaff]" />
        </motion.div>

        <h1 className="text-3xl font-bold mb-2 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
          Registration Successful!
        </h1>
        <p className="text-gray-400 mb-8 tracking-wide text-sm">
          Welcome to the future. Your details have been recorded in the system.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/register')}
          className="px-8 py-3 bg-gradient-to-r from-[#0066cc] to-[#00aaff] text-white rounded-lg font-bold tracking-widest uppercase text-sm shadow-[0_0_20px_rgba(0,170,255,0.4)]"
        >
          Go Back
        </motion.button>
      </motion.div>
    </div>
  );
}