import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';

const Success4 = ({ transactionId, onReset }) => {
  return (
    <motion.div
      key="success"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="flex flex-col items-center justify-center h-full w-full gap-6 text-center"
    >
      {/* Success Icon */}
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", delay: 0.2 }}
        className="w-24 h-24 rounded-full bg-green-500/20 flex items-center justify-center border border-green-500/50 shadow-[0_0_40px_rgba(34,197,94,0.4)]"
      >
        <CheckCircle size={48} className="text-green-400" />
      </motion.div>

      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-white tracking-wide">Registration Confirmed!</h2>
        <p className="text-[#a78bfa] text-lg opacity-80 max-w-sm mx-auto">
          Thank you for registering. A confirmation email has been sent to your college ID.
        </p>
      </div>

     
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onReset}
        className="mt-4 flex items-center gap-2 px-8 py-3 bg-[#5b21b6] hover:bg-[#6d28d9] text-white rounded-full font-bold shadow-lg shadow-violet-900/40 transition-all cursor-pointer"
      >
        Register Another <ArrowRight size={18} />
      </motion.button>
    </motion.div>
  );
};

export default Success4;