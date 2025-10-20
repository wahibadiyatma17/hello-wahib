export interface PersonalInfo {
  name: string;
  title: string;
  phone?: string;
  email: string;
  website: string;
  linkedin: string;
  github: string;
  summary: string;
  location: string;
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  duration: string;
  achievements: string[];
}

export interface WorkExperience {
  title: string;
  position: string;
  company: string;
  location: string;
  website?: string;
  period: string;
  duration: string;
  description: string;
  technologies: string[];
  techStack: string[];
  achievements: string[];
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  techStack: string[];
  duration: string;
  link?: string;
  links?: {
    git?: string;
    demo?: string;
    website?: string;
    android?: string;
    ios?: string;
    roku?: string;
  };
  highlights: string[];
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Skills {
  languages: string[];
  frameworks: string[];
  tools: string[];
  coursework: string[];
  linguistics: string[];
}

export interface CVData {
  personalInfo: PersonalInfo;
  education: Education;
  workExperience: WorkExperience[];
  projects: Project[];
  skills: SkillCategory[];
}

export interface SlideProps {
  isActive: boolean;
  direction: number;
}