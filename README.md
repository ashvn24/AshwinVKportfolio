# Ashwin — Premium Portfolio Website

A cinematic, scroll-parallax React portfolio website built with modern web technologies.

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4-38B2AC?style=flat-square&logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-Animation-FF0055?style=flat-square)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=flat-square&logo=vite)

## ✨ Features

- **Multi-layer parallax scrolling** — background, midground, and foreground move at different speeds
- **Smooth inertia scrolling** — powered by Lenis for buttery scroll experience
- **Animated typing effect** — rotating role titles in the hero section
- **Scroll-triggered reveals** — sections animate into view using Framer Motion
- **Glassmorphism cards** — frosted glass aesthetic throughout
- **Hover micro-interactions** — glow effects on tech badges and project cards
- **Animated timeline** — scroll-driven line drawing for experience section
- **Floating label form** — animated contact form inputs
- **Scroll progress bar** — gradient indicator at the top
- **Custom animated cursor** — follows mouse with spring physics (desktop)
- **Floating background shapes** — ambient gradient blobs
- **Noise texture overlay** — subtle grain for premium feel
- **Dark theme** — carefully crafted dark color palette
- **Fully responsive** — mobile-first design

## 🛠 Tech Stack

| Technology | Purpose |
|-----------|---------|
| React 19 | UI Framework |
| Vite 7 | Build Tool |
| TailwindCSS v4 | Styling |
| Framer Motion | Animations & Parallax |
| Lenis | Smooth Scrolling |

## 📂 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── AnimatedCursor.jsx
│   ├── FloatingShapes.jsx
│   ├── Navbar.jsx
│   ├── ParallaxLayer.jsx
│   ├── ScrollProgress.jsx
│   └── SectionWrapper.jsx
├── sections/            # Page sections
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── TechStack.jsx
│   ├── Projects.jsx
│   ├── Experience.jsx
│   └── Contact.jsx
├── hooks/               # Custom React hooks
│   └── useScrollProgress.js
├── animations/          # Motion variants
│   └── variants.js
├── App.jsx              # Root component
├── main.jsx             # Entry point
└── tailwind.css         # TailwindCSS + custom styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm 9+

### Installation

```bash
# Clone the repo
git clone <your-repo-url>
cd portfolio

# Install dependencies
npm install

# Start dev server
npm run dev
```

The site will be available at `http://localhost:5173`

### Production Build

```bash
npm run build
npm run preview
```

## 📦 Sections

1. **Hero** — Full-screen parallax landing with typing animation
2. **About** — Bio, highlights, animated stats counters
3. **Tech Stack** — Categorized grid with hover glow effects
4. **Projects** — Parallax scroll cards with glassmorphism
5. **Experience** — Animated vertical timeline
6. **Contact** — Floating label form + social links

## 🎨 Customization

- **Colors**: Edit the `@theme` block in `src/tailwind.css`
- **Content**: Edit the data arrays in each section file
- **Animations**: Tweak variants in `src/animations/variants.js`
- **Fonts**: Change Google Fonts in `index.html` and `src/tailwind.css`

## 📄 License

MIT
