'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  Play, 
  Mail, 
  MapPin, 
  Calendar, 
  ExternalLink, 
  Tv, 
  Globe, 
  Briefcase,
  GraduationCap, 
  Star, 
  ChevronRight,
  Github,
  Linkedin
} from 'lucide-react';
import { cvData, organizationalExperience } from '@/data/cv-data';
import { SkillCategory, Project, WorkExperience } from '@/types';

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

// Performance: Preload critical resources
if (typeof window !== 'undefined') {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'style';
  link.href = '/fonts/geist.woff2';
  document.head.appendChild(link);
}

export default function Portfolio() {
  const [showAllExperience, setShowAllExperience] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const expandVariants = {
    initial: { opacity: 0, y: 20, scale: 0.95 },
    animate: { 
      opacity: 1, 
      y: 0, 
      scale: 1
    },
    exit: { 
      opacity: 0, 
      y: -20, 
      scale: 0.95
    }
  };

  const displayedExperience = showAllExperience ? cvData.workExperience : cvData.workExperience.slice(0, 3);
  const displayedProjects = showAllProjects ? cvData.projects : cvData.projects.slice(0, 4);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-6 py-12 max-w-7xl">
        <motion.header 
          className="text-center mb-16"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          role="banner"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-4"
            variants={fadeInUp}
          >
            {cvData.personalInfo.name}
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-purple-300 mb-8"
            variants={fadeInUp}
          >
            {cvData.personalInfo.title}
          </motion.p>
          
          <motion.nav 
            className="flex justify-center gap-6 mb-12 flex-wrap"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            aria-label="Contact and social media links"
          >
            <motion.a
              href={`mailto:${cvData.personalInfo.email}`}
              variants={fadeInUp}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white hover:bg-white/20 transition-colors focus:ring-2 focus:ring-blue-400 focus:outline-none"
              aria-label={`Send email to ${cvData.personalInfo.email}`}
            >
              <Mail size={20} aria-hidden="true" />
              Email
            </motion.a>
            <motion.a
              href={`https://${cvData.personalInfo.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeInUp}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white hover:bg-white/20 transition-colors"
            >
              <Linkedin size={20} />
              LinkedIn
            </motion.a>
            <motion.a
              href={`https://${cvData.personalInfo.github}`}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeInUp}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white hover:bg-white/20 transition-colors"
            >
              <Github size={20} />
              GitHub
            </motion.a>
            <motion.a
              href={`https://${cvData.personalInfo.website}`}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeInUp}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white hover:bg-white/20 transition-colors"
            >
              <Globe size={20} />
              Website
            </motion.a>
          </motion.nav>

          {/* Present Button */}
          <motion.div variants={fadeInUp}>
            <Link href="/present">
              <motion.button 
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center gap-3">
                  <Play size={24} className="group-hover:scale-110 transition-transform" />
                  View Presentation
                </span>
              </motion.button>
            </Link>
          </motion.div>
        </motion.header>

        {/* About Section */}
        <motion.section 
          className="mb-16"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <h2 className="text-4xl font-bold text-white mb-8 text-center">About Me</h2>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              {cvData.personalInfo.summary}
            </p>
            <div className="flex items-center gap-4 text-purple-300 mb-6">
              <MapPin size={20} />
              <span>{cvData.personalInfo.location}</span>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="text-blue-400" size={24} />
                  <h3 className="text-xl font-semibold text-white">Education</h3>
                </div>
                <p className="text-gray-300 mb-2">{cvData.education.degree}, {cvData.education.field}</p>
                <p className="text-purple-300 mb-3">{cvData.education.institution}</p>
                <p className="text-gray-400 text-sm mb-3">{cvData.education.duration}</p>
                <ul className="space-y-1">
                  {cvData.education.achievements.map((achievement: string, index: number) => (
                    <li key={index} className="text-gray-400 text-sm flex items-start gap-2">
                      <ChevronRight size={14} className="text-purple-400 mt-0.5 flex-shrink-0" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/5 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Star className="text-yellow-400" size={24} />
                  <h3 className="text-xl font-semibold text-white">Key Strengths</h3>
                </div>
                <ul className="space-y-2">
                  <li className="text-gray-300 flex items-start gap-2">
                    <ChevronRight size={14} className="text-yellow-400 mt-0.5 flex-shrink-0" />
                    Full-stack development expertise
                  </li>
                  <li className="text-gray-300 flex items-start gap-2">
                    <ChevronRight size={14} className="text-yellow-400 mt-0.5 flex-shrink-0" />
                    Clean architecture implementation
                  </li>
                  <li className="text-gray-300 flex items-start gap-2">
                    <ChevronRight size={14} className="text-yellow-400 mt-0.5 flex-shrink-0" />
                    Cross-platform mobile development
                  </li>
                  <li className="text-gray-300 flex items-start gap-2">
                    <ChevronRight size={14} className="text-yellow-400 mt-0.5 flex-shrink-0" />
                    Performance optimization
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Work Experience Timeline */}
        <motion.section 
          className="mb-16"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Professional Experience</h2>
          <div className="space-y-8">
            <AnimatePresence mode="popLayout">
              {displayedExperience.map((experience: WorkExperience, index: number) => (
                <motion.div 
                  key={`experience-${experience.company}-${index}`}
                  variants={index < 3 ? fadeInUp : expandVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ 
                    delay: index > 2 ? (index - 3) * 0.1 : index * 0.1,
                    type: "spring",
                    stiffness: 100,
                    damping: 20
                  }}
                  layout
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors group"
                >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <Briefcase className="text-blue-400" size={24} />
                      <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
                        {experience.title}
                      </h3>
                    </div>
                    <p className="text-xl text-purple-300 mb-2">{experience.company}</p>
                    <p className="text-gray-400 mb-4">{experience.location}</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 bg-white/10 px-4 py-2 rounded-lg">
                    <Calendar size={16} />
                    <span className="font-semibold">{experience.period}</span>
                  </div>
                </div>
                
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {experience.description}
                </p>

                <div className="grid lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <Star size={18} className="text-green-400" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-3">
                      {experience.achievements.map((achievement: string, achIndex: number) => (
                        <li key={achIndex} className="text-gray-300 flex items-start gap-3">
                          <ChevronRight size={14} className="text-green-400 mt-1 flex-shrink-0" />
                          <span className="text-sm leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <Briefcase size={18} className="text-blue-400" />
                        Technologies & Skills
                      </h4>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {experience.technologies.map((tech: string, techIndex: number) => (
                          <span 
                            key={techIndex}
                            className="px-3 py-1 bg-blue-600/20 border border-blue-400/30 rounded-lg text-blue-300 text-sm hover:bg-blue-500/30 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="text-md font-medium text-white mb-3 flex items-center gap-2">
                        <Globe size={16} className="text-purple-400" />
                        Role Focus
                      </h5>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-gray-300 text-sm">
                          <ChevronRight size={12} className="text-purple-400" />
                          <span>Frontend Development & Architecture</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-300 text-sm">
                          <ChevronRight size={12} className="text-purple-400" />
                          <span>Cross-platform Mobile Applications</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-300 text-sm">
                          <ChevronRight size={12} className="text-purple-400" />
                          <span>Performance Optimization & Testing</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-300 text-sm">
                          <ChevronRight size={12} className="text-purple-400" />
                          <span>Team Collaboration & Code Reviews</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          {cvData.workExperience.length > 3 && (
            <motion.div 
              className="text-center mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <motion.button
                onClick={() => setShowAllExperience(!showAllExperience)}
                className="group px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white hover:bg-white/20 transition-all duration-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  backgroundColor: showAllExperience ? "rgba(255, 255, 255, 0.15)" : "rgba(255, 255, 255, 0.1)"
                }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                aria-label={showAllExperience ? "Show less experience" : "Show more experience"}
              >
                <span className="flex items-center gap-2">
                  {showAllExperience ? 'Show Less' : `View More (${cvData.workExperience.length - 3} more)`}
                  <motion.span
                    animate={{ rotate: showAllExperience ? 180 : 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  >
                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </motion.span>
                </span>
              </motion.button>
            </motion.div>
          )}
        </motion.section>

        {/* Organizational Experience */}
        <motion.section 
          className="mb-16"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Organizational Experience</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {organizationalExperience.map((org, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Star className="text-yellow-400" size={20} />
                  <h3 className="text-xl font-bold text-white">{org.title}</h3>
                </div>
                <p className="text-purple-300 mb-2">{org.organization}</p>
                <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                  <Calendar size={14} />
                  <span>{org.period}</span>
                </div>
                <ul className="space-y-2">
                  {org.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="text-gray-300 text-sm flex items-start gap-2">
                      <ChevronRight size={12} className="text-yellow-400 mt-1 flex-shrink-0" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Featured Projects */}
        <motion.section 
          className="mb-16"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Featured Projects</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <AnimatePresence mode="popLayout">
              {displayedProjects.map((project: Project, index: number) => (
                <motion.div 
                  key={`project-${project.name}-${index}`}
                  variants={index < 4 ? fadeInUp : expandVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ 
                    delay: index > 3 ? (index - 4) * 0.1 : index * 0.05,
                    type: "spring",
                    stiffness: 120,
                    damping: 20
                  }}
                  layout
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors group"
                >
                <div className="flex justify-between items-start mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors mb-3">
                      {project.name}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                      <Calendar size={14} />
                      <span>{project.duration}</span>
                    </div>
                  </div>
                  {project.links && Object.keys(project.links).length > 0 && (
                    <div className="flex gap-2 flex-wrap">
                      {project.links.website && (
                        <a 
                          href={project.links.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 bg-blue-600/20 border border-blue-400/30 rounded-lg text-blue-300 hover:bg-blue-500/30 transition-colors"
                          title="Website"
                        >
                          <Globe size={18} />
                        </a>
                      )}
                      {project.links.android && (
                        <a 
                          href={project.links.android} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 bg-green-600/20 border border-green-400/30 rounded-lg text-green-300 hover:bg-green-500/30 transition-colors"
                          title="Android App"
                        >
                          <AndroidIcon size={18} className="text-green-300" />
                        </a>
                      )}
                      {project.links.ios && project.links.ios !== "#" && (
                        <a 
                          href={project.links.ios} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 bg-blue-600/20 border border-blue-400/30 rounded-lg text-blue-300 hover:bg-blue-500/30 transition-colors"
                          title="iOS App"
                        >
                          <AppleIcon size={18} className="text-blue-300" />
                        </a>
                      )}
                      {project.links.roku && (
                        <a 
                          href={project.links.roku} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 bg-purple-600/20 border border-purple-400/30 rounded-lg text-purple-300 hover:bg-purple-500/30 transition-colors"
                          title="Roku TV App"
                        >
                          <Tv size={18} />
                        </a>
                      )}
                      {project.links.git && (
                        <a 
                          href={project.links.git} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 bg-white/10 border border-white/20 rounded-lg text-gray-300 hover:bg-white/20 transition-colors"
                          title="Source Code"
                        >
                          <Github size={18} />
                        </a>
                      )}
                      {project.links.demo && (
                        <a 
                          href={project.links.demo} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 bg-cyan-600/20 border border-cyan-400/30 rounded-lg text-cyan-300 hover:bg-cyan-500/30 transition-colors"
                          title="Live Demo"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  )}
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features & Highlights</h4>
                  <ul className="space-y-2 max-h-48 overflow-y-auto">
                    {project.highlights.map((highlight: string, highlightIndex: number) => (
                      <li key={highlightIndex} className="text-gray-300 text-sm flex items-start gap-2">
                        <ChevronRight size={12} className="text-purple-400 mt-1 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech: string, techIndex: number) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-green-600/20 border border-green-400/30 rounded-lg text-green-300 text-sm hover:bg-green-500/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          {cvData.projects.length > 4 && (
            <motion.div 
              className="text-center mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <motion.button
                onClick={() => setShowAllProjects(!showAllProjects)}
                className="group px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white hover:bg-white/20 transition-all duration-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  backgroundColor: showAllProjects ? "rgba(255, 255, 255, 0.15)" : "rgba(255, 255, 255, 0.1)"
                }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                aria-label={showAllProjects ? "Show less projects" : "Show more projects"}
              >
                <span className="flex items-center gap-2">
                  {showAllProjects ? 'Show Less' : `View More (${cvData.projects.length - 4} more)`}
                  <motion.span
                    animate={{ rotate: showAllProjects ? 180 : 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  >
                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </motion.span>
                </span>
              </motion.button>
            </motion.div>
          )}
        </motion.section>

        {/* Skills Section */}
        <motion.section 
          className="mb-16"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cvData.skills.map((skillCategory: SkillCategory, index: number) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
              >
                <h3 className="text-xl font-semibold text-white mb-4">{skillCategory.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillCategory.items.map((skill: string, skillIndex: number) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1 bg-blue-600/20 border border-blue-400/30 rounded-lg text-blue-300 text-sm hover:bg-blue-500/30 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Footer */}
        <motion.footer 
          className="text-center py-8"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <p className="text-gray-300 text-lg mb-4">
              Ready to collaborate on your next project?
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a 
                href={`mailto:${cvData.personalInfo.email}`}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
              >
                Get In Touch
              </a>
              <Link href="/present">
                <button className="px-6 py-3 bg-white/10 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors">
                  View Presentation
                </button>
              </Link>
            </div>
            <p className="text-gray-400 text-sm mt-6">
              Built with Next.js, TypeScript, and Tailwind CSS
            </p>
          </div>
        </motion.footer>
      </div>
    </div>
  );
}