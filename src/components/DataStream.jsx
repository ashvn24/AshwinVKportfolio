import { useEffect, useRef } from 'react';

// Vertical data streams (matrix-lite) for section backgrounds
export default function DataStream({ opacity = 0.03 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animId;
    const chars = '01アイウエオカキクケコ∞∑∂λπ<>{}[]';
    const columns = [];
    const fontSize = 12;

    function resize() {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      const colCount = Math.floor(canvas.width / fontSize);
      columns.length = 0;
      for (let i = 0; i < colCount; i++) {
        columns.push({
          y: Math.random() * canvas.height,
          speed: 0.3 + Math.random() * 0.6,
          chars: [],
          nextChar: 0,
        });
      }
    }

    function draw() {
      ctx.fillStyle = 'rgba(3,7,18,0.12)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px 'JetBrains Mono', monospace`;

      columns.forEach((col, i) => {
        col.nextChar += col.speed;
        if (col.nextChar >= 1) {
          col.nextChar = 0;
          const char = chars[Math.floor(Math.random() * chars.length)];
          const x = i * fontSize;

          // Bright head
          ctx.fillStyle = `rgba(129,140,248,${0.5 + Math.random() * 0.3})`;
          ctx.fillText(char, x, col.y);

          // Trail
          for (let t = 1; t < 6; t++) {
            const trailAlpha = (0.3 - t * 0.05);
            if (trailAlpha > 0) {
              ctx.fillStyle = `rgba(99,102,241,${trailAlpha})`;
              const trailChar = chars[Math.floor(Math.random() * chars.length)];
              ctx.fillText(trailChar, x, col.y - t * fontSize);
            }
          }

          col.y += fontSize;
          if (col.y > canvas.height + 50) {
            col.y = -fontSize * 6;
          }
        }
      });

      animId = requestAnimationFrame(draw);
    }

    resize();
    draw();
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute', inset: 0,
        width: '100%', height: '100%',
        pointerEvents: 'none', zIndex: 0,
        opacity,
      }}
    />
  );
}
