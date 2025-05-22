import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";
import AnimatedButton from "../components/AnimatedButton";
import Button from "../components/Button";
import { motion } from "framer-motion";
import FadeInSection from "../components/FadeInSection";

const Kontakt = () => {
  return (
    <>
      <Helmet>
        <title>Kontakt - EppelStyle Friseursalon</title>
        <meta
          name="description"
          content="Kontaktiere EppelStyle in Eppelborn für einen Termin oder Fragen zu unseren Dienstleistungen."
        />
        <meta
          name="keywords"
          content="Friseursalon, Kontakt, Eppelborn, Termin buchen, Saarland"
        />
      </Helmet>
      <Hero
        title="Kontakt"
        subtitle="Buche deinen Termin oder schreib uns"
        image="/images/salon4.webp"
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
          <div className="grid grid-cols-1 gap-8 px-4 mx-auto sm:gap-12 sm:px-6 lg:px-8 max-w-7xl lg:grid-cols-2 section-wrapper">
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
            {/* Kontaktdaten und Karte */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="p-6 sm:p-8 bg-highlight rounded-xl">
                <h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl font-heading text-heading">
                  Kontaktdaten
                </h2>
                <p className="mb-2 text-base sm:text-lg text-text font-body">
                  Kirchpl. 11, 66571 Eppelborn, Saarland
                </p>
                <p className="mb-2 text-base sm:text-lg text-text font-body">
                  Telefon:{" "}
                  <a
                    href="tel:068815951818"
                    className="text-primary hover:underline"
                  >
                    06881 5951818
                  </a>
                </p>
                <p className="text-base sm:text-lg text-text font-body">
                  E-Mail:{" "}
                  <a
                    href="mailto:info@eppelstyle.de"
                    className="text-primary hover:underline"
                  >
                    info@eppelstyle.de
                  </a>
                </p>
                <div className="mt-6">
                  <h3 className="mb-2 text-xl font-semibold sm:text-2xl font-heading text-heading">
                    Finde uns
                  </h3>
                  <iframe
                    className="w-full h-48 sm:h-64 rounded-xl"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2597.227985704093!2d6.965356315673535!3d49.40568597934629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4795b7a7e0b5b7b9%3A0x8f8d5b2e5c5d5e5e!2sKirchpl.%2011%2C%2066571%20Eppelborn%2C%20Germany!5e0!3m2!1sen!2sus!4v1698765432100!5m2!1sen!2sus"
                    frameBorder="0"
                    allowFullScreen
                    loading="lazy"
                    title="EppelStyle auf Google Maps"
                  ></iframe>
                </div>
                <div className="mt-6">
                  <h3 className="mb-2 text-xl font-semibold sm:text-2xl font-heading text-heading">
                    Öffnungszeiten
                  </h3>
                  <p className="text-base sm:text-lg text-text font-body">
                    Montag – Samstag: 09:00 – 19:00 Uhr
                  </p>
                </div>
                <div className="mt-6">
                  <h3 className="mb-2 text-xl font-semibold sm:text-2xl font-heading text-heading">
                    Terminvereinbarung
                  </h3>
                  <p className="text-base sm:text-lg text-text font-body">
                    Kommen Sie spontan vorbei – Wartezeiten sind möglich – oder
                    vereinbaren Sie einen Termin, um direkt bedient zu werden.
                  </p>
                </div>
                <div className="mt-6">
                  <h3 className="mb-2 text-xl font-semibold sm:text-2xl font-heading text-heading">
                    Während Ihres Besuchs
                  </h3>
                  <p className="text-base sm:text-lg text-text font-body">
                    Genießen Sie eine Auswahl an kostenlosen Getränken, während
                    Sie warten oder Ihre Haare geschnitten bekommen.
                  </p>
                </div>
              </div>
            </motion.div>
            {/* Formular */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <div className="p-6 sm:p-8 bg-highlight rounded-xl">
                <h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl font-heading text-heading">
                  Schreib uns
                </h2>
                <form
                  action="https://formspree.io/f/xdkgbgrq"
                  method="POST"
                  className="space-y-6"
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-1 text-base sm:text-lg text-text font-body"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full p-3 border rounded-xl bg-background border-primary/20 text-text font-body focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-1 text-base sm:text-lg text-text font-body"
                    >
                      E-Mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full p-3 border rounded-xl bg-background border-primary/20 text-text font-body focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block mb-1 text-base sm:text-lg text-text font-body"
                    >
                      Nachricht
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="w-full h-40 p-3 border rounded-xl bg-background border-primary/20 text-text font-body focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    ></textarea>
                  </div>
                  <AnimatedButton className="w-full text-center">
                    Senden
                  </AnimatedButton>
                </form>
              </div>
            </motion.div>
          </div>
        </FadeInSection>
      </div>
    </>
  );
};

export default Kontakt;
