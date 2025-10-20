'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SlideLayoutProps {
  children: ReactNode;
  className?: string;
  background?: 'gradient' | 'solid' | 'pattern';
}

export default function SlideLayout({ 
  children, 
  className = '',
  background = 'gradient'
}: SlideLayoutProps) {
  const backgroundClass = {
    gradient: 'bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900',
    solid: 'bg-slate-900',
    pattern: 'bg-slate-900 bg-opacity-90'
  }[background];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={`
        min-h-screen w-full flex flex-col justify-center items-center
        ${backgroundClass}
        text-white relative
        ${className}
      `}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3b82f6,transparent)] opacity-30" />
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-8 py-16 max-h-screen overflow-y-auto">
        <div className="py-8">
          {children}
        </div>
      </div>
    </motion.div>
  );
}