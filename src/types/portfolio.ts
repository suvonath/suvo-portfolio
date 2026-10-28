export interface Project {
  slug: string;
  name: string;
  shortDescription: string;
  type: string;
  technologies: string[];
  techCategories: {
    name: string;
    items: string[];
  }[];
  githubUrl: string | null;
  liveUrl: string | null;
  overview: string;
  purpose: string;
  targetUsers: string;
  mainFeatures: string[];
  developmentApproach: string;
  challenges: {
    title: string;
    description: string;
  }[];
  futureImprovements: string[];
  mockupType: "lms" | "university" | "service" | "ecommerce";
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  status: string;
  details?: string;
  gpa?: string;
  group?: string;
  isCurrent?: boolean;
}

export interface SkillItem {
  name: string;
  levelBadge?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: string[];
}

export interface PersonalInfo {
  name: string;
  designation: string;
  location: string;
  email: string;
  phone: string;
  phoneRaw: string;
  linkedIn: string;
  gitHub: string;
  whatsApp: string;
  professionalSummary: string;
  heroHeadline: string;
  heroHighlight: string;
  heroSupportingText: string;
  aboutJourney: string[];
  whatIEnjoy: {
    title: string;
    description: string;
  }[];
  professionalFocus: {
    title: string;
    description: string;
  }[];
}
