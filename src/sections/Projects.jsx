import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';

const projects = [
  {
    title: 'SotaHive',
    subtitle: 'Secure Connectivity Platform',
    description:
      'Built from scratch — enables rapid creation of secure connectivity solutions (agent-based, API, VPN, SFTP) for sending and receiving DFT messages. Reduced customer integration setup time from days to minutes.',
    tech: ['FastAPI', 'SQLAlchemy', 'PostgreSQL', 'WebSocket', 'Docker'],
    color: '#818cf8',
    highlights: [
      'Agent-based, API, VPN & SFTP connectivity options',
      'Reduced integration setup from days to minutes',
      'Secure DFT message transmission pipeline',
      'Rapid customer onboarding workflow',
    ],
  },
  {
    title: 'SaciaHub',
    subtitle: 'Enterprise HR Platform',
    description:
      'Internal enterprise platform managing the complete employee lifecycle — onboarding, background verification, timesheet management, employee requests, and automated reporting with role-based access control.',
    tech: ['Django', 'Django REST', 'ReactJS', 'PostgreSQL', 'Celery'],
    color: '#22d3ee',
    highlights: [
      'Complete employee lifecycle management',
      'Automated onboarding & background verification',
      'Timesheet tracking & employee request system',
      'Role-based access control & automated reporting',
    ],
  },
  {
    title: 'SwitchBoard CRM',
    subtitle: 'Healthcare Sales Pipeline',
    description:
      'Client relationship management system for managing pipelines, tracking medical software sales, and supporting long-term customer relationships in the healthcare domain.',
    tech: ['FastAPI', 'ReactJS', 'MSSQL', 'Redis', 'AWS EC2'],
    color: '#34d399',
    highlights: [
      'Client pipeline & deal stage management',
      'Medical software sales tracking',
      'Long-term customer relationship support',
      'Integrated with existing healthcare systems',
    ],
  },
  {
    title: 'Multi-Tenant SaaS Architecture',
    subtitle: 'HIPAA-Compliant Data Platform',
    description:
      'Implemented database-per-tenant and schema-per-tenant architecture to provide secure, HIPAA-compliant data isolation and scalable SaaS solutions for healthcare clients.',
    tech: ['FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Docker', 'NGINX'],
    color: '#c084fc',
    highlights: [
      'Database-per-tenant & schema-per-tenant isolation',
      'HIPAA-compliant data security',
      'Scalable multi-tenant SaaS foundation',
      'Automated tenant provisioning',
    ],
  },
];

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <motion.div
        style={{ y }}
        className="glass"
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = `0 0 40px ${project.color}11`;
          e.currentTarget.style.borderColor = `${project.color}22`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = 'none';
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
        }}
      >
        <div style={{
          borderRadius: '1rem', padding: 'clamp(1.5rem, 3vw, 2.5rem)',
          position: 'relative', overflow: 'hidden', transition: 'all 0.5s',
        }}>
          {/* Number watermark */}
          <div style={{
            position: 'absolute', top: '0.75rem', right: '1.25rem',
            fontFamily: 'Outfit', fontSize: 'clamp(3.5rem, 6vw, 5rem)',
            fontWeight: 700, opacity: 0.03, lineHeight: 1, userSelect: 'none',
          }}>
            0{index + 1}
          </div>

          {/* Accent bar */}
          <div style={{
            width: 48, height: 4, borderRadius: 2,
            backgroundColor: project.color, marginBottom: '1.5rem',
          }} />

          {/* Title & subtitle */}
          <h3 style={{
            fontFamily: 'Outfit', fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)',
            fontWeight: 700, color: '#fff', marginBottom: '0.35rem',
          }}>
            {project.title}
          </h3>
          <p style={{
            fontSize: '0.85rem', color: project.color,
            fontWeight: 500, marginBottom: '1rem',
          }}>
            {project.subtitle}
          </p>

          {/* Description */}
          <p style={{
            fontSize: '0.94rem', color: 'rgba(255,255,255,0.4)',
            lineHeight: 1.8, marginBottom: '1.5rem',
          }}>
            {project.description}
          </p>

          {/* Highlights */}
          <div style={{ marginBottom: '1.5rem' }}>
            {project.highlights.map((item, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'flex-start', gap: '0.65rem',
                padding: '0.4rem 0',
              }}>
                <span style={{
                  marginTop: 7, width: 5, height: 5, borderRadius: '50%',
                  backgroundColor: project.color, flexShrink: 0,
                }} />
                <span style={{
                  fontSize: '0.88rem', color: 'rgba(255,255,255,0.5)',
                  lineHeight: 1.7,
                }}>
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Tech tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
            {project.tech.map((t) => (
              <span key={t} style={{
                fontFamily: 'JetBrains Mono', fontSize: '0.72rem',
                padding: '0.4rem 0.75rem', borderRadius: '2rem',
                backgroundColor: `${project.color}10`, color: project.color,
                border: `1px solid ${project.color}20`,
              }}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], [-80, 80]);

  return (
    <SectionWrapper id="projects">
      <div ref={ref} style={{ position: 'relative' }}>
        {/* Glow */}
        <motion.div
          style={{
            y: bgY,
            position: 'absolute', top: '-10%', left: '50%',
            transform: 'translateX(-50%)',
            width: 600, height: 600, borderRadius: '50%', pointerEvents: 'none',
            opacity: 0.03, background: 'radial-gradient(circle, #34d399, transparent 70%)',
          }}
        />

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <p style={{
            fontFamily: 'JetBrains Mono', color: '#34d399',
            fontSize: '0.8rem', textTransform: 'uppercase',
            letterSpacing: '0.3em', marginBottom: '1.25rem',
          }}>
            Projects
          </p>
          <h2 style={{
            fontFamily: 'Outfit', fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 700, color: '#fff',
          }}>
            Products I've{' '}
            <span className="gradient-text">shipped</span>
          </h2>
        </div>

        {/* Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
