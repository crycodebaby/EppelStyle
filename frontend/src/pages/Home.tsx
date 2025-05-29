import { Helmet } from "react-helmet-async";
interface HeroProps {
  title: string;
  subtitle: string;
  image: string;
  ctaText: string;
  ctaLink: string;
  logoSrc?: string;
}
import Hero from "../components/Hero";
import AnimatedButton from "../components/AnimatedButton";
import Button from "../components/Button";
import { motion } from "framer-motion"; // motion importieren für motion.path
import { useState } from "react";
import AnimatedCounter from "../components/AnimatedCounter";
import DecorativeIcon from "../components/DecorativeIcon";

const PriceCategoryButton = ({
  category,
  isActive,
  onClick,
}: {
  category: string;
  isActive: boolean;
  onClick: () => void;
}) => (
  <motion.button
    onClick={onClick}
    className={`px-5 py-2.5 rounded-lg font-body font-semibold transition-colors duration-300 min-h-[48px] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-coral focus-visible:ring-offset-2 focus-visible:ring-offset-creme
      ${
        isActive
          ? "bg-accent-coral text-creme shadow-md"
          : "bg-coral-light text-accent-coral hover:bg-accent-coral hover:text-creme"
      }`}
    whileHover={{ scale: 1.05, filter: isActive ? "brightness(1.1)" : "none" }}
    whileTap={{ scale: 0.95 }}
    transition={{ duration: 0.2 }}
  >
    {category}
  </motion.button>
);

