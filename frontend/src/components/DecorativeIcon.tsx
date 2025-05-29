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

  const strokeWidth = "5.5"; // Etwas angepasste Strichstärke für gute Sichtbarkeit

  // Gemeinsame Props für Kind-Motion-Elemente, um Wiederholung zu vermeiden
  const childMotionProps = (delayIncrement = 0) => ({
    initial: {
      opacity: 0,
      pathLength: type === "scissors" || type === "comb" ? 0 : 1,
    }, // pathLength nur für Linien relevant
    animate: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 0.6,
        delay: 0.2 + delayIncrement,
        ease: "circOut",
      },
    },
  });

  return (
    <motion.svg
      className={`decorative-icon ${className}`} // Farbe wird über text-* Klasse von außen gesetzt
      viewBox="0 0 100 100"
      // width und height werden idealerweise durch Tailwind-Klassen (w-X, h-X) in className gesetzt
      variants={iconVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }} // amount leicht erhöht
      whileHover={{ scale: 1.12, rotate: 6 }}
      transition={{ type: "spring", stiffness: 220, damping: 10 }} // Etwas direktere Feder
      fill="none" // Standardmäßig kein Fill
      stroke="currentColor" // Standard-Strichfarbe, wird von text-* Klasse beeinflusst
    >
      {type === "scissors" && (
        <>
          {/* Klingen */}
          <motion.path
            d="M28 72 L50 50 M50 50 L28 28" // Leicht angepasste Scherenform
            strokeWidth={strokeWidth}
            {...childMotionProps(0)}
          />
          <motion.path
            d="M72 72 L50 50 M50 50 L72 28" // Leicht angepasste Scherenform
            strokeWidth={strokeWidth}
            {...childMotionProps(0.1)} // Leichter Delay für die zweite Klinge
          />
          {/* Griffe */}
          <motion.circle
            cx="22"
            cy="80"
            r="9"
            strokeWidth={strokeWidth}
            className="transition-colors stroke-accent-coral fill-creme group-hover:fill-coral-light"
            {...childMotionProps(0.2)}
          />
          <motion.circle
            cx="78"
            cy="80"
            r="9"
            strokeWidth={strokeWidth}
            className="transition-colors stroke-accent-coral fill-creme group-hover:fill-coral-light"
            {...childMotionProps(0.25)}
          />
        </>
      )}
      {type === "comb" && (
        <>
          {/* Rücken des Kamms */}
          <motion.path
            d="M15 75 H85"
            strokeWidth={strokeWidth}
            {...childMotionProps(0)}
          />
          {/* Zinken des Kamms - animiert von oben nach unten */}
          {[20, 30, 40, 50, 60, 70, 80].map((xPos, i) => (
            <motion.line
              key={`tooth-${xPos}`}
              x1={xPos}
              y1="45"
              x2={xPos}
              y2="75" // Zinken zeigen nach unten vom Rücken
              strokeWidth={strokeWidth}
              initial={{ y1: 75, opacity: 0 }} // Starten unten und unsichtbar
              animate={{
                y1: 45,
                opacity: 1,
                transition: {
                  duration: 0.3,
                  delay: 0.3 + i * 0.04,
                  ease: "easeOut",
                },
              }}
            />
          ))}
        </>
      )}
      {type === "family" && (
        <>
          {/* Person 1 (Elternteil) */}
          <motion.circle
            cx="32"
            cy="38"
            r="11"
            className="fill-accent-coral"
            {...childMotionProps(0)}
          />
          <motion.path
            d="M32 49 Q32 65 23 80 M32 49 Q32 65 41 80"
            className="stroke-charcoal"
            strokeWidth={strokeWidth}
            {...childMotionProps(0.05)}
          />
          {/* Person 2 (Elternteil) */}
          <motion.circle
            cx="68"
            cy="38"
            r="11"
            className="fill-accent-coral"
            {...childMotionProps(0.1)}
          />
          <motion.path
            d="M68 49 Q68 65 59 80 M68 49 Q68 65 77 80"
            className="stroke-charcoal"
            strokeWidth={strokeWidth}
            {...childMotionProps(0.15)}
          />
          {/* Kind (kleiner, mittig vorne) */}
          <motion.circle
            cx="50"
            cy="58"
            r="8"
            className="fill-coral-light stroke-accent-coral"
            strokeWidth="3.5"
            {...childMotionProps(0.2)}
          />
          <motion.path
            d="M50 66 Q50 76 46 85 M50 66 Q50 76 54 85"
            className="stroke-charcoal"
            strokeWidth={(parseFloat(strokeWidth) - 1).toString()}
            {...childMotionProps(0.25)}
          />
        </>
      )}
      {type === "child" && (
        <>
          <motion.circle
            cx="50"
            cy="35"
            r="14"
            className="fill-accent-coral"
            {...childMotionProps(0)}
          />
          <motion.path
            d="M50 49 Q50 68 42 82 M50 49 Q50 68 58 82"
            className="stroke-charcoal"
            strokeWidth={strokeWidth}
            {...childMotionProps(0.05)}
          />
          {/* Andeutung einer Kappe oder Haare */}
          <motion.path
            d="M38 28 Q50 18 62 28"
            className="stroke-charcoal"
            strokeWidth={strokeWidth}
            fill="none"
            {...childMotionProps(0.1)}
          />
        </>
      )}
    </motion.svg>
  );
};

export default DecorativeIcon;
