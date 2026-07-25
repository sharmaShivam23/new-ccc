import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaLinkedin, FaInstagram, FaPhone } from 'react-icons/fa';
import PosterCard from '../PosterCard';
import SideRays from '../SideRays';

export const BrandingSection = ({ showPoster, setShowPoster, handleClosePoster, isClosing, onRegisterClick }) => {
  const [copiedId, setCopiedId] = useState(null);

  const copyToClipboard = (text, id) => {
    const handleSuccess = () => {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    };

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(handleSuccess).catch(err => console.error(err));
    } else {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "absolute";
      textArea.style.left = "-999999px";
      document.body.prepend(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        handleSuccess();
      } catch (error) {
        console.error(error);
      } finally {
        textArea.remove();
      }
    }
  };

  const renderCoordinators = () => (
    <div className="flex flex-col gap-3.5 w-full max-w-[320px]">
      <button
        onClick={() => copyToClipboard('+919653056207', 'coord1')}
        className={`group w-full py-3 px-5 rounded-2xl text-[12px] xl:text-[13px] font-bold tracking-widest bg-white/5 border hover:bg-white/10 transition-all duration-300 hover:scale-102 active:scale-95 backdrop-blur-sm flex items-center justify-between ${copiedId === 'coord1' ? 'border-[#00d2ff] text-[#00d2ff] shadow-[0_0_15px_rgba(0,210,255,0.3)]' : 'border-white/10 text-white/80 hover:border-[#00d2ff]/50 hover:text-white'}`}
      >
        <span>{copiedId === 'coord1' ? 'COPIED!' : 'SHAURYA'}</span>
        <span className={`text-[11px] opacity-70 group-hover:opacity-100 transition-all font-mono tracking-wide flex items-center gap-1.5 ${copiedId === 'coord1' ? 'text-[#00d2ff] opacity-100' : 'group-hover:text-[#00d2ff]'}`}>
          {copiedId === 'coord1' ? '✓' : <><FaPhone className="text-[10px] shrink-0 text-red-500" />96530 56207</>}
        </span>
      </button>
      <button
        onClick={() => copyToClipboard('+919236243578', 'coord2')}
        className={`group w-full py-3 px-5 rounded-2xl text-[12px] xl:text-[13px] font-bold tracking-widest bg-white/5 border hover:bg-white/10 transition-all duration-300 hover:scale-102 active:scale-95 backdrop-blur-sm flex items-center justify-between ${copiedId === 'coord2' ? 'border-[#a855f7] text-[#a855f7] shadow-[0_0_15px_rgba(168,85,247,0.3)]' : 'border-white/10 text-white/80 hover:border-[#a855f7]/50 hover:text-white'}`}
      >
        <span>{copiedId === 'coord2' ? 'COPIED!' : 'AYUSH'}</span>
        <span className={`text-[11px] opacity-70 group-hover:opacity-100 transition-all font-mono tracking-wide flex items-center gap-1.5 ${copiedId === 'coord2' ? 'text-[#a855f7] opacity-100' : 'group-hover:text-[#a855f7]'}`}>
          {copiedId === 'coord2' ? '✓' : <><FaPhone className="text-[10px] shrink-0 text-red-500" />92362 43578</>}
        </span>
      </button>
    </div>
  );

  if (showPoster) {
    return (
      <div
        className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md cursor-pointer animate-fade-in"
        onClick={handleClosePoster}
      >
        <div className="relative max-w-[92vw] max-h-[92vh] flex items-center justify-center pointer-events-auto" onClick={handleClosePoster}>
          <PosterCard onClose={handleClosePoster} isClosing={isClosing} />
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: '-100vw' }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
      className="w-full flex flex-col items-center lg:items-start justify-center lg:pl-4 xl:pl-8 relative my-auto"
    >
      {/* 1. TOP SECTION (Branding & Titles) */}
      <div className="flex flex-col items-center lg:items-start w-full relative z-10">
        <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#00d2ff]/50 to-transparent"></div>

        <div className="flex items-center gap-3 mt-4 sm:mt-6 lg:mt-2 mb-3 sm:mb-4 hover:scale-102 transition-transform duration-300 bg-white/5 pr-5 pl-2.5 py-2 rounded-full border border-white/10 backdrop-blur-md">
          <img
            src="/cccLogo.png"
            alt="CCC Logo"
            className="w-[32px] h-[32px] object-contain drop-shadow-[0_0_8px_rgba(0,210,255,0.5)]"
          />
          <span className="text-[13px] xl:text-[14px] font-black uppercase tracking-[0.3em] text-white/90">
            CLOUD COMPUTING CELL
          </span>
        </div>

        <span className="text-[13px] text-[#00d2ff] font-medium tracking-[0.4em] uppercase mb-2 ml-2 opacity-80">
          presents
        </span>

        {/* Glow SPOCC'26 headings */}
        <h1 className="font-orbitron text-[42px] sm:text-[56px] lg:text-[84px] xl:text-[96px] font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00d2ff] to-[#a855f7] drop-shadow-[0_0_35px_rgba(0,210,255,0.6)] mb-0.5 select-none leading-none">
          SPOCC&apos;26
        </h1>
        <span className="font-orbitron text-[11px] sm:text-[12px] lg:text-[14px] xl:text-[16px] font-bold tracking-[0.4em] uppercase text-[#00d2ff] drop-shadow-[0_0_10px_rgba(0,210,255,0.5)] mb-3 sm:mb-4 lg:mb-5 ml-2 text-center lg:text-left w-full lg:w-auto">
          THE RECRUITMENT DRIVE
        </span>
      </div>

      {/* 2. MIDDLE SECTION (Poster & Details) */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start w-full gap-4 sm:gap-5 lg:gap-5 xl:gap-8 relative z-10 mt-0 sm:mt-1">

        {/* Poster Wrapper (Mobile & Desktop) */}
        <div className="flex relative my-0 shrink-0 w-full lg:w-auto justify-center">
          <div
            className="relative w-full max-w-[360px] sm:max-w-[480px] lg:w-[220px] xl:w-[265px] aspect-[2080/819] lg:aspect-square shrink-0 rounded-2xl overflow-hidden border border-white/10 drop-shadow-[0_0_25px_rgba(0,210,255,0.25)] hover:border-[#00d2ff]/50 hover:scale-[1.02] transition-all duration-500 cursor-pointer group"
            onClick={() => setShowPoster(true)}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-2">
              <span className="text-white text-[10px] sm:text-[11px] font-bold tracking-[0.2em] bg-black/50 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full backdrop-blur-md">CLICK TO ENLARGE</span>
            </div>
            {/* Mobile Poster (< lg) */}
            <img
              src="/mob.svg"
              alt="SPOCC'26 Poster"
              className="block lg:hidden w-full h-full object-fill opacity-95 group-hover:opacity-100 transition-opacity relative z-10"
            />
            {/* Desktop Poster (>= lg) */}
            <img
              src="/desk.svg"
              alt="SPOCC'26 Poster"
              className="hidden lg:block w-full h-full object-cover aspect-square opacity-90 group-hover:opacity-100 transition-opacity relative z-10"
            />
          </div>
        </div>

        {/* Details Container (Below poster on mobile, Right side on desktop) */}
        <div className="flex flex-col items-center lg:items-start justify-between gap-3.5 sm:gap-4 xl:gap-6 w-full min-w-0 py-1 text-center lg:text-left mt-1.5 lg:mt-0">
          {/* Coordinators Container */}
          {renderCoordinators()}

          {/* REGISTER NOW button (MOBILE ONLY) */}
          <button
            onClick={onRegisterClick}
            className="lg:hidden font-inter w-full max-w-[340px] py-3.5 sm:py-4.5 rounded-2xl font-bold bg-gradient-to-r from-[#00d2ff] to-[#bd22ff] border border-[#00d2ff]/40 text-[14px] sm:text-[16px] tracking-[0.25em] text-white shadow-[0_0_30px_rgba(0,210,255,0.4)] hover:scale-105 transition-transform duration-300 active:scale-95 mt-2"
          >
            REGISTER NOW
          </button>

          {/* Social media icons (Mobile & Desktop) */}
          <div className="flex items-center justify-center lg:justify-start gap-6 mt-2 sm:mt-3 lg:mt-3 w-full">
            <a
              href="https://www.facebook.com/ccc.akgec"
              target="_blank"
              rel="noreferrer"
              className="text-[#1877F2] hover:scale-125 transition-transform duration-300 active:scale-95 drop-shadow-[0_0_15px_rgba(24,119,242,0.7)]"
            >
              <FaFacebook className="w-8 h-8 sm:w-9 sm:h-9" />
            </a>
            <a
              href="https://www.linkedin.com/company/cloud-computing-cell-akgec/"
              target="_blank"
              rel="noreferrer"
              className="text-[#0A66C2] hover:scale-125 transition-transform duration-300 active:scale-95 drop-shadow-[0_0_15px_rgba(10,102,194,0.7)]"
            >
              <FaLinkedin className="w-8 h-8 sm:w-9 sm:h-9" />
            </a>
            <a
              href="https://www.instagram.com/ccc_akgec/"
              target="_blank"
              rel="noreferrer"
              className="text-[#E1306C] hover:scale-125 transition-transform duration-300 active:scale-95 drop-shadow-[0_0_15px_rgba(225,48,108,0.7)]"
            >
              <FaInstagram className="w-8 h-8 sm:w-9 sm:h-9" />
            </a>
          </div>

          {/* THINK.DEVELOP.DEPLOY (Below icons) */}
          <div className="flex flex-col items-center lg:items-start gap-1.5 w-full mt-2 lg:mt-1">
            <span className="font-mochiy text-[16px] font-normal tracking-wide uppercase bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70 leading-none">
              THINK.DEVELOP.DEPLOY
            </span>
            <span className="font-inter text-[11px] xl:text-[12.5px] text-white/50 font-normal leading-relaxed tracking-wider lg:border-l-2 lg:border-[#00d2ff]/40 lg:pl-2.5 mt-0.5">
              Every expert was once a beginner.
              <span className="block mt-0.5">Take your first step with us.</span>
            </span>
          </div>
        </div>
      </div>

    </motion.div>
  );
};
