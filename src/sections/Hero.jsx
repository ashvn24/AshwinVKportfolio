import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useIsMobile } from '../hooks/useBreakpoint';

export default function Hero() {
  const ref = useRef(null);
  const isMobile = useIsMobile();

  const { scrollYProgress } = useScroll({
    target: ref, offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const scrollToWork = () => {
    const el = document.querySelector('#projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={ref}
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: 'var(--color-bg)',
      }}
    >
      {/* Soft vignette */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(232,213,176,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <motion.div style={{ y, opacity }} className="w-full">
        <div style={{
          maxWidth: '960px',
          margin: '0 auto',
          paddingLeft: 'clamp(1.5rem, 5vw, 5rem)',
          paddingRight: 'clamp(1.5rem, 5vw, 5rem)',
          paddingTop: isMobile ? '6rem' : '8rem',
          paddingBottom: '3rem',
        }}>

          {/* Availability tag */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              marginBottom: isMobile ? '2rem' : '3rem',
            }}
          >
            <span
              className="avail-dot"
              style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#4ade80', flexShrink: 0 }}
            />
            <span style={{
              fontSize: '0.75rem', fontWeight: 500,
              letterSpacing: '0.12em', textTransform: 'uppercase',
              color: 'rgba(240,236,228,0.4)',
            }}>
              Available for work
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              fontFamily: 'Outfit',
              fontSize: isMobile ? 'clamp(3rem, 14vw, 4.5rem)' : 'clamp(3.5rem, 9vw, 7.5rem)',
              fontWeight: 800,
              lineHeight: 0.95,
              letterSpacing: '-0.03em',
              color: 'var(--color-text)',
              marginBottom: '0.1em',
            }}
          >
            Ashwin
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{
              fontFamily: 'Outfit',
              fontSize: isMobile ? 'clamp(3rem, 14vw, 4.5rem)' : 'clamp(3.5rem, 9vw, 7.5rem)',
              fontWeight: 800,
              lineHeight: 0.95,
              letterSpacing: '-0.03em',
              color: 'var(--color-accent)',
              marginBottom: isMobile ? '2rem' : '2.5rem',
            }}
          >
            V K
          </motion.h1>

          {/* Role + bio — stacks on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'auto 1fr',
              gap: isMobile ? '1.25rem' : '0 3rem',
              alignItems: 'start',
              maxWidth: 680,
              marginBottom: isMobile ? '2.5rem' : '3.5rem',
            }}
          >
            {/* Role label */}
            <div style={{
              paddingTop: '0.25rem',
              borderTop: '1px solid var(--color-border-h)',
              paddingRight: isMobile ? 0 : '2rem',
            }}>
              <p style={{
                fontSize: '0.75rem', fontWeight: 500,
                textTransform: 'uppercase', letterSpacing: '0.14em',
                color: 'var(--color-muted)',
                marginTop: '0.6rem',
              }}>
                {isMobile ? 'Python Full-Stack Developer' : 'Python Full-Stack\nDeveloper'}
              </p>
            </div>

            {/* Bio — only shows right column on desktop, below label on mobile */}
            <div style={{ borderTop: isMobile ? 'none' : '1px solid var(--color-border)' }}>
              <p style={{
                fontSize: '0.97rem',
                color: 'var(--color-muted)',
                lineHeight: 1.75,
                marginTop: isMobile ? 0 : '0.6rem',
              }}>
                Building production-grade healthcare platforms, enterprise SaaS,
                and scalable backend systems at{' '}
                <span style={{ color: 'var(--color-text)' }}>BlackRockIndia IT Solutions</span>.
                Shipping things that scale.
              </p>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            style={{
              display: 'flex', alignItems: 'center',
              gap: '0.875rem', flexWrap: 'wrap',
            }}
          >
            <button
              onClick={scrollToWork}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.55rem',
                padding: '0.8rem 1.65rem',
                background: 'var(--color-accent)',
                color: '#0c0c0e',
                border: 'none', borderRadius: '0.35rem',
                fontSize: '0.85rem', fontWeight: 600,
                letterSpacing: '0.02em', cursor: 'pointer',
                transition: 'opacity 0.25s',
                width: isMobile ? '100%' : 'auto',
                justifyContent: isMobile ? 'center' : 'flex-start',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.88'; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
            >
              View Work
              <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>

            <button
              onClick={scrollToContact}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.8rem 1.65rem',
                background: 'transparent',
                color: 'var(--color-text)',
                border: '1px solid var(--color-border-h)',
                borderRadius: '0.35rem',
                fontSize: '0.85rem', fontWeight: 500,
                letterSpacing: '0.02em', cursor: 'pointer',
                transition: 'border-color 0.25s, color 0.25s',
                width: isMobile ? '100%' : 'auto',
                justifyContent: isMobile ? 'center' : 'flex-start',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-accent)';
                e.currentTarget.style.color = 'var(--color-accent)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-border-h)';
                e.currentTarget.style.color = 'var(--color-text)';
              }}
            >
              Get in touch
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        style={{
          position: 'absolute', bottom: 28, left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', gap: 8, zIndex: 10,
        }}
      >
        <span style={{
          fontSize: '0.6rem', textTransform: 'uppercase',
          letterSpacing: '0.25em', color: 'var(--color-faint)',
        }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            width: 18, height: 26, borderRadius: 9,
            border: '1px solid var(--color-border)',
            display: 'flex', alignItems: 'flex-start',
            justifyContent: 'center', padding: 4,
          }}
        >
          <div style={{
            width: 2, height: 4, borderRadius: 1,
            backgroundColor: 'var(--color-accent)',
          }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
