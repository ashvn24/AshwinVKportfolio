import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useIsMobile } from '../hooks/useBreakpoint';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useIsMobile(768);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when resizing back to desktop
  useEffect(() => {
    if (!isMobile) setMobileOpen(false);
  }, [isMobile]);

  const scrollTo = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
          borderBottom: scrolled ? '1px solid var(--color-border)' : '1px solid transparent',
          background: scrolled ? 'rgba(12, 12, 14, 0.88)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        }}
      >
        <div style={{
          maxWidth: '960px', margin: '0 auto',
          padding: '0 clamp(1.25rem, 5vw, 5rem)',
          height: 56,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{
              fontFamily: 'Outfit', fontWeight: 800, fontSize: '1rem',
              letterSpacing: '-0.02em', color: 'var(--color-text)',
              background: 'none', border: 'none', cursor: 'pointer',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-accent)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--color-text)'; }}
          >
            AV
          </button>

          {/* Desktop nav */}
          {!isMobile && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  style={{
                    fontSize: '0.82rem', fontWeight: 450, color: 'var(--color-muted)',
                    background: 'none', border: 'none', cursor: 'pointer',
                    letterSpacing: '0.02em', transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-text)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--color-muted)'; }}
                >
                  {link.label}
                </button>
              ))}

              {/* Contact CTA */}
              <button
                onClick={() => scrollTo('#contact')}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                  padding: '0.45rem 1rem',
                  background: 'transparent', color: 'var(--color-text)',
                  border: '1px solid var(--color-border-h)', borderRadius: '0.3rem',
                  fontSize: '0.8rem', fontWeight: 500, cursor: 'pointer',
                  letterSpacing: '0.02em', transition: 'border-color 0.2s, color 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-accent)';
                  e.currentTarget.style.color = 'var(--color-accent)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-border-h)';
                  e.currentTarget.style.color = 'var(--color-text)';
                }}
              >
                Contact ↗
              </button>
            </div>
          )}

          {/* Mobile hamburger */}
          {isMobile && (
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                display: 'flex', flexDirection: 'column', gap: 5, padding: '0.4rem',
              }}
            >
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                style={{ display: 'block', width: 20, height: 1.5, background: 'var(--color-text)', borderRadius: 1 }}
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                style={{ display: 'block', width: 20, height: 1.5, background: 'var(--color-text)', borderRadius: 1 }}
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                style={{ display: 'block', width: 20, height: 1.5, background: 'var(--color-text)', borderRadius: 1 }}
              />
            </button>
          )}
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed', inset: 0, zIndex: 40,
              background: 'rgba(12, 12, 14, 0.97)',
              backdropFilter: 'blur(24px)',
              display: 'flex', flexDirection: 'column',
              alignItems: 'flex-start', justifyContent: 'center',
              padding: '0 clamp(1.5rem, 7vw, 3rem)',
              gap: '1.75rem',
            }}
          >
            {[...navLinks, { label: 'Contact', href: '#contact' }].map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => scrollTo(link.href)}
                style={{
                  fontFamily: 'Outfit', fontWeight: 700,
                  fontSize: 'clamp(2rem, 8vw, 2.75rem)',
                  color: 'var(--color-muted)',
                  background: 'none', border: 'none', cursor: 'pointer',
                  letterSpacing: '-0.025em',
                  transition: 'color 0.2s',
                  textAlign: 'left',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-text)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--color-muted)'; }}
              >
                {link.label}
              </motion.button>
            ))}

            {/* Bottom social row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              style={{
                position: 'absolute', bottom: '2.5rem', left: 'clamp(1.5rem, 7vw, 3rem)',
                display: 'flex', gap: '1.5rem',
              }}
            >
              {[
                { label: 'Email', href: 'mailto:ashwinvk77@gmail.com' },
                { label: 'GitHub', href: 'https://github.com/ashvn24/' },
                { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ashwin-vk/' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '0.78rem', fontWeight: 500, letterSpacing: '0.06em',
                    textTransform: 'uppercase', color: 'var(--color-muted)',
                    textDecoration: 'none', transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-accent)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--color-muted)'; }}
                >
                  {s.label}
                </a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
