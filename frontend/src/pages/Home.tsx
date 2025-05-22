import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";
import AnimatedButton from "../components/AnimatedButton";
import { motion } from "framer-motion";
import { useState } from "react";
import AnimatedCounter from "../components/AnimatedCounter";
import DecorativeIcon from "../components/DecorativeIcon";

const PriceCategory = ({
  category,
  items,
  isActive,
  onClick,
}: {
  category: string;
  items: { name: string; price: string }[];
  isActive: boolean;
  onClick: () => void;
}) => (
  <>
    <button
      onClick={onClick}
      className={`px-3 py-2 sm:px-4 sm:py-2 rounded-xl font-heading font-semibold transition-colors duration-300 ${
        isActive
          ? "bg-primary text-accent"
          : "bg-highlight text-text hover:bg-highlight/90"
      }`}
    >
      {category}
    </button>
    {isActive && (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl p-4 mx-auto sm:p-6 bg-highlight rounded-xl"
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-2 border-b border-text/20 last:border-0"
            >
              <span className="text-sm sm:text-base text-text font-body">
                {item.name}
              </span>
              <span className="text-sm font-semibold sm:text-base text-text font-heading">
                {item.price}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    )}
  </>
);

const Home = () => {
  const [activeCategory, setActiveCategory] = useState("Haarschnitte");

  const priceCategories = {
    Haarschnitte: [
      { name: "Kinderschnitt", price: "Ab 15€" },
      { name: "Männerschnitt", price: "Ab 20€" },
      { name: "Damenschnitt", price: "Ab 30€" },
    ],
    Haarfärbungen: [
      { name: "Ansatzfärbung", price: "Ab 40€" },
      { name: "Komplette Färbung", price: "Ab 60€" },
    ],
    Dauerwellen: [
      { name: "Volumenwelle", price: "Ab 50€" },
      { name: "Dauerwelle", price: "Ab 70€" },
    ],
    Haarglättungen: [{ name: "Keratin-Glättung", price: "Ab 80€" }],
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, type: "spring", stiffness: 100 },
    },
  };

  return (
    <>
      <Helmet>
        <title>
          EppelStyle - Familienfreundlicher Friseursalon in Eppelborn
        </title>
        <meta
          name="description"
          content="Willkommen bei EppelStyle, deinem familienfreundlichen Friseursalon in Eppelborn. Kinderhaarschnitte ab 15€ in einem warmen, einladenden Ambiente."
        />
        <meta
          name="keywords"
          content="Friseursalon, Eppelborn, Familienfreundlich, Kinderhaarschnitte, moderner Friseur, Saarland, Haarschnitte ab 15€"
        />
      </Helmet>
      <Hero
        title="EppelStyle"
        subtitle="Familienfreundliche Haarschnitte in Eppelborn, Saarland"
        image="/images/family-hero.webp"
        ctaText="Jetzt Termin buchen"
        ctaLink="/kontakt"
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
          <AnimatedButton
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
          </AnimatedButton>
        </motion.div>

        {/* Willkommen Sektion */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative px-4 mx-auto text-center sm:px-6 lg:px-8 max-w-7xl section-wrapper"
        >
          <div className="shape-background">
            <motion.span
              className="shape shape-blob shape-blob-1"
              animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <svg
            className="hand-drawn-line z-[-1] opacity-60"
            viewBox="0 0 800 600"
          >
            <path
              d="M0 50 Q400 30 800 50"
              stroke="#F4A261"
              strokeWidth="2"
              fill="none"
            />
          </svg>
          <h2 className="mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl font-heading text-heading">
            Willkommen bei EppelStyle
          </h2>
          <p className="max-w-3xl mx-auto mb-12 text-sm sm:text-base lg:text-lg text-text font-body">
            Dein familienfreundlicher Friseursalon in Eppelborn – wir bieten
            hochwertige Haarschnitte für Groß und Klein in einem warmen,
            einladenden Ambiente.
          </p>
        </motion.section>

        {/* Über EppelStyle */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative px-4 mx-auto mt-12 text-center sm:px-6 lg:px-8 sm:mt-16 max-w-7xl section-wrapper"
        >
          <div className="shape-background">
            <motion.span
              className="shape shape-blob shape-blob-3"
              animate={{ scale: [1, 1.08, 1], rotate: [0, 3, 0] }}
              transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <h2 className="mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl font-heading text-heading">
            Über EppelStyle
          </h2>
          <p className="max-w-3xl mx-auto mb-8 text-sm sm:text-base lg:text-lg text-text font-body">
            Am Kirchplatz 11 in Eppelborn hat Inhaber Kesra Ibrahim,
            Friseurmeister mit langjähriger Erfahrung, den familienfreundlichen
            Friseursalon „EppelStyle“ eröffnet. Besonders stolz sind wir auf
            unsere kinderfreundlichen Services, die Spaß und Komfort für die
            ganze Familie bieten.
          </p>
          <p className="max-w-3xl mx-auto mb-8 text-sm sm:text-base lg:text-lg text-text font-body">
            „EppelStyle ist eine Bereicherung für Familien in unserer Gemeinde“,
            so Bürgermeister Andreas Feld bei seinem Besuch im Salon.
          </p>
        </motion.section>

        {/* Statistiken-Sektion: Unsere Erfolge */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative px-4 mx-auto mt-12 text-center sm:px-6 lg:px-8 sm:mt-16 max-w-7xl section-wrapper"
        >
          <div className="shape-background">
            <motion.span
              className="shape shape-blob shape-blob-1"
              animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <svg
            className="hand-drawn-line z-[-1] opacity-60"
            viewBox="0 0 800 600"
          >
            <path
              d="M0 50 Q400 30 800 50"
              stroke="#F4A261"
              strokeWidth="2"
              fill="none"
            />
          </svg>
          <h2 className="mb-8 text-3xl font-bold sm:text-4xl lg:text-5xl font-heading text-heading">
            Unsere Erfolge
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { end: 2, text: "Monate Leidenschaft", icon: "scissors" },
              { end: 112, text: "Zufriedene Kunden", icon: "family" },
              { end: 48, text: "Kinderhaarschnitte pro Monat", icon: "child" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="relative p-4 sm:p-6 bg-highlight rounded-xl group"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.15)",
                }}
                transition={{
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100,
                }}
              >
                <DecorativeIcon
                  type={stat.icon as "scissors" | "family" | "child"}
                  className="absolute w-10 h-10 sm:w-12 sm:h-12 -top-4 -left-4 sm:-top-6 sm:-left-6 opacity-40"
                />
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.2 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg className="hand-drawn-line z-[-1]" viewBox="0 0 100 100">
                    <path
                      d="M10 90 Q50 80 90 90"
                      stroke="#F4A261"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray="1000"
                      strokeDashoffset="1000"
                      className="group-hover:animate-drawIcon"
                    />
                  </svg>
                </motion.div>
                <h3 className="mb-2 text-4xl font-bold sm:text-5xl font-heading text-primary">
                  <AnimatedCounter end={stat.end} duration={2000} />+
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-text font-body">
                  {stat.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Leistungen Vorschau */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative grid grid-cols-1 gap-8 px-4 mx-auto mt-12 sm:gap-12 sm:px-6 lg:px-8 sm:mt-16 max-w-7xl md:grid-cols-2 section-wrapper"
        >
          <div className="shape-background">
            <motion.span
              className="shape shape-blob shape-blob-2"
              animate={{ scale: [1, 1.05, 1], rotate: [0, -5, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          {[
            {
              img: "/images/kinderhaarschnitt.webp",
              title: "Kinderhaarschnitte",
              text: "Spaßige und präzise Haarschnitte für Kinder – ab 15€.",
            },
            {
              img: "/images/familienhaarschnitt.webp",
              title: "Familienhaarschnitte",
              text: "Stilvolle Haarschnitte für die ganze Familie.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-xl"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <img
                src={item.img}
                alt={item.title}
                className="object-cover w-full h-48 sm:h-64 rounded-xl"
                loading="lazy"
                srcSet={`${item.img} 1x, ${item.img.replace(".webp", "-2x.webp")} 2x`}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <motion.div
                className="absolute inset-0 flex items-end p-4 sm:p-6 bg-gradient-to-t from-background/70 to-transparent"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
              >
                <div>
                  <h3 className="mb-2 text-xl font-bold sm:text-2xl font-heading text-accent">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-text font-body">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.section>

        {/* Dienstleistungen */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative px-4 mx-auto mt-12 text-center sm:px-6 lg:px-8 sm:mt-16 max-w-7xl section-wrapper"
        >
          <div className="shape-background">
            <motion.span
              className="shape shape-blob shape-blob-3"
              animate={{ scale: [1, 1.08, 1], rotate: [0, 3, 0] }}
              transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <svg
            className="hand-drawn-line z-[-1] opacity-60"
            viewBox="0 0 800 600"
          >
            <path
              d="M0 50 Q400 30 800 50"
              stroke="#F4A261"
              strokeWidth="2"
              fill="none"
            />
          </svg>
          <h2 className="mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl font-heading text-heading">
            Unsere Dienstleistungen
          </h2>
          <p className="max-w-3xl mx-auto mb-12 text-sm sm:text-base lg:text-lg text-text font-body">
            Als Meisterbetrieb bieten wir klassische und moderne Haarschnitte,
            speziell auch für Kinder, in einem einladenden Ambiente.
          </p>
          <div className="grid max-w-5xl grid-cols-1 gap-6 mx-auto sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Kinderhaarschnitte",
                text: "Spaßige Schnitte, die Kinder lieben, in entspannter Atmosphäre.",
              },
              {
                title: "Haarschnitte & Styling",
                text: "Individuelle Schnitte und Frisuren für jeden Anlass.",
              },
              {
                title: "Haarfärbungen",
                text: "Von Ansatzfärbungen bis hin zu kompletten Farbveränderungen.",
              },
              {
                title: "Dauerwellen",
                text: "Für voluminöse und langanhaltende Locken.",
              },
              {
                title: "Haarglättungen",
                text: "Professionelle Glättung für seidiges und glattes Haar.",
              },
              {
                title: "Kostenlose Getränke",
                text: "Genießen Sie eine Auswahl an Getränken während Ihres Besuchs.",
                tooltip:
                  "Wasser, Saft, Kaffee, Tee – kostenlos für Groß und Klein.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                className="p-4 sm:p-6 bg-highlight rounded-xl group"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
                }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <h3 className="mb-2 text-xl font-semibold sm:text-2xl font-heading text-text">
                  {service.title}
                </h3>
                <p className="relative text-sm sm:text-base text-text font-body">
                  {service.text}
                  {service.tooltip && (
                    <span className="absolute hidden w-48 p-2 mb-2 text-xs transform -translate-x-1/2 rounded-lg shadow-lg sm:text-sm bottom-full left-1/2 group-hover:block bg-primary text-accent font-body">
                      {service.tooltip}
                    </span>
                  )}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Preistabelle */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative px-4 mx-auto mt-12 text-center sm:px-6 lg:px-8 sm:mt-16 max-w-7xl section-wrapper"
        >
          <div className="shape-background">
            <motion.span
              className="shape shape-blob shape-blob-1"
              animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <h2 className="mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl font-heading text-heading">
            Unsere Preise
          </h2>
          <p className="max-w-3xl mx-auto mb-12 text-sm sm:text-base lg:text-lg text-text font-body">
            Qualität zum besten Preis – besonders familienfreundlich.
          </p>
          <div className="flex flex-wrap justify-center mb-8 space-x-2 sm:space-x-4">
            {Object.entries(priceCategories).map(([category, items]) => (
              <PriceCategory
                key={category}
                category={category}
                items={items}
                isActive={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              />
            ))}
          </div>
        </motion.section>

        {/* Öffnungszeiten und Terminvereinbarung */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative px-4 mx-auto mt-12 text-center sm:px-6 lg:px-8 sm:mt-16 max-w-7xl section-wrapper"
        >
          <div className="shape-background">
            <motion.span
              className="shape shape-blob shape-blob-2"
              animate={{ scale: [1, 1.05, 1], rotate: [0, -5, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <h2 className="mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl font-heading text-heading">
            Öffnungszeiten & Terminvereinbarung
          </h2>
          <p className="max-w-3xl mx-auto mb-8 text-sm sm:text-base lg:text-lg text-text font-body">
            Wir sind montags bis samstags von 09:00 bis 19:00 Uhr für Sie da.
            Kinder sind bei uns herzlich willkommen – vereinbaren Sie einen
            Termin für die ganze Familie!
          </p>
          <div className="grid max-w-4xl grid-cols-1 gap-6 mx-auto sm:gap-8 sm:grid-cols-2">
            {[
              {
                title: "Öffnungszeiten",
                text: "Montag – Samstag: 09:00 – 19:00 Uhr",
              },
              {
                title: "Terminvereinbarung",
                text: (
                  <>
                    Telefon:{" "}
                    <a
                      href="tel:068815951818"
                      className="text-primary hover:underline"
                    >
                      06881 5951818
                    </a>
                  </>
                ),
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-4 sm:p-6 bg-highlight rounded-xl"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
                }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <h3 className="mb-2 text-xl font-semibold sm:text-2xl font-heading text-text">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-text font-body">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Bewertungen */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative px-4 mx-auto mt-12 sm:px-6 lg:px-8 sm:mt-16 max-w-7xl section-wrapper"
        >
          <div className="shape-background">
            <motion.span
              className="shape shape-blob shape-blob-3"
              animate={{ scale: [1, 1.08, 1], rotate: [0, 3, 0] }}
              transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <h2 className="mb-8 text-3xl font-bold text-center sm:text-4xl lg:text-5xl font-heading text-heading">
            Was unsere Kunden sagen
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                quote: "Ein wunderbarer Salon für die ganze Familie!",
                author: "Anna M.",
              },
              {
                quote: "Meine Kinder fühlen sich hier super wohl!",
                author: "Markus S.",
              },
              {
                quote: "Sehr kinderfreundlich und tolle Atmosphäre.",
                author: "Lisa K.",
              },
            ].map((review, index) => (
              <motion.div
                key={index}
                className="p-4 sm:p-6 bg-highlight rounded-xl"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
                }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 fill-current sm:w-5 sm:h-5 text-secondary"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="mb-4 text-sm italic sm:text-base text-text font-body">
                  "{review.quote}"
                </p>
                <p className="text-sm font-semibold sm:text-base text-text font-heading">
                  – {review.author}
                </p>
              </motion.div>
            ))}
          </div>
          <p className="mt-6 text-sm text-center sm:text-base text-text font-body">
            Insgesamt 12 Bewertungen mit 5 Sternen auf Google –{" "}
            <a
              href="https://g.co/kgs/GDJvoGW"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Alle Bewertungen ansehen
            </a>
          </p>
        </motion.section>
      </div>
    </>
  );
};

export default Home;
