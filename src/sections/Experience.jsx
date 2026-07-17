import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { useIsMobile } from '../hooks/useBreakpoint';

const experience = {
  role: 'Python Developer',
  company: 'BlackRockIndia IT Solutions',
  period: 'Jul 2024 — Present',
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
  const isMobile = useIsMobile();

  return (
    <SectionWrapper id="experience">
      {/* Section label */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="label"
        style={{ marginBottom: '3rem' }}
      >
        Experience
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
          marginBottom: '4rem',
        }}
      >
        Where I've{' '}
        <span className="gradient-text">contributed</span>
      </motion.h2>

      {/* Experience entry */}
      <div style={{ borderTop: '1px solid var(--color-border)' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          style={{
            display: 'grid',
            /* Stack on mobile, two-col on desktop */
            gridTemplateColumns: isMobile ? '1fr' : '180px 1fr',
            gap: isMobile ? '1.25rem' : '2rem 4rem',
            padding: isMobile ? '2rem 0' : '3rem 0',
            borderBottom: '1px solid var(--color-border)',
          }}
        >
          {/* Left — date / meta */}
          <div style={{ display: 'flex', alignItems: isMobile ? 'center' : 'flex-start', gap: '1rem', flexWrap: 'wrap' }}>
            <p className="label" style={{ marginBottom: 0, whiteSpace: 'nowrap' }}>
              {experience.period}
            </p>
            <span style={{
              display: 'inline-block',
              fontSize: '0.68rem', fontWeight: 500,
              padding: '0.22rem 0.6rem', borderRadius: '2rem',
              border: '1px solid rgba(74, 222, 128, 0.25)',
              color: '#4ade80',
              letterSpacing: '0.08em',
              whiteSpace: 'nowrap',
            }}>
              Active
            </span>
          </div>

          {/* Right — role details */}
          <div>
            <h3 style={{
              fontFamily: 'Outfit',
              fontSize: isMobile ? '1.2rem' : '1.35rem',
              fontWeight: 700,
              color: 'var(--color-text)',
              letterSpacing: '-0.02em',
              marginBottom: '0.3rem',
            }}>
              {experience.role}
            </h3>
            <p style={{
              fontSize: '0.88rem', fontWeight: 500,
              color: 'var(--color-accent)',
              marginBottom: '1.75rem',
            }}>
              {experience.company}
            </p>

            {/* Bullet items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
              {experience.items.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}
                >
                  <span style={{
                    fontSize: '0.75rem',
                    color: 'var(--color-accent)',
                    marginTop: '0.35rem', flexShrink: 0, opacity: 0.6,
                  }}>
                    –
                  </span>
                  <span style={{
                    fontSize: isMobile ? '0.87rem' : '0.92rem',
                    color: 'var(--color-muted)',
                    lineHeight: 1.75,
                  }}>
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
