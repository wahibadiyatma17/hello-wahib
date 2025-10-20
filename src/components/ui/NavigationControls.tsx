'use client';

import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Pause, RotateCcw } from 'lucide-react';

interface NavigationControlsProps {
  onPrevious: () => void;
  onNext: () => void;
  onReset: () => void;
  isAutoPlaying: boolean;
  onToggleAutoPlay: () => void;
  currentSlide: number;
  totalSlides: number;
  className?: string;
}

export default function NavigationControls({
  onPrevious,
  onNext,
  onReset,
  isAutoPlaying,
  onToggleAutoPlay,
  currentSlide,
  totalSlides,
  className = ''
}: NavigationControlsProps) {
  // Simplified controls for mobile - only essential buttons
  const mobileControls = [
    {
      icon: ChevronLeft,
      onClick: onPrevious,
      label: 'Previous slide',
      disabled: false,
      priority: 'high'
    },
    {
      icon: ChevronRight,
      onClick: onNext,
      label: 'Next slide',
      disabled: false,
      priority: 'high'
    }
  ];

  const desktopControls = [
    {
      icon: ChevronLeft,
      onClick: onPrevious,
      label: 'Previous slide',
      disabled: false,
      priority: 'high'
    },
    {
      icon: isAutoPlaying ? Pause : Play,
      onClick: onToggleAutoPlay,
      label: isAutoPlaying ? 'Pause presentation' : 'Start auto-play',
      disabled: false,
      priority: 'medium'
    },
    {
      icon: RotateCcw,
      onClick: onReset,
      label: 'Reset to first slide',
      disabled: currentSlide === 0,
      priority: 'low'
    },
    {
      icon: ChevronRight,
      onClick: onNext,
      label: 'Next slide',
      disabled: false,
      priority: 'high'
    }
  ];

  return (
    <div className={`flex items-center gap-2 sm:gap-3 ${className}`}>
      {/* Mobile View - Simplified */}
      <div className="flex items-center gap-2 sm:hidden">
        {mobileControls.map((control, index) => {
          const Icon = control.icon;
          return (
            <motion.button
              key={index}
              onClick={control.onClick}
              disabled={control.disabled}
              className={`
                p-3 bg-white/10 backdrop-blur-sm border border-white/20 
                rounded-lg transition-all duration-200 touch-manipulation
                hover:bg-white/20 hover:border-white/30
                focus:outline-none focus:ring-2 focus:ring-blue-400
                disabled:opacity-50 disabled:cursor-not-allowed
                min-w-[48px] min-h-[48px] flex items-center justify-center
              `}
              whileHover={{ scale: control.disabled ? 1 : 1.05 }}
              whileTap={{ scale: control.disabled ? 1 : 0.95 }}
              title={control.label}
            >
              <Icon 
                size={24} 
                className={`${control.disabled ? 'text-gray-500' : 'text-white'}`} 
              />
            </motion.button>
          );
        })}
      </div>

      {/* Desktop View - Full controls */}
      <div className="hidden sm:flex items-center gap-2">
        {desktopControls.map((control, index) => {
          const Icon = control.icon;
          return (
            <motion.button
              key={index}
              onClick={control.onClick}
              disabled={control.disabled}
              className={`
                p-3 bg-white/10 backdrop-blur-sm border border-white/20 
                rounded-lg transition-all duration-200
                hover:bg-white/20 hover:border-white/30
                focus:outline-none focus:ring-2 focus:ring-blue-400
                disabled:opacity-50 disabled:cursor-not-allowed
                disabled:hover:bg-white/10 disabled:hover:border-white/20
              `}
              whileHover={{ scale: control.disabled ? 1 : 1.05 }}
              whileTap={{ scale: control.disabled ? 1 : 0.95 }}
              title={control.label}
            >
              <Icon 
                size={20} 
                className={`
                  ${control.disabled ? 'text-gray-500' : 'text-white'}
                  ${index === 1 && isAutoPlaying ? 'text-green-400' : ''}
                `} 
              />
            </motion.button>
          );
        })}
      </div>
      
      {/* Slide counter - always visible but responsive */}
      <div className="ml-2 sm:ml-4 px-2 sm:px-3 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg">
        <span className="text-white text-xs sm:text-sm font-mono">
          {currentSlide + 1} / {totalSlides}
        </span>
      </div>
    </div>
  );
}