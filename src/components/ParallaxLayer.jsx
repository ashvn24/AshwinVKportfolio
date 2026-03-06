import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ParallaxLayer({
  children,
  speed = 0.5,
  className = '',
  offset = 300,
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-offset * speed, offset * speed]);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={`will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  );
}