const Home = () => {
  const [activeCategory, setActiveCategory] = useState("Herren");

  const priceCategories = {
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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut", staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const statsItems = [
    {
      end: 2,
      text: "Jahre Leidenschaft & Erfahrung",
      icon: "scissors" as const,
    },
    { end: 612, text: "Glückliche Stammkunden", icon: "family" as const },
    {
      end: 78,
      text: "Strahlende Kinderaugen pro Monat",
      icon: "child" as const,
    },
  ];

  const leistungenPreviewItems = [
    {
      img: "/images/eppelstyle_kinder.webp",
      title: "Für unsere Kleinsten",
      text: "Geduldige und spielerische Haarschnitte, die Spaß machen.",
    },
    {
      img: "/images/eppelstyle_damen.webp",
      title: "Für Sie: Eleganz & Stil",
      text: "Moderne Schnitte, brillante Farben und typgerechte Beratung.",
    },
    {
      img: "/images/eppelstyle_herren_barber.webp",
      title: "Für Ihn: Präzision & Pflege",
      text: "Klassische Schnitte, trendige Styles und professionelle Bartkunst.",
    },
  ];

  const oeffnungszeitenItems = [
    {
      title: "Unsere Öffnungszeiten",
      text: "Montag – Samstag: 09:00 – 19:00 Uhr",
    },
    {
      title: "Terminvereinbarung",
      text: (
        <>
          Telefon:{" "}
          <a
            href="tel:+4968815951818"
            className="font-semibold text-accent-coral hover:underline"
          >
            06881 5951818
          </a>
          <br />
          Wir freuen uns auf Ihren Anruf!
        </>
      ),
    },
  ];

  const bewertungenItems = [
    {
      quote:
        "Ein wunderbarer Salon für die ganze Familie! Super freundlich und das Ergebnis ist immer top.",
      author: "Anna M.",
      avatar: "/images/avatar_anna.webp",
    },
    {
      quote:
        "Meine Kinder lieben es, hierher zu kommen. Kesra ist einfach toll mit ihnen! Sehr zu empfehlen.",
      author: "Markus S.",
      avatar: "/images/avatar_markus.webp",
    },
    {
      quote:
        "Endlich ein Friseur in Eppelborn, der moderne Schnitte und Farben perfekt umsetzt. Bin Stammkundin!",
      author: "Lisa K.",
      avatar: "/images/avatar_lisa.webp",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          EppelStyle - Ihr Friseurmeister in Eppelborn | Familie, Damen & Herren
        </title>
        <meta
          name="description"
          content="Willkommen bei EppelStyle, Ihrem Friseursalon in Eppelborn für die ganze Familie. Erleben Sie meisterhafte Damen- & Herrenhaarschnitte sowie professionelle Barber-Services in warmer, einladender Atmosphäre."
        />
        {/* ... weitere meta tags ... */}
      </Helmet>

      <Hero
        title="EppelStyle"
        subtitle="Ihr Friseurmeister in Eppelborn – mit Herz und Handwerk."
        image="/images/eppelstyle_salon_hero_v2.webp"
        ctaText="Termin vereinbaren"
        ctaLink="/kontakt"
        logoSrc="/images/logo/Friseurlogo-Barber-Saarland_weiss_transparent.png"
      />

      <div className="snap-container bg-creme">
        <motion.div
          className="fixed z-50 flex flex-col space-y-3 bottom-5 right-5 sm:bottom-6 sm:right-6"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, type: "spring", stiffness: 100, damping: 12 }}
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

        {/* Willkommen Sektion */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="text-center section-wrapper-base snap-start"
        >
          <motion.svg
            variants={itemVariants}
            className="h-10 mx-auto mb-5 w-36 sm:h-12 sm:w-40"
            viewBox="0 0 100 10"
          >
            {/* Geändert: path zu motion.path mit initial={false} */}
            <motion.path
              d="M0 5 Q25 -1.5 50 5 T100 5"
              className="hand-drawn-path stroke-accent-coral"
              initial={false}
            />
          </motion.svg>
          <motion.h2
            variants={itemVariants}
            className="mb-6 text-4xl sm:text-5xl lg:text-5xl"
          >
            Herzlich Willkommen bei EppelStyle
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="max-w-3xl mx-auto text-lg leading-relaxed sm:text-xl text-charcoal font-body"
          >
            Ihrem Friseursalon in Eppelborn, wo meisterhaftes Handwerk auf eine
            warme, familiäre Atmosphäre trifft. Wir nehmen uns Zeit für Sie und
            Ihre Wünsche – für Haarschnitte, die Ihre Persönlichkeit
            unterstreichen.
          </motion.p>
        </motion.section>

        {/* Über EppelStyle */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="text-center section-wrapper-base snap-start bg-coral-light/40"
        >
          <motion.h2
            variants={itemVariants}
            className="mb-6 text-4xl sm:text-5xl lg:text-5xl"
          >
            Ihr Meisterbetrieb mit Herz & Stil
          </motion.h2>
          {/* ... Rest der Sektion ... */}
          <motion.p
            variants={itemVariants}
            className="max-w-3xl mx-auto mb-6 text-lg leading-relaxed sm:text-xl text-charcoal font-body"
          >
            Inhaber Kesra Ibrahim, Friseurmeister aus Leidenschaft, hat mit
            EppelStyle einen Ort geschaffen, an dem sich jeder Gast – ob groß
            oder klein – sofort wohl und bestens beraten fühlt. Qualität,
            individuelle Beratung und Ihre Zufriedenheit sind unser täglicher
            Antrieb.
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="max-w-2xl mx-auto text-lg italic leading-relaxed sm:text-xl text-charcoal font-body"
          >
            „EppelStyle ist eine echte Bereicherung für unsere Gemeinde, ein
            Salon mit tollem Ambiente und spürbarer Herzlichkeit.“
            <span className="block mt-2 text-base not-italic">
              – Bürgermeister Andreas Feld
            </span>
          </motion.p>
        </motion.section>

        {/* Statistiken-Sektion */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="text-center section-wrapper-base snap-start"
        >
          <motion.h2
            variants={itemVariants}
            className="mb-12 text-4xl sm:text-5xl lg:text-5xl"
          >
            Momente, die begeistern
          </motion.h2>
          {/* ... Rest der Sektion ... */}
          <div className="grid grid-cols-1 gap-10 sm:gap-12 sm:grid-cols-3">
            {statsItems.map((stat, index) => (
              <motion.div
                key={index}
                className="p-6 py-8 transition-shadow duration-300 bg-creme rounded-xl shadow-card hover:shadow-subtle-dark"
                variants={itemVariants}
              >
                <DecorativeIcon
                  type={stat.icon}
                  className="mx-auto mb-5 w-14 h-14 text-accent-coral"
                />
                <h3 className="mb-2 text-5xl sm:text-6xl font-heading text-accent-coral">
                  <AnimatedCounter end={stat.end} duration={2500} />+
                </h3>
                <p className="text-lg text-charcoal font-body">{stat.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Leistungen Vorschau */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="section-wrapper-base snap-start"
        >
          <motion.h2
            variants={itemVariants}
            className="mb-12 text-4xl text-center sm:text-5xl lg:text-5xl"
          >
            Unsere Expertise für Sie
          </motion.h2>
          {/* ... Rest der Sektion ... */}
          <div className="grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-3">
            {leistungenPreviewItems.map((item, index) => (
              <motion.div
                key={index}
                className="relative flex flex-col justify-end overflow-hidden rounded-xl shadow-card group h-96"
                variants={itemVariants}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="absolute inset-0 object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/50 to-transparent"></div>
                <div className="relative p-6">
                  <h3 className="mb-2 text-2xl lg:text-3xl font-heading text-creme">
                    {item.title}
                  </h3>
                  <p className="text-base lg:text-lg text-creme/90 font-body">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Preistabelle */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="text-center section-wrapper-base snap-start bg-coral-light/40"
        >
          <motion.svg
            variants={itemVariants}
            className="h-10 mx-auto mb-5 w-36 sm:h-12 sm:w-40"
            viewBox="0 0 100 10"
          >
            {/* Geändert: path zu motion.path mit initial={false} */}
            <motion.path
              d="M0 5 Q25 -1.5 50 5 T100 5"
              className="hand-drawn-path stroke-accent-coral"
              initial={false}
            />
          </motion.svg>
          <motion.h2
            variants={itemVariants}
            className="mb-6 text-4xl sm:text-5xl lg:text-5xl"
          >
            Faire Preise, beste Qualität
          </motion.h2>
          {/* ... Rest der Sektion ... */}
          <motion.p
            variants={itemVariants}
            className="max-w-3xl mx-auto mb-10 text-lg leading-relaxed sm:text-xl text-charcoal font-body"
          >
            Transparenz und erstklassiger Service zu fairen Konditionen –
            entdecken Sie unsere Preisübersicht. Alle Preise verstehen sich
            inklusive Beratung und hochwertiger Produkte.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center mb-10 space-x-2 sm:space-x-3"
          >
            {Object.entries(priceCategories).map(([categoryKey]) => (
              <PriceCategoryButton
                key={categoryKey}
                category={categoryKey}
                isActive={activeCategory === categoryKey}
                onClick={() => setActiveCategory(categoryKey)}
              />
            ))}
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="max-w-4xl p-4 mx-auto overflow-x-auto bg-creme sm:p-6 rounded-xl shadow-card"
          >
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-subtle">
                  <th className="py-3.5 px-3 sm:px-4 text-base sm:text-lg font-semibold text-heading-charcoal min-w-[170px] sm:min-w-[220px]">
                    Dienstleistung
                  </th>
                  <th className="py-3.5 px-3 sm:px-4 text-base sm:text-lg font-semibold text-heading-charcoal min-w-[80px] sm:min-w-[120px]">
                    Details
                  </th>
                  <th className="py-3.5 px-3 sm:px-4 text-base sm:text-lg font-semibold text-heading-charcoal text-right min-w-[70px] sm:min-w-[100px]">
                    Preis
                  </th>
                </tr>
              </thead>
              <tbody>
                {priceCategories[
                  activeCategory as keyof typeof priceCategories
                ].map((item, index) => (
                  <motion.tr
                    key={`${activeCategory}-${index}`}
                    className="transition-colors duration-200 border-b border-coral-light/70 last:border-b-0 hover:bg-coral-light/60"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.03 }}
                  >
                    <td className="px-3 py-3 text-sm sm:px-4 sm:text-base text-charcoal font-body">
                      {item.name}
                    </td>
                    <td className="relative px-3 py-3 text-sm sm:px-4 sm:text-base text-charcoal font-body group">
                      {item.length}
                      {item.tooltip && (
                        <span className="absolute z-20 hidden p-2.5 text-xs whitespace-nowrap transform -translate-y-full -translate-x-1/2 rounded-md shadow-lg bottom-0 left-1/2 group-hover:block bg-charcoal text-creme font-body">
                          {item.tooltip}
                        </span>
                      )}
                    </td>
                    <td className="px-3 py-3 text-sm font-medium text-right sm:px-4 sm:text-base text-charcoal font-body">
                      {item.price}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </motion.section>

        {/* Öffnungszeiten und Terminvereinbarung */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="text-center section-wrapper-base snap-start"
        >
          <motion.h2
            variants={itemVariants}
            className="mb-10 text-4xl sm:text-5xl lg:text-5xl"
          >
            Wir freuen uns auf Ihren Besuch!
          </motion.h2>
          {/* ... Rest der Sektion ... */}
          <div className="grid max-w-3xl grid-cols-1 gap-8 mx-auto sm:grid-cols-2">
            {oeffnungszeitenItems.map((item, index) => (
              <motion.div
                key={index}
                className="p-6 py-8 transition-shadow duration-300 bg-creme rounded-xl shadow-card hover:shadow-subtle-dark"
                variants={itemVariants}
              >
                <h3 className="mb-3 text-2xl font-semibold sm:text-3xl text-heading-charcoal">
                  {item.title}
                </h3>
                <p className="text-lg leading-relaxed text-charcoal font-body">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
          <motion.div variants={itemVariants} className="mt-12">
            <AnimatedButton
              href="/kontakt"
              variant="primary"
              className="shadow-glow-coral min-h-[56px] px-10 py-3.5 text-xl rounded-lg"
            >
              Jetzt Termin anfragen
            </AnimatedButton>
          </motion.div>
        </motion.section>

        {/* Bewertungen */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="section-wrapper-base snap-start bg-coral-light/40"
        >
          <motion.h2
            variants={itemVariants}
            className="mb-12 text-4xl text-center sm:text-5xl lg:text-5xl"
          >
            Stimmen unserer Kunden
          </motion.h2>
          {/* ... Rest der Sektion ... */}
          <div className="grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-3">
            {bewertungenItems.map((review, index) => (
              <motion.div
                key={index}
                className="flex flex-col p-6 py-8 text-center transition-shadow duration-300 bg-creme rounded-xl shadow-card hover:shadow-subtle-dark"
                variants={itemVariants}
              >
                <div className="flex items-center justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 fill-accent-coral"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="flex-grow mb-5 text-base italic sm:text-lg text-charcoal font-body">
                  "{review.quote}"
                </p>
                <p className="text-base font-semibold text-heading-charcoal font-body">
                  – {review.author}
                </p>
              </motion.div>
            ))}
          </div>
          <motion.p
            variants={itemVariants}
            className="mt-12 text-lg text-center text-charcoal font-body"
          >
            Überzeugt? Lesen Sie{" "}
            <a
              href="https://g.co/kgs/GDJvoGW"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-accent-coral hover:underline"
            >
              alle unsere Google-Bewertungen
            </a>
            !
          </motion.p>
        </motion.section>
      </div>
    </>
  );
};

export default Home;
