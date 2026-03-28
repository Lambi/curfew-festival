'use client';

import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const glowX = useRef(0);
  const glowY = useRef(0);
  const animationFrameId = useRef<number | null>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    const glow = glowRef.current;
    if (!cursor || !glow) return;

    // Don't show on touch devices
    if (!window.matchMedia('(hover: hover)').matches) {
      cursor.style.display = 'none';
      glow.style.display = 'none';
      return;
    }

    document.body.style.cursor = 'none';

    function onMouseMove(e: MouseEvent) {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;

      // Update cursor dot immediately
      if (cursor) {
        cursor.style.transform = `translate(-50%, -50%) translate(${e.clientX}px, ${e.clientY}px)`;
      }
    }

    function onMouseOver(e: MouseEvent) {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('a, button, [role="button"], input, textarea, select, [data-interactive]');
      if (isInteractive) {
        setIsHovering(true);
      }
    }

    function onMouseOut(e: MouseEvent) {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('a, button, [role="button"], input, textarea, select, [data-interactive]');
      if (isInteractive) {
        setIsHovering(false);
      }
    }

    // Animation loop for smooth glow trailing with lerp
    function animateGlow() {
      const lerpFactor = 0.08;
      glowX.current += (mouseX.current - glowX.current) * lerpFactor;
      glowY.current += (mouseY.current - glowY.current) * lerpFactor;

      if (glow) {
        glow.style.transform = `translate(-50%, -50%) translate(${glowX.current}px, ${glowY.current}px)`;
      }

      animationFrameId.current = requestAnimationFrame(animateGlow);
    }

    animationFrameId.current = requestAnimationFrame(animateGlow);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);

    return () => {
      document.body.style.cursor = '';
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
      if (animationFrameId.current !== null) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <>
      {/* Glow effect */}
      <div
        ref={glowRef}
        className="pointer-events-none fixed z-[9997]"
        style={{
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, rgba(200,164,90,0.06) 0%, transparent 70%)',
          filter: 'blur(30px)',
          mixBlendMode: 'screen',
          top: 0,
          left: 0,
        }}
      />
      {/* Cursor dot */}
      <div
        ref={cursorRef}
        className={`pointer-events-none fixed z-[9997] w-2 h-2 rounded-full bg-cream transition-all duration-150 ease-out ${
          isHovering ? 'scale-[3] bg-golden' : ''
        }`}
        style={{ top: 0, left: 0 }}
      />
    </>
  );
}
