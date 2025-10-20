'use client';

import { motion } from 'framer-motion';

interface TechStackProps {
  technologies: string[];
  className?: string;
}

export default function TechStack({ technologies, className = '' }: TechStackProps) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {technologies.map((tech, index) => (
        <motion.span
          key={tech}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 }}
          className="
            px-3 py-1 bg-blue-600/20 border border-blue-400/30 
            rounded-full text-sm text-blue-200 backdrop-blur-sm
            hover:bg-blue-500/30 transition-colors duration-200
          "
        >
          {tech}
        </motion.span>
      ))}
    </div>
  );
}