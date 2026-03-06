import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';

const stats = [
  { value: '1+', label: 'Year Experience', color: '#818cf8' },
  { value: '6+', label: 'Products Shipped', color: '#22d3ee' },
  { value: '∞', label: 'Lines of Code', color: '#34d399' },
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
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <SectionWrapper id="about">
      <div ref={ref} style={{ position: 'relative' }}>
        {/* Background glow */}
        <motion.div
          style={{
            y: bgY,
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 500, height: 500, borderRadius: '50%', pointerEvents: 'none',
            background: 'radial-gradient(circle, rgba(99,102,241,0.06), transparent 70%)',
          }}
        />

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          {/* AI terminal label */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            marginBottom: '1.25rem',
          }}>
            <span style={{
              fontFamily: 'JetBrains Mono', color: '#818cf8',
              fontSize: '0.8rem', textTransform: 'uppercase',
              letterSpacing: '0.3em',
            }}>
              {'// '}About Me
            </span>
          </div>

          <h2 style={{
            fontFamily: 'Outfit', fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 700, color: '#fff', marginBottom: '1.5rem',
          }}>
            Building systems that{' '}
            <span className="gradient-text">scale</span>
          </h2>
          <p style={{
            fontSize: '1.05rem', color: 'rgba(255,255,255,0.45)',
            maxWidth: 600, margin: '0 auto', lineHeight: 1.9, textAlign: 'center',
          }}>
            Python Developer at BlackRockIndia IT Solutions since July 2024.
            I build production-grade healthcare platforms, enterprise SaaS products,
            and scalable backend systems — from database architecture to cloud deployment.
          </p>
        </div>

        {/* Stats */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1rem', marginBottom: '3.5rem',
        }}>
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass holo-shimmer"
              style={{
                borderRadius: '1rem', padding: '2rem 1rem',
                textAlign: 'center', position: 'relative', overflow: 'hidden',
              }}
            >
              <div style={{
                fontFamily: 'Outfit', fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                fontWeight: 700, color: stat.color, marginBottom: '0.75rem',
              }}>
                {stat.value}
              </div>
              <p style={{
                fontSize: '0.65rem', color: 'rgba(255,255,255,0.35)',
                textTransform: 'uppercase', letterSpacing: '0.15em',
              }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Highlights with terminal-style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass"
          style={{
            borderRadius: '1rem', padding: 'clamp(1.25rem, 3vw, 2rem)',
            position: 'relative', overflow: 'hidden',
          }}
        >
          {/* Terminal header bar */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: '0.5rem',
            marginBottom: '1.5rem', paddingBottom: '1rem',
            borderBottom: '1px solid rgba(255,255,255,0.05)',
          }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#f43f5e', opacity: 0.7 }} />
            <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#fbbf24', opacity: 0.7 }} />
            <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#34d399', opacity: 0.7 }} />
            <span style={{
              fontFamily: 'JetBrains Mono', fontSize: '0.7rem',
              color: 'rgba(255,255,255,0.25)', marginLeft: '0.75rem',
            }}>
              core_capabilities.py
            </span>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '0.2rem 2.5rem',
          }}>
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                style={{
                  display: 'flex', alignItems: 'flex-start', gap: '0.65rem',
                  padding: '0.65rem 0',
                }}
              >
                <span style={{
                  fontFamily: 'JetBrains Mono', fontSize: '0.75rem',
                  color: '#34d399', flexShrink: 0, marginTop: 2,
                }}>
                  ▸
                </span>
                <span style={{
                  fontSize: '0.92rem', color: 'rgba(255,255,255,0.55)',
                  lineHeight: 1.7,
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
