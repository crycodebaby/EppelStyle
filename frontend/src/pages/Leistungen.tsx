import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";
import FadeInSection from "../components/FadeInSection";
import AnimatedButton from "../components/AnimatedButton";
import Button from "../components/Button";
import { useState } from "react";
import { motion } from "framer-motion";

const Leistungen = () => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <>
      <Helmet>
        <title>Leistungen - EppelStyle Friseursalon</title>
        <meta
          name="description"
          content="Entdecke die Leistungen von EppelStyle: Barber-Spezialitäten und Familienhaarschnitte in modernem Ambiente."
        />
        <meta
          name="keywords"
          content="Barber, Familienhaarschnitte, Friseursalon, Eppelborn, Saarland"
        />
      </Helmet>
      <Hero
        title="Unsere Leistungen"
        subtitle="Erstklassige Haarschnitte und Styling in Eppelborn"
        image="/images/salon1.webp"
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
            <div className="grid grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-2">
              {/* Barber-Spezialitäten */}
              <motion.div
                className="relative overflow-hidden rounded-xl group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <img
                  src="/images/salon3.webp"
                  alt="Barber Dienst"
                  className="object-cover w-full h-48 sm:h-64 lg:h-72 rounded-xl"
                  loading="lazy"
                  srcSet={`${"/images/salon3.webp"} 1x, ${"/images/salon3-2x.webp"} 2x`}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 flex items-end p-4 sm:p-6 bg-gradient-to-t from-background/80 to-transparent">
                  <div>
                    <h3 className="mb-2 text-xl font-bold sm:text-2xl font-heading text-accent">
                      Barber-Spezialitäten
                    </h3>
                    <ul className="space-y-2 text-base sm:text-lg text-text font-body">
                      <li>Präzise Haarschnitte für Männer – ab 20€</li>
                      <li>Bartpflege und -styling</li>
                      <li>Modernes Styling mit hochwertigen Produkten</li>
                    </ul>
                  </div>
                </div>
                <div className="absolute inset-0 pointer-events-none">
                  <div className="polka-particle polka-particle-1"></div>
                  <div className="polka-particle polka-particle-2"></div>
                  <div className="polka-particle polka-particle-3"></div>
                </div>
              </motion.div>
              {/* Familienhaarschnitte */}
              <motion.div
                className="relative overflow-hidden rounded-xl group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              >
                <img
                  src="/images/salon4.webp"
                  alt="Familienhaarschnitt"
                  className="object-cover w-full h-48 sm:h-64 lg:h-72 rounded-xl"
                  loading="lazy"
                  srcSet={`${"/images/salon4.webp"} 1x, ${"/images/salon4-2x.webp"} 2x`}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 flex items-end p-4 sm:p-6 bg-gradient-to-t from-background/80 to-transparent">
                  <div>
                    <h3 className="mb-2 text-xl font-bold sm:text-2xl font-heading text-accent">
                      Familienhaarschnitte
                    </h3>
                    <ul className="space-y-2 text-base sm:text-lg text-text font-body">
                      <li>Haarschnitte für Kinder, Frauen und Männer</li>
                      <li>Individuelle Beratung für jeden Kunden</li>
                      <li>Entspannte Atmosphäre für die ganze Familie</li>
                    </ul>
                  </div>
                </div>
                <div className="absolute inset-0 pointer-events-none">
                  <div className="polka-particle polka-particle-1"></div>
                  <div className="polka-particle polka-particle-2"></div>
                  <div className="polka-particle polka-particle-3"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </FadeInSection>

        {/* Vorher-Nachher-Slider */}
        <FadeInSection>
          <div className="relative px-4 mx-auto mt-12 text-center sm:px-6 lg:px-8 sm:mt-16 max-w-7xl section-wrapper">
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
            <h2 className="mb-8 text-3xl font-bold sm:text-4xl lg:text-5xl font-heading text-heading">
              Vorher & Nachher
            </h2>
            <p className="max-w-3xl mx-auto mb-12 text-base sm:text-lg lg:text-xl text-text font-body">
              Sehen Sie den Unterschied, den ein professioneller Haarschnitt bei
              EppelStyle machen kann.
            </p>
            <div className="relative w-full h-[300px] sm:h-[400px] rounded-xl overflow-hidden">
              <img
                src="/images/before-haircut.jpg"
                alt="Vorher"
                className="absolute object-cover w-full h-full"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                loading="lazy"
                srcSet={`${"/images/before-haircut.jpg"} 1x, ${"/images/before-haircut-2x.jpg"} 2x`}
                sizes="(max-width: 640px) 100vw, 50vw"
              />
              <img
                src="/images/after-haircut.jpg"
                alt="Nachher"
                className="absolute object-cover w-full h-full"
                style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
                loading="lazy"
                srcSet={`${"/images/after-haircut.jpg"} 1x, ${"/images/after-haircut-2x.jpg"} 2x`}
                sizes="(max-width: 640px) 100vw, 50vw"
              />
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={handleSliderChange}
                className="absolute left-0 w-full h-1 transform -translate-y-1/2 rounded-full appearance-none cursor-pointer top-1/2 bg-primary"
                style={{
                  background: `linear-gradient(to right, #FF5757 ${sliderPosition}%, #1A1A1A ${sliderPosition}%)`,
                }}
                aria-label="Vorher-Nachher-Slider"
              />
              <div
                className="absolute top-0 w-1 h-full bg-primary"
                style={{
                  left: `${sliderPosition}%`,
                  transform: "translateX(-50%)",
                }}
              >
                <div className="absolute flex items-center justify-center w-6 h-6 transform -translate-y-1/2 rounded-full sm:w-8 sm:h-8 top-1/2 bg-primary">
                  <svg
                    className="w-4 h-4 text-accent"
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
                  <svg
                    className="w-4 h-4 text-accent"
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
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </>
  );
};

export default Leistungen;
