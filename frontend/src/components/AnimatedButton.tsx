import { type ReactNode } from "react";
import { motion } from "framer-motion";
import type { MotionProps } from "framer-motion"; // Korrekter Typ-Import

interface AnimatedButtonProps {
  children: ReactNode;
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => void;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  type?: "button" | "submit" | "reset";
  ariaLabel?: string;
  disabled?: boolean;
  target?: string;
  rel?: string;
}

const AnimatedButton = ({
  children,
  onClick,
  href,
  variant = "primary",
  className = "",
  type = "button",
  ariaLabel,
  disabled = false,
  target,
  rel,
}: AnimatedButtonProps) => {
  const isLink = typeof href === "string";
  const Component = isLink ? motion.a : motion.button;

  const baseStyles =
    "relative inline-flex items-center justify-center overflow-hidden rounded-lg px-6 py-3 sm:px-7 sm:py-3.5 font-body text-base font-semibold tracking-normal transition-shadow duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-coral focus-visible:ring-offset-2 focus-visible:ring-offset-creme group disabled:opacity-60 disabled:cursor-not-allowed";

  // Vereinfachte Varianten-Stile ohne komplexe Hintergrundanimationen
  const variantStyles = {
    primary: `bg-accent-coral text-creme shadow-md ${disabled ? "" : "hover:brightness-110 hover:shadow-glow-coral"}`,
    secondary: `bg-transparent text-accent-coral border-2 border-accent-coral ${disabled ? "" : "hover:bg-coral-light"}`,
    ghost: `bg-transparent text-accent-coral ${disabled ? "" : "hover:bg-coral-light/50"}`,
  };

  // Motion Props für grundlegende Animationen
  const motionProps: MotionProps = {
    initial: { opacity: 0, scale: 0.97 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.3, type: "spring", stiffness: 170, damping: 17 }, // Leicht angepasste Feder
    whileTap: disabled
      ? {}
      : {
          scale: 0.96,
          transition: { type: "spring", stiffness: 400, damping: 17 },
        },
    whileHover: disabled
      ? {}
      : {
          scale: 1.03, // Beibehaltung der Skalierung beim Hovern
          // Die Hintergrundanimation für 'primary' wird nun über CSS :hover in `variantStyles` gesteuert (brightness)
          transition: { type: "spring", stiffness: 300, damping: 10 },
        },
  };

  const elementProps:
    | React.ButtonHTMLAttributes<HTMLButtonElement>
    | React.AnchorHTMLAttributes<HTMLAnchorElement> = {
    onClick,
    className: `${baseStyles} ${variantStyles[variant]} ${className}`,
    "aria-label":
      ariaLabel ||
      (typeof children === "string" ? children : "Animierter Button"),
    ...(isLink
      ? {
          href,
          target: target || (href!.startsWith("http") ? "_blank" : undefined),
          rel:
            rel ||
            (href!.startsWith("http") ? "noopener noreferrer" : undefined),
        }
      : { type, disabled }),
  };

  return (
    // @ts-expect-error TypeScript kann bei der Kombination von MotionProps und HTML-Attributen manchmal pingelig sein
    <Component {...elementProps} {...motionProps}>
      {/* Alle internen Canvas- und Glint-Effekte wurden entfernt, um die Sichtbarkeit zu gewährleisten */}
      <span className="relative z-10">{children}</span>
    </Component>
  );
};

export default AnimatedButton;
