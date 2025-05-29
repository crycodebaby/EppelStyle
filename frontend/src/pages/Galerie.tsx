import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero"; // Wiederverwendung der Hero-Komponente
import AnimatedButton from "../components/AnimatedButton"; // Für Sticky CTA
import Button from "../components/Button"; // Für Sticky CTA
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
// FadeInSection wird hier nicht direkt verwendet, da wir sectionVariants nutzen

const Galerie = () => {
  // WICHTIG: Ersetze diese Platzhalter durch DEINE ECHTEN BILDER!
  const images = [
    {
      src: "/images/eppelstyle_galerie_01.webp",
      alt: "Moderner Haarschnitt für Damen bei EppelStyle",
    },
    {
      src: "/images/eppelstyle_galerie_02.webp",
      alt: "Präziser Barber-Schnitt für Herren",
    },
    {
      src: "/images/eppelstyle_galerie_03.webp",
      alt: "Einladendes Ambiente im Salon EppelStyle",
    },
    {
      src: "/images/eppelstyle_galerie_04.webp",
      alt: "Kreative Farbtechnik für langes Haar",
    },
    {
      src: "/images/eppelstyle_galerie_05.webp",
      alt: "Kinderfreundlicher Haarschnitt bei EppelStyle",
    },
    {
      src: "/images/eppelstyle_galerie_06.webp",
      alt: "Detailansicht des stilvollen Salon-Interieurs",
    },
    {
      src: "/images/eppelstyle_galerie_07.webp",
      alt: "Balayage-Ergebnis bei EppelStyle",
    },
    {
      src: "/images/eppelstyle_galerie_08.webp",
      alt: "Zufriedener Kunde nach dem Haarschnitt",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // Für die Slider-Richtung

  const goToPrevious = useCallback(() => {
    setDirection(-1);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  }, [images.length]);

  const goToNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 7000); // Etwas längeres Intervall für bessere Betrachtung
    return () => clearInterval(interval);
  }, [goToNext]);

  // Varianten für die Hauptbild-Animation (Slide-Effekt)
  const imageSlideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] }, // Sanfte Ease-Kurve
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.4, ease: [0.33, 1, 0.68, 1] },
    }),
  };

  const sectionIntroVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // HIER WIRD itemVariants DEFINIERT (Fehlerbehebung)
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <>
      <Helmet>
        <title>Galerie – Einblicke in EppelStyle Friseur Eppelborn</title>
        <meta
          name="description"
          content="Werfen Sie einen Blick in unsere Galerie und entdecken Sie die Atmosphäre unseres modernen Friseursalons in Eppelborn sowie Beispiele unserer Arbeit für Damen, Herren und Kinder."
        />
        <meta
          name="keywords"
          content="Friseur Galerie Eppelborn, Salon Bilder, Haarschnitte Eppelborn, EppelStyle Fotos, Friseur Vorher Nachher"
        />
      </Helmet>

      <Hero
        title="Unsere Galerie"
        subtitle="Einblicke in unser Handwerk und die Wohlfühlatmosphäre unseres Salons."
        image="/images/eppelstyle_galerie_hero.webp" // NEUES, PASSENDES HERO-BILD FÜR GALERIE ERSETZEN
        ctaText="Termin für Ihren Look" // CTA bleibt relevant
        ctaLink="/kontakt"
      />

      <div className="py-10 snap-container bg-creme sm:py-16">
        {/* Sticky CTA Buttons */}
        <motion.div
          className="fixed z-50 flex flex-col space-y-3 bottom-5 right-5 sm:bottom-6 sm:right-6"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            delay: 0.5,
            type: "spring",
            stiffness: 100,
            damping: 12,
          }}
        >
          <AnimatedButton
            href="/kontakt"
            variant="primary"
            className="shadow-glow-coral min-h-[50px] px-4 text-base rounded-full"
          >
            Termin
          </AnimatedButton>
          <Button
            href="https://g.co/kgs/GDJvoGW"
            variant="secondary"
            className="shadow-card flex items-center justify-center space-x-2 min-h-[50px] px-4 rounded-full"
            ariaLabel="EppelStyle auf Google Maps finden"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 2.74 1.62 5.15 4 6.32V21h6v-5.68c2.38-1.17 4-3.58 4-6.32 0-3.87-3.13-7-7-7zm0 10c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
            </svg>
            <span className="hidden sm:inline">Karte</span>
          </Button>
        </motion.div>

        {/* Haupt-Galeriebereich */}
        <motion.section
          className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8 section-wrapper-base"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionIntroVariants} // sectionIntroVariants für die gesamte Sektion
        >
          {/* Die folgenden Elemente nutzen sectionIntroVariants für gestaffelte Animation,
              oder itemVariants, wenn sie separat animiert werden sollen.
              Hier ist sectionIntroVariants für die äußere Sektion gut,
              und die inneren Elemente können ihre eigenen Varianten haben oder die Vererbung nutzen.
              Ich belasse es bei sectionIntroVariants für die inneren Titel/Text für Einfachheit,
              da sie Teil des Intros sind.
          */}
          <motion.svg
            variants={sectionIntroVariants}
            className="h-10 mx-auto mb-5 w-36 sm:h-12 sm:w-40"
            viewBox="0 0 100 10"
          >
            <motion.path
              d="M0 5 Q25 -1.5 50 5 T100 5"
              className="hand-drawn-path stroke-accent-coral"
              initial={false}
            />
          </motion.svg>
          <motion.h2
            variants={sectionIntroVariants}
            className="mb-4 text-4xl font-bold text-center sm:text-5xl lg:text-5xl text-heading-charcoal"
          >
            Impressionen aus unserem Salon
          </motion.h2>
          <motion.p
            variants={sectionIntroVariants}
            className="max-w-2xl mx-auto mb-10 text-lg leading-relaxed text-center sm:text-xl text-charcoal font-body"
          >
            Entdecken Sie die Qualität unserer Arbeit und das einladende
            Ambiente, das Sie bei EppelStyle erwartet. Jedes Bild erzählt eine
            Geschichte von Stil, Präzision und zufriedenen Kunden.
          </motion.p>

          {/* Bild-Slider */}
          <div className="relative w-full max-w-3xl mx-auto mb-10 overflow-hidden shadow-xl rounded-xl aspect-w-16 aspect-h-10 sm:aspect-h-9 bg-coral-light/20">
            <AnimatePresence initial={false} custom={direction}>
              <motion.img
                key={currentIndex}
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                className="absolute inset-0 object-cover w-full h-full"
                loading="lazy"
                custom={direction}
                variants={imageSlideVariants}
                initial="enter"
                animate="center"
                exit="exit"
              />
            </AnimatePresence>

            <motion.button
              onClick={goToPrevious}
              className="absolute z-10 p-2 transform -translate-y-1/2 rounded-full shadow-md left-3 sm:left-4 top-1/2 bg-creme/70 hover:bg-creme text-charcoal focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-coral hover:shadow-lg"
              aria-label="Vorheriges Bild"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </motion.button>
            <motion.button
              onClick={goToNext}
              className="absolute z-10 p-2 transform -translate-y-1/2 rounded-full shadow-md right-3 sm:right-4 top-1/2 bg-creme/70 hover:bg-creme text-charcoal focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-coral hover:shadow-lg"
              aria-label="Nächstes Bild"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </motion.button>
            <div className="absolute z-10 flex space-x-2 transform -translate-x-1/2 bottom-4 left-1/2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-colors duration-300 ${
                    currentIndex === index
                      ? "bg-accent-coral"
                      : "bg-creme/60 hover:bg-creme"
                  }`}
                  aria-label={`Gehe zu Bild ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Thumbnail-Grid */}
          <motion.h3
            className="mt-16 mb-6 text-2xl font-semibold text-center sm:text-3xl text-heading-charcoal"
            variants={itemVariants} // Hier wird itemVariants verwendet
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            Weitere Einblicke
          </motion.h3>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 sm:gap-4">
            {images.map((image, index) => (
              <motion.div
                key={`thumb-${index}`}
                className={`relative overflow-hidden rounded-lg shadow-md cursor-pointer aspect-square group
                            ${currentIndex === index ? "ring-2 ring-accent-coral ring-offset-2 ring-offset-creme" : "hover:ring-2 hover:ring-accent-coral/50"}`}
                onClick={() => {
                  setDirection(
                    index > currentIndex ? 1 : index < currentIndex ? -1 : 0
                  );
                  setCurrentIndex(index);
                }}
                variants={itemVariants} // Hier wird itemVariants verwendet
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: "spring", stiffness: 250, damping: 10 }}
              >
                <img
                  src={image.src}
                  alt={`Vorschau: ${image.alt}`}
                  className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-black/20 group-hover:opacity-100"></div>
                {currentIndex === index && (
                  <div className="absolute top-1.5 right-1.5 p-1 rounded-full bg-accent-coral text-creme">
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </>
  );
};

export default Galerie;
