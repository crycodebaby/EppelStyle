import { type ReactNode, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  href?: string;
}

const Button = ({
  children,
  onClick,
  className = "",
  type = "button",
  href,
}: ButtonProps) => {
  const Component = href ? "a" : "button";
  const props = href
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : { onClick, type };
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = 200;
    canvas.height = 60;

    const particles: {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
    }[] = [];
    let isClicked = false;

    const createParticles = () => {
      if (!isClicked) return;
      for (let i = 0; i < 15; i++) {
        particles.push({
          x: canvas.width / 2,
          y: canvas.height / 2,
          size: Math.random() * 3 + 1,
          speedX: Math.random() * 4 - 2,
          speedY: Math.random() * 4 - 2,
        });
      }
      isClicked = false;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle, index) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.size *= 0.95;

        if (particle.size < 0.1) {
          particles.splice(index, 1);
          return;
        }

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = "#FF5757";
        ctx.globalAlpha = particle.size / 3;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleClick = () => {
      isClicked = true;
      createParticles();
    };

    if (Component === "button") {
      canvas.parentElement?.addEventListener("click", handleClick);
    } else {
      canvas.parentElement?.addEventListener("click", handleClick);
    }

    return () => {
      canvas.parentElement?.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <motion.div
      className={`relative inline-block rounded-xl overflow-hidden group ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 120 }}
    >
      <Component
        {...props}
        className="relative z-10 px-6 py-3 text-base font-bold sm:px-8 sm:py-4 bg-text text-accent font-heading sm:text-lg focus:outline-none focus:ring-2 focus:ring-secondary"
      >
        <motion.span
          className="relative z-10"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          {children}
        </motion.span>
        <svg
          className="absolute inset-0 hand-drawn-button"
          viewBox="0 0 200 60"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M10 50 Q100 30 190 50"
            fill="none"
            stroke="#FF5757"
            strokeWidth="2"
            strokeDasharray="1000"
            strokeDashoffset="1000"
            animate={{ strokeDashoffset: [1000, 0] }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="group-hover:animate-drawIcon"
          />
        </svg>
        <motion.span
          className="absolute inset-0 bg-secondary/40 rounded-xl blur-md"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 0.7 }}
          transition={{ duration: 0.3 }}
        />
        <canvas
          ref={canvasRef}
          className="absolute inset-0 z-20 pointer-events-none"
        />
      </Component>
      <motion.span
        className="absolute inset-0 bg-secondary"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />
    </motion.div>
  );
};

export default Button;
