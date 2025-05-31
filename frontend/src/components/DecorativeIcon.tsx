import { motion } from "framer-motion";

interface DecorativeIconProps {
  type: "scissors" | "comb" | "family" | "child";
  className?: string; // Erwartet z.B. "text-accent-coral w-14 h-14"
}

const DecorativeIcon = ({ type, className = "" }: DecorativeIconProps) => {
  const iconVariants = {
    hidden: { opacity: 0, scale: 0.7, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 130,
        damping: 12,
      },
    },
  };

  const strokeWidth = "5.5";

  return (
    <motion.svg
      className={`decorative-icon ${className}`}
      viewBox="0 0 100 100"
      variants={iconVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      whileHover={{ scale: 1.12, rotate: 6 }}
      transition={{ type: "spring", stiffness: 220, damping: 10 }}
      fill="none"
      stroke="currentColor" // Standard-Strichfarbe, wird von text-* Klasse beeinflusst
    >
      {type === "scissors" && (
        <>
          {/* Klingen - ohne individuelle Animation */}
          <motion.path
            d="M28 72 L50 50 M50 50 L28 28"
            strokeWidth={strokeWidth}
          />
          <motion.path
            d="M72 72 L50 50 M50 50 L72 28"
            strokeWidth={strokeWidth}
          />
          {/* Griffe - ohne individuelle Animation */}
          <motion.circle
            cx="22"
            cy="80"
            r="9"
            strokeWidth={strokeWidth}
            className="transition-colors stroke-accent-coral fill-creme group-hover:fill-coral-light"
          />
          <motion.circle
            cx="78"
            cy="80"
            r="9"
            strokeWidth={strokeWidth}
            className="transition-colors stroke-accent-coral fill-creme group-hover:fill-coral-light"
          />
        </>
      )}
      {type === "comb" && (
        <>
          {/* Rücken des Kamms - ohne individuelle Animation */}
          <motion.path d="M15 75 H85" strokeWidth={strokeWidth} />
          {/* Zinken des Kamms - ohne individuelle Animation */}
          {[20, 30, 40, 50, 60, 70, 80].map((xPos) => (
            <motion.line
              key={`tooth-${xPos}`}
              x1={xPos}
              y1="45"
              x2={xPos}
              y2="75"
              strokeWidth={strokeWidth}
            />
          ))}
        </>
      )}
      {type === "family" && (
        <>
          {/* Alle Elemente ohne individuelle Animation, nur geerbt vom motion.svg Parent */}
          <motion.circle cx="32" cy="38" r="11" className="fill-accent-coral" />
          <motion.path
            d="M32 49 Q32 65 23 80 M32 49 Q32 65 41 80"
            className="stroke-charcoal"
            strokeWidth={strokeWidth}
          />
          <motion.circle cx="68" cy="38" r="11" className="fill-accent-coral" />
          <motion.path
            d="M68 49 Q68 65 59 80 M68 49 Q68 65 77 80"
            className="stroke-charcoal"
            strokeWidth={strokeWidth}
          />
          <motion.circle
            cx="50"
            cy="58"
            r="8"
            className="stroke-accent-coral fill-coral-light"
            strokeWidth="3.5"
          />
          <motion.path
            d="M50 66 Q50 76 46 85 M50 66 Q50 76 54 85"
            className="stroke-charcoal"
            strokeWidth={(parseFloat(strokeWidth) - 1).toString()}
          />
        </>
      )}
      {type === "child" && (
        <>
          {/* Alle Elemente ohne individuelle Animation */}
          <motion.circle cx="50" cy="35" r="14" className="fill-accent-coral" />
          <motion.path
            d="M50 49 Q50 68 42 82 M50 49 Q50 68 58 82"
            className="stroke-charcoal"
            strokeWidth={strokeWidth}
          />
          <motion.path
            d="M38 28 Q50 18 62 28"
            className="stroke-charcoal"
            strokeWidth={strokeWidth}
            fill="none"
          />
        </>
      )}
    </motion.svg>
  );
};

export default DecorativeIcon;
