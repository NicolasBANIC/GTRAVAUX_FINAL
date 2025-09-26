'use client';

import { motion } from 'framer-motion';
import type { MotionProps } from 'framer-motion';
import type { HTMLAttributes, PropsWithChildren } from 'react';

// Accept Framer Motion props and standard div HTML props
// Keep public API the same; just avoid destructuring 'animate' so it can be forwarded via ...rest

type ClientMotionDivProps = PropsWithChildren<
  {
    className?: string;
    initial?: MotionProps['initial'];
    whileInView?: MotionProps['whileInView'];
    viewport?: MotionProps['viewport'];
    transition?: MotionProps['transition'];
    delay?: number;
    immediateVisible?: boolean; // New prop for hero sections
  } & MotionProps & HTMLAttributes<HTMLDivElement>
>;

export default function ClientMotionDiv({
  children,
  className = '',
  initial = { opacity: 0, y: 20 },
  // NOTE: Do not destructure 'animate' to avoid unused var error; it will be forwarded via ...rest
  whileInView = { opacity: 1, y: 0 },
  viewport = { once: true },
  transition = { duration: 0.6 },
  delay = 0,
  immediateVisible = false,
  ...rest
}: ClientMotionDivProps) {
  // Configuration pour affichage immédiat (sections héros)
  if (immediateVisible) {
    return (
      <motion.div
        className={className}
        initial={initial}
        {...rest}
        // Force immediate visibility animation
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...transition, delay }}
      >
        {children}
      </motion.div>
    );
  }

  // Configuration standard avec whileInView
  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      transition={{ ...transition, delay }}
      {...rest} // Forward props like 'animate' and any other Motion/HTML props
    >
      {children}
    </motion.div>
  );
}