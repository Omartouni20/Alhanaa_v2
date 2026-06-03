import type { ReactNode } from "react";
import { useRef } from "react";
import { motion, useInView } from "motion/react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function ScrollReveal({
  children,
  delay = 0,
  className = "",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-80px",
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{
        duration: 0.5,
        delay,
        ease: "easeOut",
      }}
      className={`w-full max-w-full overflow-x-hidden ${className}`}
    >
      {children}
    </motion.div>
  );
}