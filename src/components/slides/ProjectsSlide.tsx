'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink, Star, Calendar, Tv, Globe } from 'lucide-react';
import SlideLayout from '@/components/layout/SlideLayout';
import AnimatedText from '@/components/ui/AnimatedText';
import TechStack from '@/components/ui/TechStack';
import { Project } from '@/types';

interface ProjectsSlideProps {
  projects: Project[];
}

// Custom Android Icon
const AndroidIcon = ({ size = 18, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85a.637.637 0 0 0-.83.22l-1.88 3.24a11.43 11.43 0 0 0-8.94 0L5.65 5.67a.637.637 0 0 0-.83-.22c-.3.16-.42.54-.26.85L6.4 9.48C3.3 11.25 1.28 14.44 1 18h22c-.28-3.56-2.3-6.75-5.4-8.52zM7 15.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm10 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"/>
  </svg>
);

// Custom iOS/Apple Icon
const AppleIcon = ({ size = 18, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
  </svg>
);

export default function ProjectsSlide({ projects }: ProjectsSlideProps) {
  return (
    <SlideLayout>
      <div className="space-y-12">
        <AnimatedText delay={0.2} className="text-center">
          <h1 className="text-5xl font-bold text-white mb-4">
            Featured Projects
          </h1>
          <p className="text-xl text-gray-300">
            Showcasing innovative solutions and technical excellence
          </p>
        </AnimatedText>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30, rotateX: 10 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ delay: 0.4 + index * 0.3 }}
              className="
                group relative p-6 bg-gradient-to-br from-white/5 to-white/10 
                backdrop-blur-sm border border-white/10 rounded-xl
                hover:bg-gradient-to-br hover:from-white/10 hover:to-white/15
                hover:border-white/20 transition-all duration-300
                hover:transform hover:scale-[1.02]
              "
            >
              {/* Project header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {project.name}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                    <Calendar size={14} />
                    <span>{project.duration}</span>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  {project.links?.website && (
                    <motion.a
                      href={project.links.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="
                        p-2 bg-blue-600/20 border border-blue-400/30 rounded-lg
                        hover:bg-blue-500/30 transition-colors
                      "
                    >
                      <Globe size={18} className="text-blue-300" />
                    </motion.a>
                  )}
                  {project.links?.android && (
                    <motion.a
                      href={project.links.android}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="
                        p-2 bg-green-600/20 border border-green-400/30 rounded-lg
                        hover:bg-green-500/30 transition-colors
                      "
                    >
                      <AndroidIcon size={18} className="text-green-300" />
                    </motion.a>
                  )}
                  {project.links?.ios && project.links.ios !== "#" && (
                    <motion.a
                      href={project.links.ios}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="
                        p-2 bg-indigo-600/20 border border-indigo-400/30 rounded-lg
                        hover:bg-indigo-500/30 transition-colors
                      "
                    >
                      <AppleIcon size={18} className="text-indigo-300" />
                    </motion.a>
                  )}
                  {project.links?.roku && (
                    <motion.a
                      href={project.links.roku}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="
                        p-2 bg-purple-600/20 border border-purple-400/30 rounded-lg
                        hover:bg-purple-500/30 transition-colors
                      "
                    >
                      <Tv size={18} className="text-purple-300" />
                    </motion.a>
                  )}
                  {project.links?.git && (
                    <motion.a
                      href={project.links.git}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="
                        p-2 bg-white/10 border border-white/20 rounded-lg
                        hover:bg-white/20 transition-colors
                      "
                    >
                      <Github size={18} className="text-gray-300" />
                    </motion.a>
                  )}
                  {project.links?.demo && (
                    <motion.a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="
                        p-2 bg-cyan-600/20 border border-cyan-400/30 rounded-lg
                        hover:bg-cyan-500/30 transition-colors
                      "
                    >
                      <ExternalLink size={18} className="text-cyan-300" />
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Project description */}
              <p className="text-gray-300 leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Tech stack */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 + index * 0.3 }}
                className="mb-6"
              >
                <TechStack technologies={project.techStack} />
              </motion.div>

              {/* Project highlights */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 mb-3">
                  <Star className="text-yellow-400" size={16} />
                  <span className="text-sm font-semibold text-white">Key Features</span>
                </div>
                {project.highlights.slice(0, 3).map((highlight, highlightIndex) => (
                  <motion.div
                    key={highlightIndex}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.3 + highlightIndex * 0.1 }}
                    className="flex items-start gap-2"
                  >
                    <div className="w-1 h-1 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {highlight}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Hover overlay effect */}
              <div className="
                absolute inset-0 opacity-0 group-hover:opacity-100 
                bg-gradient-to-br from-blue-600/5 to-purple-600/5 
                rounded-xl transition-opacity duration-300 pointer-events-none
              " />
            </motion.div>
          ))}
        </div>

        {/* Additional projects indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="
            text-center p-6 bg-gradient-to-r from-gray-600/20 to-gray-700/20 
            border border-gray-400/30 rounded-xl backdrop-blur-sm
          "
        >
          <p className="text-gray-300 mb-2">
            <span className="font-semibold text-white">5+ Additional Projects</span> in my portfolio
          </p>
          <p className="text-sm text-gray-400">
            Including Django web apps, microservices, and mobile applications
          </p>
        </motion.div>
      </div>
    </SlideLayout>
  );
}