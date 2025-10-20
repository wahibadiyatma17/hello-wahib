'use client';

import { useState, useCallback, useEffect } from 'react';

interface UseSlideNavigationProps {
  totalSlides: number;
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export function useSlideNavigation({ 
  totalSlides, 
  autoPlay = false, 
  autoPlayInterval = 10000 
}: UseSlideNavigationProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(autoPlay);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = useCallback((slideIndex: number) => {
    if (slideIndex >= 0 && slideIndex < totalSlides) {
      setDirection(slideIndex > currentSlide ? 1 : -1);
      setCurrentSlide(slideIndex);
    }
  }, [currentSlide, totalSlides]);

  const toggleAutoPlay = useCallback(() => {
    setIsAutoPlaying(prev => !prev);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowRight':
        case ' ':
          e.preventDefault();
          nextSlide();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          prevSlide();
          break;
        case 'Home':
          e.preventDefault();
          goToSlide(0);
          break;
        case 'End':
          e.preventDefault();
          goToSlide(totalSlides - 1);
          break;
        case 'p':
        case 'P':
          e.preventDefault();
          toggleAutoPlay();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [nextSlide, prevSlide, goToSlide, totalSlides, toggleAutoPlay]);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide, autoPlayInterval]);

  return {
    currentSlide,
    direction,
    nextSlide,
    prevSlide,
    goToSlide,
    isAutoPlaying,
    toggleAutoPlay
  };
}