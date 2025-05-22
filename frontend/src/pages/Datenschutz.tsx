import { Helmet } from "react-helmet-async";

const Datenschutz = () => {
  return (
    <>
      <Helmet>
        <title>Datenschutz - EppelStyle Friseursalon</title>
        <meta
          name="description"
          content="Datenschutzerklärung von EppelStyle Friseursalon in Eppelborn, Saarland."
        />
        <meta name="robots" content="noindex" />
      </Helmet>
      <div className="relative bg-background py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-contrast mb-8 text-center animate-fade-in">
            Datenschutzerklärung
          </h1>
          <div className="bg-highlight p-8 rounded-xl">
            <h2 className="text-2xl font-semibold text-contrast mb-4">
              1. Datenschutz auf einen Blick
            </h2>
            <h3 className="text-xl font-semibold text-contrast mb-2">
              Allgemeine Hinweise
            </h3>
            <p className="text-accent mb-4">
              Die folgenden Hinweise geben einen einfachen Überblick darüber,
              was mit Ihren personenbezogenen Daten passiert, wenn Sie diese
              Website besuchen. Personenbezogene Daten sind alle Daten, mit
              denen Sie persönlich identifiziert werden können.
            </p>
            <h3 className="text-xl font-semibold text-contrast mb-2">
              Datenerfassung auf dieser Website
            </h3>
            <p className="text-accent mb-4">
              Diese Website sammelt keine personenbezogenen Daten automatisch.
              Beim Nutzen des Kontaktformulars werden die von Ihnen eingegebenen
              Daten (Name, E-Mail, Nachricht) an Formspree weitergeleitet.
            </p>

            <h2 className="text-2xl font-semibold text-contrast mt-6 mb-4">
              2. Allgemeine Hinweise und Pflichtinformationen
            </h2>
            <h3 className="text-xl font-semibold text-contrast mb-2">
              Datenschutz
            </h3>
            <p className="text-accent mb-4">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen
              Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
              vertraulich und entsprechend der gesetzlichen
              Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
            <h3 className="text-xl font-semibold text-contrast mb-2">
              Verantwortlicher
            </h3>
            <p className="text-accent mb-2">EppelStyle Friseursalon</p>
            <p className="text-accent mb-2">Kirchpl. 11</p>
            <p className="text-accent mb-2">66571 Eppelborn, Saarland</p>
            <p className="text-accent mb-2">E-Mail: info@eppelstyle.de</p>

            <h3 className="text-xl font-semibold text-contrast mt-4 mb-2">
              Widerruf Ihrer Einwilligung zur Datenverarbeitung
            </h3>
            <p className="text-accent mb-4">
              Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen
              Einwilligung möglich. Sie können eine bereits erteilte
              Einwilligung jederzeit widerrufen. Dazu reicht eine formlose
              Mitteilung per E-Mail an uns.
            </p>

            <h3 className="text-xl font-semibold text-contrast mt-4 mb-2">
              Beschwerderecht bei der zuständigen Aufsichtsbehörde
            </h3>
            <p className="text-accent mb-4">
              Im Falle datenschutzrechtlicher Verstöße steht dem Betroffenen ein
              Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
              Zuständige Aufsichtsbehörde in datenschutzrechtlichen Fragen ist
              die Landesbeauftragte für Datenschutz und Informationsfreiheit des
              Saarlandes.
            </p>

            <h3 className="text-xl font-semibold text-contrast mt-4 mb-2">
              Recht auf Datenübertragbarkeit
            </h3>
            <p className="text-accent mb-4">
              Sie haben das Recht, Daten, die wir auf Grundlage Ihrer
              Einwilligung oder in Erfüllung eines Vertrags automatisiert
              verarbeiten, an sich oder an einen Dritten in einem gängigen,
              maschinenlesbaren Format aushändigen zu lassen.
            </p>

            <h2 className="text-2xl font-semibold text-contrast mt-6 mb-4">
              3. Datenerfassung auf dieser Website
            </h2>
            <h3 className="text-xl font-semibold text-contrast mb-2">
              Server-Log-Dateien
            </h3>
            <p className="text-accent mb-4">
              Der Provider der Seiten erhebt und speichert automatisch
              Informationen in sogenannten Server-Log-Dateien, die Ihr Browser
              automatisch an uns übermittelt. Dies sind:
              <ul className="list-disc list-inside mt-2">
                <li>Browsertyp und Browserversion</li>
                <li>Verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse</li>
              </ul>
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird
              nicht vorgenommen.
            </p>

            <h3 className="text-xl font-semibold text-contrast mt-4 mb-2">
              Kontaktformular
            </h3>
            <p className="text-accent mb-4">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden
              Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort
              angegebenen Kontaktdaten (Name, E-Mail, Nachricht) an Formspree
              weitergeleitet und dort verarbeitet. Weitere Informationen finden
              Sie in der Datenschutzerklärung von Formspree:{" "}
              <a
                href="https://formspree.io/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Formspree Datenschutz
              </a>
              .
            </p>

            <h2 className="text-2xl font-semibold text-contrast mt-6 mb-4">
              4. Plugins und Tools
            </h2>
            <h3 className="text-xl font-semibold text-contrast mb-2">
              Google Maps
            </h3>
            <p className="text-accent mb-4">
              Diese Seite nutzt den Kartendienst Google Maps. Anbieter ist die
              Google Ireland Limited („Google“), Gordon House, Barrow Street,
              Dublin 4, Irland. Zur Nutzung der Funktionen von Google Maps ist
              es notwendig, Ihre IP-Adresse zu speichern. Diese Informationen
              werden in der Regel an einen Server von Google in den USA
              übertragen und dort gespeichert. Der Anbieter dieser Seite hat
              keinen Einfluss auf diese Datenübertragung. Weitere Informationen
              zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung
              von Google:{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                https://policies.google.com/privacy
              </a>
              .
            </p>

            <h2 className="text-2xl font-semibold text-contrast mt-6 mb-4">
              5. Externe Links
            </h2>
            <p className="text-accent mb-4">
              Unsere Website enthält Links zu externen Websites (z. B.
              Instagram, Google). Für die Datenschutzpraktiken dieser Websites
              sind wir nicht verantwortlich.
            </p>

            <div className="flex justify-center items-center space-x-2 mt-6">
              <p className="text-accent">Erstellt von</p>
              <img
                src="/images/logo/copyright-logo.png"
                alt="Smairys Netz-Manufaktur Logo"
                className="h-6 w-auto object-contain"
              />
              <p className="text-accent">Smairys Netz-Manufaktur</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Datenschutz;
