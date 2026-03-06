import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function AnimatedCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    // Only show on desktop
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) return;

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };

    const onMouseLeave = () => setHidden(true);
    const onMouseEnter = () => setHidden(false);

    const onHoverStart = () => setHovering(true);
    const onHoverEnd = () => setHovering(false);

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    // Detect hoverable elements
    const hoverTargets = document.querySelectorAll('a, button, [role="button"]');
    hoverTargets.forEach((el) => {
      el.addEventListener('mouseenter', onHoverStart);
      el.addEventListener('mouseleave', onHoverEnd);
    });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      hoverTargets.forEach((el) => {
        el.removeEventListener('mouseenter', onHoverStart);
        el.removeEventListener('mouseleave', onHoverEnd);
      });
    };
  }, []);

  // Don't render on mobile
  if (typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches) {
    return null;
  }

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block"
        animate={{
          x: position.x - (hovering ? 20 : 16),
          y: position.y - (hovering ? 20 : 16),
          width: hovering ? 40 : 32,
          height: hovering ? 40 : 32,
          opacity: hidden ? 0 : 0.5,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 28, mass: 0.5 }}
        style={{
          borderRadius: '50%',
          border: '1px solid rgba(129,140,248,0.4)',
          mixBlendMode: 'difference',
        }}
      />
      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block"
        animate={{
          x: position.x - 3,
          y: position.y - 3,
          opacity: hidden ? 0 : 1,
          scale: hovering ? 0 : 1,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
        style={{
          width: 6,
          height: 6,
          borderRadius: '50%',
          backgroundColor: '#818cf8',
        }}
      />
    </>
  );
}
