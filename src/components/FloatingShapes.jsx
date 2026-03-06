import { motion } from 'framer-motion';

const shapes = [
  { size: 400, x: '10%', y: '20%', color: 'rgba(99,102,241,0.08)', delay: 0 },
  { size: 300, x: '70%', y: '10%', color: 'rgba(34,211,238,0.06)', delay: 1 },
  { size: 500, x: '80%', y: '60%', color: 'rgba(168,85,247,0.06)', delay: 2 },
  { size: 250, x: '20%', y: '70%', color: 'rgba(52,211,153,0.05)', delay: 0.5 },
  { size: 350, x: '50%', y: '40%', color: 'rgba(244,63,94,0.04)', delay: 1.5 },
];

export default function FloatingShapes({ className = '' }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
            background: `radial-gradient(circle, ${shape.color}, transparent 70%)`,
            filter: 'blur(60px)',
          }}
          animate={{
            x: [0, 30, -20, 10, 0],
            y: [0, -25, 15, -10, 0],
            scale: [1, 1.05, 0.95, 1.02, 1],
          }}
          transition={{
            duration: 20 + i * 3,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: shape.delay,
          }}
        />
      ))}
    </div>
  );
}
