import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { useIsMobile } from '../hooks/useBreakpoint';

const categories = [
  {
    title: 'Back-End',
    items: ['Python', 'FastAPI', 'Django', 'Django REST', 'SQLAlchemy', 'Django ORM'],
  },
  {
    title: 'Front-End',
    items: ['ReactJS', 'Redux', 'Tailwind CSS', 'Bootstrap', 'AJAX'],
  },
  {
    title: 'Database',
    items: ['PostgreSQL', 'MSSQL', 'MySQL', 'MongoDB', 'Firebase'],
  },
  {
    title: 'DevOps & Cloud',
    items: ['AWS EC2', 'AWS S3', 'Docker', 'NGINX', 'PM2', 'Uvicorn', 'CI/CD'],
  },
  {
    title: 'Architecture & Tools',
    items: ['Celery', 'Redis', 'RabbitMQ', 'WebSocket', 'Git', 'Microservices'],
  },
];

export default function TechStack() {
  const isMobile = useIsMobile();

  return (
    <SectionWrapper id="skills">
      {/* Section label */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="label"
        style={{ marginBottom: '3rem' }}
      >
        Skills
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
        My tech{' '}
        <span className="gradient-text">arsenal</span>
      </motion.h2>

      {/* Skill categories */}
      <div style={{ borderTop: '1px solid var(--color-border)' }}>
        {categories.map((cat, ci) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: ci * 0.06 }}
            style={{
              display: 'grid',
              /* On mobile: single column (label on top, pills below).
                 On desktop: fixed left label + flexible right. */
              gridTemplateColumns: isMobile ? '1fr' : '160px 1fr',
              gap: isMobile ? '0.75rem' : '1.5rem 3rem',
              padding: isMobile ? '1.25rem 0' : '1.75rem 0',
              borderBottom: '1px solid var(--color-border)',
              alignItems: 'start',
            }}
          >
            {/* Category name */}
            <p className="label" style={{ paddingTop: '0.1rem' }}>
              {cat.title}
            </p>

            {/* Pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
              {cat.items.map((item, ii) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: ci * 0.04 + ii * 0.02 }}
                  style={{
                    fontSize: isMobile ? '0.78rem' : '0.85rem',
                    color: 'var(--color-muted)',
                    padding: '0.32rem 0.75rem',
                    borderRadius: '0.25rem',
                    border: '1px solid var(--color-border)',
                    background: 'var(--color-surface)',
                    cursor: 'default',
                    transition: 'color 0.2s, border-color 0.2s',
                    letterSpacing: '0.01em',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--color-accent)';
                    e.currentTarget.style.borderColor = 'rgba(232,213,176,0.25)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--color-muted)';
                    e.currentTarget.style.borderColor = 'var(--color-border)';
                  }}
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
