import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface AnimatedCounterProps {
  end: number;
  duration: number; // Dauer in Millisekunden
}

const AnimatedCounter = ({ end, duration }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const increment = end / (duration / 50);
    let currentCount = 0;

    const timer = setInterval(() => {
      currentCount += increment;
      if (currentCount >= end) {
        setCount(end);
        clearInterval(timer);
        triggerParticles();
      } else {
        setCount(Math.floor(currentCount));
      }
    }, 50);

    return () => clearInterval(timer);
  }, [isVisible, end, duration]);

  const triggerParticles = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = 100;
    canvas.height = 100;

    const particles: {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
    }[] = [];
    for (let i = 0; i < 15; i++) {
      particles.push({
        x: canvas.width / 2,
        y: canvas.height / 2,
        size: Math.random() * 3 + 1,
        speedX: Math.random() * 4 - 2,
        speedY: Math.random() * 4 - 2,
      });
    }

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
        ctx.fillStyle = "#F4A261";
        ctx.globalAlpha = particle.size / 3;
        ctx.fill();
      });

      if (particles.length > 0) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  };

  return (
    <motion.div
      ref={ref}
      className="relative inline-block"
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
    >
      <span className="text-primary">{count}</span>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />
    </motion.div>
  );
};

export default AnimatedCounter;
