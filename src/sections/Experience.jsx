import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';

const experience = {
  role: 'Python Developer',
  company: 'BlackRockIndia IT Solutions',
  period: 'July 2024 — Present',
  items: [
    'Developed RESTful APIs using FastAPI and SQLAlchemy to optimize backend workflows and enable seamless EHR integrations with third-party healthcare platforms',
    'Designed, deployed, and maintained Windows Services for automating medical tasks and scheduling background processes with healthcare compliance',
    'Built SotaHive from scratch — secure connectivity platform reducing customer integration setup from days to minutes',
    'Implemented multi-tenant database architecture (database-per-tenant and schema-per-tenant) for HIPAA-compliant SaaS solutions',
    'Developed SaciaHub as an internal enterprise platform for the complete employee lifecycle with role-based access control',
    'Built and integrated SwitchBoard CRM to manage client pipelines and track medical software sales',
    'Deployed and managed production servers on cloud infrastructure ensuring high availability and security',
    'Collaborated with healthcare clients to gather requirements and deliver solutions aligned with clinical objectives',
  ],
};

export default function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.85], ['0%', '100%']);
  const bgY = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <SectionWrapper id="experience">
      <div ref={ref} style={{ position: 'relative' }}>
        {/* Glow */}
        <motion.div
          style={{
            y: bgY,
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 500, height: 500, borderRadius: '50%', pointerEvents: 'none',
            background: 'radial-gradient(circle, rgba(192,132,252,0.05), transparent 70%)',
          }}
        />

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <p style={{
            fontFamily: 'JetBrains Mono', color: '#c084fc',
            fontSize: '0.8rem', textTransform: 'uppercase',
            letterSpacing: '0.3em', marginBottom: '1.25rem',
          }}>
            {'// '}Experience
          </p>
          <h2 style={{
            fontFamily: 'Outfit', fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 700, color: '#fff',
          }}>
            Where I've{' '}
            <span className="gradient-text-warm">contributed</span>
          </h2>
        </div>

        {/* Timeline */}
        <div style={{ position: 'relative', maxWidth: 720, margin: '0 auto' }}>
          {/* Animated vertical line */}
          <div style={{
            position: 'absolute', left: 20, top: 0, bottom: 0,
            width: 2, background: 'rgba(255,255,255,0.05)',
          }}>
            <motion.div
              style={{
                width: '100%', borderRadius: 2, transformOrigin: 'top',
                height: lineHeight,
                background: 'linear-gradient(to bottom, #c084fc, #818cf8, #22d3ee)',
              }}
            />
          </div>

          {/* Node with pulse */}
          <div style={{ position: 'absolute', left: 11, top: 6 }}>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="pulse-ring"
              style={{
                width: 20, height: 20, borderRadius: '50%',
                border: '2.5px solid #c084fc', backgroundColor: '#030712',
                boxShadow: '0 0 16px rgba(192,132,252,0.4)',
              }}
            />
          </div>

          {/* Experience card */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="glass holo-shimmer"
            style={{
              marginLeft: 55, borderRadius: '1rem',
              padding: 'clamp(1.5rem, 3vw, 2.25rem)',
              position: 'relative', overflow: 'hidden',
            }}
          >
            {/* Status indicator */}
            <div style={{
              position: 'absolute', top: '1.25rem', right: '1.25rem',
              display: 'flex', alignItems: 'center', gap: '0.4rem',
            }}>
              <span style={{
                width: 6, height: 6, borderRadius: '50%',
                backgroundColor: '#34d399',
                boxShadow: '0 0 8px rgba(52,211,153,0.5)',
                animation: 'blink 2s ease-in-out infinite',
              }} />
              <span style={{
                fontFamily: 'JetBrains Mono', fontSize: '0.65rem',
                color: '#34d399', letterSpacing: '0.08em', opacity: 0.8,
              }}>
                ACTIVE
              </span>
            </div>

            {/* Header */}
            <div style={{ marginBottom: '1.75rem' }}>
              <h3 style={{
                fontFamily: 'Outfit', fontSize: 'clamp(1.15rem, 2vw, 1.4rem)',
                fontWeight: 700, color: '#fff', marginBottom: '0.4rem',
              }}>
                {experience.role}
              </h3>
              <p style={{
                fontSize: '0.95rem', color: '#c084fc', fontWeight: 500,
                marginBottom: '0.35rem',
              }}>
                {experience.company}
              </p>
              <p style={{
                fontFamily: 'JetBrains Mono', fontSize: '0.75rem',
                color: 'rgba(255,255,255,0.3)',
              }}>
                {experience.period}
              </p>
            </div>

            {/* Separator */}
            <div style={{
              width: '100%', height: 1, marginBottom: '1.5rem',
              background: 'linear-gradient(90deg, rgba(192,132,252,0.15), rgba(129,140,248,0.08), transparent)',
            }} />

            {/* Items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {experience.items.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                  style={{
                    display: 'flex', alignItems: 'flex-start', gap: '0.65rem',
                  }}
                >
                  <span style={{
                    fontFamily: 'JetBrains Mono', fontSize: '0.7rem',
                    color: '#c084fc', flexShrink: 0, marginTop: 3,
                    opacity: 0.6,
                  }}>
                    ▹
                  </span>
                  <span style={{
                    fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)',
                    lineHeight: 1.75,
                  }}>
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
