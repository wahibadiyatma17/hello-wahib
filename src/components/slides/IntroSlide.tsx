'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, Globe, Linkedin, Github } from 'lucide-react';
import SlideLayout from '@/components/layout/SlideLayout';
import AnimatedText from '@/components/ui/AnimatedText';
import { PersonalInfo } from '@/types';

interface IntroSlideProps {
  personalInfo: PersonalInfo;
}

export default function IntroSlide({ personalInfo }: IntroSlideProps) {
  const contactItems = [
    ...(personalInfo.phone ? [{ icon: Phone, text: personalInfo.phone, href: `tel:${personalInfo.phone}` }] : []),
    { icon: Mail, text: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: Globe, text: personalInfo.website, href: `https://${personalInfo.website}` },
    { icon: Linkedin, text: personalInfo.linkedin, href: `https://${personalInfo.linkedin}` },
    { icon: Github, text: personalInfo.github, href: `https://${personalInfo.github}` }
  ];

  return (
    <SlideLayout>
      <div className="text-center space-y-6 sm:space-y-8">
        <AnimatedText delay={0.2} className="space-y-3 sm:space-y-4">
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight">
            {personalInfo.name}
          </h1>
        </AnimatedText>
        
        <AnimatedText delay={0.4}>
          <h2 className="text-lg sm:text-2xl lg:text-3xl text-blue-200 font-light px-4 sm:px-0">
            Frontend Engineer • Mobile & Web Developer
          </h2>
        </AnimatedText>

        <AnimatedText delay={0.6}>
          <p className="text-base sm:text-lg text-gray-300 max-w-xl sm:max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            Passionate about creating exceptional user experiences with modern technologies.
            Specializing in React, React Native, and Next.js development.
          </p>
        </AnimatedText>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6 pt-6 sm:pt-8 px-4 sm:px-0"
        >
          {contactItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.text}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="
                  flex items-center justify-center sm:justify-start gap-3 px-4 py-3 
                  bg-white/10 backdrop-blur-sm border border-white/20 
                  rounded-lg hover:bg-white/20 transition-all duration-200
                  w-full sm:w-auto min-h-[48px]
                "
              >
                <Icon size={20} className="text-blue-400 flex-shrink-0" />
                <span className="text-sm truncate">{item.text}</span>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </SlideLayout>
  );
}