import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  const sectionVariants = {
    // Umbenannt von linkVariants für Klarheit
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    // Für einzelne Listenelemente oder Absätze
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const socialLinks = [
    {
      href: "https://www.instagram.com/eppel_style/", // Dein Instagram Link
      label: "Instagram",
      path: "M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.326 3.608 1.301.975.975 1.24 2.242 1.301 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.326 2.633-1.301 3.608-.975.975-2.242 1.24-3.608 1.301-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.326-3.608-1.301-.975-.975-1.24-2.242-1.301-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.326-2.633 1.301-3.608.975.975 2.242-1.24 3.608-1.301 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.547.07-2.928.398-4.014 1.484S1.625 3.977 1.555 5.524C1.497 6.804 1.483 7.212 1.483 12s.014 5.196.072 6.476c.07 1.547.398 2.928 1.484 4.014s2.477 1.414 4.014 1.484c1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.547-.07 2.928-.398 4.014-1.484s1.414-2.477 1.484-4.014c.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.07-1.547-.398-2.928-1.484-4.014s-2.477-1.414-4.014-1.484c-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.441s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.441-1.441-1.441z",
    },
    // { // Beispiel für Facebook, falls du es hinzufügen möchtest
    //   href: "https://facebook.com/eppelstyle",
    //   label: "Facebook",
    //   path: "M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z",
    // },
  ];

  const footerLinks = [
    { to: "/kontakt", label: "Kontakt & Anfahrt" },
    { to: "/impressum", label: "Impressum" },
    { to: "/datenschutz", label: "Datenschutz" },
  ];

  return (
    <motion.footer
      className="relative pt-10 pb-8 mt-16 sm:pt-12 sm:pb-10 bg-charcoal text-creme/90" // Dunkler Footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Dekorative Linie oben */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent-coral to-transparent opacity-80"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      />

      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 gap-10 sm:gap-12 md:grid-cols-3">
          {/* Kontaktdaten */}
          <motion.div
            className="text-center sm:text-left"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="relative inline-block mb-5 text-xl font-semibold font-heading text-creme">
              EppelStyle Friseur
              <motion.span // Unterstrich
                className="absolute left-0 -bottom-1.5 h-[2px] w-full bg-accent-coral"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
              />
            </h3>
            <motion.p
              variants={itemVariants}
              className="mb-2 text-sm sm:text-base font-body"
            >
              Kirchplatz 11
              <br />
              66571 Eppelborn, Saarland
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="mb-2 text-sm sm:text-base font-body"
            >
              Telefon:{" "}
              <a
                href="tel:+4968815951818" // Korrekte Nummer
                className="transition-colors duration-300 hover:text-accent-coral"
              >
                06881 5951818
              </a>
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base font-body"
            >
              E-Mail:{" "}
              <a
                href="mailto:info@eppelstyle.de" // Korrekte Mail
                className="transition-colors duration-300 hover:text-accent-coral"
              >
                info@eppelstyle.de
              </a>
            </motion.p>
            <motion.img
              variants={itemVariants}
              src="/images/logo/Friseurlogo-Barber-Saarland_weiss_transparent.png" // Weißes Logo für dunklen Hintergrund
              alt="EppelStyle Logo Weiß"
              className="h-16 mx-auto mt-6 sm:mx-0 opacity-80"
            />
          </motion.div>

          {/* Nützliche Links */}
          <motion.div
            className="text-center"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="relative inline-block mb-5 text-xl font-semibold font-heading text-creme">
              Informationen
              <motion.span
                className="absolute left-0 -bottom-1.5 h-[2px] w-full bg-accent-coral"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
              />
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.map(
                (
                  link // 'index' komplett entfernt
                ) => (
                  <motion.li key={link.to} variants={itemVariants}>
                    <Link
                      to={link.to}
                      className="relative text-sm transition-colors duration-300 sm:text-base font-body hover:text-accent-coral group"
                    >
                      {link.label}
                      <span // Subtiler Unterstrich-Effekt für Links
                        className="absolute left-0 bottom-0 block h-[1px] w-0 bg-accent-coral transition-all duration-300 group-hover:w-full"
                      ></span>
                    </Link>
                  </motion.li>
                )
              )}
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div
            className="text-center md:text-right"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="relative inline-block mb-5 text-xl font-semibold font-heading text-creme">
              Folgen Sie uns
              <motion.span
                className="absolute left-0 -bottom-1.5 h-[2px] w-full bg-accent-coral"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
              />
            </h3>
            <div className="flex items-center justify-center space-x-5 md:justify-end">
              {socialLinks.map(
                (
                  social // 'index' komplett entfernt
                ) => (
                  <motion.a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative transition-colors duration-300 group text-creme/80 hover:text-accent-coral"
                    aria-label={social.label}
                    variants={itemVariants}
                    whileHover={{ y: -2, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <svg
                      className="w-6 h-6 fill-current sm:w-7 sm:h-7"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d={social.path} />
                    </svg>
                    <span // Tooltip für Social Icons
                      className="absolute hidden px-2 py-1 mb-2 text-xs transition-opacity duration-200 delay-100 transform -translate-x-1/2 rounded-md shadow-lg opacity-0 group-hover:opacity-100 bottom-full left-1/2 bg-accent-coral text-creme font-body whitespace-nowrap"
                    >
                      {social.label}
                    </span>
                  </motion.a>
                )
              )}
            </div>
            {/* Optional: Hinweis auf Öffnungszeiten */}
            <motion.p
              variants={itemVariants}
              className="mt-6 text-sm text-center text-creme/70 md:text-right font-body"
            >
              Mo – Sa: 09:00 – 19:00 Uhr
            </motion.p>
          </motion.div>
        </div>

        {/* Copyright Bereich */}
        <motion.div
          className="pt-8 mt-10 text-center border-t sm:pt-10 sm:mt-12 border-creme/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          {/* Smairys Netz-Manufaktur Logo bleibt hier, da es im Original-Code war */}
          <img
            src="/images/logo/copyright-logo.png" // Pfad zu deinem Copyright-Logo
            alt="Smairys Netz-Manufaktur Logo"
            className="h-12 mx-auto mb-3 opacity-70 sm:h-14" // Größe angepasst
          />
          <p className="text-sm text-creme/70 font-body">
            Copyright © {new Date().getFullYear()} Smairys Netz-Manufaktur.
            Alle Rechte vorbehalten.
          </p>
          <p className="mt-1 text-xs text-creme/50 font-body">
            Designed & Built with{" "}
            <span className="inline-block text-accent-coral animate-pulse-subtle">
              💖
            </span>{" "}
            by Smairys Netz-Manufaktur
          </p>
        </motion.div>
      </div>
      {/* Dekorative Linie unten */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent-coral to-transparent opacity-80"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      />
    </motion.footer>
  );
};

export default Footer;
