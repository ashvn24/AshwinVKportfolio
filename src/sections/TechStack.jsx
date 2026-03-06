import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';

const categories = [
  {
    title: 'Back-End',
    color: '#818cf8',
    icon: '⚡',
    items: ['Python', 'FastAPI', 'Django', 'Django REST', 'SQLAlchemy', 'Django ORM'],
  },
  {
    title: 'Front-End',
    color: '#22d3ee',
    icon: '◈',
    items: ['ReactJS', 'Redux', 'Tailwind CSS', 'Bootstrap', 'AJAX'],
  },
  {
    title: 'Database',
    color: '#34d399',
    icon: '◉',
    items: ['PostgreSQL', 'MSSQL', 'MySQL', 'MongoDB', 'Firebase'],
  },
  {
    title: 'DevOps & Cloud',
    color: '#c084fc',
    icon: '☁',
    items: ['AWS EC2', 'AWS S3', 'Docker', 'NGINX', 'PM2', 'Uvicorn', 'CICD'],
  },
  {
    title: 'Architecture & Tools',
    color: '#fb7185',
    icon: '⬢',
    items: ['Celery', 'Redis', 'RabbitMQ', 'WebSocket', 'Git', 'Microservices'],
  },
];

export default function TechStack() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  return (
    <SectionWrapper id="skills">
      <div ref={ref} style={{ position: 'relative' }}>
        {/* Glow */}
        <motion.div
          style={{
            y: bgY,
            position: 'absolute', top: 0, right: '-10%',
            width: 400, height: 400, borderRadius: '50%', pointerEvents: 'none',
            opacity: 0.04, background: 'radial-gradient(circle, #22d3ee, transparent 70%)',
          }}
        />

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <p style={{
            fontFamily: 'JetBrains Mono', color: '#22d3ee',
            fontSize: '0.8rem', textTransform: 'uppercase',
            letterSpacing: '0.3em', marginBottom: '1.25rem',
          }}>
            {'// '}Technical Skills
          </p>
          <h2 style={{
            fontFamily: 'Outfit', fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 700, color: '#fff',
          }}>
            My tech{' '}
            <span className="gradient-text">arsenal</span>
          </h2>
        </div>

        {/* Category grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.25rem',
        }}>
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: ci * 0.08 }}
              className="glass holo-shimmer"
              style={{
                borderRadius: '1rem', padding: '1.75rem',
                position: 'relative', overflow: 'hidden',
                transition: 'border-color 0.4s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${cat.color}30`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
              }}
            >
              {/* Category header */}
              <div style={{
                display: 'flex', alignItems: 'center', gap: '0.6rem',
                marginBottom: '1.25rem',
              }}>
                <span style={{ fontSize: '1rem', opacity: 0.8 }}>{cat.icon}</span>
                <span style={{
                  fontFamily: 'Outfit', fontWeight: 600,
                  fontSize: '1rem', color: cat.color,
                }}>
                  {cat.title}
                </span>
                {/* Pulse dot */}
                <span style={{
                  width: 5, height: 5, borderRadius: '50%',
                  backgroundColor: cat.color, marginLeft: 'auto',
                  boxShadow: `0 0 6px ${cat.color}66`,
                  animation: 'blink 2.5s ease-in-out infinite',
                  animationDelay: `${ci * 0.4}s`,
                }} />
              </div>

              {/* Skill badges */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                {cat.items.map((item, ii) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: ci * 0.06 + ii * 0.03 }}
                    style={{
                      fontFamily: 'JetBrains Mono', fontSize: '0.78rem',
                      color: 'rgba(255,255,255,0.65)',
                      padding: '0.5rem 0.85rem', borderRadius: '0.5rem',
                      background: `${cat.color}08`,
                      border: `1px solid ${cat.color}15`,
                      cursor: 'default', transition: 'all 0.3s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = `${cat.color}15`;
                      e.currentTarget.style.borderColor = `${cat.color}35`;
                      e.currentTarget.style.color = cat.color;
                      e.currentTarget.style.boxShadow = `0 0 15px ${cat.color}15`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = `${cat.color}08`;
                      e.currentTarget.style.borderColor = `${cat.color}15`;
                      e.currentTarget.style.color = 'rgba(255,255,255,0.65)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
