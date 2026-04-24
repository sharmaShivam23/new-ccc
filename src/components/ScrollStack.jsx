import { useLayoutEffect, useRef, useCallback } from 'react';
import Lenis from 'lenis';

export const ScrollStackItem = ({ children, itemClassName = '' }) => (
  <div
    className={`scroll-stack-card relative w-full h-80 my-8 p-12 rounded-[40px] box-border origin-top overflow-hidden ${itemClassName}`.trim()}
    style={{
      backfaceVisibility: 'hidden',
      WebkitBackfaceVisibility: 'hidden',
      willChange: 'transform',
      // 'paint' isolates each card's gradient+rounded-corner as its own paint region.
      // Without it, every scroll-frame compositing flush walks UP the tree re-painting
      // all ancestors. With it, each card is a self-contained paint atom.
      contain: 'layout style paint',
      isolation: 'isolate',  // own stacking context — stops z-index / compositing leaks
    }}
  >
    {children}
  </div>
);

const ScrollStack = ({
  children,
  className = '',
  itemDistance = 100,
  itemScale = 0.03,
  itemStackDistance = 30,
  stackPosition = '20%',
  scaleEndPosition = '10%',
  baseScale = 0.85,
  scaleDuration = 0.5,
  rotationAmount = 0,
  blurAmount = 0,
  useWindowScroll = false,
  onStackComplete,
}) => {
  const scrollerRef         = useRef(null);
  const stackCompletedRef   = useRef(false);
  const animationFrameRef   = useRef(null);
  const lenisRef            = useRef(null);
  const cardsRef            = useRef([]);
  const cardOffsetsRef      = useRef([]);      // ← cached offsets, no reflow per frame
  const endOffsetRef        = useRef(0);       // ← cached .scroll-stack-end offset
  const lastTransformsRef   = useRef(new Map());
  const rafScheduledRef     = useRef(false);

  // ── helpers ────────────────────────────────────────────────────────────────

  const parsePercentage = (value, containerHeight) => {
    if (typeof value === 'string' && value.includes('%')) {
      return (parseFloat(value) / 100) * containerHeight;
    }
    return parseFloat(value);
  };

  // Recalculate static card offsets (only on mount + resize, NOT per scroll tick)
  const cacheCardOffsets = useCallback(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const cards = Array.from(
      useWindowScroll
        ? document.querySelectorAll('.scroll-stack-card')
        : scroller.querySelectorAll('.scroll-stack-card')
    );
    cardsRef.current = cards;

    if (useWindowScroll) {
      const scrollY = window.scrollY;
      cardOffsetsRef.current = cards.map(c => c.getBoundingClientRect().top + scrollY);
      const endEl = document.querySelector('.scroll-stack-end');
      endOffsetRef.current = endEl ? endEl.getBoundingClientRect().top + scrollY : 0;
    } else {
      cardOffsetsRef.current = cards.map(c => c.offsetTop);
      const endEl = scroller.querySelector('.scroll-stack-end');
      endOffsetRef.current = endEl ? endEl.offsetTop : 0;
    }

    // Apply spacing & GPU hints once
    cards.forEach((card, i) => {
      if (i < cards.length - 1) card.style.marginBottom = `${itemDistance}px`;
      card.style.transformOrigin  = 'top center';
    });
  }, [useWindowScroll, itemDistance]);

  // ── core animation (runs every raf tick, reads ONLY pre-cached offsets) ───

  const updateCardTransforms = useCallback((scrollTop, containerHeight) => {
    const cards        = cardsRef.current;
    const cardOffsets  = cardOffsetsRef.current;
    if (!cards.length || !cardOffsets.length) return;

    const stackPositionPx    = parsePercentage(stackPosition, containerHeight);
    const scaleEndPositionPx = parsePercentage(scaleEndPosition, containerHeight);
    const endElementTop      = endOffsetRef.current;

    for (let i = 0; i < cards.length; i++) {
      const card    = cards[i];
      if (!card) continue;

      const cardTop    = cardOffsets[i];
      const triggerStart = cardTop - stackPositionPx - itemStackDistance * i;
      const triggerEnd   = cardTop - scaleEndPositionPx;
      const pinStart     = triggerStart;
      const pinEnd       = endElementTop - containerHeight / 2;

      // scale
      let scaleProgress = 0;
      if (scrollTop >= triggerStart && scrollTop <= triggerEnd) {
        scaleProgress = (scrollTop - triggerStart) / (triggerEnd - triggerStart);
      } else if (scrollTop > triggerEnd) {
        scaleProgress = 1;
      }
      const targetScale = baseScale + i * itemScale;
      const scale       = 1 - scaleProgress * (1 - targetScale);

      // translateY
      let translateY = 0;
      if (scrollTop >= pinStart && scrollTop <= pinEnd) {
        translateY = scrollTop - cardTop + stackPositionPx + itemStackDistance * i;
      } else if (scrollTop > pinEnd) {
        translateY = pinEnd - cardTop + stackPositionPx + itemStackDistance * i;
      }

      const ty  = Math.round(translateY * 10) / 10;
      const sc  = Math.round(scale * 1000) / 1000;

      const last = lastTransformsRef.current.get(i);
      if (
        !last ||
        Math.abs(last.ty - ty) > 0.05 ||
        Math.abs(last.sc - sc) > 0.001
      ) {
        card.style.transform = `translate3d(0,${ty}px,0) scale(${sc})`;
        lastTransformsRef.current.set(i, { ty, sc });
      }

      // onStackComplete callback
      if (i === cards.length - 1) {
        const isInView = scrollTop >= pinStart && scrollTop <= pinEnd;
        if (isInView && !stackCompletedRef.current) {
          stackCompletedRef.current = true;
          onStackComplete?.();
        } else if (!isInView && stackCompletedRef.current) {
          stackCompletedRef.current = false;
        }
      }
    }
  }, [itemScale, itemStackDistance, stackPosition, scaleEndPosition, baseScale, onStackComplete]);

  // ── Scroll setup ───────────────────────────────────────────────────────────
  //
  // ROOT-CAUSE FIX: When useWindowScroll=true, Lenis was intercepting ALL
  // native wheel/touch events and re-playing them with lerp:0.1 + duration:1.2
  // easing. This meant the Lenis "virtual" scroll position always lagged behind
  // the real DOM scroll by up to ~1 second. At the Section-1 → Section-2
  // boundary the card animations triggered on the stale Lenis value while the
  // page had physically scrolled further, producing a visible stutter/jump.
  //
  // Fix: for useWindowScroll=true → native passive scroll listener + one RAF
  //       (zero interception, zero lag, instant response at section boundaries)
  //      for the contained-scroller case → keep Lenis (smooth feel inside box)

  const setupLenis = useCallback(() => {
    if (useWindowScroll) {
      // ── Native window scroll — no Lenis interpolation lag ─────────────────
      let rafId = null;

      const onScroll = () => {
        if (rafId !== null) return;          // already queued this frame
        rafId = requestAnimationFrame(() => {
          rafId = null;
          const scroll          = window.scrollY;
          const containerHeight = window.innerHeight;
          const firstCardOffset = cardOffsetsRef.current[0] ?? 0;
          const endOffset       = endOffsetRef.current;
          // Early-exit when scroll is outside the stack region
          if (
            endOffset > 0 &&
            (scroll < firstCardOffset - containerHeight ||
             scroll > endOffset  + containerHeight)
          ) return;
          updateCardTransforms(scroll, containerHeight);
        });
      };

      window.addEventListener('scroll', onScroll, { passive: true });

      // Store a fake "lenis" object so cleanup path stays uniform
      lenisRef.current = {
        destroy: () => {
          window.removeEventListener('scroll', onScroll);
          if (rafId !== null) { cancelAnimationFrame(rafId); rafId = null; }
        },
      };
      // animationFrameRef is not used in this path — clear it
      animationFrameRef.current = null;
      return;
    }

    // ── Contained scroller — Lenis gives smooth feel inside the box ───────
    const lenisOpts = {
      duration: 1,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      lerp: 0.1,
      syncTouch: true,
      syncTouchLerp: 0.075,
      infinite: false,
    };

    const lenis = new Lenis({
      ...lenisOpts,
      wrapper: scrollerRef.current,
      content: scrollerRef.current?.querySelector('.scroll-stack-inner'),
    });

    const raf = time => {
      lenis.raf(time);
      animationFrameRef.current = requestAnimationFrame(raf);
    };
    animationFrameRef.current = requestAnimationFrame(raf);

    lenis.on('scroll', ({ scroll }) => {
      const containerHeight = scrollerRef.current?.clientHeight ?? window.innerHeight;
      const firstCardOffset = cardOffsetsRef.current[0] ?? 0;
      const endOffset       = endOffsetRef.current;
      if (
        endOffset > 0 &&
        (scroll < firstCardOffset - containerHeight ||
         scroll > endOffset  + containerHeight)
      ) return;
      updateCardTransforms(scroll, containerHeight);
    });

    lenisRef.current = lenis;
  }, [useWindowScroll, updateCardTransforms]);

  // ── mount / unmount ────────────────────────────────────────────────────────

  useLayoutEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    cacheCardOffsets();
    setupLenis();

    // Initial paint
    const ch = useWindowScroll ? window.innerHeight : scroller.clientHeight;
    const sy = useWindowScroll ? window.scrollY    : scroller.scrollTop;
    updateCardTransforms(sy, ch);

    // ── ResizeObserver: debounced so it never fires a forced-reflow mid-scroll
    // Images loading, font swaps, etc. can trigger RO during an active scroll frame.
    // A 150ms debounce means cacheCardOffsets() only runs when layout has settled.
    const observeTarget = useWindowScroll
      ? (scrollerRef.current?.querySelector('.scroll-stack-inner') ?? scrollerRef.current)
      : scrollerRef.current;
    let roTimer = null;
    const ro = new ResizeObserver(() => {
      if (roTimer) return;          // already scheduled — skip
      roTimer = setTimeout(() => {
        roTimer = null;
        cacheCardOffsets();
        // Re-apply initial transforms after layout settles
        const ch2 = useWindowScroll ? window.innerHeight : (scrollerRef.current?.clientHeight ?? 0);
        const sy2 = useWindowScroll ? window.scrollY    : (scrollerRef.current?.scrollTop ?? 0);
        updateCardTransforms(sy2, ch2);
      }, 150);
    });
    if (observeTarget) ro.observe(observeTarget);

    return () => {
      cancelAnimationFrame(animationFrameRef.current);
      lenisRef.current?.destroy();
      if (roTimer) { clearTimeout(roTimer); roTimer = null; }
      ro.disconnect();
      stackCompletedRef.current = false;
      cardsRef.current          = [];
      cardOffsetsRef.current    = [];
      lastTransformsRef.current.clear();
      rafScheduledRef.current   = false;
    };
  }, [cacheCardOffsets, setupLenis, updateCardTransforms, useWindowScroll]);

  // ── render ─────────────────────────────────────────────────────────────────

  const containerClassName = useWindowScroll
    ? `relative w-full ${className}`.trim()
    : `relative w-full h-full overflow-y-auto overflow-x-hidden ${className}`.trim();

  const containerStyle = {
    overscrollBehavior: 'contain',
    WebkitOverflowScrolling: 'touch',
  };

  return (
    <div className={containerClassName} ref={scrollerRef} style={containerStyle}>
      <div className="scroll-stack-inner pt-[8vh] px-8 sm:px-20 pb-[20rem] min-h-screen">
        {children}
        <div className="scroll-stack-end w-full h-px" />
      </div>
    </div>
  );
};

export default ScrollStack;
