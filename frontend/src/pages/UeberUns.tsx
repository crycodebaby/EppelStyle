import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero"; // Wiederverwendung der Hero-Komponente
import AnimatedButton from "../components/AnimatedButton"; // Für Sticky CTA
import Button from "../components/Button"; // Für Sticky CTA
import { motion } from "framer-motion";
// FadeInSection wird nicht mehr direkt verwendet, stattdessen Framer Motions whileInView

// Team-Mitglieder Daten (Beispiel)
// WICHTIG: Ersetze dies durch deine echten Team-Daten und Bilder!
const teamMembers = [
  {
    name: "Kesra Ibrahim",
    role: "Inhaber & Friseurmeister",
    image: "/images/team/kesra_ibrahim_eppelstyle.webp", // BITTE ERSETZEN
    desc: "Mit über 15 Jahren Erfahrung und einer tiefen Leidenschaft für das Friseurhandwerk gründete Kesra EppelStyle, um einen Ort der Schönheit und des Wohlbefindens für die ganze Familie zu schaffen.",
  },
  {
    name: "Maria Musterfrau", // Beispiel
    role: "Top-Stylistin & Farbexpertin",
    image: "/images/team/maria_musterfrau_eppelstyle.webp", // BITTE ERSETZEN
    desc: "Maria verzaubert mit kreativen Farbtechniken und typgerechten Schnitten. Ihre Spezialität: Balayage und moderne Damenhaarschnitte.",
  },
  {
    name: "Max Mustermann", // Beispiel
    role: "Barber & Herren-Spezialist",
    image: "/images/team/max_mustermann_eppelstyle.webp", // BITTE ERSETZEN
    desc: "Max beherrscht die Kunst des klassischen Barberings und moderner Herrenschnitte. Präzision und Stil zeichnen seine Arbeit aus.",
  },
];

// Philosophie-Punkte (Beispiel)
const philosophiePunkte = [
  {
    icon: "🌟",
    title: "Höchste Qualität",
    text: "Wir verwenden nur hochwertige Produkte und legen Wert auf präzises Handwerk für langanhaltende Ergebnisse.",
  },
  {
    icon: "👨‍👩‍👧‍👦",
    title: "Familienfreundlich",
    text: "Bei uns fühlen sich Groß und Klein wohl. Wir bieten eine entspannte Atmosphäre für die ganze Familie.",
  },
  {
    icon: "✂️",
    title: "Moderne Techniken",
    text: "Unser Team bildet sich stetig weiter, um Ihnen die neuesten Trends und Schnitttechniken anbieten zu können.",
  },
  {
    icon: "😊",
    title: "Ihr Wohlbefinden",
    text: "Ihre Zufriedenheit und ein Moment der Entspannung stehen für uns im Mittelpunkt jedes Besuchs.",
  },
];

