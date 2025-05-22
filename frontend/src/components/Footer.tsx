import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  const linkVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.footer
      className="relative py-8 mt-10 sm:py-12 bg-background/90 backdrop-blur-md text-text"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1 }}
      />
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 gap-8 sm:gap-12 sm:grid-cols-2 md:grid-cols-3">
          <motion.div
            className="text-center sm:text-left"
            variants={linkVariants}
            initial="hidden"
            animate="visible"
          >
            <h3 className="relative mb-6 text-lg font-bold sm:text-xl lg:text-2xl font-heading text-heading">
              EppelStyle
              <motion.span
                className="absolute left-1/2 sm:left-0 transform -translate-x-1/2 sm:-translate-x-0 bottom-0 h-0.5 w-12 bg-secondary"
                initial={{ width: 0 }}
                animate={{ width: 48 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />
            </h3>
            <p className="mb-3 text-sm sm:text-base text-text/80 font-body">
              Kirchpl. 11, 66571 Eppelborn, Saarland
            </p>
            <p className="mb-3 text-sm sm:text-base text-text/80 font-body">
              Telefon:{" "}
              <a
                href="tel:068815951818"
                className="transition hover:text-secondary"
              >
                06881 5951818
              </a>
            </p>
            <p className="text-sm sm:text-base text-text/80 font-body">
              E-Mail:{" "}
              <a
                href="mailto:info@eppelstyle.de"
                className="transition hover:text-secondary"
              >
                info@eppelstyle.de
              </a>
            </p>
          </motion.div>
          <motion.div
            className="text-center"
            variants={linkVariants}
            initial="hidden"
            animate="visible"
          >
            <h3 className="relative mb-6 text-lg font-bold sm:text-xl lg:text-2xl font-heading text-heading">
              Links
              <motion.span
                className="absolute left-1/2 transform -translate-x-1/2 bottom-0 h-0.5 w-12 bg-secondary"
                initial={{ width: 0 }}
                animate={{ width: 48 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />
            </h3>
            <ul className="space-y-3">
              {[
                { to: "/kontakt", label: "Kontakt" },
                { to: "/impressum", label: "Impressum" },
                { to: "/datenschutz", label: "Datenschutz" },
              ].map((link, index) => (
                <motion.li
                  key={link.to}
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.to}
                    className="relative text-sm transition sm:text-base font-body text-text/80 hover:text-secondary group"
                  >
                    {link.label}
                    <motion.span
                      className="absolute left-0 bottom-0 h-0.5 bg-secondary"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            className="text-center md:text-right"
            variants={linkVariants}
            initial="hidden"
            animate="visible"
          >
            <h3 className="relative mb-6 text-lg font-bold sm:text-xl lg:text-2xl font-heading text-heading">
              Folge Uns
              <motion.span
                className="absolute left-1/2 md:left-auto md:right-0 transform -translate-x-1/2 md:translate-x-0 bottom-0 h-0.5 w-12 bg-secondary"
                initial={{ width: 0 }}
                animate={{ width: 48 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />
            </h3>
            <div className="flex justify-center space-x-4 sm:space-x-6 md:justify-end">
              {[
                {
                  href: "https://www.instagram.com/eppel_style/",
                  label: "Instagram",
                  path: "M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.326 3.608 1.301.975.975 1.24 2.242 1.301 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.326 2.633-1.301 3.608-.975.975-2.242 1.24-3.608 1.301-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.326-3.608-1.301-.975-.975-1.24-2.242-1.301-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.326-2.633 1.301-3.608.975.975 2.242-1.24 3.608-1.301 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.547.07-2.928.398-4.014 1.484S1.625 3.977 1.555 5.524C1.497 6.804 1.483 7.212 1.483 12s.014 5.196.072 6.476c.07 1.547.398 2.928 1.484 4.014s2.477 1.414 4.014 1.484c1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.547-.07 2.928-.398 4.014-1.484s1.414-2.477 1.484-4.014c.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.07-1.547-.398-2.928-1.484-4.014s-2.477-1.414-4.014-1.484c-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.441s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.441-1.441-1.441z",
                },
                {
                  href: "https://facebook.com",
                  label: "Facebook",
                  path: "M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z",
                },
              ].map((social, index) => (
                <motion.a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group"
                  aria-label={social.label}
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.svg
                    className="w-5 h-5 transition fill-current sm:w-6 sm:h-6 text-text/80 group-hover:text-secondary"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <path d={social.path} />
                  </motion.svg>
                  <span className="absolute hidden p-2 mb-2 text-sm transform -translate-x-1/2 rounded-lg shadow-lg bottom-full left-1/2 group-hover:block bg-primary text-accent font-body">
                    {social.label}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
        <motion.div
          className="relative pt-6 mt-8 text-center border-t sm:pt-8 sm:mt-12 border-text/20"
          variants={linkVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="absolute top-0 w-24 h-1 transform -translate-x-1/2 left-1/2 bg-gradient-to-r from-transparent via-primary to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5 }}
          />
          <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <motion.img
              src="/images/logo/copyright-logo.png"
              alt="Smairys Netz-Manufaktur Logo"
              className="object-contain w-auto h-16 sm:h-20 lg:h-24 max-w-[200px] sm:max-w-[250px] logo"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            />
            <p className="text-sm sm:text-base text-text/80 font-body">
              Copyright © 2025 Smairys Netz-Manufaktur. Alle Rechte
              vorbehalten.
            </p>
          </div>
          <p className="mt-2 text-xs sm:text-sm text-text/50 font-body">
            Designed & Built with 💖 by Smairys Netz-Manufaktur
          </p>
        </motion.div>
      </div>
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1 }}
      />
    </motion.footer>
  );
};

export default Footer;
