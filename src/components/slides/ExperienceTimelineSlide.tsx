'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import SlideLayout from '@/components/layout/SlideLayout';
import AnimatedText from '@/components/ui/AnimatedText';
import TechStack from '@/components/ui/TechStack';
import { WorkExperience } from '@/types';

interface ExperienceTimelineSlideProps {
  experiences: WorkExperience[];
}

export default function ExperienceTimelineSlide({ experiences }: ExperienceTimelineSlideProps) {
  return (
    <SlideLayout>
      <div className="space-y-12">
        <AnimatedText delay={0.2} className="text-center">
          <h1 className="text-5xl font-bold text-white mb-4">
            Professional Journey
          </h1>
          <p className="text-xl text-gray-300">
            Building exceptional digital experiences across multiple organizations
          </p>
        </AnimatedText>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-400 to-cyan-400" />

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={`${experience.company}-${experience.duration}`}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.3 }}
                className="relative pl-20"
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.3 }}
                  className="absolute left-6 top-6 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full border-4 border-slate-900"
                />

                <div className="
                  p-6 bg-white/5 backdrop-blur-sm border border-white/10 
                  rounded-xl hover:bg-white/10 transition-all duration-300
                ">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {experience.position}
                      </h3>
                      <div className="flex items-center gap-2 text-blue-300 text-lg mb-2">
                        <span>@ {experience.company}</span>
                        {experience.website && (
                          <ExternalLink size={16} className="text-gray-400" />
                        )}
                      </div>
                      <div className="flex items-center gap-4 text-gray-400 text-sm">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          <span>{experience.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={14} />
                          <span>{experience.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 + index * 0.3 }}
                    className="mb-4"
                  >
                    <TechStack 
                      technologies={experience.techStack.slice(0, 8)} 
                      className="mb-4"
                    />
                  </motion.div>

                  <div className="space-y-3">
                    {experience.achievements.slice(0, 3).map((achievement, achIndex) => (
                      <motion.div
                        key={achIndex}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 + index * 0.3 + achIndex * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {achievement}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
          className="
            mt-12 p-6 bg-gradient-to-r from-emerald-600/20 to-teal-600/20 
            border border-emerald-400/30 rounded-xl backdrop-blur-sm text-center
          "
        >
          <h3 className="text-2xl font-bold text-white mb-2">
            2+ Years of Professional Experience
          </h3>
          <p className="text-gray-300">
            Consistently delivering high-quality frontend solutions across web and mobile platforms
          </p>
        </motion.div>
      </div>
    </SlideLayout>
  );
}