import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, QrCode, CreditCard } from 'lucide-react';
import { toast } from 'react-toastify';

export default function PaymentModal({ isOpen, onClose, onSubmit, isLoading }) {
  const [transactionId, setTransactionId] = useState("");

  const handleConfirm = () => {
    if (!transactionId.trim() || transactionId.length < 6) {
      toast.error("Please enter a valid Transaction ID.");
      return;
    }
    onSubmit(transactionId);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm" 
          />
          
          {/* Modal Content */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            // FIXED: Removed 'overflow-hidden' so shadows/glows aren't cut off
            // Added 'relative' to ensure z-index works correctly
            className="relative w-full max-w-md bg-[#09090b] border border-violet-500/30 rounded-2xl p-6 shadow-[0_0_50px_rgba(139,92,246,0.2)]"
          >
             {/* Header */}
             <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
               <h3 className="text-xl font-bold text-white flex items-center gap-2">
                 <QrCode className="text-violet-500" /> Scan & Pay
               </h3>
               <button 
                 onClick={onClose}
                 className="text-gray-400 hover:text-white transition-colors"
               >
                 <X size={24} />
               </button>
             </div>

             {/* QR Code Section */}
             <div className="flex flex-col items-center justify-center mb-6 space-y-4">
               <div className="p-3 bg-white rounded-xl">
                 {/* REPLACE WITH YOUR ACTUAL QR CODE IMAGE URL */}
                 <img 
                  //  src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg" 
                   src="/qr.jpeg"
                   alt="Payment QR" 
                   className="w-48 h-48 object-contain"
                 />
               </div>
               <p className="text-sm text-gray-400 text-center">
                 Scan with any UPI App (GPay, PhonePe, Paytm).<br/>
                 <span className="text-violet-400 font-semibold">Amount: ₹100</span>
               </p>
             </div>

             {/* Transaction ID Input */}
             <div className="space-y-4">
               <label className="block text-sm font-medium text-gray-300">
                 Enter Transaction ID / UTR <span className="text-red-500">*</span>
               </label>
               <div className="relative">
                  <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                  <input 
                      type="text" 
                      value={transactionId}
                      onChange={(e) => setTransactionId(e.target.value)}
                      placeholder="e.g. 404512345678"
                      className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:border-violet-500 transition-colors placeholder:text-gray-600"
                  />
               </div>
               <p className="text-[10px] text-gray-500">
                 This ID is required to verify your payment status.
               </p>

               <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleConfirm}
                  disabled={isLoading}
                  className="w-full bg-violet-600 hover:bg-violet-700 text-white font-bold py-3 rounded-lg transition-all shadow-lg shadow-violet-900/20 disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center"
               >
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                      Verifying...
                    </span>
                  ) : 'Confirm Payment & Register'}
               </motion.button>
             </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}