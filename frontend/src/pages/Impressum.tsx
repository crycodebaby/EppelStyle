import { Helmet } from "react-helmet-async";
import FadeInSection from "../components/FadeInSection";

const Impressum = () => {
  return (
    <>
      <Helmet>
        <title>Impressum - EppelStyle Friseursalon</title>
        <meta
          name="description"
          content="Impressum von EppelStyle Friseursalon in Eppelborn, Saarland."
        />
        <meta name="robots" content="noindex" />
      </Helmet>
      <div className="relative py-16 bg-background">
        <FadeInSection>
          <div className="px-4 mx-auto max-w-7xl">
            <h1 className="mb-8 text-4xl font-bold text-center sm:text-5xl font-heading text-contrast">
              Impressum
            </h1>
            <div className="p-8 bg-highlight rounded-xl">
              <h2 className="mb-4 text-2xl font-semibold font-heading text-contrast">
                Angaben gemäß § 5 TMG
              </h2>
              <p className="mb-2 text-accent font-body">
                EppelStyle Friseursalon
              </p>
              <p className="mb-2 text-accent font-body">Kirchpl. 11</p>
              <p className="mb-2 text-accent font-body">
                66571 Eppelborn, Saarland
              </p>
              <p className="mb-2 text-accent font-body">Deutschland</p>
              <p className="mb-2 text-accent font-body">
                Telefon:{" "}
                <a
                  href="tel:068815951818"
                  className="text-primary hover:underline"
                >
                  06881 5951818
                </a>
              </p>
              <p className="mb-2 text-accent font-body">
                E-Mail:{" "}
                <a
                  href="mailto:info@eppelstyle.de"
                  className="text-primary hover:underline"
                >
                  info@eppelstyle.de
                </a>
              </p>

              <h2 className="mt-6 mb-4 text-2xl font-semibold font-heading text-contrast">
                Vertreten durch
              </h2>
              <p className="mb-2 text-accent font-body">
                Kesra Ibrahim (Inhaber)
              </p>

              <h2 className="mt-6 mb-4 text-2xl font-semibold font-heading text-contrast">
                Umsatzsteuer-ID
              </h2>
              <p className="mb-2 text-accent font-body">
                Nicht umsatzsteuerpflichtig gemäß § 19 UStG
              </p>

              <h2 className="mt-6 mb-4 text-2xl font-semibold font-heading text-contrast">
                Berufsbezeichnung und berufsrechtliche Regelungen
              </h2>
              <p className="mb-2 text-accent font-body">
                Berufsbezeichnung: Friseurmeister
              </p>
              <p className="mb-2 text-accent font-body">
                Zuständige Kammer: Handwerkskammer des Saarlandes
              </p>
              <p className="mb-2 text-accent font-body">
                Verliehen in: Deutschland
              </p>
              <p className="mb-2 text-accent font-body">
                Es gelten folgende berufsrechtliche Regelungen: Handwerksordnung
                (HwO)
                <br />
                Regelungen einsehbar unter:{" "}
                <a
                  href="https://www.gesetze-im-internet.de/hwo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  https://www.gesetze-im-internet.de/hwo/
                </a>
              </p>

              <h2 className="mt-6 mb-4 text-2xl font-semibold font-heading text-contrast">
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
              </h2>
              <p className="mb-2 text-accent font-body">Kesra Ibrahim</p>
              <p className="mb-2 text-accent font-body">Kirchpl. 11</p>
              <p className="mb-2 text-accent font-body">
                66571 Eppelborn, Saarland
              </p>

              <h2 className="mt-6 mb-4 text-2xl font-semibold font-heading text-contrast">
                Haftung für Inhalte
              </h2>
              <p className="mb-4 text-accent font-body">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
                Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                gespeicherte fremde Informationen zu überwachen oder nach
                Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                hinweisen.
              </p>

              <h2 className="mt-6 mb-4 text-2xl font-semibold font-heading text-contrast">
                Haftung für Links
              </h2>
              <p className="mb-4 text-accent font-body">
                Unser Angebot enthält Links zu externen Websites Dritter, auf
                deren Inhalte wir keinen Einfluss haben. Für die Inhalte der
                verlinkten Seiten ist stets der jeweilige Anbieter oder
                Betreiber der Seiten verantwortlich.
              </p>

              <h2 className="mt-6 mb-4 text-2xl font-semibold font-heading text-contrast">
                Urheberrecht
              </h2>
              <p className="mb-4 text-accent font-body">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                diesen Seiten unterliegen dem deutschen Urheberrecht. Die
                Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
                schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>

              <div className="flex items-center justify-center mt-8 space-x-4">
                <img
                  src="/images/logo/copyright-logo.png"
                  alt="Smairys Netz-Manufaktur Logo"
                  className="object-contain w-auto h-12"
                />
                <p className="text-accent font-body">
                  Erstellt von Smairys Netz-Manufaktur
                </p>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </>
  );
};

export default Impressum;
