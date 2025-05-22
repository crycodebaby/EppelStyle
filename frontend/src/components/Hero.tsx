import { type ReactNode, useEffect, useRef } from "react";
import AnimatedButton from "./AnimatedButton";
import { motion } from "framer-motion";

interface HeroProps {
  title: string;
  subtitle: string;
  image: string;
  ctaText?: string;
  ctaLink?: string;
}

const Hero = ({ title, subtitle, image, ctaText, ctaLink }: HeroProps) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (imgRef.current && overlayRef.current) {
        const scrollPosition = window.scrollY;
        imgRef.current.style.transform = `translateY(${scrollPosition * 0.3}px)`;
        overlayRef.current.style.transform = `translateY(${scrollPosition * 0.1}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      <img
        ref={imgRef}
        src={image}
        alt="Hero Background"
        className="absolute top-0 left-0 z-0 w-full h-[120%] object-cover"
      />
      <motion.div
        ref={overlayRef}
        className="absolute inset-0 z-10 bg-gradient-to-br from-background/90 via-transparent to-primary/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="flex items-center justify-center h-full px-4 text-center">
          <div>
            <motion.h1
              className="mb-4 text-5xl font-bold tracking-wide sm:text-7xl font-heading text-heading"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {title}
            </motion.h1>
            <motion.p
              className="mb-8 text-xl sm:text-3xl font-body text-text"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {subtitle}
            </motion.p>
            {ctaText && ctaLink && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <AnimatedButton href={ctaLink}>{ctaText}</AnimatedButton>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
      <div className="absolute inset-0 z-20 pointer-events-none">
        <motion.div
          className="shape shape-blob shape-blob-1"
          style={{ top: "10%", left: "15%" }}
          animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0], x: [0, 10, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="shape shape-blob shape-blob-2"
          style={{ top: "60%", left: "80%" }}
          animate={{ scale: [1, 1.05, 1], rotate: [0, -5, 0], x: [0, -10, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
};

export default Hero;
