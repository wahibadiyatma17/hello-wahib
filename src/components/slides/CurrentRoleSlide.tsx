'use client';

import { motion } from 'framer-motion';
import { Building2, Calendar, Trophy, Users } from 'lucide-react';
import SlideLayout from '@/components/layout/SlideLayout';
import AnimatedText from '@/components/ui/AnimatedText';
import TechStack from '@/components/ui/TechStack';
import { WorkExperience } from '@/types';

interface CurrentRoleSlideProps {
  currentRole: WorkExperience;
}

export default function CurrentRoleSlide({ currentRole }: CurrentRoleSlideProps) {
  return (
    <SlideLayout>
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16 px-4 sm:px-0"
        >
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <Building2 className="text-blue-400" size={32} />
            <span className="text-blue-200 text-lg sm:text-xl font-medium">Current Position</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 leading-tight">
            {currentRole.position}
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-blue-300 mb-4 sm:mb-6">
            @ {currentRole.company}
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-gray-300 text-base sm:text-lg">
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span>{currentRole.duration}</span>
            </div>
            <span className="hidden sm:block w-1 h-1 bg-gray-400 rounded-full"></span>
            <span>{currentRole.location}</span>
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Technology Stack Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="lg:col-span-1 order-2 lg:order-1"
          >
            <div className="h-full p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <Building2 size={16} className="text-white sm:w-5 sm:h-5" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white">Tech Stack</h3>
              </div>
              {/* Categorized Tech Stack */}
              <div className="space-y-4">
                {/* Frontend & Frameworks */}
                <div>
                  <h4 className="text-sm font-semibold text-blue-300 mb-2">Frontend & Frameworks</h4>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'React Native', 'NextJS', 'Vite'].map((tech, index) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="px-3 py-1 bg-blue-600/20 border border-blue-400/30 rounded-full text-sm text-blue-200 backdrop-blur-sm hover:bg-blue-500/30 transition-colors duration-200"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Languages & Type Safety */}
                <div>
                  <h4 className="text-sm font-semibold text-purple-300 mb-2">Languages & Type Safety</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Typescript', 'Zod'].map((tech, index) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: (index + 4) * 0.1 }}
                        className="px-3 py-1 bg-purple-600/20 border border-purple-400/30 rounded-full text-sm text-purple-200 backdrop-blur-sm hover:bg-purple-500/30 transition-colors duration-200"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* State & Data Management */}
                <div>
                  <h4 className="text-sm font-semibold text-green-300 mb-2">State & Data Management</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Zustand', 'React Query'].map((tech, index) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: (index + 6) * 0.1 }}
                        className="px-3 py-1 bg-green-600/20 border border-green-400/30 rounded-full text-sm text-green-200 backdrop-blur-sm hover:bg-green-500/30 transition-colors duration-200"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Styling & Testing */}
                <div>
                  <h4 className="text-sm font-semibold text-amber-300 mb-2">Styling & Testing</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Tailwind', 'Playwright', 'Jest'].map((tech, index) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: (index + 8) * 0.1 }}
                        className="px-3 py-1 bg-amber-600/20 border border-amber-400/30 rounded-full text-sm text-amber-200 backdrop-blur-sm hover:bg-amber-500/30 transition-colors duration-200"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-gray-300 text-sm">
                  <span className="font-semibold text-white">{currentRole.techStack.length} technologies</span> actively used in current projects
                </p>
              </div>
            </div>
          </motion.div>

          {/* Key Achievements Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="lg:col-span-2 order-1 lg:order-2"
          >
            <div className="h-full p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl">
              <div className="flex items-center gap-3 mb-6 sm:mb-8">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
                  <Trophy size={16} className="text-white sm:w-5 sm:h-5" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white">Key Achievements</h3>
              </div>
              
              <div className="grid gap-3 sm:gap-4">
                {currentRole.achievements.slice(0, 4).map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + index * 0.1 }}
                    className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-200"
                  >
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs sm:text-sm font-semibold">{index + 1}</span>
                    </div>
                    <p className="text-gray-200 leading-relaxed text-sm sm:text-base">{achievement}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Impact Highlight Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="mt-8 sm:mt-10 lg:mt-12 p-4 sm:p-6 bg-gradient-to-r from-emerald-600/20 via-blue-600/20 to-purple-600/20 border border-emerald-400/30 rounded-2xl backdrop-blur-sm"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center">
              <Users size={20} className="text-white sm:w-6 sm:h-6" />
            </div>
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">Performance Excellence</h3>
              <p className="text-emerald-200 text-sm sm:text-base">Achieved 99/100 Google Lighthouse Score</p>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:flex sm:justify-center gap-4 sm:gap-6 lg:gap-8 text-xs sm:text-sm">
            {['Performance', 'Accessibility', 'Best Practices', 'SEO'].map((metric, index) => (
              <div key={metric} className="text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-500/20 rounded-full flex items-center justify-center mb-2 mx-auto">
                  <span className="text-emerald-300 font-bold text-sm sm:text-base">99</span>
                </div>
                <span className="text-gray-300">{metric}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </SlideLayout>
  );
}