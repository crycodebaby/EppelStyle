import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  const footerSectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut", staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const smairysTextVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: (delay: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] },
    }),
  };

  const eppelStylePhoneNumber = "+4968815951818";
  const eppelStyleEmailAddress = "info@eppelstyle.de";
  const eppelStyleInstagramLink = "https://www.instagram.com/eppel_style/";

  const footerNavLinks = [
    { to: "/kontakt", label: "Kontakt" },
    { to: "/impressum", label: "Impressum" },
    { to: "/datenschutz", label: "Datenschutz" },
  ];

  const smairysMotto = "Wir weben digitale Präsenz, die begeistert.";

  return (
    <motion.footer
      className="bg-charcoal text-creme/80"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
      variants={footerSectionVariants}
    >
      {/* Oberer Teil: EppelStyle Informationen */}
      <div className="px-4 py-10 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 sm:gap-12">
          {/* EppelStyle Kontaktdaten */}
          <motion.div
            variants={itemVariants}
            className="text-center sm:text-left"
          >
            <h3 className="mb-4 text-lg font-semibold tracking-wider uppercase font-heading text-creme">
              EppelStyle
            </h3>
            <address className="space-y-1 text-sm not-italic sm:text-base font-body">
              <p>Kirchplatz 11</p>
              <p>66571 Eppelborn, Saarland</p>
              <p className="mt-2">
                Tel:{" "}
                <a
                  href={`tel:${eppelStylePhoneNumber}`}
                  className="transition-colors hover:text-accent-coral"
                >
                  {eppelStylePhoneNumber.replace("+49", "0")}
                </a>
              </p>
              <p>
                Mail:{" "}
                <a
                  href={`mailto:${eppelStyleEmailAddress}`}
                  className="transition-colors hover:text-accent-coral"
                >
                  {eppelStyleEmailAddress}
                </a>
              </p>
            </address>
          </motion.div>

          {/* Nützliche Links für EppelStyle */}
          <motion.div
            variants={itemVariants}
            className="text-center sm:text-left"
          >
            <h3 className="mb-4 text-lg font-semibold tracking-wider uppercase font-heading text-creme">
              Informationen
            </h3>
            <ul className="space-y-2">
              {footerNavLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm transition-colors duration-300 sm:text-base font-body hover:text-accent-coral"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Media für EppelStyle */}
          <motion.div
            variants={itemVariants}
            className="text-center sm:text-left md:text-right"
          >
            <h3 className="mb-4 text-lg font-semibold tracking-wider uppercase font-heading text-creme">
              Folgen Sie EppelStyle
            </h3>
            <div className="flex justify-center space-x-4 md:justify-end">
              <a
                href={eppelStyleInstagramLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="EppelStyle auf Instagram"
                className="transition-colors duration-300 text-creme/70 hover:text-accent-coral"
              >
                <motion.svg
                  className="w-6 h-6 fill-current"
                  viewBox="0 0 24 24"
                  whileHover={{ scale: 1.1, rotate: 3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.326 3.608 1.301.975.975 1.24 2.242 1.301 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.326 2.633-1.301 3.608-.975.975-2.242 1.24-3.608 1.301-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.326-3.608-1.301-.975-.975-1.24-2.242-1.301-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.326-2.633 1.301-3.608.975.975 2.242 1.24 3.608 1.301C7.15 2.225 7.53 2.163 12 2.163m0-2.163C8.74.001 8.333.015 7.053.072c-1.547.07-2.928.398-4.014 1.484S1.625 3.977 1.555 5.524C1.497 6.804 1.483 7.212 1.483 12s.014 5.196.072 6.476c.07 1.547.398 2.928 1.484 4.014s2.477 1.414 4.014 1.484c1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.547-.07 2.928-.398 4.014-1.484s1.414-2.477 1.484-4.014c.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.07-1.547-.398-2.928-1.484-4.014S16.023.072 14.476.001C13.196.015 12.788 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 11-2.881.001 1.44 1.44 0 012.881-.001z" />
                </motion.svg>
              </a>
            </div>
          </motion.div>
        </div>{" "}
        {/* Schließt grid */}
      </div>{" "}
      {/* Schließt EppelStyle Info-Container */}
      {/* Trennlinie */}
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <motion.hr
          className="my-8 border-t-2 border-accent-coral/30 sm:my-10"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />{" "}
        {/* motion.hr ist selbstschließend */}
      </div>
      {/* Unterer Teil: Smairys Netz-Manufaktur Branding */}
      <motion.div className="relative pt-10 pb-12 overflow-hidden bg-neutral-950 sm:pt-12 sm:pb-16">
        <motion.div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ff7f50' fill-opacity='0.4'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6zM24 20c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6zM42 6c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{
            duration: 40,
            ease: "linear",
            repeat: Infinity,
            repeatType: "mirror",
          }}
        ></motion.div>{" "}
        {/* Explizit geschlossen */}
        <div className="relative z-10 px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <motion.img
              src="/images/logo/copyright-logo.png"
              alt="Smairys Netz-Manufaktur Logo"
              className="h-20 mb-6 sm:h-24 md:h-28 lg:h-32"
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                type: "spring",
                stiffness: 80,
                damping: 15,
              }}
              whileHover={{
                scale: 1.08,
                filter: "drop-shadow(0 0 12px rgba(255,127,80,0.6))",
              }}
              animate={{
                scale: [1, 1.02, 1],
                transition: {
                  duration: 3,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 1,
                },
              }}
            />{" "}
            {/* motion.img ist selbstschließend */}
            <motion.h2
              className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl font-heading text-creme"
              variants={smairysTextVariants}
              custom={0.3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              Smairys Netz-Manufaktur
            </motion.h2>
            <motion.p
              className="mt-2 text-base italic sm:text-lg md:text-xl text-coral-light/90 font-body"
              variants={smairysTextVariants}
              custom={0.5}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              "{smairysMotto}"
            </motion.p>
            <motion.p
              className="mt-8 text-xs text-creme/60 font-body"
              variants={smairysTextVariants}
              custom={0.7}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              Eine Webseite, handgefertigt mit{" "}
              <span className="inline-block text-accent-coral animate-pulse-subtle">
                ♥
              </span>{" "}
              von Smairys Netz-Manufaktur
              <br />
              Copyright © {new Date().getFullYear()} Smairys Netz-Manufaktur.
              Alle Rechte vorbehalten.
            </motion.p>
          </div>{" "}
          {/* Schließt flex flex-col items-center */}
        </div>{" "}
        {/* Schließt relative z-10 ... */}
      </motion.div>{" "}
      {/* Schließt Smairys Branding Container */}
    </motion.footer>
  );
};

export default Footer;
