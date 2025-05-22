import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";
import AnimatedButton from "../components/AnimatedButton";
import Button from "../components/Button";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import FadeInSection from "../components/FadeInSection";

const Galerie = () => {
  const images = [
    { src: "/images/salon1.webp", alt: "Salon Innenraum 1" },
    { src: "/images/salon2.webp", alt: "Salon Innenraum 2" },
    { src: "/images/salon3.webp", alt: "Salon Innenraum 3" },
    { src: "/images/salon4.webp", alt: "Salon Innenraum 4" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <>
      <Helmet>
        <title>Galerie - EppelStyle Friseursalon</title>
        <meta
          name="description"
          content="Schau dir die Bilder unseres modernen Friseursalons mit LED-Innenraumgestaltung an."
        />
        <meta
          name="keywords"
          content="Friseursalon, Galerie, Eppelborn, modernes Design, Saarland"
        />
      </Helmet>
      <Hero
        title="Galerie"
        subtitle="Ein Blick in unseren stilvollen Salon"
        image="/images/salon2.webp"
      />
      <div className="relative py-8 sm:py-12 lg:py-16 bg-background">
        {/* Sticky CTA Buttons */}
        <motion.div
          className="fixed z-50 flex flex-col space-y-2 bottom-4 sm:bottom-6 lg:bottom-8 right-4 sm:right-6 lg:right-8 sm:space-y-3"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 120 }}
        >
          <AnimatedButton href="/kontakt" className="shadow-glow">
            Termin buchen
          </AnimatedButton>
          <Button
            href="https://maps.app.goo.gl/jazXmeA7Mt5oTx2k6"
            className="flex items-center justify-center space-x-2 shadow-glow"
            aria-label="Finde uns auf Google Maps"
          >
            <svg
              className="w-4 h-4 fill-current sm:w-5 sm:h-5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 2.74 1.62 5.15 4 6.32V21h6v-5.68c2.38-1.17 4-3.58 4-6.32 0-3.87-3.13-7-7-7zm0 10c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
            </svg>
            <span>Finde uns!</span>
          </Button>
        </motion.div>

        <FadeInSection>
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl section-wrapper">
            <svg
              className="hand-drawn-line z-[-1] opacity-60"
              viewBox="0 0 800 600"
            >
              <path
                d="M0 50 Q400 30 800 50"
                stroke="#FF5757"
                strokeWidth="2"
                fill="none"
              />
            </svg>
            <div className="relative">
              <div className="overflow-hidden rounded-xl">
                <motion.img
                  src={images[currentIndex].src}
                  alt={images[currentIndex].alt}
                  className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
                  loading="lazy"
                  variants={imageVariants}
                  initial="hidden"
                  animate="visible"
                  key={currentIndex}
                />
                <div className="absolute inset-0 pointer-events-none">
                  <div className="polka-particle polka-particle-1"></div>
                  <div className="polka-particle polka-particle-2"></div>
                  <div className="polka-particle polka-particle-3"></div>
                </div>
              </div>
              <motion.button
                onClick={goToPrevious}
                className="absolute p-2 transition-colors duration-300 transform -translate-y-1/2 rounded-full sm:p-3 left-4 top-1/2 bg-primary/50 hover:bg-primary/80 text-accent focus:outline-none focus:ring-2 focus:ring-secondary"
                aria-label="Vorheriges Bild"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200 }}
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
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </motion.button>
              <motion.button
                onClick={goToNext}
                className="absolute p-2 transition-colors duration-300 transform -translate-y-1/2 rounded-full sm:p-3 right-4 top-1/2 bg-primary/50 hover:bg-primary/80 text-accent focus:outline-none focus:ring-2 focus:ring-secondary"
                aria-label="Nächstes Bild"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200 }}
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
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </motion.button>
            </div>
            <div className="grid grid-cols-1 gap-6 mt-8 sm:gap-8 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  className="relative group bg-highlight rounded-xl"
                  variants={imageVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="object-cover w-full h-48 sm:h-64 rounded-xl"
                    loading="lazy"
                    onClick={() => setCurrentIndex(index)}
                    srcSet={`${image.src} 1x, ${image.src.replace(".webp", "-2x.webp")} 2x`}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="polka-particle polka-particle-1"></div>
                    <div className="polka-particle polka-particle-2"></div>
                    <div className="polka-particle polka-particle-3"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeInSection>
      </div>
    </>
  );
};

export default Galerie;
