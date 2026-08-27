"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion, type Transition } from "framer-motion";

interface MotionButtonProps {
  readonly children: ReactNode;
  readonly className?: string;
  readonly disabled?: boolean;
}

const interactionTransition: Transition = {
  duration: 0.18,
  ease: [0.2, 0, 0, 1],
};

export function MotionButton({
  children,
  className = "",
  disabled = false,
}: MotionButtonProps) {
  const shouldReduceMotion = useReducedMotion();
  const wrapperClassName = ["inline-flex max-w-full", className].join(" ");

  if (shouldReduceMotion || disabled) {
    return <span className={wrapperClassName}>{children}</span>;
  }

  return (
    <motion.span
      className={wrapperClassName}
      whileHover={{ y: -2, scale: 1.01 }}
      whileTap={{ y: 0, scale: 0.99 }}
      transition={interactionTransition}
    >
      {children}
    </motion.span>
  );
}
