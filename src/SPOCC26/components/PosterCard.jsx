import React from 'react';

const PosterCard = ({ onClose, isClosing }) => {
  return (
    <div
      className={`relative cursor-pointer transition-all duration-400 ${isClosing
          ? 'opacity-0 scale-95 translate-y-4 pointer-events-none'
          : 'animate-scale-up'
        } w-full max-w-[440px] sm:max-w-[500px] aspect-square rounded-[24px] lg:rounded-[32px] lg:bg-[#001133]/60 lg:backdrop-blur-2xl lg:shadow-[0_15px_50px_rgba(0,0,0,0.5)] lg:p-4 lg:animate-form-flicker flex items-center justify-center mx-auto`}
      onClick={onClose}
    >
      <style>{`
        @keyframes form-flicker {
          0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100% {
            box-shadow: 0 15px 50px rgba(0,0,0,0.5), 0 0 50px rgba(0, 210, 255, 0.2), inset 0 0 20px rgba(0, 210, 255, 0.1);
          }
          20%, 21.999%, 63%, 63.999%, 65%, 69.999% {
            box-shadow: 0 15px 50px rgba(0,0,0,0.5);
          }
        }
        @keyframes border-flicker {
          0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100% { opacity: 1; }
          20%, 21.999%, 63%, 63.999%, 65%, 69.999% { opacity: 0.15; }
        }
        @media (min-width: 1024px) {
          .lg\\:animate-form-flicker {
            animation: form-flicker 8s infinite;
          }
          .lg\\:animate-border-flicker {
            animation: border-flicker 8s infinite;
          }
        }
      `}</style>

      {/* Gradient Border Mask (Desktop Only) */}
      <div
        className="hidden lg:block absolute inset-0 pointer-events-none rounded-[32px] lg:animate-border-flicker"
        style={{
          padding: '1.5px', // Border thickness
          background: 'linear-gradient(to bottom right, #ffffff, #00d2ff, #a855f7)',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude'
        }}
      />

      <img
        src="/desk.svg"
        alt="SPOCC'26 Poster"
        className="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-2xl drop-shadow-[0_0_35px_rgba(0,210,255,0.3)] relative z-10"
      />
    </div>
  );
};

export default PosterCard;

