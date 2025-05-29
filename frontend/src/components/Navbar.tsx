import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20); // Navbar bekommt Schatten nach 20px Scroll
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `relative py-2 text-base font-medium transition-colors duration-300 font-body ${
      isActive ? "text-accent-coral" : "text-charcoal hover:text-accent-coral"
    }`;

  const mobileNavLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `block py-3 text-lg font-semibold text-center transition-colors duration-300 font-body ${
      isActive
        ? "text-accent-coral bg-coral-light/50 rounded-md"
        : "text-charcoal hover:text-accent-coral hover:bg-coral-light/50 rounded-md"
    }`;

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/leistungen", label: "Leistungen" },
    { to: "/galerie", label: "Galerie" },
    { to: "/ueber-uns", label: "Über Uns" },
    { to: "/kontakt", label: "Kontakt" },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.4, ease: "easeInOut", staggerChildren: 0.05 },
    },
  };

  const linkItemVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <motion.nav
      className={`sticky top-0 z-30 transition-shadow duration-300 ${
        // z-30 für Überlagerung
        isScrolled || isOpen ? "shadow-md" : "shadow-none"
      } bg-creme/90 backdrop-blur-lg`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
    >
      <div className="flex items-center justify-between h-16 px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl sm:h-20">
        {/* Logo */}
        <Link to="/" aria-label="Zur Startseite EppelStyle">
          <motion.img
            src="/images/logo/Friseurlogo-Barber-Saarland.png" // Dein Hauptlogo
            alt="EppelStyle Logo"
            className="object-contain h-10 sm:h-12 lg:h-14" // Angepasste, typische Navbar-Logo Größe
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          />
        </Link>

        {/* Hamburger Menu für Mobilgeräte */}
        <div className="sm:hidden">
          <motion.button
            onClick={toggleMenu}
            className="p-2 rounded-md text-charcoal focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-coral focus-visible:ring-offset-2 focus-visible:ring-offset-creme"
            aria-label="Menü öffnen/schließen"
            aria-expanded={isOpen}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                variants={{
                  closed: { d: "M4 6h16M4 12h16M4 18h16" },
                  open: { d: "M6 18L18 6M6 6l12 12" },
                }}
                animate={isOpen ? "open" : "closed"}
                transition={{ duration: 0.3 }}
              />
            </svg>
          </motion.button>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden sm:flex sm:items-center sm:space-x-5 lg:space-x-7">
          {navItems.map((link) => (
            <motion.li
              key={link.to}
              className="group"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.6 + navItems.indexOf(link) * 0.05,
              }}
            >
              <NavLink
                to={link.to}
                className={navLinkClasses}
                aria-label={`Zu ${link.label}`}
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    <motion.span
                      className="absolute left-0 -bottom-0.5 h-[2.5px] bg-accent-coral" // Position und Dicke der Linie angepasst
                      initial={{ width: isActive ? "100%" : "0%" }}
                      animate={{ width: isActive ? "100%" : "0%" }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      // Hover-Effekt für die Linie nur, wenn der Link nicht aktiv ist
                      variants={{
                        hover: { width: "100%" },
                        rest: { width: isActive ? "100%" : "0%" },
                      }}
                      whileHover="hover"
                      initial="rest"
                    />
                  </>
                )}
              </NavLink>
            </motion.li>
          ))}
          <motion.li
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 + navItems.length * 0.05 }}
          >
            <a
              href="https://www.instagram.com/eppel_style/" // Dein Instagram Link
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center transition-colors duration-300 text-charcoal hover:text-accent-coral group"
              aria-label="EppelStyle auf Instagram folgen"
            >
              <motion.svg
                className="w-5 h-5 fill-current sm:w-6 sm:h-6"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                whileHover={{ scale: 1.15, rotate: 3 }}
                transition={{ type: "spring", stiffness: 250, damping: 10 }}
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.326 3.608 1.301.975.975 1.24 2.242 1.301 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.326 2.633-1.301 3.608-.975.975-2.242 1.24-3.608 1.301-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.326-3.608-1.301-.975-.975-1.24-2.242-1.301-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.326-2.633 1.301-3.608.975.975 2.242-1.24 3.608-1.301 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.547.07-2.928.398-4.014 1.484S1.625 3.977 1.555 5.524C1.497 6.804 1.483 7.212 1.483 12s.014 5.196.072 6.476c.07 1.547.398 2.928 1.484 4.014s2.477 1.414 4.014 1.484c1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.547-.07 2.928-.398 4.014-1.484s1.414-2.477 1.484-4.014c.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.07-1.547-.398-2.928-1.484-4.014s-2.477-1.414-4.014-1.484c-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.441s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.441-1.441-1.441z" />
              </motion.svg>
            </a>
          </motion.li>
        </ul>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className="absolute left-0 right-0 w-full px-4 py-2 shadow-lg sm:hidden bg-creme" // Fester Hintergrund für bessere Lesbarkeit
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {navItems.map((link) => (
              <motion.li
                key={link.to}
                variants={linkItemVariants}
                className="my-1"
              >
                <NavLink
                  to={link.to}
                  className={mobileNavLinkClasses}
                  onClick={toggleMenu}
                  aria-label={`Zu ${link.label}`}
                >
                  {link.label}
                </NavLink>
              </motion.li>
            ))}
            <motion.li
              variants={linkItemVariants}
              className="pt-3 mt-3 mb-1 border-t border-subtle"
            >
              <a
                href="https://www.instagram.com/eppel_style/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center py-3 space-x-2 text-lg font-semibold text-center transition-colors duration-300 rounded-md text-charcoal hover:text-accent-coral hover:bg-coral-light/50 font-body"
                aria-label="EppelStyle auf Instagram folgen"
                onClick={toggleMenu}
              >
                <svg
                  className="w-6 h-6 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.326 3.608 1.301.975.975 1.24 2.242 1.301 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.326 2.633-1.301 3.608-.975.975-2.242 1.24-3.608 1.301-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.326-3.608-1.301-.975-.975-1.24-2.242-1.301-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.326-2.633 1.301-3.608.975.975 2.242-1.24 3.608-1.301 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.547.07-2.928.398-4.014 1.484S1.625 3.977 1.555 5.524C1.497 6.804 1.483 7.212 1.483 12s.014 5.196.072 6.476c.07 1.547.398 2.928 1.484 4.014s2.477 1.414 4.014 1.484c1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.547-.07 2.928-.398 4.014-1.484s1.414-2.477 1.484-4.014c.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.07-1.547-.398-2.928-1.484-4.014s-2.477-1.414-4.014-1.484c-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.441s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.441-1.441-1.441z" />
                </svg>
                <span>Instagram</span>
              </a>
            </motion.li>
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
