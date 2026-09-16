"use client";

import { AnimatePresence, motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

// Orchestrates the stagger timing only; child items (see `staggerItem`
// below) carry the actual opacity/position animation. Because this
// container is what AnimatePresence watches, unmounting it cascades an
// "exit" down to every child automatically — the reverse stagger direction
// makes items fold away in the opposite order they appeared in.
export const staggerContainer: Variants = {
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.04 },
  },
  hidden: {
    transition: { staggerChildren: 0.045, staggerDirection: -1 },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: -8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.25, ease: "easeOut" },
  },
};

interface StaggeredRevealProps {
  show: boolean;
  children: ReactNode;
  className?: string;
}

// Wraps a ShowMoreToggle-controlled block of items so expanding/collapsing
// reveals them one by one instead of popping in/out all at once. Each direct
// child should be a `motion` element using the exported `staggerItem`
// variants (no need to set its own initial/animate/exit — it inherits them
// from this container).
export function StaggeredReveal({
  show,
  children,
  className,
}: StaggeredRevealProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className={className}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
