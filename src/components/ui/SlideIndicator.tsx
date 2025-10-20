'use client';

import { motion } from 'framer-motion';

interface SlideIndicatorProps {
  totalSlides: number;
  currentSlide: number;
  onSlideClick: (index: number) => void;
  className?: string;
}

export default function SlideIndicator({ 
  totalSlides, 
  currentSlide, 
  onSlideClick, 
  className = '' 
}: SlideIndicatorProps) {
  return (
    <div className={`flex items-center gap-1 sm:gap-2 ${className}`}>
      {Array.from({ length: totalSlides }, (_, index) => (
        <motion.button
          key={index}
          onClick={() => onSlideClick(index)}
          className={`
            w-4 h-4 sm:w-3 sm:h-3 rounded-full border border-white/30 transition-all duration-300
            hover:scale-125 focus:outline-none focus:ring-2 focus:ring-blue-400
            touch-manipulation min-w-[16px] min-h-[16px]
            ${index === currentSlide 
              ? 'bg-blue-400 border-blue-400 shadow-lg shadow-blue-400/50' 
              : 'bg-white/20 hover:bg-white/40'
            }
          `}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          aria-label={`Go to slide ${index + 1}`}
        >
          <motion.div
            initial={false}
            animate={{
              scale: index === currentSlide ? 1 : 0,
              opacity: index === currentSlide ? 1 : 0
            }}
            transition={{ duration: 0.2 }}
            className="w-full h-full bg-white rounded-full"
          />
        </motion.button>
      ))}
    </div>
  );
}