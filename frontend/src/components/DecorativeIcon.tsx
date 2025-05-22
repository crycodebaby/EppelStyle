import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface DecorativeIconProps {
  type: "scissors" | "comb" | "family" | "child";
  className?: string;
}

const DecorativeIcon = ({ type, className = "" }: DecorativeIconProps) => {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          entries[0].target.classList.add("animate-drawIcon");
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

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, type: "spring", stiffness: 100 },
    },
  };

  return (
    <motion.svg
      ref={ref}
      className={`decorative-icon ${className}`}
      viewBox="0 0 100 100"
      width="100"
      height="100"
      variants={iconVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      {type === "scissors" ? (
        <>
          <path
            d="M20 80 Q30 60 50 60 T80 80"
            stroke="#F4A261"
            strokeWidth="4"
            fill="none"
            strokeDasharray="1000"
            strokeDashoffset="1000"
          />
          <path
            d="M20 80 Q30 100 50 100 T80 80"
            stroke="#F4A261"
            strokeWidth="4"
            fill="none"
            strokeDasharray="1000"
            strokeDashoffset="1000"
          />
          <circle
            cx="35"
            cy="70"
            r="10"
            stroke="#4A7043"
            strokeWidth="4"
            fill="none"
            strokeDasharray="1000"
            strokeDashoffset="1000"
          />
          <circle
            cx="65"
            cy="70"
            r="10"
            stroke="#4A7043"
            strokeWidth="4"
            fill="none"
            strokeDasharray="1000"
            strokeDashoffset="1000"
          />
        </>
      ) : type === "comb" ? (
        <>
          <path
            d="M30 20 H70"
            stroke="#F4A261"
            strokeWidth="4"
            fill="none"
            strokeDasharray="1000"
            strokeDashoffset="1000"
          />
          <path
            d="M30 30 H70 M30 40 H70 M30 50 H70 M30 60 H70 M30 70 H70 M30 80 H70"
            stroke="#4A7043"
            strokeWidth="4"
            fill="none"
            strokeDasharray="1000"
            strokeDashoffset="1000"
          />
        </>
      ) : type === "family" ? (
        <>
          {/* Vater */}
          <circle
            cx="30"
            cy="30"
            r="15"
            fill="#F4A261"
            stroke="#4A7043"
            strokeWidth="4"
            strokeDasharray="1000"
            strokeDashoffset="1000"
          />
          <path
            d="M30 45 Q35 60 40 75"
            stroke="#4A7043"
            strokeWidth="4"
            fill="none"
            strokeDasharray="1000"
            strokeDashoffset="1000"
          />
          {/* Mutter */}
          <circle
            cx="70"
            cy="30"
            r="15"
            fill="#F4A261"
            stroke="#4A7043"
            strokeWidth="4"
            strokeDasharray="1000"
            strokeDashoffset="1000"
          />
          <path
            d="M70 45 Q75 60 80 75"
            stroke="#4A7043"
            strokeWidth="4"
            fill="none"
            strokeDasharray="1000"
            strokeDashoffset="1000"
          />
          {/* Kind */}
          <circle
            cx="50"
            cy="50"
            r="10"
            fill="#F4A261"
            stroke="#4A7043"
            strokeWidth="4"
            strokeDasharray="1000"
            strokeDashoffset="1000"
          />
          <path
            d="M50 60 Q52 70 55 80"
            stroke="#4A7043"
            strokeWidth="4"
            fill="none"
            strokeDasharray="1000"
            strokeDashoffset="1000"
          />
          {/* Lächeln */}
          <path
            d="M45 55 Q50 60 55 55"
            stroke="#4A7043"
            strokeWidth="4"
            fill="none"
            strokeDasharray="1000"
            strokeDashoffset="1000"
          />
        </>
      ) : (
        <>
          {/* Kind mit Haarschnitt */}
          <circle
            cx="50"
            cy="30"
            r="15"
            fill="#F4A261"
            stroke="#4A7043"
            strokeWidth="4"
            strokeDasharray="1000"
            strokeDashoffset="1000"
          />
          <path
            d="M50 45 Q55 60 60 75"
            stroke="#4A7043"
            strokeWidth="4"
            fill="none"
            strokeDasharray="1000"
            strokeDashoffset="1000"
          />
          <path
            d="M35 25 Q50 15 65 25"
            stroke="#4A7043"
            strokeWidth="4"
            fill="none"
            strokeDasharray="1000"
            strokeDashoffset="1000"
          />
          <path
            d="M45 35 Q50 40 55 35"
            stroke="#4A7043"
            strokeWidth="4"
            fill="none"
            strokeDasharray="1000"
            strokeDashoffset="1000"
          />
        </>
      )}
    </motion.svg>
  );
};

export default DecorativeIcon;
