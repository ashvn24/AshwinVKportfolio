import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { useIsMobile } from '../hooks/useBreakpoint';

const socials = [
  {
    name: 'Email',
    value: 'ashwinvk77@gmail.com',
    href: 'mailto:ashwinvk77@gmail.com',
  },
  {
    name: 'LinkedIn',
    value: 'linkedin.com/in/ashwin-vk',
    href: 'https://www.linkedin.com/in/ashwin-vk/',
  },
  {
    name: 'GitHub',
    value: 'github.com/ashvn24',
    href: 'https://github.com/ashvn24/',
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
          width: '100%',
          background: 'transparent',
          borderBottom: `1px solid ${focused ? 'var(--color-accent)' : 'var(--color-border-h)'}`,
          borderTop: 'none', borderLeft: 'none', borderRight: 'none',
          padding: '1.25rem 0 0.65rem',
          color: 'var(--color-text)',
          outline: 'none',
          fontSize: '0.95rem',
          transition: 'border-color 0.25s',
          resize: textarea ? 'none' : undefined,
          height: textarea ? 110 : undefined,
          fontFamily: 'Inter, system-ui, sans-serif',
          lineHeight: 1.6,
        }}
      />
      <motion.label
        animate={{
          y: active ? -22 : 0,
          scale: active ? 0.78 : 1,
          color: active ? 'var(--color-accent)' : 'var(--color-muted)',
        }}
        transition={{ duration: 0.18 }}
        style={{
          position: 'absolute', left: 0, top: '1.25rem',
          transformOrigin: 'left', pointerEvents: 'none',
          fontSize: '0.9rem',
        }}
      >
        {label}
      </motion.label>
    </div>
  );
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const isMobile = useIsMobile();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <SectionWrapper id="contact">
      <div>
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="label"
          style={{ marginBottom: '3rem' }}
        >
          Contact
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
            marginBottom: '1.25rem',
          }}
        >
          Say{' '}
          <span className="gradient-text">hello.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            fontSize: '1rem', color: 'var(--color-muted)',
            maxWidth: 440, lineHeight: 1.8,
            marginBottom: isMobile ? '3rem' : '4rem',
          }}
        >
          Have a project in mind or want to discuss an idea?
          I'd love to hear from you.
        </motion.p>

        {/* Content grid — stacks on mobile */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: isMobile ? '3rem' : '3.5rem',
        }}>
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}
          >
            <FloatingInput label="Your Name" name="name" />
            <FloatingInput label="Email Address" name="email" type="email" />
            <FloatingInput label="Message" name="message" textarea />

            <div style={{ paddingTop: '0.25rem' }}>
              <motion.button
                type="submit"
                whileHover={{ opacity: 0.88 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  padding: '0.85rem 2.25rem',
                  background: submitted ? '#1a2e1a' : 'var(--color-accent)',
                  color: submitted ? '#4ade80' : '#0c0c0e',
                  border: submitted ? '1px solid rgba(74,222,128,0.3)' : 'none',
                  borderRadius: '0.35rem',
                  fontSize: '0.88rem', fontWeight: 600,
                  cursor: 'pointer', letterSpacing: '0.01em',
                  transition: 'all 0.3s',
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  width: isMobile ? '100%' : 'auto',
                  justifyContent: 'center',
                }}
              >
                {submitted ? '✓ Sent' : 'Send Message'}
                {!submitted && (
                  <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                )}
              </motion.button>
            </div>
          </motion.form>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
          >
            <p style={{
              fontSize: '0.9rem', color: 'var(--color-muted)',
              lineHeight: 1.75, marginBottom: '1.75rem',
            }}>
              Prefer to reach out directly? Find me here.
            </p>

            <div style={{ borderTop: '1px solid var(--color-border)' }}>
              {socials.map((social, i) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.07 }}
                  style={{
                    display: 'flex', alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '1.1rem 0',
                    borderBottom: '1px solid var(--color-border)',
                    textDecoration: 'none',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.querySelector('.social-label').style.color = 'var(--color-text)';
                    e.currentTarget.querySelector('.social-arrow').style.opacity = '1';
                    e.currentTarget.querySelector('.social-arrow').style.transform = 'translate(2px, -2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.querySelector('.social-label').style.color = 'var(--color-muted)';
                    e.currentTarget.querySelector('.social-arrow').style.opacity = '0.4';
                    e.currentTarget.querySelector('.social-arrow').style.transform = 'translate(0, 0)';
                  }}
                >
                  <div>
                    <p className="label" style={{ marginBottom: '0.2rem' }}>
                      {social.name}
                    </p>
                    <p
                      className="social-label"
                      style={{
                        fontSize: isMobile ? '0.82rem' : '0.9rem',
                        color: 'var(--color-muted)',
                        transition: 'color 0.2s',
                        wordBreak: 'break-all',
                      }}
                    >
                      {social.value}
                    </p>
                  </div>
                  <span
                    className="social-arrow"
                    style={{
                      fontSize: '0.9rem', color: 'var(--color-accent)',
                      opacity: 0.4, flexShrink: 0, marginLeft: '1rem',
                      transition: 'opacity 0.2s, transform 0.2s',
                    }}
                  >
                    ↗
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{
            marginTop: isMobile ? '4rem' : '6rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid var(--color-border)',
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: isMobile ? 'flex-start' : 'center',
            justifyContent: 'space-between',
            gap: '0.5rem',
          }}
        >
          <p style={{ fontSize: '0.75rem', color: 'var(--color-faint)', letterSpacing: '0.04em' }}>
            © {new Date().getFullYear()} Ashwin VK
          </p>
          <p style={{ fontSize: '0.75rem', color: 'var(--color-faint)', letterSpacing: '0.04em' }}>
            Built with React & Framer Motion
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
