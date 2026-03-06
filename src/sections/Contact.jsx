import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';

const socials = [
  {
    name: 'Email',
    value: 'ashwin@example.com',
    href: 'mailto:ashwin@example.com',
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    value: 'linkedin.com/in/ashwin',
    href: 'https://linkedin.com/in/ashwin',
    icon: (
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    value: 'github.com/ashwin',
    href: 'https://github.com/ashwin',
    icon: (
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
];

function FloatingInput({ label, name, type = 'text', textarea = false }) {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState('');
  const active = focused || value.length > 0;
  const Tag = textarea ? 'textarea' : 'input';

  return (
    <div style={{ position: 'relative' }}>
      <Tag
        name={name}
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          width: '100%', background: 'transparent',
          borderBottom: `2px solid ${focused ? '#818cf8' : 'rgba(255,255,255,0.08)'}`,
          borderTop: 'none', borderLeft: 'none', borderRight: 'none',
          padding: '1.25rem 0.25rem 0.75rem', color: '#fff',
          outline: 'none', fontSize: '0.95rem', transition: 'border-color 0.3s',
          resize: textarea ? 'none' : undefined,
          height: textarea ? 130 : undefined,
          fontFamily: 'inherit',
          lineHeight: 1.6,
        }}
      />
      <motion.label
        animate={{
          y: active ? -24 : 0,
          scale: active ? 0.8 : 1,
          color: active ? '#818cf8' : 'rgba(255,255,255,0.25)',
        }}
        transition={{ duration: 0.2 }}
        style={{
          position: 'absolute', left: 4, top: '1.25rem',
          transformOrigin: 'left', pointerEvents: 'none',
          fontSize: '0.95rem',
        }}
      >
        {label}
      </motion.label>
      {/* Focus glow indicator */}
      {focused && (
        <motion.div
          layoutId="focus-glow"
          style={{
            position: 'absolute', bottom: -1, left: 0,
            height: 2, background: 'linear-gradient(90deg, #818cf8, #22d3ee)',
            borderRadius: 1,
          }}
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 0.3 }}
        />
      )}
    </div>
  );
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <SectionWrapper id="contact">
      <div style={{ position: 'relative' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <p style={{
            fontFamily: 'JetBrains Mono', color: '#fb7185',
            fontSize: '0.8rem', textTransform: 'uppercase',
            letterSpacing: '0.3em', marginBottom: '1.25rem',
          }}>
            {'// '}Contact
          </p>
          <h2 style={{
            fontFamily: 'Outfit', fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 700, color: '#fff', marginBottom: '1rem',
          }}>
            Let's{' '}
            <span className="gradient-text-warm">connect</span>
          </h2>
          <p style={{
            fontSize: '1rem', color: 'rgba(255,255,255,0.4)',
            maxWidth: 420, margin: '0 auto', lineHeight: 1.8,
          }}>
            Have a project in mind or want to discuss an idea? I'd love to hear from you.
          </p>
        </div>

        {/* Content grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '3.5rem',
        }}>
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            <FloatingInput label="Your Name" name="name" />
            <FloatingInput label="Email Address" name="email" type="email" />
            <FloatingInput label="Message" name="message" textarea />

            <div style={{ paddingTop: '0.75rem' }}>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="holo-shimmer"
                style={{
                  padding: '0.85rem 2.5rem', borderRadius: '2rem',
                  fontSize: '0.85rem', fontWeight: 500, cursor: 'pointer',
                  letterSpacing: '0.05em', color: 'rgba(255,255,255,0.9)',
                  fontFamily: 'JetBrains Mono',
                  position: 'relative', overflow: 'hidden',
                  border: submitted
                    ? '1px solid rgba(52,211,153,0.35)'
                    : '1px solid rgba(251,113,133,0.3)',
                  background: submitted
                    ? 'linear-gradient(135deg, rgba(52,211,153,0.15), rgba(34,211,238,0.1))'
                    : 'linear-gradient(135deg, rgba(251,113,133,0.12), rgba(192,132,252,0.08))',
                  transition: 'all 0.3s',
                }}
              >
                {submitted ? '✓ Transmitted' : '→ Send Message'}
              </motion.button>
            </div>
          </motion.form>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
          >
            <p style={{
              fontSize: '0.92rem', color: 'rgba(255,255,255,0.35)',
              lineHeight: 1.7, marginBottom: '0.5rem',
            }}>
              Prefer a direct channel? Reach out through these endpoints.
            </p>

            {socials.map((social, i) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="glass holo-shimmer"
                style={{
                  display: 'flex', alignItems: 'center', gap: '1rem',
                  padding: '1.15rem 1.25rem', borderRadius: '0.75rem',
                  textDecoration: 'none', transition: 'all 0.3s',
                  position: 'relative', overflow: 'hidden',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(251,113,133,0.2)';
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(251,113,133,0.06)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <span style={{ color: 'rgba(255,255,255,0.3)' }}>{social.icon}</span>
                <div>
                  <p style={{
                    fontFamily: 'JetBrains Mono',
                    fontSize: '0.62rem', color: 'rgba(255,255,255,0.25)',
                    textTransform: 'uppercase', letterSpacing: '0.15em',
                    marginBottom: 3,
                  }}>
                    {social.name}
                  </p>
                  <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.55)' }}>
                    {social.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{
            marginTop: '6rem', paddingTop: '1.5rem',
            borderTop: '1px solid rgba(255,255,255,0.05)',
            textAlign: 'center',
          }}
        >
          <p style={{
            fontFamily: 'JetBrains Mono',
            fontSize: '0.7rem', color: 'rgba(255,255,255,0.18)',
            letterSpacing: '0.08em',
          }}>
            {'/* '}© {new Date().getFullYear()} Ashwin — Crafted with React, TailwindCSS & Framer Motion{' */'}
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
