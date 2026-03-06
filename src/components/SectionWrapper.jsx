import { motion } from 'framer-motion';

export default function SectionWrapper({ children, id, className = '' }) {
  return (
    <section
      id={id}
      className={`relative w-full ${className}`}
      style={{
        paddingTop: '8rem',
        paddingBottom: '8rem',
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 0.8 }}
      >
        <div
          style={{
            maxWidth: '960px',
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingLeft: 'clamp(1.5rem, 5vw, 5rem)',
            paddingRight: 'clamp(1.5rem, 5vw, 5rem)',
          }}
        >
          {children}
        </div>
      </motion.div>
    </section>
  );
}
