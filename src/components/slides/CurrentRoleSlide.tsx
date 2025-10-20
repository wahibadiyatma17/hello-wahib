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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <AnimatedText delay={0.2}>
            <div className="flex items-center gap-3 mb-4">
              <Building2 className="text-blue-400" size={32} />
              <span className="text-blue-200 text-lg">Current Role</span>
            </div>
            <h1 className="text-5xl font-bold text-white mb-2">
              {currentRole.position}
            </h1>
            <h2 className="text-2xl text-blue-300 mb-4">
              @ {currentRole.company}
            </h2>
          </AnimatedText>

          <AnimatedText delay={0.4}>
            <div className="flex items-center gap-2 text-gray-300">
              <Calendar size={18} />
              <span>{currentRole.duration}</span>
              <span className="mx-2">•</span>
              <span>{currentRole.location}</span>
            </div>
          </AnimatedText>

          <AnimatedText delay={0.6}>
            <TechStack technologies={currentRole.techStack} />
          </AnimatedText>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-3 mb-6">
            <Trophy className="text-yellow-400" size={24} />
            <h3 className="text-xl font-semibold text-white">Key Achievements</h3>
          </div>

          {currentRole.achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 + index * 0.15 }}
              className="
                p-4 bg-white/5 backdrop-blur-sm border border-white/10 
                rounded-lg hover:bg-white/10 transition-all duration-200
              "
            >
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                <p className="text-gray-200 leading-relaxed">{achievement}</p>
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="
              mt-8 p-6 bg-gradient-to-r from-blue-600/20 to-purple-600/20 
              border border-blue-400/30 rounded-lg backdrop-blur-sm
            "
          >
            <div className="flex items-center gap-3 mb-3">
              <Users className="text-green-400" size={20} />
              <span className="text-green-300 font-semibold">Impact Highlight</span>
            </div>
            <p className="text-white font-medium">
              Achieved 99/100 Google Lighthouse score across all aspects
            </p>
            <p className="text-gray-300 text-sm mt-1">
              Performance • Accessibility • Best Practices • SEO
            </p>
          </motion.div>
        </motion.div>
      </div>
    </SlideLayout>
  );
}