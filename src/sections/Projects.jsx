import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { useIsMobile } from '../hooks/useBreakpoint';

/* ── ServerDeck Product Showcase ──────────────────── */

const FEATURES = [
  {
    label: 'Monitor',
    desc: 'Real-time CPU, memory & disk metrics across your entire fleet from a single pane.',
  },
  {
    label: 'Deploy',
    desc: 'One-click deployments with rollback support — no SSH juggling required.',
  },
  {
    label: 'Stream',
    desc: 'Live log streaming with search and filtering, straight in the browser.',
  },
];

function ServerDeckFeature() {
  const isMobile = useIsMobile();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{ marginBottom: '4rem' }}
    >
      {/* Outer shell — distinct dark canvas, not a card */}
      <div style={{
        borderRadius: '1rem',
        background: '#0f0f11',
        border: '1px solid rgba(232,213,176,0.12)',
        overflow: 'hidden',
        position: 'relative',
      }}>

        {/* Corner glow — top right */}
        <div style={{
          position: 'absolute', top: -80, right: -80,
          width: 320, height: 320, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(240,165,0,0.08), transparent 65%)',
          pointerEvents: 'none',
        }} />
        {/* Corner glow — bottom left */}
        <div style={{
          position: 'absolute', bottom: -60, left: -60,
          width: 240, height: 240, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(232,213,176,0.04), transparent 65%)',
          pointerEvents: 'none',
        }} />

        {/* Top stripe — "My Product" marker */}
        <div style={{
          borderBottom: '1px solid rgba(232,213,176,0.08)',
          padding: isMobile ? '1rem 1.5rem' : '0.85rem 2.5rem',
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{
              fontSize: '0.65rem', fontWeight: 700,
              textTransform: 'uppercase', letterSpacing: '0.18em',
              color: 'var(--color-accent)', opacity: 0.7,
            }}>
              My Product
            </span>
            <span style={{ width: 1, height: 12, background: 'rgba(232,213,176,0.2)', display: 'inline-block' }} />
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
              fontSize: '0.65rem', fontWeight: 600,
              letterSpacing: '0.12em', textTransform: 'uppercase',
              color: '#4ade80',
            }}>
              <span style={{
                width: 5, height: 5, borderRadius: '50%',
                backgroundColor: '#4ade80', flexShrink: 0,
                boxShadow: '0 0 6px rgba(74,222,128,0.7)',
              }} />
              Live at serverdeck.online
            </span>
          </div>
          <span style={{ fontSize: '0.68rem', color: 'rgba(240,236,228,0.2)', letterSpacing: '0.06em' }}>
            {new Date().getFullYear()}
          </span>
        </div>

        {/* Main body */}
        <div style={{ padding: isMobile ? '2rem 1.5rem' : '3rem 2.5rem' }}>

          {/* Brand name — BIG */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 style={{
              fontFamily: 'Outfit',
              fontSize: isMobile ? 'clamp(2.5rem, 12vw, 4rem)' : 'clamp(3rem, 6vw, 5rem)',
              fontWeight: 900,
              letterSpacing: '-0.04em',
              lineHeight: 0.9,
              color: 'var(--color-text)',
              marginBottom: '0.6rem',
            }}>
              Server
              <span style={{
                background: 'linear-gradient(135deg, #f0a500, #e8d5b0)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Deck
              </span>
            </h3>

            {/* Tagline */}
            <p style={{
              fontSize: isMobile ? '1rem' : '1.15rem',
              color: 'rgba(240,236,228,0.5)',
              fontWeight: 400,
              marginBottom: isMobile ? '2rem' : '2.75rem',
              maxWidth: 480,
              lineHeight: 1.6,
            }}>
              Your servers. One dashboard. Full control.
            </p>
          </motion.div>

          {/* Feature columns */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
              gap: isMobile ? '0' : '0',
              borderTop: '1px solid rgba(232,213,176,0.08)',
              marginBottom: isMobile ? '2rem' : '2.75rem',
            }}
          >
            {FEATURES.map((f, i) => (
              <div
                key={f.label}
                style={{
                  padding: isMobile ? '1.25rem 0' : '1.75rem 2rem 1.75rem 0',
                  borderBottom: isMobile ? '1px solid rgba(232,213,176,0.08)' : 'none',
                  borderRight: !isMobile && i < FEATURES.length - 1
                    ? '1px solid rgba(232,213,176,0.08)' : 'none',
                  paddingLeft: !isMobile && i > 0 ? '2rem' : '0',
                }}
              >
                <p style={{
                  fontSize: '0.68rem', fontWeight: 700,
                  textTransform: 'uppercase', letterSpacing: '0.18em',
                  color: 'var(--color-accent)', marginBottom: '0.6rem',
                }}>
                  {f.label}
                </p>
                <p style={{
                  fontSize: '0.88rem',
                  color: 'rgba(240,236,228,0.4)',
                  lineHeight: 1.65,
                }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Bottom row — description + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.28 }}
            style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              alignItems: isMobile ? 'flex-start' : 'center',
              justifyContent: 'space-between',
              gap: isMobile ? '1.5rem' : '2rem',
            }}
          >
            <p style={{
              fontSize: '0.9rem',
              color: 'rgba(240,236,228,0.35)',
              lineHeight: 1.75,
              maxWidth: 480,
            }}>
              Built for developers who manage their own infrastructure. No bloat, no
              noise — just the information and controls you actually need.
            </p>

            {/* CTA */}
            <a
              href="https://serverdeck.online"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
                padding: isMobile ? '0.85rem 1.75rem' : '0.9rem 2rem',
                background: 'var(--color-accent)',
                color: '#0c0c0e',
                border: 'none', borderRadius: '0.35rem',
                fontSize: '0.88rem', fontWeight: 700,
                letterSpacing: '0.01em', cursor: 'pointer',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                flexShrink: 0,
                transition: 'opacity 0.2s, transform 0.2s',
                width: isMobile ? '100%' : 'auto',
                justifyContent: 'center',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '0.88';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '1';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Visit ServerDeck
              <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </div>

        {/* Tech stack strip — bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(232,213,176,0.08)',
          padding: isMobile ? '1rem 1.5rem' : '1rem 2.5rem',
          display: 'flex', alignItems: 'center',
          gap: isMobile ? '0.75rem' : '1.25rem',
          flexWrap: 'wrap',
        }}>
          <span style={{
            fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.16em',
            textTransform: 'uppercase', color: 'rgba(240,236,228,0.2)',
            flexShrink: 0,
          }}>
            Stack
          </span>
          {['Next.js', 'FastAPI', 'WebSocket', 'PostgreSQL', 'Docker', 'Redis'].map((t) => (
            <span key={t} style={{
              fontSize: '0.72rem',
              color: 'rgba(240,236,228,0.3)',
              letterSpacing: '0.02em',
            }}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ── Regular Project Cards ────────────────────────── */

const projects = [
  {
    title: 'SotaHive',
    subtitle: 'Secure Connectivity Platform',
    description:
      'Built from scratch — enables rapid creation of secure connectivity solutions (agent-based, API, VPN, SFTP) for sending and receiving DFT messages. Reduced customer integration setup time from days to minutes.',
    tech: ['FastAPI', 'SQLAlchemy', 'PostgreSQL', 'WebSocket', 'Docker'],
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
    highlights: [
      'Database-per-tenant & schema-per-tenant isolation',
      'HIPAA-compliant data security',
      'Scalable multi-tenant SaaS foundation',
      'Automated tenant provisioning',
    ],
  },
];

function ProjectCard({ project, index }) {
  const isMobile = useIsMobile();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '40px 1fr' : '56px 1fr',
        gap: isMobile ? '0 1.25rem' : '0 2.5rem',
        padding: isMobile ? '2rem 0' : '2.5rem 0',
        borderBottom: '1px solid var(--color-border)',
        alignItems: 'start',
        transition: 'border-bottom-color 0.3s',
      }}
      onMouseEnter={(e) => { e.currentTarget.style.borderBottomColor = 'var(--color-border-h)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.borderBottomColor = 'var(--color-border)'; }}
    >
      {/* Index number */}
      <div style={{
        fontFamily: 'Outfit', fontSize: '0.72rem', fontWeight: 700,
        color: 'var(--color-faint)', paddingTop: '0.2rem', letterSpacing: '0.05em',
      }}>
        {String(index + 1).padStart(2, '0')}
      </div>

      {/* Content */}
      <div>
        <h3 style={{
          fontFamily: 'Outfit',
          fontSize: isMobile ? '1.05rem' : 'clamp(1.1rem, 2.5vw, 1.4rem)',
          fontWeight: 700, letterSpacing: '-0.02em',
          color: 'var(--color-text)', marginBottom: '0.3rem',
        }}>
          {project.title}
        </h3>
        <p style={{
          fontSize: '0.8rem', fontWeight: 500,
          color: 'var(--color-accent)', marginBottom: '0.9rem',
        }}>
          {project.subtitle}
        </p>

        <p style={{
          fontSize: isMobile ? '0.87rem' : '0.92rem',
          color: 'var(--color-muted)', lineHeight: 1.8,
          marginBottom: '1rem', maxWidth: 580,
        }}>
          {project.description}
        </p>

        {/* Highlights */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '0.35rem', marginBottom: '1rem',
        }}>
          {project.highlights.map((item) => (
            <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
              <span style={{ fontSize: '0.65rem', color: 'var(--color-accent)', marginTop: '0.28rem', flexShrink: 0 }}>–</span>
              <span style={{ fontSize: '0.82rem', color: 'var(--color-muted)', lineHeight: 1.6 }}>
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* Tech tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
          {project.tech.map((t) => (
            <span key={t} style={{
              fontSize: '0.73rem', padding: '0.26rem 0.65rem',
              borderRadius: '0.25rem',
              background: 'var(--color-surface)', color: 'var(--color-muted)',
              border: '1px solid var(--color-border)', letterSpacing: '0.01em',
            }}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ── Section ──────────────────────────────────────── */

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      {/* Section label */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="label"
        style={{ marginBottom: '3rem' }}
      >
        Projects
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
          fontWeight: 800, letterSpacing: '-0.025em',
          lineHeight: 1.1, color: 'var(--color-text)',
          marginBottom: '4rem',
        }}
      >
        Products I've{' '}
        <span className="gradient-text">shipped</span>
      </motion.h2>

      {/* ServerDeck featured */}
      <ServerDeckFeature />

      {/* Other projects label */}
      <p className="label" style={{ marginBottom: 0, marginTop: '0.5rem' }}>
        Other Work
      </p>

      {/* Project list */}
      <div style={{ borderTop: '1px solid var(--color-border)' }}>
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}
