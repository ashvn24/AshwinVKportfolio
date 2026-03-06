import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import NeuralNetwork from '../components/NeuralNetwork';

const roles = [
  'Backend Engineer',
  'System Architect',
  'AI Integrator',
  'Full Stack Developer',
];

function useTypingEffect(words, typingSpeed = 80, deletingSpeed = 50, pauseDuration = 2000) {
  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
          if (displayText.length === currentWord.length) {
            setTimeout(() => setIsDeleting(true), pauseDuration);
          }
        } else {
          setDisplayText(currentWord.slice(0, displayText.length - 1));
          if (displayText.length === 0) {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  return displayText;
}

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref, offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.95]);
  const typedText = useTypingEffect(roles);

  const scrollToWork = () => {
    const el = document.querySelector('#projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={ref}
      id="hero"
      className="scanlines"
      style={{
        position: 'relative', minHeight: '100vh',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Multi-layer background */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to bottom, #030712, #0a0f1a 50%, #030712)',
      }} />

      {/* AI Grid */}
      <div className="ai-grid" style={{ position: 'absolute', inset: 0, opacity: 0.6 }} />

      {/* Neural network particles */}
      <NeuralNetwork />

      {/* Radial glow behind text */}
      <div style={{
        position: 'absolute', top: '45%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(99,102,241,0.08), transparent 65%)',
        pointerEvents: 'none', zIndex: 2,
      }} />

      {/* Content */}
      <motion.div
        style={{ y, opacity, scale, position: 'relative', zIndex: 10,
          textAlign: 'center', padding: '0 1.5rem', maxWidth: 800 }}
      >
        {/* AI badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            padding: '0.4rem 1rem', borderRadius: '2rem', marginBottom: '2rem',
            background: 'rgba(99,102,241,0.08)',
            border: '1px solid rgba(99,102,241,0.2)',
          }}
        >
          <span style={{
            width: 6, height: 6, borderRadius: '50%',
            backgroundColor: '#34d399',
            boxShadow: '0 0 8px rgba(52,211,153,0.6)',
            animation: 'blink 2s ease-in-out infinite',
          }} />
          <span style={{
            fontFamily: 'JetBrains Mono', fontSize: '0.72rem',
            color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em',
          }}>
            SYSTEMS ONLINE
          </span>
        </motion.div>

        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            fontFamily: 'JetBrains Mono', fontSize: '0.82rem',
            textTransform: 'uppercase', letterSpacing: '0.3em',
            color: 'rgba(255,255,255,0.35)', marginBottom: '1.5rem',
          }}
        >
          Welcome to my digital space
        </motion.p>

        {/* Name with glitch effect */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="glitch"
          data-text="Ashwin"
          style={{
            fontFamily: 'Outfit',
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            fontWeight: 700, lineHeight: 1.1,
            marginBottom: '0.75rem',
          }}
        >
          <span style={{ color: '#fff' }}>Hi, I'm </span>
          <span className="gradient-text">Ashwin</span>
        </motion.h1>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          style={{
            fontFamily: 'Outfit', fontWeight: 300,
            fontSize: 'clamp(1.1rem, 3vw, 1.75rem)',
            color: 'rgba(255,255,255,0.55)', marginBottom: '0.75rem',
          }}
        >
          Python Full Stack Developer
        </motion.h2>

        {/* Typing effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          style={{
            height: 40, display: 'flex', alignItems: 'center',
            justifyContent: 'center', marginBottom: '2.5rem',
          }}
        >
          <span style={{
            fontFamily: 'JetBrains Mono', fontSize: 'clamp(0.9rem, 2vw, 1.15rem)',
            color: '#818cf8',
          }}>
            {'> '}
            {typedText}
            <span className="cursor-blink" style={{
              display: 'inline-block', width: 2, height: 18,
              backgroundColor: '#818cf8', marginLeft: 2,
              verticalAlign: 'middle',
            }} />
          </span>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <button
            onClick={scrollToWork}
            className="holo-shimmer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
              padding: '0.9rem 2rem', borderRadius: '2rem',
              fontSize: '0.88rem', fontWeight: 500, cursor: 'pointer',
              color: 'rgba(255,255,255,0.9)', letterSpacing: '0.03em',
              background: 'linear-gradient(135deg, rgba(99,102,241,0.12), rgba(34,211,238,0.08))',
              border: '1px solid rgba(99,102,241,0.25)',
              transition: 'all 0.4s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(99,102,241,0.5)';
              e.currentTarget.style.boxShadow = '0 0 30px rgba(99,102,241,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(99,102,241,0.25)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            View My Work
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        style={{
          position: 'absolute', bottom: 32, left: '50%',
          transform: 'translateX(-50%)', display: 'flex',
          flexDirection: 'column', alignItems: 'center', gap: 8,
          zIndex: 10,
        }}
      >
        <span style={{
          fontSize: 9, textTransform: 'uppercase', letterSpacing: '0.3em',
          color: 'rgba(255,255,255,0.25)',
        }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            width: 20, height: 32, borderRadius: 10,
            border: '1px solid rgba(255,255,255,0.15)',
            display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
            padding: 6,
          }}
        >
          <motion.div style={{
            width: 3, height: 6, borderRadius: 2,
            backgroundColor: 'rgba(129,140,248,0.6)',
          }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
