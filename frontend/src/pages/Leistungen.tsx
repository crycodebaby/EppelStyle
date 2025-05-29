import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero"; // Wiederverwendung der Hero-Komponente
import AnimatedButton from "../components/AnimatedButton"; // Für Sticky CTA
import Button from "../components/Button"; // Für Sticky CTA
import { motion } from "framer-motion";
// FadeInSection wird hier nicht direkt verwendet, da wir sectionVariants nutzen

const Leistungen = () => {
  // Aktuelle Preisdaten (konsistent mit Home.tsx)
  const services = {
    Herren: [
      { name: "Haarschnitt (klassisch & modern)", length: "-", price: "22€" },
      { name: "Maschinenschnitt (eine Länge)", length: "-", price: "18€" },
      { name: "Bartrasur & Pflege", length: "-", price: "15€" },
      { name: "Komplett Paket (Schnitt & Bart)", length: "-", price: "38€" },
      { name: "Kinderhaarschnitt (bis 10 J.)", length: "-", price: "16€" },
      { name: "Färben / Blondierung (Herren)", length: "-", price: "ab 35€" },
      { name: "Dauerwelle (Herren)", length: "-", price: "ab 50€" },
      { name: "Gesichtsmaske (entspannend)", length: "-", price: "8€" },
      { name: "Augenbrauen zupfen (Fadentechnik)", length: "-", price: "8€" },
      {
        name: "Haarschnitt (Schüler/Studenten/Azubis)",
        length: "-",
        price: "19€",
        tooltip: "Mit gültigem Ausweis",
      },
    ],
    Damen: [
      { name: "Trockenhaarschnitt", length: "-", price: "28€" },
      {
        name: "Schneiden, Waschen, Föhnen",
        length: "Kurz",
        price: "38€",
        tooltip: "Haarlänge bis Kinn",
      },
      {
        name: "Schneiden, Waschen, Föhnen",
        length: "Mittel",
        price: "45€",
        tooltip: "Haarlänge bis Schulter",
      },
      {
        name: "Schneiden, Waschen, Föhnen",
        length: "Lang",
        price: "52€",
        tooltip: "Haarlänge über Schulter",
      },
      {
        name: "Waschen & Föhnen/Stylen",
        length: "Kurz",
        price: "20€",
        tooltip: "Haarlänge bis Kinn",
      },
      {
        name: "Waschen & Föhnen/Stylen",
        length: "Mittel",
        price: "25€",
        tooltip: "Haarlänge bis Schulter",
      },
      {
        name: "Waschen & Föhnen/Stylen",
        length: "Lang",
        price: "30€",
        tooltip: "Haarlänge über Schulter",
      },
      { name: "Ansatz färben", length: "-", price: "ab 35€" },
      {
        name: "Komplett färben",
        length: "Kurz",
        price: "ab 40€",
        tooltip: "Haarlänge bis Kinn",
      },
      {
        name: "Komplett färben",
        length: "Mittel",
        price: "ab 50€",
        tooltip: "Haarlänge bis Schulter",
      },
      {
        name: "Komplett färben",
        length: "Lang",
        price: "ab 60€",
        tooltip: "Haarlänge über Schulter",
      },
      { name: "Blondierung / Aufhellung", length: "-", price: "ab 55€" },
      { name: "Foliensträhnen (Highlights)", length: "-", price: "ab 45€" },
      {
        name: "Balayage / Ombré",
        length: "-",
        price: "ab 80€",
        tooltip: "Individuelle Farbtechniken",
      },
      {
        name: "Tönung",
        length: "Kurz",
        price: "ab 25€",
        tooltip: "Haarlänge bis Kinn",
      },
      {
        name: "Tönung",
        length: "Mittel",
        price: "ab 30€",
        tooltip: "Haarlänge bis Schulter",
      },
      {
        name: "Tönung",
        length: "Lang",
        price: "ab 35€",
        tooltip: "Haarlänge über Schulter",
      },
      {
        name: "Dauerwelle",
        length: "Kurz",
        price: "ab 50€",
        tooltip: "Haarlänge bis Kinn",
      },
      {
        name: "Dauerwelle",
        length: "Mittel",
        price: "ab 60€",
        tooltip: "Haarlänge bis Schulter",
      },
      {
        name: "Dauerwelle",
        length: "Lang",
        price: "ab 75€",
        tooltip: "Haarlänge über Schulter",
      },
      {
        name: "Dauerhafte Haarglättung",
        length: "-",
        price: "ab 150€",
        tooltip: "Beratung erforderlich",
      },
      { name: "Augenbrauen zupfen/formen", length: "-", price: "8€" },
      { name: "Augenbrauen färben", length: "-", price: "10€" },
      { name: "Wimpern färben", length: "-", price: "12€" },
      {
        name: "Hochsteckfrisuren / Eventstyling",
        length: "-",
        price: "auf Anfrage",
      },
    ],
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut", staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const tableRowVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      // Custom prop `i` für gestaffelte Verzögerung
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, delay: i * 0.03, ease: "easeOut" },
    }),
  };

  return (
    <>
      <Helmet>
        <title>Unsere Leistungen – EppelStyle Friseur Eppelborn</title>
        <meta
          name="description"
          content="Entdecken Sie das vielfältige Leistungsangebot von EppelStyle in Eppelborn: Präzise Haarschnitte für Damen, Herren & Kinder, professionelle Barber-Services, brillante Farben und individuelle Stylings."
        />
        <meta
          name="keywords"
          content="Friseur Leistungen Eppelborn, Haarschnitt Preise, Barber Eppelborn, Damenfriseur, Herrenfriseur, Kinderfriseur, Haarfarbe, Styling, EppelStyle"
        />
      </Helmet>

      {/* Hero speziell für die Leistungsseite */}
      <Hero
        title="Unsere Expertise für Ihr Haar"
        subtitle="Entdecken Sie unser vielfältiges Angebot für Damen, Herren und Kinder – von klassischen Schnitten bis zu modernen Trends."
        image="/images/eppelstyle_leistungen_hero.webp" // NEUES, PASSENDES BILD FÜR LEISTUNGEN ERSETZEN
        // Kein ctaText und ctaLink, da der Fokus auf der Informationsdarbietung liegt
        ctaText="" // Leer lassen oder Prop optional machen in Hero.tsx
        ctaLink="" // Leer lassen oder Prop optional machen in Hero.tsx
      />

      {/* Hauptcontainer für die Leistungsübersicht */}
      <div className="py-10 snap-container bg-creme sm:py-16">
        {" "}
        {/* Snap-Container aus index.css */}
        {/* Sticky CTA Buttons (konsistent mit Home.tsx) */}
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
        {/* Einleitender Text */}
        <motion.div
          className="max-w-3xl px-4 pt-0 mx-auto mb-12 text-center sm:px-6 lg:px-8 section-wrapper-base sm:pt-0" // Weniger oberes Padding, da Hero schon Platz schafft
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.svg
            variants={itemVariants}
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
            variants={itemVariants}
            className="mb-4 text-4xl sm:text-5xl lg:text-5xl"
          >
            Unsere Preisliste
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg leading-relaxed sm:text-xl text-charcoal font-body"
          >
            Wir legen Wert auf Transparenz und faire Preise für erstklassige
            Friseurdienstleistungen. Alle Preise verstehen sich inklusive
            individueller Beratung und der Verwendung hochwertiger Produkte.
            Zusatzleistungen oder spezielle Wünsche besprechen wir gerne
            persönlich mit Ihnen.
          </motion.p>
        </motion.div>
        {/* Leistungs-Sektionen (Herren, Damen) */}
        <div className="space-y-16 sm:space-y-20">
          {Object.entries(services).map(([category, items], categoryIndex) => (
            <motion.section
              key={category}
              className="max-w-5xl px-4 py-12 mx-auto shadow-xl sm:px-6 lg:px-8 section-wrapper-base sm:py-16 rounded-xl bg-creme" // Jede Kategorie in einer "Karte"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }} // Etwas früher triggern
            >
              {/* Optional: Bild für die Kategorie */}
              {/* <motion.img 
                variants={itemVariants} 
                src={`/images/eppelstyle_${category.toLowerCase()}.webp`} // z.B. eppelstyle_herren.webp
                alt={`${category} bei EppelStyle`} 
                className="object-cover w-full h-48 mb-6 rounded-t-lg sm:h-64 sm:mb-8" 
              /> */}
              <motion.h3
                variants={itemVariants}
                className="mb-6 text-3xl font-semibold text-center sm:mb-8 sm:text-4xl text-heading-charcoal"
              >
                Für {category}
              </motion.h3>
              <motion.div
                variants={itemVariants}
                className="p-3 overflow-x-auto bg-white rounded-lg shadow-inner sm:p-5"
              >
                {" "}
                {/* Leichter innerer Schatten für die Tabelle */}
                <table className="w-full text-left border-collapse min-w-[500px]">
                  <thead className="border-b-2 border-accent-coral/50">
                    <tr>
                      <th className="py-3.5 px-3 sm:px-4 text-base sm:text-lg font-semibold text-heading-charcoal">
                        Dienstleistung
                      </th>
                      <th className="py-3.5 px-3 sm:px-4 text-base sm:text-lg font-semibold text-heading-charcoal text-center">
                        Details / Haarlänge
                      </th>
                      <th className="py-3.5 px-3 sm:px-4 text-base sm:text-lg font-semibold text-heading-charcoal text-right">
                        Preis
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item, index) => (
                      <motion.tr
                        key={`${category}-${item.name}-${index}`}
                        className="transition-colors duration-200 border-b border-coral-light/70 last:border-b-0 hover:bg-coral-light/40"
                        custom={index} // Übergibt den Index an die Varianten für gestaffelte Animation
                        variants={tableRowVariants}
                        initial="hidden" // Wird durch parent (section) gesteuert
                        animate="visible" // Wird durch parent (section) gesteuert
                      >
                        <td className="px-3 sm:px-4 py-3.5 text-sm sm:text-base text-charcoal font-body">
                          {item.name}
                        </td>
                        <td className="relative px-3 sm:px-4 py-3.5 text-sm sm:text-base text-charcoal font-body text-center group">
                          {item.length}
                          {item.tooltip && (
                            <span className="absolute z-20 hidden px-2.5 py-1.5 text-xs whitespace-nowrap transform -translate-x-1/2 rounded-md shadow-lg bottom-full left-1/2 group-hover:block bg-charcoal text-creme font-body">
                              {item.tooltip}
                            </span>
                          )}
                        </td>
                        <td className="px-3 sm:px-4 py-3.5 text-sm sm:text-base text-charcoal font-body text-right font-medium">
                          {item.price}
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>
            </motion.section>
          ))}
        </div>
        {/* Abschließender Call to Action oder Hinweis */}
        <motion.div
          className="max-w-3xl px-4 pb-0 mx-auto mt-16 text-center sm:px-6 lg:px-8 section-wrapper-base sm:pb-0"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h3
            variants={itemVariants}
            className="mb-4 text-2xl font-semibold sm:text-3xl text-heading-charcoal"
          >
            Fragen oder spezielle Wünsche?
          </motion.h3>
          <motion.p
            variants={itemVariants}
            className="mb-8 text-lg leading-relaxed sm:text-xl text-charcoal font-body"
          >
            Wir beraten Sie gerne individuell zu allen unseren Leistungen und
            finden gemeinsam den perfekten Look für Sie. Zögern Sie nicht, uns
            zu kontaktieren!
          </motion.p>
          <motion.div variants={itemVariants}>
            <AnimatedButton
              href="/kontakt"
              variant="primary"
              className="shadow-glow-coral min-h-[52px] px-8 py-3 text-lg rounded-lg"
            >
              Jetzt Kontakt aufnehmen
            </AnimatedButton>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Leistungen;
