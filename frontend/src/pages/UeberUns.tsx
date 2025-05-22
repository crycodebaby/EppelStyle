import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";
import AnimatedButton from "../components/AnimatedButton";
import Button from "../components/Button";
import FadeInSection from "../components/FadeInSection";
import { motion } from "framer-motion";

const UeberUns = () => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, type: "spring", stiffness: 100 },
    },
  };

  return (
    <>
      <Helmet>
        <title>Über Uns - EppelStyle Friseursalon</title>
        <meta
          name="description"
          content="Lerne mehr über EppelStyle, deinen Friseursalon in Eppelborn mit Fokus auf modernes Design und Qualität."
        />
        <meta
          name="keywords"
          content="Friseursalon, Eppelborn, Über Uns, modernes Design, Saarland"
        />
      </Helmet>
      <Hero
        title="Über Uns"
        subtitle="Dein Friseursalon in Eppelborn mit elegantem Flair"
        image="/images/salon3.webp"
      />
      <div className="relative py-8 sm:py-12 lg:py-16 bg-background">
        {/* Sticky CTA Buttons */}
        <motion.div
          className="fixed z-50 flex flex-col space-y-2 bottom-4 sm:bottom-6 lg:bottom-8 right-4 sm:right-6 lg:right-8 sm:space-y-3"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 120 }}
        >
          <AnimatedButton href="/kontakt" className="shadow-glow">
            Termin buchen
          </AnimatedButton>
          <Button
            href="https://maps.app.goo.gl/jazXmeA7Mt5oTx2k6"
            className="flex items-center justify-center space-x-2 shadow-glow"
            aria-label="Finde uns auf Google Maps"
          >
            <svg
              className="w-4 h-4 fill-current sm:w-5 sm:h-5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 2.74 1.62 5.15 4 6.32V21h6v-5.68c2.38-1.17 4-3.58 4-6.32 0-3.87-3.13-7-7-7zm0 10c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
            </svg>
            <span>Finde uns!</span>
          </Button>
        </motion.div>

        <FadeInSection>
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl section-wrapper polka-dot">
            <svg
              className="hand-drawn-line z-[-1] opacity-60"
              viewBox="0 0 800 600"
            >
              <path
                d="M0 50 Q400 30 800 50"
                stroke="#FF5757"
                strokeWidth="2"
                fill="none"
              />
            </svg>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
              <motion.div
                className="p-6 sm:p-8 lg:col-span-3 bg-highlight rounded-xl group"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl font-heading text-heading">
                  Wer wir sind
                </h2>
                <p className="mb-4 text-base sm:text-lg lg:text-xl text-text font-body">
                  Am Kirchplatz 11 in Eppelborn hat Inhaber Kesra Ibrahim,
                  Friseurmeister mit langjähriger Erfahrung, den modernen
                  Friseursalon „EppelStyle“ eröffnet. Die Räumlichkeiten wurden
                  umfassend renoviert – größtenteils in Eigenleistung – und
                  bieten ein stilvolles Ambiente, das zum Wohlfühlen einlädt.
                </p>
                <p className="mb-4 text-base sm:text-lg lg:text-xl text-text font-body">
                  „Es ist erfreulich, dass sich mit EppelStyle ein weiterer
                  moderner Dienstleistungsbetrieb in unserer Gemeinde
                  ansiedelt“, so Bürgermeister Andreas Feld bei seinem Besuch im
                  Salon.
                </p>
                <p className="mb-4 text-base sm:text-lg lg:text-xl text-text font-body">
                  Als Meisterbetrieb legen wir großen Wert auf Qualität und
                  Kundenzufriedenheit. Unser Team aus erfahrenen Friseurmeistern
                  bietet klassische und moderne Haarschnitte nach Ihren Wünschen
                  – für jeden Anlass.
                </p>
                <div className="absolute inset-0 pointer-events-none">
                  <div className="polka-particle polka-particle-1"></div>
                  <div className="polka-particle polka-particle-2"></div>
                  <div className="polka-particle polka-particle-3"></div>
                  <div className="spark spark-1"></div>
                  <div className="spark spark-2"></div>
                  <div className="spark spark-3"></div>
                </div>
              </motion.div>
              <motion.div
                className="lg:col-span-2"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
              >
                <div className="relative">
                  <img
                    src="/images/salon1.webp"
                    alt="Salon Innenraum"
                    className="object-cover w-full h-64 sm:h-80 lg:h-96 rounded-xl"
                    loading="lazy"
                    srcSet={`${"/images/salon1.webp"} 1x, ${"/images/salon1-2x.webp"} 2x`}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <svg
                    className="absolute inset-0 hand-drawn-line z-[-1] opacity-60"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                  >
                    <motion.path
                      d="M5 5 Q50 10 95 5 T95 95 Q50 90 5 95 T5 5 Z"
                      fill="none"
                      stroke="#FF5757"
                      strokeWidth="2"
                      strokeDasharray="1000"
                      strokeDashoffset="1000"
                      animate={{ strokeDashoffset: [1000, 0] }}
                      transition={{ duration: 2, ease: "easeInOut" }}
                    />
                  </svg>
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="polka-particle polka-particle-1"></div>
                    <div className="polka-particle polka-particle-2"></div>
                    <div className="polka-particle polka-particle-3"></div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="px-4 mx-auto mt-12 text-center sm:px-6 lg:px-8 sm:mt-16 max-w-7xl section-wrapper polka-dot">
            <svg
              className="hand-drawn-line z-[-1] opacity-60"
              viewBox="0 0 800 600"
            >
              <path
                d="M0 50 Q400 30 800 50"
                stroke="#FF5757"
                strokeWidth="2"
                fill="none"
              />
            </svg>
            <h2 className="mb-8 text-3xl font-bold sm:text-4xl lg:text-5xl font-heading text-heading">
              Unser Team
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Kesra Ibrahim",
                  role: "Inhaber & Friseurmeister",
                  image: "/images/team/kesra.jpg",
                  desc: "Kesra Ibrahim ist Friseurmeister mit langjähriger Erfahrung und spezialisiert auf klassische und moderne Haarschnitte.",
                },
                {
                  name: "Teammitglied 1",
                  role: "Friseurmeister",
                  image: "/images/team/placeholder.jpg",
                  desc: "Unser Teammitglied ist Experte für Dauerwellen und Haarfärbungen.",
                },
                {
                  name: "Teammitglied 2",
                  role: "Friseurmeister",
                  image: "/images/team/placeholder.jpg",
                  desc: "Spezialisiert auf Kinderhaarschnitte und Haarglättungen.",
                },
              ].map((member, index) => (
                <motion.div
                  key={index}
                  className="relative p-4 group bg-highlight rounded-xl sm:p-6"
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <div className="relative w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full bg-primary/20">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="object-cover w-full h-full transition-transform duration-500 transform group-hover:scale-110"
                      loading="lazy"
                    />
                    <svg
                      className="absolute inset-0 hand-drawn-line z-[-1] opacity-60"
                      viewBox="0 0 100 100"
                      preserveAspectRatio="none"
                    >
                      <motion.path
                        d="M5 5 Q50 10 95 5 T95 95 Q50 90 5 95 T5 5 Z"
                        fill="none"
                        stroke="#FF5757"
                        strokeWidth="2"
                        strokeDasharray="1000"
                        strokeDashoffset="1000"
                        animate={{ strokeDashoffset: [1000, 0] }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        className="group-hover:animate-drawIcon"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-xl font-semibold sm:text-2xl font-heading text-heading">
                    {member.name}
                  </h3>
                  <p className="text-base sm:text-lg text-text font-body">
                    {member.role}
                  </p>
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center transition-opacity duration-500 opacity-0 bg-primary/80 group-hover:opacity-100 rounded-xl"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <p className="px-4 text-sm sm:text-base text-accent font-body">
                      {member.desc}
                    </p>
                  </motion.div>
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="polka-particle polka-particle-1"></div>
                    <div className="polka-particle polka-particle-2"></div>
                    <div className="polka-particle polka-particle-3"></div>
                    <div className="spark spark-1"></div>
                    <div className="spark spark-2"></div>
                    <div className="spark spark-3"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeInSection>
      </div>
    </>
  );
};

export default UeberUns;
