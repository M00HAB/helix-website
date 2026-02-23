import { useEffect, useRef, ReactNode } from "react";
import { motion, useInView } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  accent?: boolean;
  className?: string;
}

export const SectionTitle = ({ title, subtitle, accent, className = "" }: SectionTitleProps) => (
  <div className={`text-center mb-12 ${className}`}>
    <h2 className={`text-3xl lg:text-4xl font-bold mb-4 ${accent ? "text-accent" : "text-foreground"}`}>
      {title}
    </h2>
    {subtitle && (
      <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
    )}
  </div>
);

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const FadeIn = ({ children, className = "", delay = 0 }: FadeInProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
