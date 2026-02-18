import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, Lock, ArrowLeft } from 'lucide-react';

export default function OtpModal({ isOpen, onClose, onBack, onVerify, email, isLoading }) {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef([]);

  // Auto-focus first input on open AND Clear inputs
  useEffect(() => {
    if (isOpen) {
      setOtp(['', '', '', '', '', '']); // Clear OTP on Open
      
      // Slight delay ensures the modal animation is started before focusing
      // This triggers the keyboard to open automatically
      if (inputRefs.current[0]) {
        setTimeout(() => {
          inputRefs.current[0].focus();
        }, 100);
      }
    }
  }, [isOpen]);

  const handleChange = (index, value) => {
    // Regex ensures only numbers are accepted
    if (value && !/^\d+$/.test(value)) return;

    const newOtp = [...otp];
    // Take the last character entered (handles cases where user types fast)
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    // Move to next input
    if (value && index < 5 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0 && inputRefs.current[index - 1]) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const otpCode = otp.join('');
    if (otpCode.length === 6) {
      onVerify(otpCode);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="relative w-full max-w-md bg-[#09090b] border border-violet-500/20 rounded-2xl p-6 shadow-[0_0_40px_rgba(139,92,246,0.15)] overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Header */}
            <div className="flex justify-between items-start mb-6 relative z-10">
              <div className="flex items-center gap-3">
                 {/* Back Button */}
                 <button 
                    onClick={onBack} 
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors mr-1"
                    title="Go Back"
                 >
                    <ArrowLeft size={18} />
                 </button>

                <div className="p-2.5 bg-violet-500/10 rounded-lg border border-violet-500/20">
                  <ShieldCheck className="w-6 h-6 text-violet-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">Security Check</h3>
                  <p className="text-xs text-gray-400 mt-1">Enter code sent to <br/><span className="text-violet-300 font-mono">{email}</span></p>
                </div>
              </div>
              <button onClick={onClose} className="text-gray-500 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* OTP Inputs */}
            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
              <div className="flex justify-between gap-2">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => (inputRefs.current[index] = el)}
                    
                    /* --- KEY CHANGES HERE --- */
                    type="text" 
                    inputMode="numeric" // Forces number pad on Android/iOS
                    pattern="[0-9]*"    // Fallback for iOS number pad
                    autoComplete="one-time-code" // Allows SMS Auto-fill
                    /* ------------------------ */

                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    className="w-10 h-12 sm:w-12 sm:h-14 bg-black/50 border border-white/10 rounded-lg text-center text-xl font-mono text-white focus:border-violet-500 focus:ring-1 focus:ring-violet-500 focus:outline-none transition-all"
                  />
                ))}
              </div>

              <div className="flex flex-col gap-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isLoading || otp.join('').length !== 6}
                  className="w-full py-3 bg-violet-600 hover:bg-violet-500 text-white font-semibold rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-violet-900/20"
                >
                  {isLoading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Lock size={18} />
                      Verify Identity
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}