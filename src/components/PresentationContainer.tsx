'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import SlideIndicator from '@/components/ui/SlideIndicator';
import NavigationControls from '@/components/ui/NavigationControls';
import { cvData } from '@/data/cv-data';

// Import all slide components
import IntroSlide from '@/components/slides/IntroSlide';
import CurrentRoleSlide from '@/components/slides/CurrentRoleSlide';
import TechExpertiseSlide from '@/components/slides/TechExpertiseSlide';
import ExperienceTimelineSlide from '@/components/slides/ExperienceTimelineSlide';
import ProjectsSlide from '@/components/slides/ProjectsSlide';
import ThankYouSlide from '@/components/slides/ThankYouSlide';

export default function PresentationContainer() {
  const slides = [
    <IntroSlide key="intro" personalInfo={cvData.personalInfo} />,
    <CurrentRoleSlide key="current-role" currentRole={cvData.workExperience[0]} />,
    <TechExpertiseSlide key="tech-expertise" skills={cvData.skills} />,
    <ExperienceTimelineSlide key="experience" experiences={cvData.workExperience} />,
    <ProjectsSlide key="projects" projects={cvData.projects} />,
    <ThankYouSlide key="thank-you" personalInfo={cvData.personalInfo} />
  ];

  const {
    currentSlide,
    direction,
    nextSlide,
    prevSlide,
    goToSlide,
    isAutoPlaying,
    toggleAutoPlay
  } = useSlideNavigation({ 
    totalSlides: slides.length,
    autoPlay: false,
    autoPlayInterval: 12000
  });

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95
    })
  };

  const handleReset = () => {
    goToSlide(0);
  };

  return (
    <div className="relative min-h-screen">
      {/* Main slide container */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.3 },
            scale: { duration: 0.3 }
          }}
          className="absolute inset-0"
        >
          {slides[currentSlide]}
        </motion.div>
      </AnimatePresence>

      {/* Navigation overlay */}
      <div className="fixed bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-sm sm:max-w-md px-4 sm:w-auto sm:max-w-none sm:px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="
            flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 
            px-3 sm:px-6 py-3 sm:py-4 
            bg-black/40 backdrop-blur-lg border border-white/20 
            rounded-2xl shadow-2xl w-full sm:w-auto
          "
        >
          {/* Slide indicators */}
          <SlideIndicator
            totalSlides={slides.length}
            currentSlide={currentSlide}
            onSlideClick={goToSlide}
          />

          {/* Navigation controls */}
          <NavigationControls
            onPrevious={prevSlide}
            onNext={nextSlide}
            onReset={handleReset}
            isAutoPlaying={isAutoPlaying}
            onToggleAutoPlay={toggleAutoPlay}
            currentSlide={currentSlide}
            totalSlides={slides.length}
          />
        </motion.div>
      </div>

      {/* Keyboard shortcuts hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="
          fixed top-4 sm:top-6 right-4 sm:right-6 z-40 
          px-3 sm:px-4 py-2 bg-black/20 backdrop-blur-sm 
          border border-white/10 rounded-lg max-w-[200px] sm:max-w-none
        "
      >
        <p className="text-white/60 text-xs leading-relaxed">
          <span className="hidden sm:inline">Use ← → or Space to navigate • P to toggle auto-play</span>
          <span className="sm:hidden">Swipe or use navigation</span>
        </p>
      </motion.div>

      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-50 h-1 bg-white/10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="h-full bg-gradient-to-r from-blue-400 to-purple-400"
          initial={{ width: 0 }}
          animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </div>
  );
}