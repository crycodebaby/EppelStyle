import { motion } from "framer-motion";
import AnimatedButton from "./AnimatedButton"; // Importiere deinen AnimatedButton

export interface HeroProps {
  title: string;
  subtitle: string;
  image: string; // Pfad zum Hintergrundbild
  ctaText: string;
  ctaLink: string;
  logoSrc?: string; // Optional: Pfad zum Logo, das im Hero angezeigt werden soll
}

const Hero = ({
  title,
  subtitle,
  image,
  ctaText,
  ctaLink,
  logoSrc,
}: HeroProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        staggerChildren: 0.2, // Kinder animieren nacheinander
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <motion.section
      className="relative flex items-center justify-center w-full min-h-[70vh] sm:min-h-[80vh] lg:min-h-screen text-center text-creme overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Hintergrundbild mit Overlay */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }} // Sanfte Ease-Kurve für das Bild
      >
        <img
          src={image}
          alt="Salon EppelStyle Atmosphäre" // Aussagekräftiger Alt-Text
          className="object-cover w-full h-full"
        />
        {/* Dunkles Overlay für bessere Lesbarkeit des Textes */}
        <div className="absolute inset-0 bg-charcoal/50 sm:bg-charcoal/40"></div>
      </motion.div>

      {/* Inhalt des Hero-Bereichs */}
      <motion.div
        className="relative z-10 flex flex-col items-center p-4"
        variants={containerVariants} // Nutzt dieselben Varianten für gestaffelte Kinder
      >
        {logoSrc && (
          <motion.img
            src={logoSrc}
            alt={`${title} Logo`}
            className="h-16 mb-4 sm:h-20 lg:h-24 opacity-90" // Größe und Opazität anpassen
            variants={itemVariants}
          />
        )}

        <motion.h1
          className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl font-heading"
          variants={itemVariants}
        >
          {title}
        </motion.h1>

        <motion.p
          className="max-w-xl mt-3 text-lg sm:text-xl md:text-2xl font-body text-creme/90"
          variants={itemVariants}
        >
          {subtitle}
        </motion.p>

        <motion.div variants={itemVariants} className="mt-8 sm:mt-10">
          <AnimatedButton
            href={ctaLink}
            variant="primary" // Nutzt den primären Stil des AnimatedButton
            className="px-8 py-3.5 text-base sm:text-lg rounded-lg shadow-glow-coral" // Zusätzliche Klassen für Größe etc.
            // Die internen Styles von AnimatedButton (Farbe, Hover) werden von der variant="primary" kommen
          >
            {ctaText}
          </AnimatedButton>
        </motion.div>
      </motion.div>

      {/* Optional: Subtile Pfeil-nach-unten-Andeutung oder Scroll-Indikator */}
      <motion.div
        className="absolute z-10 bottom-8 sm:bottom-10"
        variants={itemVariants}
        initial={{ opacity: 0, y: 10 }}
        animate={{
          opacity: 0.7,
          y: 0,
          transition: { delay: 1.2, duration: 0.8 },
        }}
        whileHover={{ scale: 1.1, opacity: 1 }}
      >
        <svg
          className="w-6 h-6 animate-bounce sm:w-8 sm:h-8 text-creme/80"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
