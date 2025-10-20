'use client';

import { motion } from 'framer-motion';
import { Code2, Database, Wrench, GraduationCap, Languages } from 'lucide-react';
import SlideLayout from '@/components/layout/SlideLayout';
import AnimatedText from '@/components/ui/AnimatedText';
import TechStack from '@/components/ui/TechStack';
import { SkillCategory } from '@/types';

interface TechExpertiseSlideProps {
  skills: SkillCategory[];
}

export default function TechExpertiseSlide({ skills }: TechExpertiseSlideProps) {
  const iconMap: { [key: string]: React.ComponentType<{ size?: number; className?: string }> } = {
    "Programming Languages": Code2,
    "Frameworks & Libraries": Database,
    "Tools & Databases": Wrench,
    "Languages": Languages,
    "Coursework & Concepts": GraduationCap
  };

  const colorMap: { [key: string]: string } = {
    "Programming Languages": "blue",
    "Frameworks & Libraries": "purple", 
    "Tools & Databases": "green",
    "Languages": "orange",
    "Coursework & Concepts": "indigo"
  };

  const skillCategories = skills.filter(skill => skill.category !== "Coursework & Concepts").map(skill => ({
    icon: iconMap[skill.category] || Code2,
    title: skill.category,
    items: skill.items,
    color: colorMap[skill.category] || "blue"
  }));

  const courseworkSkill = skills.find(skill => skill.category === "Coursework & Concepts");

  const colorClasses = {
    blue: "text-blue-400 border-blue-400/30 bg-blue-600/20",
    purple: "text-purple-400 border-purple-400/30 bg-purple-600/20",
    green: "text-green-400 border-green-400/30 bg-green-600/20",
    orange: "text-orange-400 border-orange-400/30 bg-orange-600/20",
    indigo: "text-indigo-400 border-indigo-400/30 bg-indigo-600/20"
  };

  return (
    <SlideLayout>
      <div className="space-y-12">
        <AnimatedText delay={0.2} className="text-center">
          <h1 className="text-5xl font-bold text-white mb-4">
            Technical Expertise
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable web and mobile applications
          </p>
        </AnimatedText>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + categoryIndex * 0.2 }}
                className={`
                  p-6 rounded-xl border backdrop-blur-sm
                  ${colorClasses[category.color as keyof typeof colorClasses]}
                  hover:scale-[1.02] transition-transform duration-200
                `}
              >
                <div className="flex items-center gap-3 mb-6">
                  <Icon size={24} className={`text-${category.color}-400`} />
                  <h3 className="text-xl font-semibold text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.items.map((item, itemIndex) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        delay: 0.6 + categoryIndex * 0.2 + itemIndex * 0.05 
                      }}
                      className="
                        px-3 py-1 bg-white/10 border border-white/20 
                        rounded-full text-sm text-white backdrop-blur-sm
                        hover:bg-white/20 transition-colors duration-200
                      "
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="
            mt-12 p-6 bg-gradient-to-r from-indigo-600/20 to-cyan-600/20 
            border border-indigo-400/30 rounded-xl backdrop-blur-sm text-center
          "
        >
          <GraduationCap className="text-indigo-400 mx-auto mb-4" size={32} />
          <h3 className="text-xl font-semibold text-white mb-2">
            Academic Foundation
          </h3>
          <p className="text-gray-300 mb-4">
            Computer Science • University of Indonesia
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {courseworkSkill?.items.map((course: string, index: number) => (
              <span
                key={course}
                className="
                  px-2 py-1 bg-indigo-500/20 border border-indigo-400/30 
                  rounded text-xs text-indigo-200
                "
              >
                {course}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </SlideLayout>
  );
}