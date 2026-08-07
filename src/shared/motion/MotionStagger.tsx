"use client";

import { Children, type ReactNode } from "react";
import { motion, useReducedMotion, type Transition, type Variants } from "framer-motion";

interface MotionStaggerProps {
  readonly children: ReactNode;
  readonly className?: string;
  readonly delay?: number;
  readonly duration?: number;
  readonly staggerDelay?: number;
}

const containerVariants: Variants = {
  hidden: {},
  visible: {},
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export function MotionStagger({
  children,
  className = "",
  delay = 0,
  duration = 0.4,
  staggerDelay = 0.08,
}: MotionStaggerProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const itemTransition: Transition = {
    duration,
    ease: "easeOut",
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      transition={{ delayChildren: delay, staggerChildren: staggerDelay }}
    >
      {Children.map(children, (child) => (
        <motion.div variants={itemVariants} transition={itemTransition}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
