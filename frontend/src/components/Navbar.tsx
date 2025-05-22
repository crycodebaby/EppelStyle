import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.nav
      className="sticky top-0 z-20 p-2 sm:p-4 bg-background/80 backdrop-blur-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="flex items-center justify-between mx-auto max-w-7xl">
        {/* Logo */}
        <Link to="/" aria-label="Zur Startseite">
          <motion.img
            src="/images/logo/Friseurlogo-Barber-Saarland.png"
            alt="EppelStyle Logo"
            className="object-contain w-auto h-12 sm:h-20 lg:h-24 max-w-[150px] sm:max-w-[200px] logo"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
        </Link>

        {/* Hamburger Menu für Mobilgeräte */}
        <div className="sm:hidden">
          <motion.button
            onClick={toggleMenu}
            className="text-text focus:outline-none"
            aria-label="Menü öffnen/schließen"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg
              className="w-6 h-6 sm:w-8 sm:h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </motion.button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`sm:flex sm:space-x-6 lg:space-x-8 sm:items-center ${
            isOpen
              ? "flex flex-col absolute top-16 left-0 right-0 bg-background/90 p-4 backdrop-blur-md"
              : "hidden sm:flex"
          }`}
        >
          {[
            { to: "/", label: "Home" },
            { to: "/leistungen", label: "Leistungen" },
            { to: "/galerie", label: "Galerie" },
            { to: "/ueber-uns", label: "Über Uns" },
            { to: "/kontakt", label: "Kontakt" },
          ].map((link, index) => (
            <motion.li
              key={link.to}
              className="mb-3 sm:mb-0 group"
              variants={linkVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.1 }}
            >
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `relative text-base sm:text-lg font-heading text-text transition-colors duration-300 ${
                    isActive ? "text-primary" : "hover:text-primary"
                  }`
                }
                aria-label={`Zu ${link.label}`}
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    <motion.span
                      className="absolute left-0 bottom-0 h-0.5 bg-secondary"
                      initial={{ width: 0 }}
                      animate={{ width: isActive ? "100%" : "0%" }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </>
                )}
              </NavLink>
            </motion.li>
          ))}
          <motion.li
            variants={linkVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.5 }}
          >
            <a
              href="https://www.instagram.com/eppel_style/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center transition group"
              aria-label="Zu Instagram"
            >
              <motion.svg
                className="w-5 h-5 fill-current sm:w-6 sm:h-6 text-text group-hover:text-secondary"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.326 3.608 1.301.975.975 1.24 2.242 1.301 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.326 2.633-1.301 3.608-.975.975-2.242 1.24-3.608 1.301-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.326-3.608-1.301-.975-.975-1.24-2.242-1.301-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.326-2.633 1.301-3.608.975.975 2.242-1.24 3.608-1.301 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.547.07-2.928.398-4.014 1.484S1.625 3.977 1.555 5.524C1.497 6.804 1.483 7.212 1.483 12s.014 5.196.072 6.476c.07 1.547.398 2.928 1.484 4.014s2.477 1.414 4.014 1.484c1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.547-.07 2.928-.398 4.014-1.484s1.414-2.477 1.484-4.014c.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.07-1.547-.398-2.928-1.484-4.014s-2.477-1.414-4.014-1.484c-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.441s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.441-1.441-1.441z" />
              </motion.svg>
            </a>
          </motion.li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
