"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion, type Transition, type Variants } from "framer-motion";

interface MotionRevealProps {
  readonly children: ReactNode;
  readonly className?: string;
  readonly delay?: number;
  readonly duration?: number;
}

const revealVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 12,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export function MotionReveal({
  children,
  className = "",
  delay = 0,
  duration = 0.45,
}: MotionRevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const transition: Transition = {
    delay,
    duration,
    ease: "easeOut",
  };

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={revealVariants}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}
