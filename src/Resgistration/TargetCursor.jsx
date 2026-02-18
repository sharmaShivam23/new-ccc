import React, { useEffect, useRef, useMemo, useCallback } from 'react';
import { gsap } from 'gsap';

const TargetCursor = ({
  targetSelector = '.cursor-target', // Add this class to any element you want the cursor to snap to
  spinDuration = 2,
  hideDefaultCursor = true,
  hoverDuration = 0.2,
  parallaxOn = true
}) => {
  const cursorRef = useRef(null);
  const cornersRef = useRef(null);
  const spinTl = useRef(null);
  const dotRef = useRef(null);

  const isActiveRef = useRef(false);
  const targetCornerPositionsRef = useRef(null);
  const tickerFnRef = useRef(null);
  const activeStrengthRef = useRef(0);

  const isMobile = useMemo(() => {
    const hasTouchScreen = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const isSmallScreen = window.innerWidth <= 768;
    return hasTouchScreen && isSmallScreen;
  }, []);

  const constants = useMemo(() => ({ borderWidth: 3, cornerSize: 12 }), []);

  const moveCursor = useCallback((x, y) => {
    if (!cursorRef.current) return;
    gsap.to(cursorRef.current, {
      x,
      y,
      duration: 0.1,
      ease: 'power3.out'
    });
  }, []);

  useEffect(() => {
    if (isMobile || !cursorRef.current) return;

    const originalCursor = document.body.style.cursor;
    if (hideDefaultCursor) {
      document.body.style.cursor = 'none';
    }

    const cursor = cursorRef.current;
    // Select all corner elements we rendered
    cornersRef.current = cursor.querySelectorAll('.target-cursor-corner');

    let activeTarget = null;
    let currentLeaveHandler = null;
    let resumeTimeout = null;

    const cleanupTarget = (target) => {
      if (currentLeaveHandler) {
        target.removeEventListener('mouseleave', currentLeaveHandler);
      }
      currentLeaveHandler = null;
    };

    // Initial center position
    gsap.set(cursor, {
      xPercent: -50,
      yPercent: -50,
      x: window.innerWidth / 2,
      y: window.innerHeight / 2
    });

    // Spin animation
    const createSpinTimeline = () => {
      if (spinTl.current) spinTl.current.kill();
      spinTl.current = gsap.timeline({ repeat: -1 })
        .to(cursor, { rotation: '+=360', duration: spinDuration, ease: 'none' });
    };
    createSpinTimeline();

    // The Ticker Function (Runs every frame)
    const tickerFn = () => {
      if (!targetCornerPositionsRef.current || !cursorRef.current || !cornersRef.current) return;
      
      const strength = activeStrengthRef.current;
      if (strength === 0) return;

      const cursorX = gsap.getProperty(cursorRef.current, 'x');
      const cursorY = gsap.getProperty(cursorRef.current, 'y');
      const corners = Array.from(cornersRef.current);

      corners.forEach((corner, i) => {
        const currentX = gsap.getProperty(corner, 'x');
        const currentY = gsap.getProperty(corner, 'y');
        const targetX = targetCornerPositionsRef.current[i].x - cursorX;
        const targetY = targetCornerPositionsRef.current[i].y - cursorY;

        const finalX = currentX + (targetX - currentX) * strength;
        const finalY = currentY + (targetY - currentY) * strength;
        
        const duration = strength >= 0.99 ? (parallaxOn ? 0.2 : 0) : 0.05;

        gsap.to(corner, {
          x: finalX,
          y: finalY,
          duration: duration,
          ease: duration === 0 ? 'none' : 'power1.out',
          overwrite: 'auto'
        });
      });
    };
    tickerFnRef.current = tickerFn;

    // --- EVENT HANDLERS ---
    const moveHandler = (e) => moveCursor(e.clientX, e.clientY);
    window.addEventListener('mousemove', moveHandler);

    const scrollHandler = () => {
      if (!activeTarget || !cursorRef.current) return;
      const mouseX = gsap.getProperty(cursorRef.current, 'x');
      const mouseY = gsap.getProperty(cursorRef.current, 'y');
      const elementUnderMouse = document.elementFromPoint(mouseX, mouseY);
      
      const isStillOverTarget = elementUnderMouse && 
        (elementUnderMouse === activeTarget || elementUnderMouse.closest(targetSelector) === activeTarget);
        
      if (!isStillOverTarget && currentLeaveHandler) {
        currentLeaveHandler();
      }
    };
    window.addEventListener('scroll', scrollHandler, { passive: true });

    const mouseDownHandler = () => {
        if (!dotRef.current) return;
        gsap.to(dotRef.current, { scale: 0.7, duration: 0.3 });
        gsap.to(cursorRef.current, { scale: 0.9, duration: 0.2 });
    };
    const mouseUpHandler = () => {
        if (!dotRef.current) return;
        gsap.to(dotRef.current, { scale: 1, duration: 0.3 });
        gsap.to(cursorRef.current, { scale: 1, duration: 0.2 });
    };
    window.addEventListener('mousedown', mouseDownHandler);
    window.addEventListener('mouseup', mouseUpHandler);

    // Hover Enter Logic
    const enterHandler = (e) => {
      const target = e.target.closest(targetSelector);
      if (!target || !cursorRef.current || !cornersRef.current) return;
      if (activeTarget === target) return;
      
      if (activeTarget) cleanupTarget(activeTarget);
      if (resumeTimeout) {
        clearTimeout(resumeTimeout);
        resumeTimeout = null;
      }

      activeTarget = target;
      
      // Kill previous tweens
      const corners = Array.from(cornersRef.current);
      corners.forEach(corner => gsap.killTweensOf(corner));
      gsap.killTweensOf(cursorRef.current, 'rotation');
      
      spinTl.current?.pause();
      gsap.set(cursorRef.current, { rotation: 0 });

      // Calculate Target Positions
      const rect = target.getBoundingClientRect();
      const { borderWidth, cornerSize } = constants;
      const cursorX = gsap.getProperty(cursorRef.current, 'x');
      const cursorY = gsap.getProperty(cursorRef.current, 'y');

      // Define where the 4 corners should go
      targetCornerPositionsRef.current = [
        { x: rect.left - borderWidth, y: rect.top - borderWidth }, // Top Left
        { x: rect.right + borderWidth - cornerSize, y: rect.top - borderWidth }, // Top Right
        { x: rect.right + borderWidth - cornerSize, y: rect.bottom + borderWidth - cornerSize }, // Bottom Right
        { x: rect.left - borderWidth, y: rect.bottom + borderWidth - cornerSize } // Bottom Left
      ];

      isActiveRef.current = true;
      gsap.ticker.add(tickerFnRef.current);
      gsap.to(activeStrengthRef, { current: 1, duration: hoverDuration, ease: 'power2.out' });

      // Initial jump to target
      corners.forEach((corner, i) => {
        gsap.to(corner, {
          x: targetCornerPositionsRef.current[i].x - cursorX,
          y: targetCornerPositionsRef.current[i].y - cursorY,
          duration: 0.2,
          ease: 'power2.out'
        });
      });

      // Hover Leave Logic
      const leaveHandler = () => {
        gsap.ticker.remove(tickerFnRef.current);
        isActiveRef.current = false;
        targetCornerPositionsRef.current = null;
        gsap.set(activeStrengthRef, { current: 0, overwrite: true });
        activeTarget = null;

        if (cornersRef.current) {
          const corners = Array.from(cornersRef.current);
          gsap.killTweensOf(corners);
          const { cornerSize } = constants;
          // Reset positions to form a small square around the center dot
          const positions = [
            { x: -cornerSize * 1.5, y: -cornerSize * 1.5 },
            { x: cornerSize * 0.5, y: -cornerSize * 1.5 },
            { x: cornerSize * 0.5, y: cornerSize * 0.5 },
            { x: -cornerSize * 1.5, y: cornerSize * 0.5 }
          ];
          corners.forEach((corner, index) => {
            gsap.to(corner, { x: positions[index].x, y: positions[index].y, duration: 0.3, ease: 'power3.out' });
          });
        }

        // Resume Spin
        resumeTimeout = setTimeout(() => {
          if (!activeTarget && cursorRef.current && spinTl.current) {
             const currentRotation = gsap.getProperty(cursorRef.current, 'rotation');
             const normalized = currentRotation % 360;
             spinTl.current.kill();
             spinTl.current = gsap.timeline({ repeat: -1 })
               .to(cursorRef.current, { rotation: '+=360', duration: spinDuration, ease: 'none' });
               
             gsap.to(cursorRef.current, {
               rotation: normalized + 360,
               duration: spinDuration * (1 - normalized / 360),
               ease: 'none',
               onComplete: () => spinTl.current?.restart()
             });
          }
          resumeTimeout = null;
        }, 50);

        cleanupTarget(target);
      };

      currentLeaveHandler = leaveHandler;
      target.addEventListener('mouseleave', leaveHandler);
    };

    window.addEventListener('mouseover', enterHandler, { passive: true });

    return () => {
      gsap.ticker.remove(tickerFnRef.current);
      window.removeEventListener('mousemove', moveHandler);
      window.removeEventListener('mouseover', enterHandler);
      window.removeEventListener('scroll', scrollHandler);
      window.removeEventListener('mousedown', mouseDownHandler);
      window.removeEventListener('mouseup', mouseUpHandler);
      if (activeTarget) cleanupTarget(activeTarget);
      spinTl.current?.kill();
      document.body.style.cursor = originalCursor;
    };
  }, [targetSelector, spinDuration, moveCursor, constants, hideDefaultCursor, isMobile, hoverDuration, parallaxOn]);

  if (isMobile) return null;

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
      style={{ willChange: 'transform' }}
    >
      {/* Center Dot */}
      <div
        ref={dotRef}
        className="absolute w-2 h-2 bg-[#8b5cf6] rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_#8b5cf6]"
      />
      
      {/* Four Corners: 
         We use inline styles for borders to ensure they look like bracket corners.
         The 'target-cursor-corner' class is used by JS to select them.
      */}
      
      {/* Top Left */}
      <div
        className="target-cursor-corner absolute w-3 h-3 border-[2px] border-[#a78bfa] rounded-tl-sm border-r-0 border-b-0"
        style={{ transform: 'translate(-150%, -150%)' }}
      />
      
      {/* Top Right */}
      <div
        className="target-cursor-corner absolute w-3 h-3 border-[2px] border-[#a78bfa] rounded-tr-sm border-l-0 border-b-0"
        style={{ transform: 'translate(50%, -150%)' }}
      />
      
      {/* Bottom Right */}
      <div
        className="target-cursor-corner absolute w-3 h-3 border-[2px] border-[#a78bfa] rounded-br-sm border-l-0 border-t-0"
        style={{ transform: 'translate(50%, 50%)' }}
      />
      
      {/* Bottom Left */}
      <div
        className="target-cursor-corner absolute w-3 h-3 border-[2px] border-[#a78bfa] rounded-bl-sm border-r-0 border-t-0"
        style={{ transform: 'translate(-150%, 50%)' }}
      />
    </div>
  );
};

export default TargetCursor;