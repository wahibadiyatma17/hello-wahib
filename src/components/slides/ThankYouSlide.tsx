'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, Heart } from 'lucide-react';
import SlideLayout from '@/components/layout/SlideLayout';
import AnimatedText from '@/components/ui/AnimatedText';
import { PersonalInfo } from '@/types';

interface ThankYouSlideProps {
  personalInfo: PersonalInfo;
}

export default function ThankYouSlide({ personalInfo }: ThankYouSlideProps) {
  const contactItems = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: 'text-red-400',
    },
    ...(personalInfo.phone
      ? [
          {
            icon: Phone,
            label: 'Phone',
            value: personalInfo.phone,
            href: `tel:${personalInfo.phone}`,
            color: 'text-green-400',
          },
        ]
      : []),
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'wahibadiyatma',
      href: `https://${personalInfo.linkedin}`,
      color: 'text-blue-400',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'wahibadiyatma17',
      href: `https://${personalInfo.github}`,
      color: 'text-purple-400',
    },
  ];

  return (
    <SlideLayout background="gradient">
      <div className="text-center space-y-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="space-y-6"
        >
          <div className="flex justify-center">
            <motion.div
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1] 
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <Heart className="text-red-400" size={48} fill="currentColor" />
            </motion.div>
          </div>
          
          <AnimatedText delay={0.4}>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Thank You!
            </h1>
          </AnimatedText>
          
          <AnimatedText delay={0.6}>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
              I'm excited about the opportunity to contribute to your team and build amazing digital experiences together.
            </p>
          </AnimatedText>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="space-y-8"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-6 sm:mb-8 px-4 sm:px-0">
            Let's Connect
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto px-4 sm:px-0">
            {contactItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.15 }}
                  whileHover={{ 
                    scale: 1.05,
                    y: -5
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="
                    group p-6 bg-white/10 backdrop-blur-sm border border-white/20 
                    rounded-xl hover:bg-white/20 transition-all duration-300
                    hover:border-white/30 text-center min-h-[120px] flex flex-col justify-center
                  "
                >
                  <Icon size={32} className={`${item.color} mx-auto mb-3 group-hover:scale-110 transition-transform`} />
                  <h3 className="text-white font-semibold mb-2">{item.label}</h3>
                  <p className="text-gray-300 text-sm break-all leading-relaxed">{item.value}</p>
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="
            mt-12 p-6 bg-gradient-to-r from-blue-600/20 to-purple-600/20 
            border border-blue-400/30 rounded-xl backdrop-blur-sm max-w-2xl mx-auto
          "
        >
          <p className="text-lg text-blue-200 mb-2">
            "Building the future, one line of code at a time"
          </p>
          <p className="text-sm text-gray-400">
            Ready to bring innovation and excellence to your next project
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
          className="text-sm text-gray-500"
        >
          <p>Frontend Engineer • React • React Native • Next.js</p>
        </motion.div>
      </div>
    </SlideLayout>
  );
}