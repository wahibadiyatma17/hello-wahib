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
  const controls = [
    {
      icon: ChevronLeft,
      onClick: onPrevious,
      label: 'Previous slide',
      disabled: false
    },
    {
      icon: isAutoPlaying ? Pause : Play,
      onClick: onToggleAutoPlay,
      label: isAutoPlaying ? 'Pause presentation' : 'Start auto-play',
      disabled: false
    },
    {
      icon: RotateCcw,
      onClick: onReset,
      label: 'Reset to first slide',
      disabled: currentSlide === 0
    },
    {
      icon: ChevronRight,
      onClick: onNext,
      label: 'Next slide',
      disabled: false
    }
  ];

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {controls.map((control, index) => {
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
      
      <div className="ml-4 px-3 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg">
        <span className="text-white text-sm font-mono">
          {currentSlide + 1} / {totalSlides}
        </span>
      </div>
    </div>
  );
}