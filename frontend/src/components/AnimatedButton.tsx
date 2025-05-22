import { type ReactNode, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface AnimatedButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  /**
   * Design‑Variante:
   * primary   – Gradient & starker Schatten
   * secondary – Solider Button
   * ghost     – Transparenter Ring‑Button
   */
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}

/**
 * Verbesserter CTA‑Button (ersetzt deine bisherige **AnimatedButton.tsx**‑Datei)
 *  – Shine‑Sweep + Lift‑Hover
 *  – Particle‑Sparkles beim Klick
 *  – Vollständig Tailwind‑konfigurierbar
 */
const AnimatedButton = ({
  children,
  onClick,
  href,
  variant = "primary",
  className = "",
}: AnimatedButtonProps) => {
  // Schaltet automatisch zwischen <a> und <button> um
  const Component = href ? "a" : "button";
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Basisklassen
  const base =
    "relative inline-flex items-center justify-center overflow-hidden rounded-2xl px-6 py-3 sm:px-8 sm:py-4 font-heading font-bold tracking-tight focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 transition";

  // Varianten‑Mapping
  const variants: Record<
    NonNullable<AnimatedButtonProps["variant"]>,
    string
  > = {
    primary:
      "bg-gradient-to-br from-primary via-pink-500 to-secondary text-accent shadow-xl shadow-primary/40 hover:shadow-primary/60",
    secondary:
      "bg-text text-background shadow-lg shadow-secondary/30 hover:shadow-secondary/50",
    ghost:
      "bg-transparent text-text ring-1 ring-text/20 hover:bg-text/10 hover:ring-text/40",
  };

  // Partikel‑Sparkles beim Klick
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = 200;
    canvas.height = 60;

    interface Particle {
      x: number;
      y: number;
      size: number;
      vx: number;
      vy: number;
    }

    const particles: Particle[] = [];

    const addParticles = () => {
      for (let i = 0; i < 18; i++) {
        particles.push({
          x: canvas.width / 2,
          y: canvas.height / 2,
          size: Math.random() * 4 + 2,
          vx: Math.random() * 5 - 2.5,
          vy: Math.random() * 5 - 2.5,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p, idx) => {
        p.x += p.vx;
        p.y += p.vy;
        p.size *= 0.92;

        if (p.size < 0.1) {
          particles.splice(idx, 1);
          return;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = "#FF5757";
        ctx.globalAlpha = p.size / 4;
        ctx.fill();
      });
      requestAnimationFrame(animate);
    };
    animate();

    canvas.parentElement?.addEventListener("click", addParticles);
    return () =>
      canvas.parentElement?.removeEventListener("click", addParticles);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 170 }}
      className={`group ${className}`}
    >
      <Component
        {...(href
          ? { href, target: "_blank", rel: "noopener noreferrer" }
          : { onClick, type: "button" })}
        className={`${base} ${variants[variant]}`}
      >
        {/* Shine‑Sweep */}
        <motion.span
          aria-hidden
          className="absolute inset-0 before:absolute before:inset-y-0 before:w-1/3 before:bg-white/40 before:blur-lg before:rotate-12"
          initial={{ x: "-100%" }}
          whileHover={{ x: "200%" }}
          transition={{ duration: 1.2, ease: "linear" }}
        />

        {/* Label */}
        <span className="relative z-10">{children}</span>

        {/* Canvas für Partikel */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 z-20 pointer-events-none"
        />
      </Component>
    </motion.div>
  );
};

export default AnimatedButton;
