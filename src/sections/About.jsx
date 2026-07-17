import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { useIsMobile } from '../hooks/useBreakpoint';

const stats = [
  { value: '2+', label: 'Years Experience' },
  { value: '20+', label: 'Projects Shipped' },
  { value: '∞', label: 'Lines Written' },
];

const highlights = [
  'RESTful API development with FastAPI & Django for healthcare platforms',
  'Multi-tenant SaaS architecture with HIPAA-compliant data isolation',
  'Full-stack product builds — from database schema to React frontend',
  'Cloud deployment & production server management on AWS',
  'Background task automation with Celery, Windows Services & scheduling',
  'Real-time features using WebSocket, Redis & RabbitMQ',
];

export default function About() {
  const ref = useRef(null);
  const isMobile = useIsMobile();

  return (
    <SectionWrapper id="about">
      <div ref={ref}>

        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="label"
          style={{ marginBottom: '3rem' }}
        >
          About
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          style={{
            fontFamily: 'Outfit',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 800,
            letterSpacing: '-0.025em',
            lineHeight: 1.1,
            color: 'var(--color-text)',
            maxWidth: 600,
            marginBottom: '2rem',
          }}
        >
          Building systems
          <br />that{' '}
          <span className="gradient-text">scale</span>
        </motion.h2>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            fontSize: '1.02rem',
            color: 'var(--color-muted)',
            maxWidth: 580,
            lineHeight: 1.85,
            marginBottom: '3.5rem',
          }}
        >
          Python Developer at{' '}
          <span style={{ color: 'var(--color-text)' }}>BlackRockIndia IT Solutions</span>{' '}
          since July 2024. I build production-grade healthcare platforms,
          enterprise SaaS products, and scalable backend systems — from
          database architecture to cloud deployment.
        </motion.p>

        {/* Stats row — 3 col on desktop, fluid on mobile */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? 'repeat(3, 1fr)' : 'repeat(3, 1fr)',
          gap: 0,
          borderTop: '1px solid var(--color-border)',
          marginBottom: '3.5rem',
        }}>
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              style={{
                padding: isMobile ? '1.5rem 0' : '2rem 0',
                borderRight: i < stats.length - 1 ? '1px solid var(--color-border)' : 'none',
                paddingLeft: i > 0 ? (isMobile ? '1rem' : '2rem') : '0',
                paddingRight: i < stats.length - 1 ? (isMobile ? '0.75rem' : '0') : '0',
              }}
            >
              <div style={{
                fontFamily: 'Outfit',
                fontSize: isMobile ? 'clamp(1.6rem, 6vw, 2.25rem)' : 'clamp(2.25rem, 5vw, 3.25rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                color: 'var(--color-accent)',
                lineHeight: 1,
                marginBottom: '0.4rem',
              }}>
                {stat.value}
              </div>
              <p className="label" style={{ marginBottom: 0, fontSize: isMobile ? '0.6rem' : '0.72rem' }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Capabilities list */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="label" style={{ marginBottom: '1.5rem' }}>
            Core Capabilities
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 0,
          }}>
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                style={{
                  display: 'flex', alignItems: 'flex-start', gap: '1rem',
                  padding: '0.85rem 0',
                  borderBottom: '1px solid var(--color-border)',
                }}
              >
                <span style={{
                  fontSize: '0.65rem', fontWeight: 600,
                  color: 'var(--color-accent)',
                  marginTop: '0.3rem', flexShrink: 0,
                  letterSpacing: '0.04em',
                }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span style={{
                  fontSize: '0.9rem',
                  color: 'var(--color-muted)',
                  lineHeight: 1.65,
                }}>
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </SectionWrapper>
  );
}
