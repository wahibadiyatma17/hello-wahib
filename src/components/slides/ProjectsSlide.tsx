'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink, Star, Calendar, Smartphone, Tv, Globe } from 'lucide-react';
import SlideLayout from '@/components/layout/SlideLayout';
import AnimatedText from '@/components/ui/AnimatedText';
import TechStack from '@/components/ui/TechStack';
import { Project } from '@/types';

interface ProjectsSlideProps {
  projects: Project[];
}

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
                      <Smartphone size={18} className="text-green-300" />
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
                        p-2 bg-gray-600/20 border border-gray-400/30 rounded-lg
                        hover:bg-gray-500/30 transition-colors
                      "
                    >
                      <Smartphone size={18} className="text-gray-300" />
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