import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // HIER WIRD DIE FEHLENDE VARIABLE DEFINIERT
  const eppelStyleInstagramLink = "https://www.instagram.com/eppel_style/";

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30); // Schwelle für Schatten leicht erhöht
    };
    window.addEventListener("scroll", handleScroll);
    // Schließe das mobile Menü, wenn die Fenstergröße sich ändert (z.B. von mobil zu desktop)
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        // sm breakpoint
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Klassen für Desktop Navigationslinks
  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `relative px-3 py-2 text-base font-semibold transition-colors duration-200 ease-out rounded-md font-body ${
      // font-semibold, mehr padding, schnellerer transition
      isActive
        ? "text-accent-coral"
        : "text-charcoal hover:text-accent-coral hover:bg-coral-light/40" // Subtiler Hover-Hintergrund
    }`;

  // Klassen für Mobile Navigationslinks
  const mobileNavLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `block px-4 py-3 text-lg font-semibold text-center transition-colors duration-200 ease-out rounded-md font-body ${
      isActive
        ? "text-accent-coral bg-coral-light/60" // Etwas stärkerer aktiver Hintergrund
        : "text-charcoal hover:text-accent-coral hover:bg-coral-light/50"
    }`;

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/leistungen", label: "Leistungen" },
    { to: "/galerie", label: "Galerie" },
    { to: "/ueber-uns", label: "Über Uns" },
    { to: "/kontakt", label: "Kontakt" },
  ];

  // Varianten für das mobile Menü
  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3, ease: "easeInOut", when: "afterChildren" },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.4, ease: "easeInOut", staggerChildren: 0.07 },
    },
  };

  // Varianten für die einzelnen Links im mobilen Menü
  const linkItemVariants = {
    closed: {
      opacity: 0,
      y: -15,
      transition: { duration: 0.2, ease: "easeIn" },
    },
    open: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
  };

  // Varianten für die Unterstreichung der Desktop-Links
  const underlineVariants = {
    initial: { width: "0%" },
    active: {
      width: "100%",
      transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
    }, // Eigene Ease-Funktion für sanften Start/Ende
    hover: { width: "100%", transition: { duration: 0.25, ease: "easeOut" } },
  };

  return (
    <motion.nav
      className={`sticky top-0 z-30 transition-all duration-300 ease-out ${
        // transition-all für sanfteren Höhen- und Schattenübergang
        isScrolled || isOpen ? "shadow-lg" : "shadow-none" // Stärkerer Schatten für mehr Tiefe
      } bg-creme/95 backdrop-blur-md`} // Etwas weniger Transparenz für bessere Lesbarkeit
      initial={{ y: -120, opacity: 0 }} // Startet weiter oben
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }} // Custom Ease für eleganten Eintritt
    >
      <div className="flex items-center justify-between h-20 max-w-screen-xl px-4 mx-auto sm:h-24 sm:px-6 lg:px-8">
        {" "}
        {/* Erhöhte Höhe, max-w-screen-xl für etwas mehr Breite */}
        {/* Logo */}
        <Link to="/" aria-label="Zur Startseite EppelStyle">
          <motion.img
            src="/images/logo/Friseurlogo-Barber-Saarland.png"
            alt="EppelStyle Logo"
            className="object-contain h-12 sm:h-16 lg:h-[70px]" // Logo deutlich größer und lesbarer
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.4,
              type: "spring",
              stiffness: 90,
            }}
            whileHover={{
              scale: 1.05,
              transition: { type: "spring", stiffness: 300 },
            }}
          />
        </Link>
        {/* Hamburger Menu für Mobilgeräte */}
        <div className="sm:hidden">
          <motion.button
            onClick={toggleMenu}
            className="p-2.5 rounded-md text-charcoal focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-coral focus-visible:ring-offset-2 focus-visible:ring-offset-creme"
            aria-label="Menü öffnen/schließen"
            aria-expanded={isOpen}
            whileHover={{
              scale: 1.1,
              backgroundColor: "rgba(255, 127, 80, 0.1)",
            }} // Leichter Hover-Hintergrund
            whileTap={{ scale: 0.9 }}
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {" "}
              {/* Icon etwas größer */}
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                variants={{
                  closed: { d: "M4 6h16M4 12h16M4 18h16" },
                  open: { d: "M6 18L18 6M6 6l12 12" },
                }}
                animate={isOpen ? "open" : "closed"}
                transition={{ duration: 0.3, ease: "circOut" }}
              />
            </svg>
          </motion.button>
        </div>
        {/* Desktop Navigation Links */}
        <ul className="hidden sm:flex sm:items-center sm:space-x-6 lg:space-x-8">
          {" "}
          {/* Etwas mehr Space */}
          {navItems.map((link, index) => (
            <motion.li
              key={link.to}
              className="relative" // Für die Positionierung der Unterstreichung
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.5 + index * 0.07, // Leicht angepasster Delay
                type: "spring",
                stiffness: 100,
                damping: 12,
              }}
              whileHover="hover" // Definiert den "hover" Zustand für Kind-Varianten
            >
              <NavLink
                to={link.to}
                className={navLinkClasses}
                aria-label={`Zu ${link.label}`}
              >
                {({ isActive }) => (
                  <>
                    <span className="relative z-10">{link.label}</span>{" "}
                    {/* Text über der Linie */}
                    <motion.span
                      className="absolute left-0 -bottom-1 h-[2.5px] bg-accent-coral rounded-full" // Linie etwas tiefer, abgerundet
                      variants={underlineVariants}
                      animate={isActive ? "active" : "initial"}
                      // Die 'hover' Variante wird durch whileHover des motion.li ausgelöst
                    />
                  </>
                )}
              </NavLink>
            </motion.li>
          ))}
          <motion.li
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: 0.5 + navItems.length * 0.07,
              type: "spring",
              stiffness: 100,
              damping: 12,
            }}
          >
            <a
              href={eppelStyleInstagramLink} // Hier wird die definierte Variable verwendet
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center transition-colors duration-300 text-charcoal hover:text-accent-coral group"
              aria-label="EppelStyle auf Instagram folgen"
            >
              <motion.svg
                className="w-6 h-6 fill-current sm:w-7 sm:h-7" // Icon etwas größer
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 250, damping: 10 }}
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.326 3.608 1.301.975.975 1.24 2.242 1.301 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.326 2.633-1.301 3.608-.975.975-2.242 1.24-3.608 1.301-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.326-3.608-1.301-.975-.975-1.24-2.242-1.301-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.326-2.633 1.301-3.608.975.975 2.242 1.24 3.608 1.301 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.547.07-2.928.398-4.014 1.484S1.625 3.977 1.555 5.524C1.497 6.804 1.483 7.212 1.483 12s.014 5.196.072 6.476c.07 1.547.398 2.928 1.484 4.014s2.477 1.414 4.014 1.484c1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.547-.07 2.928-.398 4.014-1.484s1.414-2.477 1.484-4.014c.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.07-1.547-.398-2.928-1.484-4.014s-2.477-1.414-4.014-1.484c-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.441s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.441-1.441-1.441z" />
              </motion.svg>
            </a>
          </motion.li>
        </ul>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className="absolute left-0 right-0 w-full px-4 py-3 overflow-hidden shadow-xl sm:hidden bg-creme"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {navItems.map((link) => (
              <motion.li
                key={link.to}
                variants={linkItemVariants}
                className="my-1.5"
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
              className="pt-3 mt-3 mb-1 border-t border-subtle/70"
            >
              <a
                href={eppelStyleInstagramLink} // Hier wird die definierte Variable verwendet
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center py-3 space-x-2.5 text-lg font-semibold text-center transition-colors duration-200 ease-out rounded-md text-charcoal hover:text-accent-coral hover:bg-coral-light/50 font-body"
                aria-label="EppelStyle auf Instagram folgen"
                onClick={toggleMenu}
              >
                <svg
                  className="w-6 h-6 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.326 3.608 1.301.975.975 1.24 2.242 1.301 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.326 2.633-1.301 3.608-.975.975-2.242 1.24-3.608 1.301-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.326-3.608-1.301-.975-.975-1.24-2.242-1.301-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.326-2.633 1.301-3.608.975.975 2.242 1.24 3.608 1.301 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.547.07-2.928.398-4.014 1.484S1.625 3.977 1.555 5.524C1.497 6.804 1.483 7.212 1.483 12s.014 5.196.072 6.476c.07 1.547.398 2.928 1.484 4.014s2.477 1.414 4.014 1.484c1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.547-.07 2.928-.398 4.014-1.484s1.414-2.477 1.484-4.014c.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.07-1.547-.398-2.928-1.484-4.014s-2.477-1.414-4.014-1.484c-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.441s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.441-1.441-1.441z" />
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
