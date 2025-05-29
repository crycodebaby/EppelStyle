import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion"; // Importiere motion für Animationen

const Impressum = () => {
  // Animationsvarianten für den Hauptinhaltsblock
  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  // Korrekte Telefonnummer und E-Mail aus index.html (oder globaler Konfiguration)
  const phoneNumber = "+4968815951818";
  const emailAddress = "info@eppelstyle.de";

  return (
    <>
      <Helmet>
        <title>Impressum – EppelStyle Friseur Eppelborn</title>
        <meta
          name="description"
          content="Impressum und rechtliche Hinweise für den Friseursalon EppelStyle in Eppelborn, Saarland. Inhaber: Kesra Ibrahim."
        />
        <meta name="robots" content="noindex, follow" />{" "}
        {/* noindex ist gut für Impressum */}
      </Helmet>

      {/* Hauptcontainer für die Seite */}
      <div className="min-h-screen py-16 bg-creme sm:py-20 lg:py-24">
        <motion.div
          className="max-w-3xl px-4 mx-auto" // Max-Breite für bessere Lesbarkeit von Textseiten
          variants={contentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }} // Einmalige Animation beim Scrollen
        >
          <h1 className="mb-10 text-4xl font-bold text-center sm:text-5xl lg:text-6xl font-heading text-heading-charcoal">
            Impressum
          </h1>

          {/* Inhaltsblock mit neuem Styling */}
          <div className="p-6 shadow-xl sm:p-8 lg:p-10 bg-creme rounded-xl text-charcoal font-body">
            <section className="mb-6">
              <h2 className="mb-3 text-2xl font-semibold sm:text-3xl font-heading text-heading-charcoal">
                Angaben gemäß § 5 TMG
              </h2>
              <p className="mb-1">EppelStyle Friseur</p>
              <p className="mb-1">Inhaber: Kesra Ibrahim</p>
              <p className="mb-1">Kirchplatz 11</p>
              <p className="mb-1">66571 Eppelborn, Saarland</p>
              <p className="mb-3">Deutschland</p>
              <p className="mb-1">
                Telefon:{" "}
                <a
                  href={`tel:${phoneNumber}`}
                  className="font-medium text-accent-coral hover:underline"
                >
                  {phoneNumber.replace("+49", "0")}
                </a>
              </p>
              <p className="mb-1">
                E-Mail:{" "}
                <a
                  href={`mailto:${emailAddress}`}
                  className="font-medium text-accent-coral hover:underline"
                >
                  {emailAddress}
                </a>
              </p>
            </section>

            <section className="mb-6">
              <h2 className="mb-3 text-2xl font-semibold sm:text-3xl font-heading text-heading-charcoal">
                Umsatzsteuer-Identifikationsnummer
              </h2>
              <p>
                Gemäß § 19 UStG wird keine Umsatzsteuer berechnet
                (Kleinunternehmerregelung).
              </p>
            </section>

            <section className="mb-6">
              <h2 className="mb-3 text-2xl font-semibold sm:text-3xl font-heading text-heading-charcoal">
                Berufsbezeichnung und berufsrechtliche Regelungen
              </h2>
              <p className="mb-1">Berufsbezeichnung: Friseurmeister</p>
              <p className="mb-1">
                Zuständige Kammer: Handwerkskammer des Saarlandes (HWK)
              </p>
              <p className="mb-1">
                Hohenzollernstraße 47-49, 66117 Saarbrücken
              </p>
              <p className="mb-1">Verliehen in: Deutschland</p>
              <p>
                Berufsrechtliche Regelungen: Handwerksordnung (HwO)
                <br />
                Einsehbar unter:{" "}
                <a
                  href="https://www.gesetze-im-internet.de/hwo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-accent-coral hover:underline"
                >
                  www.gesetze-im-internet.de/hwo/
                </a>
              </p>
            </section>

            <section className="mb-6">
              <h2 className="mb-3 text-2xl font-semibold sm:text-3xl font-heading text-heading-charcoal">
                Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
              </h2>
              <p className="mb-1">Kesra Ibrahim</p>
              <p className="mb-1">Kirchplatz 11</p>
              <p>66571 Eppelborn, Saarland</p>
            </section>

            <section className="mb-6">
              <h2 className="mb-3 text-2xl font-semibold sm:text-3xl font-heading text-heading-charcoal">
                EU-Streitschlichtung
              </h2>
              <p className="mb-2">
                Die Europäische Kommission stellt eine Plattform zur
                Online-Streitbeilegung (OS) bereit:{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-accent-coral hover:underline"
                >
                  ec.europa.eu/consumers/odr
                </a>
                .
              </p>
              <p>
                Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind
                nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor
                einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="mb-3 text-2xl font-semibold sm:text-3xl font-heading text-heading-charcoal">
                Haftungsausschluss (Disclaimer)
              </h2>
              <h3 className="mb-2 text-xl font-semibold font-heading text-heading-charcoal/90">
                Haftung für Inhalte
              </h3>
              <p className="mb-3 text-sm leading-relaxed sm:text-base">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
                Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                gespeicherte fremde Informationen zu überwachen oder nach
                Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                hinweisen. Verpflichtungen zur Entfernung oder Sperrung der
                Nutzung von Informationen nach den allgemeinen Gesetzen bleiben
                hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst
                ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung
                möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen
                werden wir diese Inhalte umgehend entfernen.
              </p>
              <h3 className="mb-2 text-xl font-semibold font-heading text-heading-charcoal/90">
                Haftung für Links
              </h3>
              <p className="mb-3 text-sm leading-relaxed sm:text-base">
                Unser Angebot enthält Links zu externen Websites Dritter, auf
                deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
                diese fremden Inhalte auch keine Gewähr übernehmen. Für die
                Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
                oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
                wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
                überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
                Verlinkung nicht erkennbar. Eine permanente inhaltliche
                Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
                Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
                Bekanntwerden von Rechtsverletzungen werden wir derartige Links
                umgehend entfernen.
              </p>
              <h3 className="mb-2 text-xl font-semibold font-heading text-heading-charcoal/90">
                Urheberrecht
              </h3>
              <p className="text-sm leading-relaxed sm:text-base">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                diesen Seiten unterliegen dem deutschen Urheberrecht. Die
                Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
                schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                Downloads und Kopien dieser Seite sind nur für den privaten,
                nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf
                dieser Seite nicht vom Betreiber erstellt wurden, werden die
                Urheberrechte Dritter beachtet. Insbesondere werden Inhalte
                Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
                Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
                entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
                werden wir derartige Inhalte umgehend entfernen.
              </p>
            </section>

            {/* "Erstellt von"-Hinweis */}
            <div className="flex flex-col items-center pt-6 mt-8 border-t border-subtle/60 sm:flex-row sm:justify-center sm:space-x-3">
              <img
                src="/images/logo/copyright-logo.png" // Pfad zu deinem Copyright-Logo
                alt="Smairys Netz-Manufaktur Logo"
                className="object-contain h-10 mb-2 sm:h-12 sm:mb-0" // Größe angepasst
              />
              <p className="text-sm text-center text-charcoal/80 font-body">
                Webdesign & Entwicklung von Smairys Netz-Manufaktur
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Impressum;