const UeberUns = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut", staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const teamCardHover = {
    scale: 1.03,
    boxShadow: "0px 10px 30px -5px rgba(0,0,0,0.1)", // Subtiler Schatten beim Hovern
    transition: { type: "spring", stiffness: 250, damping: 10 },
  };

  return (
    <>
      <Helmet>
        <title>
          Über Uns – EppelStyle Friseur Eppelborn | Team & Philosophie
        </title>
        <meta
          name="description"
          content="Lernen Sie das Team und die Philosophie von EppelStyle kennen. Ihr Friseurmeister Kesra Ibrahim und sein Team freuen sich auf Sie in Eppelborn."
        />
        <meta
          name="keywords"
          content="Über EppelStyle, Friseur Team Eppelborn, Kesra Ibrahim, Friseur Philosophie, moderner Friseur Saarland"
        />
      </Helmet>

      <Hero
        title="Wer wir sind"
        subtitle="Leidenschaft für Haare, Herz für unsere Kunden – Das ist EppelStyle."
        image="/images/eppelstyle_ueberuns_hero.webp" // BITTE DURCH PASSENDES BILD ERSETZEN (z.B. Teamfoto oder stilvoller Salon-Ausschnitt)
        ctaText="Lernen Sie uns kennen"
        ctaLink="#wer-wir-sind" // Link zu einer Sektion auf der Seite
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
            href="https://g.co/kgs/GDJvoGW" // Korrekter Google Maps Link
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

        {/* ---------- SECTION: WER WIR SIND (KESRA IBRAHIM) ---------- */}
        <motion.section
          id="wer-wir-sind"
          className="max-w-6xl px-4 mx-auto section-wrapper-base" // Etwas breiter für diese Sektion
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
            <motion.div className="order-2 lg:order-1" variants={itemVariants}>
              <motion.svg
                variants={itemVariants}
                className="w-32 h-8 mb-4"
                viewBox="0 0 100 10"
              >
                <motion.path
                  d="M0 5 Q25 -1.5 50 5 T100 5"
                  className="hand-drawn-path stroke-accent-coral"
                  initial={false}
                />
              </motion.svg>
              <h2 className="mb-5 text-3xl font-bold sm:text-4xl lg:text-5xl text-heading-charcoal">
                Die Vision von EppelStyle
              </h2>
              <p className="mb-4 text-lg leading-relaxed sm:text-xl text-charcoal font-body">
                Am Kirchplatz 11 in Eppelborn hat Inhaber{" "}
                <strong>Kesra Ibrahim</strong>, Friseurmeister mit Herz und über
                15 Jahren Erfahrung, seinen Traum verwirklicht: einen modernen
                Friseursalon, der traditionelles Handwerk mit aktuellen Trends
                und einer familiären Atmosphäre verbindet.
              </p>
              <p className="mb-4 text-lg leading-relaxed sm:text-xl text-charcoal font-body">
                „Für mich ist Friseursein mehr als nur ein Beruf – es ist eine
                Berufung. Ich liebe es, Menschen durch einen neuen Look ein
                Lächeln ins Gesicht zu zaubern und ihr Selbstbewusstsein zu
                stärken“, so Kesra. Sein Ziel war es, einen Ort zu schaffen, an
                dem sich jeder Kunde, vom Kind bis zum Senior, wohl und bestens
                aufgehoben fühlt.
              </p>
              <p className="text-lg leading-relaxed sm:text-xl text-charcoal font-body">
                Bürgermeister Andreas Feld lobte bei seinem Besuch das stilvolle
                Ambiente und das kundenorientierte Konzept: „EppelStyle ist eine
                echte Bereicherung für unsere Gemeinde und ein Beweis für
                gelebte Dienstleistungsqualität.“
              </p>
            </motion.div>
            <motion.div
              className="order-1 overflow-hidden shadow-xl lg:order-2 rounded-xl aspect-w-4 aspect-h-5 group"
              variants={itemVariants}
            >
              <img
                src="/images/team/kesra_ibrahim_eppelstyle_portrait.webp" // BITTE HOCHWERTIGES PORTRAIT VON KESRA ERSETZEN
                alt="Kesra Ibrahim, Inhaber von EppelStyle Friseursalon"
                className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
                loading="lazy"
              />
            </motion.div>
          </div>
        </motion.section>

        {/* ---------- SECTION: UNSERE PHILOSOPHIE ---------- */}
        <motion.section
          className="max-w-6xl px-4 mx-auto mt-16 section-wrapper-base sm:mt-20 bg-coral-light/30 rounded-xl"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2
            variants={itemVariants}
            className="mb-10 text-3xl font-bold text-center sm:text-4xl lg:text-5xl text-heading-charcoal"
          >
            Unsere Werte – Ihr Erlebnis
          </motion.h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {philosophiePunkte.map((punkt, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center p-6 text-center rounded-lg bg-creme shadow-card"
                variants={itemVariants}
              >
                <span
                  className="mb-4 text-4xl sm:text-5xl"
                  role="img"
                  aria-label={punkt.title}
                >
                  {punkt.icon}
                </span>
                <h3 className="mb-2 text-xl font-semibold sm:text-2xl text-heading-charcoal">
                  {punkt.title}
                </h3>
                <p className="text-base leading-relaxed text-charcoal/90 font-body">
                  {punkt.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ---------- SECTION: UNSER TEAM ---------- */}
        <motion.section
          className="max-w-6xl px-4 mx-auto mt-16 section-wrapper-base sm:mt-20"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.svg
            variants={itemVariants}
            className="h-10 mx-auto mb-5 w-36 sm:h-12 sm:w-40"
            viewBox="0 0 100 10"
          >
            <motion.path
              d="M0 5 Q25 11.5 50 5 T100 5"
              className="hand-drawn-path stroke-accent-coral"
              initial={false}
            />
          </motion.svg>
          <motion.h2
            variants={itemVariants}
            className="mb-12 text-3xl font-bold text-center sm:text-4xl lg:text-5xl text-heading-charcoal"
          >
            Lernen Sie unser Team kennen
          </motion.h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 sm:gap-10">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden text-center shadow-xl bg-creme rounded-xl group"
                variants={itemVariants}
                whileHover={teamCardHover}
              >
                <div className="relative pt-[100%]">
                  {" "}
                  {/* Für quadratische Bilder */}
                  <img
                    src={member.image} // BITTE TEAM-BILDER ERSETZEN
                    alt={`Portrait von ${member.name}, ${member.role} bei EppelStyle`}
                    className="absolute inset-0 object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="mb-1 text-xl font-semibold sm:text-2xl text-heading-charcoal">
                    {member.name}
                  </h3>
                  <p className="mb-3 text-base font-medium text-accent-coral">
                    {member.role}
                  </p>
                  {/* Beschreibung, die bei Hover erscheint oder immer sichtbar ist */}
                  <motion.div
                    className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center transition-opacity duration-300 opacity-0 bg-charcoal/80 text-creme group-hover:opacity-100"
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.3, ease: "easeOut" },
                    }}
                  >
                    <h3 className="mb-1 text-lg font-semibold sm:text-xl text-creme">
                      {member.name}
                    </h3>
                    <p className="mb-2 text-sm font-medium text-accent-coral">
                      {member.role}
                    </p>
                    <p className="text-sm leading-snug text-creme/90">
                      {member.desc}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </>
  );
};

export default UeberUns;
