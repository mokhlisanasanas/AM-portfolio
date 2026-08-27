"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion, type Transition } from "framer-motion";

interface MotionCardProps {
  readonly children: ReactNode;
  readonly className?: string;
  readonly borderEmphasis?: boolean;
}

const interactionTransition: Transition = {
  duration: 0.2,
  ease: [0.2, 0, 0, 1],
};

export function MotionCard({
  children,
  className = "",
  borderEmphasis = false,
}: MotionCardProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      whileHover={{
        y: -2,
        boxShadow: "var(--component-card-shadow)",
        borderColor: borderEmphasis
          ? "var(--color-border)"
          : "var(--component-card-border)",
      }}
      transition={interactionTransition}
    >
      {children}
    </motion.div>
  );
}
