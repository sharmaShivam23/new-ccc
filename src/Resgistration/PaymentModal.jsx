import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, ArrowLeft, Download, Copy, CheckCircle2, Smartphone } from 'lucide-react';

export default function PaymentModal({ isOpen, onClose, onBack, onSubmit, isLoading }) {
  const [txnId, setTxnId] = useState('');
  const [copied, setCopied] = useState(false);

  // --- CONFIG ---
  const QR_IMAGE_URL = "/aqr1.jpeg"; 
  const UPI_ID = "9140887448@sbi"; 
  const AMOUNT = "100"; 

  const handleSubmit = (e) => {
    e.preventDefault();
    const cleanId = txnId.trim();
    
    // Safety check (redundant if button is disabled, but good practice)
    if (cleanId.length < 6) {
      return; 
    }
    
    onSubmit(cleanId);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(UPI_ID);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = QR_IMAGE_URL;
    link.download = 'Payment_QR.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePayViaApp = () => {
    // UPI Intent Link
    const upiUrl = `upi://pay?pa=${UPI_ID}&pn=NimbusRegistration&am=${AMOUNT}&cu=INR`;
    window.location.href = upiUrl;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 30 }}
            className="relative w-full max-w-lg bg-[#09090b] border border-violet-500/30 rounded-2xl p-0 shadow-[0_0_50px_rgba(139,92,246,0.2)] overflow-hidden"
          >
            {/* Top Bar Decoration */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500" />
            
            <div className="p-6">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-3">
                          <button 
                            onClick={onBack} 
                            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                            title="Back to OTP"
                          >
                            <ArrowLeft size={20} />
                          </button>
                          <h3 className="text-2xl font-bold text-white tracking-tight">Complete Payment</h3>
                    </div>
                    <button onClick={onClose} className="text-gray-500 hover:text-white transition-colors">
                        <X size={24} />
                    </button>
                </div>

                <div className="flex flex-col md:flex-row gap-6">
                    {/* LEFT: QR Code & Actions */}
                    <div className="flex flex-col gap-3 w-full md:w-auto">
                        <div className="flex flex-col items-center justify-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                            
                            {/* QR Image */}
                            <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center overflow-hidden">
                                 <img src={QR_IMAGE_URL} alt="UPI QR" className="w-full h-full object-cover" /> 
                            </div>
                            
                            <div className="flex flex-col items-center">
                                <span className="text-xs text-gray-400 font-mono">Scan to Pay</span>
                                <span className="text-lg font-bold text-white">₹ {AMOUNT}</span>
                            </div>

                            {/* Two Action Buttons */}
                            <div className="flex gap-2 w-full mt-1">
                                <button 
                                    onClick={handleDownload}
                                    className="flex-1 py-1.5 px-2 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center gap-1.5 transition-colors"
                                    title="Download QR"
                                >
                                    <Download size={14} className="text-violet-300" />
                                    <span className="text-[10px] font-bold text-gray-300">Save QR</span>
                                </button>
                                <button 
                                    onClick={handlePayViaApp}
                                    className="flex-1 py-1.5 px-2 bg-violet-600/20 hover:bg-violet-600/40 border border-violet-500/30 rounded-lg flex items-center justify-center gap-1.5 transition-colors"
                                    title="Open UPI App"
                                >
                                    <Smartphone size={14} className="text-violet-300" />
                                    <span className="text-[10px] font-bold text-violet-200">Open App</span>
                                </button>
                            </div>
                        </div>

                        {/* UPI ID Copy Section */}
                        <div className="flex items-center justify-between bg-white/5 border border-white/10 rounded-lg p-2 px-3">
                            <span className="text-xs font-mono text-gray-300 truncate max-w-[120px]">{UPI_ID}</span>
                            <button 
                                onClick={handleCopy}
                                className="text-violet-400 hover:text-violet-300 transition-colors"
                                title="Copy UPI ID"
                            >
                                {copied ? <CheckCircle2 size={14} /> : <Copy size={14} />}
                            </button>
                        </div>
                    </div>

                    {/* RIGHT: Transaction Form */}
                    <div className="flex-1 flex flex-col justify-center gap-4">
                        
                        {/* INPUT FIELD WITH VALIDATION */}
                        <div className="space-y-1">
                            <div className="flex justify-between items-end">
                                <label className="text-sm text-gray-400 font-medium">Transaction ID / UTR</label>
                                {/* Character Counter / Error Indicator */}
                                <span className={`text-[10px] font-mono ${txnId.length > 0 && txnId.trim().length < 6 ? 'text-red-400' : 'text-gray-600'}`}>
                                    {txnId.length}/12
                                </span>
                            </div>
                            
                            <input 
                                type="text" 
                                value={txnId}
                                onChange={(e) => setTxnId(e.target.value)}
                                placeholder="Enter 12-digit UTR"
                                className={`
                                    w-full bg-black/40 border rounded-xl px-4 py-3 text-white 
                                    placeholder-gray-600 outline-none font-mono transition-all
                                    ${txnId.length > 0 && txnId.trim().length < 6 
                                        ? 'border-red-500/50 focus:border-red-500 focus:ring-1 focus:ring-red-500' // Error Style
                                        : 'border-white/20 focus:border-violet-500 focus:ring-1 focus:ring-violet-500' // Normal Style
                                    }
                                `}
                            />

                            {/* Validation Message */}
                            {txnId.length > 0 && txnId.trim().length < 6 && (
                                <p className="text-[10px] text-red-400 pl-1 animate-pulse">
                                    * Minimum 6 characters required
                                </p>
                            )}
                        </div>

                        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3">
                            <p className="text-xs text-blue-200 leading-relaxed">
                                ⚠️ Please ensure the Transaction ID matches exactly. Incorrect IDs will lead to registration rejection.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Submit Button */}
                <motion.button
                    onClick={handleSubmit}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    // VALIDATION LOGIC: Disable if loading OR if length < 6
                    disabled={isLoading || txnId.trim().length < 6}
                    className="w-full mt-6 py-3.5 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold rounded-xl shadow-lg shadow-violet-900/20 flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isLoading ? (
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                        <>
                            <span>Confirm Registration</span>
                            <ArrowRight size={18} />
                        </>
                    )}
                </motion.button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}