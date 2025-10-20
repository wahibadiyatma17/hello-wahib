'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Play, Github, Linkedin, Mail, MapPin, Calendar, ExternalLink, Smartphone, Tv, Globe, Briefcase, GraduationCap, Star, ChevronRight } from 'lucide-react';
import { cvData, organizationalExperience } from '@/data/cv-data';
import { SkillCategory, Project, WorkExperience } from '@/types';

export default function Portfolio() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-6 py-12 max-w-7xl">
        {/* Header */}
        <motion.header 
          className="text-center mb-16"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
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
          
          <motion.div 
            className="flex justify-center gap-6 mb-12 flex-wrap"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.a
              href={`mailto:${cvData.personalInfo.email}`}
              variants={fadeInUp}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white hover:bg-white/20 transition-colors"
            >
              <Mail size={20} />
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
          </motion.div>

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
            {cvData.workExperience.map((experience: WorkExperience, index: number) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
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
                    <h4 className="text-lg font-semibold text-white mb-4">Key Achievements</h4>
                    <ul className="space-y-3">
                      {experience.achievements.map((achievement: string, achIndex: number) => (
                        <li key={achIndex} className="text-gray-300 flex items-start gap-3">
                          <ChevronRight size={14} className="text-green-400 mt-1 flex-shrink-0" />
                          <span className="text-sm leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
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
                </div>
              </motion.div>
            ))}
          </div>
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
            {cvData.projects.map((project: Project, index: number) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
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
                          <Smartphone size={18} />
                        </a>
                      )}
                      {project.links.ios && project.links.ios !== "#" && (
                        <a 
                          href={project.links.ios} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 bg-gray-600/20 border border-gray-400/30 rounded-lg text-gray-300 hover:bg-gray-500/30 transition-colors"
                          title="iOS App"
                        >
                          <Smartphone size={18} />
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
          </div>
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