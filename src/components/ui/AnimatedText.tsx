'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  variant?: 'fadeUp' | 'fadeIn' | 'typewriter';
}

export default function AnimatedText({ 
  children, 
  className = '',
  delay = 0,
  duration = 0.6,
  variant = 'fadeUp'
}: AnimatedTextProps) {
  const variants = {
    fadeUp: {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 }
    },
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1 }
    },
    typewriter: {
      initial: { opacity: 0 },
      animate: { opacity: 1 }
    }
  };

  return (
    <motion.div
      initial={variants[variant].initial}
      animate={variants[variant].animate}
      transition={{ delay, duration, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}