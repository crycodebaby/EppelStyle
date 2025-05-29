import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero"; // Wiederverwendung der Hero-Komponente
import AnimatedButton from "../components/AnimatedButton"; // Für Sticky CTA und Formular-Submit
import Button from "../components/Button"; // Für Sticky CTA
import { motion } from "framer-motion";
// FadeInSection wird hier nicht direkt verwendet, stattdessen Framer Motions whileInView

const Kontakt = () => {
  // Animationsvarianten für Sektionen und Elemente
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

  // Korrekte Telefonnummer und E-Mail aus index.html
  const phoneNumber = "+4968815951818";
  const emailAddress = "info@eppelstyle.de";
  const mapsEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2609.001070993938!2d6.962780676901662!3d49.4056899632699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4795b06dc09e70c9%3A0x8b9287e62f08f78b!2sEppelStyle!5e0!3m2!1sde!2sde!4v1716937647636!5m2!1sde!2sde";

  return (
    <>
      <Helmet>
        <title>Kontakt & Termin – EppelStyle Friseur Eppelborn</title>
        <meta
          name="description"
          content="Kontaktieren Sie EppelStyle in Eppelborn für Ihren nächsten Friseurtermin. Finden Sie unsere Adresse, Öffnungszeiten oder schreiben Sie uns eine Nachricht."
        />
        <meta
          name="keywords"
          content="Kontakt Friseur Eppelborn, Termin Friseur Eppelborn, EppelStyle Adresse, Friseur Saarland, Telefon Friseur"
        />
      </Helmet>

      <Hero
        title="Nehmen Sie Kontakt auf"
        subtitle="Wir freuen uns auf Ihre Nachricht oder Ihren Anruf für den nächsten Wohlfühltermin bei EppelStyle."
        image="/images/eppelstyle_kontakt_hero.webp" // BITTE DURCH PASSENDES BILD ERSETZEN
        ctaText="Direkt anrufen" // CTA im Hero
        ctaLink={`tel:${phoneNumber}`}
      />

      <div className="py-10 snap-container bg-creme sm:py-16">
        {" "}
        {/* Haupt-Seitencontainer */}
        {/* Sticky CTA Buttons (konsistent mit anderen Seiten) */}
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
          <AnimatedButton // Dieser Button könnte hier auch auf /#termin-info linken o.ä.
            href="/kontakt#termin-info" // Springt zur Termininfo auf der Seite
            variant="primary"
            className="shadow-glow-coral min-h-[50px] px-4 text-base rounded-full"
            ariaLabel="Informationen zur Terminbuchung"
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
        {/* Hauptinhaltsbereich mit zwei Spalten */}
        <motion.div
          className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl section-wrapper-base"
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
              d="M0 5 Q25 -1.5 50 5 T100 5"
              className="hand-drawn-path stroke-accent-coral"
              initial={false}
            />
          </motion.svg>
          <motion.h2
            variants={itemVariants}
            className="mb-10 text-4xl font-bold text-center sm:text-5xl lg:text-5xl text-heading-charcoal"
          >
            Ihr direkter Draht zu uns
          </motion.h2>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
            {/* Linke Spalte: Kontaktdaten, Karte, Öffnungszeiten */}
            <motion.div
              className="flex flex-col p-6 space-y-6 shadow-xl rounded-xl sm:p-8 bg-creme" // Karte für linke Spalte
              variants={itemVariants} // Eigene Animation für diese Spalte
            >
              <div>
                <h3 className="mb-3 text-2xl font-semibold sm:text-3xl text-heading-charcoal">
                  Kontaktdaten
                </h3>
                <address className="space-y-1 text-base not-italic sm:text-lg text-charcoal font-body">
                  <p>EppelStyle Friseur</p>
                  <p>Kirchplatz 11</p>
                  <p>66571 Eppelborn, Saarland</p>
                  <p className="mt-2">
                    Telefon:{" "}
                    <a
                      href={`tel:${phoneNumber}`}
                      className="font-medium text-accent-coral hover:underline"
                    >
                      {phoneNumber.replace("+49", "0")} {/* Anzeige anpassen */}
                    </a>
                  </p>
                  <p>
                    E-Mail:{" "}
                    <a
                      href={`mailto:${emailAddress}`}
                      className="font-medium text-accent-coral hover:underline"
                    >
                      {emailAddress}
                    </a>
                  </p>
                </address>
              </div>

              <div>
                <h3
                  className="mb-3 text-2xl font-semibold sm:text-3xl text-heading-charcoal"
                  id="termin-info"
                >
                  Terminvereinbarung
                </h3>
                <p className="text-base leading-relaxed sm:text-lg text-charcoal font-body">
                  Rufen Sie uns an oder schreiben Sie eine E-Mail für Ihren
                  Wunschtermin. Spontane Besuche sind willkommen, wir empfehlen
                  jedoch eine Terminvereinbarung, um Wartezeiten zu vermeiden.
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-2xl font-semibold sm:text-3xl text-heading-charcoal">
                  Unsere Öffnungszeiten
                </h3>
                <p className="text-base sm:text-lg text-charcoal font-body">
                  Montag – Samstag: 09:00 – 19:00 Uhr
                  <br />
                  Sonntag: Geschlossen
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-2xl font-semibold sm:text-3xl text-heading-charcoal">
                  So finden Sie uns
                </h3>
                <div className="overflow-hidden rounded-lg shadow-md aspect-w-16 aspect-h-9">
                  <iframe
                    className="w-full h-full"
                    src={mapsEmbedUrl} // Korrekte Embed-URL
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="EppelStyle Friseursalon auf Google Maps"
                  ></iframe>
                </div>
              </div>
              <div>
                <h3 className="mb-3 text-2xl font-semibold sm:text-3xl text-heading-charcoal">
                  Während Ihres Besuchs
                </h3>
                <p className="text-base leading-relaxed sm:text-lg text-charcoal font-body">
                  Genießen Sie eine Auswahl an kostenlosen Erfrischungen in
                  unserem einladenden Ambiente. Wir möchten, dass Sie sich bei
                  uns rundum wohlfühlen!
                </p>
              </div>
            </motion.div>

            {/* Rechte Spalte: Kontaktformular */}
            <motion.div
              className="p-6 shadow-xl rounded-xl sm:p-8 bg-coral-light/40" // Karte für rechte Spalte
              variants={itemVariants} // Eigene Animation für diese Spalte
            >
              <h2 className="mb-6 text-3xl font-bold text-center sm:text-4xl text-heading-charcoal">
                Schreiben Sie uns eine Nachricht
              </h2>
              <form
                action="https://formspree.io/f/xdkgbgrq" // Dein Formspree Endpunkt
                method="POST"
                className="space-y-5 sm:space-y-6"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-1.5 text-base sm:text-lg text-charcoal font-medium font-body"
                  >
                    Ihr Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full p-3 text-base border rounded-lg bg-creme border-subtle text-charcoal font-body focus:outline-none focus:ring-2 focus:ring-accent-coral focus:border-accent-coral placeholder:text-charcoal/50"
                    required
                    placeholder="Max Mustermann"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-1.5 text-base sm:text-lg text-charcoal font-medium font-body"
                  >
                    Ihre E-Mail-Adresse
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full p-3 text-base border rounded-lg bg-creme border-subtle text-charcoal font-body focus:outline-none focus:ring-2 focus:ring-accent-coral focus:border-accent-coral placeholder:text-charcoal/50"
                    required
                    placeholder="max.mustermann@beispiel.de"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block mb-1.5 text-base sm:text-lg text-charcoal font-medium font-body"
                  >
                    Ihre Nachricht
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5} // Angepasste Höhe
                    className="w-full p-3 text-base border rounded-lg bg-creme border-subtle text-charcoal font-body focus:outline-none focus:ring-2 focus:ring-accent-coral focus:border-accent-coral placeholder:text-charcoal/50"
                    required
                    placeholder="Worum geht es bei Ihrer Anfrage?"
                  ></textarea>
                </div>
                <AnimatedButton
                  type="submit"
                  variant="primary"
                  className="w-full text-lg py-3.5" // Größerer Submit-Button
                >
                  Nachricht senden
                </AnimatedButton>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Kontakt;
