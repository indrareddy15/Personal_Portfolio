export interface Contact {
  phone: string;
  email: string;
  linkedin: string;
  github: string;
}

export interface Education {
  institution: string;
  degree: string;
  major: string;
  duration: string;
}

export interface WorkExperience {
  company: string;
  position: string;
  location: string;
  duration: string;
  responsibilities: string[];
}

export interface Project {
  name: string;
  tech_stack: string[];
  duration: string;
  description: string[];
}

export interface PortfolioData {
  name: string;
  contact: Contact;
  education: Education;
  skills: string[];
  work_experience: WorkExperience[];
  projects: Project[];
  awards: string[];
  extracurricular_activities: string[];
  certificates: string[];
}