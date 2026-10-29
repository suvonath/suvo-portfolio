import { PersonalInfo, Project, EducationItem, SkillCategory } from "@/types/portfolio";

export const personalInfo: PersonalInfo = {
  name: "Suvo Dev Nath",
  designation: "Web Developer",
  location: "Sylhet, Bangladesh",
  email: "suvodevnath123@gmail.com",
  phone: "+880 1736-449874",
  phoneRaw: "+8801736449874",
  linkedIn: "https://www.linkedin.com/in/shubho-dev/",
  gitHub: "https://github.com/suvonath",
  whatsApp: "https://wa.me/8801736449874",
  professionalSummary:
    "I’m a Web Developer focused on building modern, responsive, and user-friendly web applications. I enjoy turning ideas into practical digital experiences through clean code, reusable components, and thoughtful UI design. My experience includes frontend development with React and Next.js, styling with Tailwind CSS, and backend development with Node.js, Express.js, and databases. I’m continuously learning, improving my engineering skills, and exploring better ways to build scalable web applications.",
  heroHeadline: "Building thoughtful",
  heroHighlight: "digital experiences",
  heroSupportingText:
    "I'm Suvo Dev Nath, a Web Developer who enjoys building responsive interfaces, reusable React components, and practical full-stack web applications.",
  aboutJourney: [
    "I'm a Web Developer based in Sylhet, Bangladesh, with a strong interest in building useful, accessible, and visually polished web experiences.",
    "My journey into web development has involved learning the fundamentals of HTML, CSS, and JavaScript and progressing toward component-based development with React and modern application development with Next.js. I've also explored backend technologies such as Node.js, Express.js, MongoDB, and MySQL, which help me understand how the different parts of a web application work together.",
    "I particularly enjoy turning design ideas into responsive interfaces, organizing code into reusable components, solving development problems, and improving the overall user experience. I value readable code, continuous learning, and practical solutions over unnecessary complexity.",
    "Outside development, I enjoy exploring topics such as science, evolution, and natural selection, as well as learning about ideas that help me understand the world more deeply.",
  ],
  whatIEnjoy: [
    {
      title: "Clean & Responsive Interfaces",
      description:
        "Translating design concepts into fluid, accessible layouts that adapt harmoniously to every screen size.",
    },
    {
      title: "Modern Web Technologies",
      description:
        "Working with React, Next.js, Tailwind CSS, and exploring modern patterns in frontend architecture.",
    },
    {
      title: "Practical Problem Solving",
      description:
        "Tackling real coding challenges, organizing reusable components, and prioritizing clarity over overengineering.",
    },
    {
      title: "Science & New Ideas",
      description:
        "Exploring evolutionary biology, natural systems, and conceptual frameworks that broaden perspective.",
    },
  ],
  professionalFocus: [
    {
      title: "Frontend Engineering",
      description:
        "Building semantic, accessible, and modular interfaces using React, Next.js, and modern CSS tooling.",
    },
    {
      title: "Component Architecture",
      description:
        "Structuring scalable UI systems with reusable components, strong typing, and clean state boundaries.",
    },
    {
      title: "Full-Stack Learning",
      description:
        "Connecting client interfaces to Node.js / Express backends, RESTful endpoints, and relational/document databases.",
    },
    {
      title: "Engineering Best Practices",
      description:
        "Writing maintainable code, adhering to mobile-first responsive principles, and optimizing user ergonomics.",
    },
  ],
};

export const educationData: EducationItem[] = [
  {
    id: "bsc-cse",
    degree: "Bachelor of Science in Computer Science and Engineering",
    institution: "Leading University, Sylhet",
    location: "Sylhet, Bangladesh",
    period: "2018 – Present",
    status: "In progress",
    isCurrent: true,
    details:
      "Currently pursuing an undergraduate degree in Computer Science and Engineering, focusing on software engineering principles, algorithms, data structures, database systems, and web application development.",
  },
  {
    id: "hsc",
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Shahjalal City College, Sylhet",
    location: "Sylhet, Bangladesh",
    period: "2017",
    status: "Completed",
    group: "Science",
    gpa: "4.00 / 5.00",
    details:
      "Completed higher secondary education with a science concentration, strengthening foundational knowledge in mathematics, physics, and computing.",
  },
  {
    id: "ssc",
    degree: "Secondary School Certificate (SSC)",
    institution: "Rangpani Captain Rashid High School",
    location: "Jaintapur, Sylhet, Bangladesh",
    period: "2015",
    status: "Completed",
    group: "Science",
    gpa: "4.39 / 5.00",
    details:
      "Completed secondary education with honors in science, developing an early passion for technology and natural sciences.",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    description:
      "Core technologies used to build responsive, accessible, and interactive user interfaces.",
    skills: [
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "SCSS",
      "JavaScript (ES6+)",
      "React.js",
      "Next.js",
    ],
  },
  {
    id: "backend",
    title: "Backend Development",
    description:
      "Server-side environments and micro-frameworks for API design and business logic.",
    skills: ["Node.js", "Express.js"],
  },
  {
    id: "databases",
    title: "Databases",
    description:
      "Document and relational database engines for structured data storage and querying.",
    skills: ["MongoDB", "MySQL"],
  },
  {
    id: "apis-testing",
    title: "APIs & Testing",
    description:
      "HTTP communication protocols, client libraries, and unit/component testing tools.",
    skills: ["REST APIs", "Axios", "Jest", "React Testing Library"],
  },
  {
    id: "tools",
    title: "Developer Tools",
    description:
      "Version control, build automation, code formatting, and modern development workflows.",
    skills: [
      "Git",
      "GitHub",
      "Visual Studio Code",
      "npm",
      "Yarn",
      "Vite",
      "ESLint",
      "Prettier",
    ],
  },
  {
    id: "additional",
    title: "Additional Knowledge",
    description:
      "Design methodologies, mobile optimizations, and progressive application fundamentals.",
    skills: [
      "Responsive Web Design",
      "Mobile-First Development",
      "PWA Fundamentals",
    ],
  },
];

export const projectsData: Project[] = [
  {
    slug: "hypercampus",
    name: "HyperCampus",
    type: "Learning Management System",
    shortDescription:
      "Developed a responsive learning management platform that enables users to browse courses, enroll, and track learning progress. Implemented dynamic React components and interfaces for course creation, content management, and progress tracking.",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    techCategories: [
      { name: "Frontend Framework", items: ["React.js", "JavaScript (ES6+)"] },
      { name: "Styling & UI", items: ["Tailwind CSS", "Responsive Design"] },
      { name: "Architecture", items: ["Component-Based UI", "State Management"] },
    ],
    githubUrl: "https://github.com/Shubho-Debnath/Hypercampus-LMS",
    liveUrl: null,
    overview:
      "HyperCampus is a responsive learning management system built with React and Tailwind CSS. The platform delivers an organized, distraction-free environment where learners can explore courses, manage their active enrollments, and track chapter progress, while instructors receive intuitive interfaces for organizing modules and lessons.",
    purpose:
      "To provide an accessible, modern learning portal that eliminates unnecessary interface complexity and makes course discovery and progress tracking straightforward for university and self-paced students.",
    targetUsers:
      "Students seeking structured, self-paced technical courses, and educators who require an organized, component-based dashboard for curriculum delivery.",
    mainFeatures: [
      "Dynamic course catalog with categorization, search, and overview cards",
      "Student learning dashboard showing enrolled courses and completion metrics",
      "Modular course content viewer with lesson progression tracking",
      "Instructor content management layout for course outlines and syllabus drafting",
      "Fully responsive, mobile-first design implemented with Tailwind CSS utility classes",
    ],
    developmentApproach:
      "Architected using a modular React component hierarchy where state flows predictably from root views down to reusable cards, progress indicators, and navigation sidebars. Tailwind CSS was utilized to guarantee tight design consistency and fluid mobile adaptability.",
    challenges: [
      {
        title: "State Coordination Across Course Modules",
        description:
          "Designing an intuitive state flow to synchronize lesson completion status, curriculum progress bars, and active chapter highlights across nested components without creating unnecessary re-renders.",
      },
      {
        title: "Responsive Multi-Pane Dashboard Layout",
        description:
          "Ensuring the multi-column layout—consisting of a collapsible curriculum sidebar, main content viewer, and student progress summary—adapts seamlessly from large desktop monitors to narrow mobile screens.",
      },
      {
        title: "Modular Component Reusability",
        description:
          "Abstracting card layouts, badge indicators, and modal prompts into decoupled, reusable UI elements that maintain design consistency throughout the platform.",
      },
    ],
    futureImprovements: [
      "Integrate persistent backend storage using a Node.js and Express API with MongoDB",
      "Implement user authentication and role-based views (student vs. instructor)",
      "Add interactive quiz modules with immediate feedback and scoring summaries",
      "Introduce downloadable course notes and offline caching via Service Workers",
      "Enhance accessibility with comprehensive ARIA roles, skip links, and full keyboard navigation",
    ],
    mockupType: "lms",
  },
  {
    slug: "university-project-management-system",
    name: "University Project Management System",
    type: "Academic Web Application",
    shortDescription:
      "Developed a web-based system for managing third- and fourth-year university student projects. Implemented project registration, team assignment, and progress tracking to improve project organization and accessibility for students and faculty.",
    technologies: ["HTML", "CSS", "Bootstrap", "PHP", "JavaScript", "SQL"],
    techCategories: [
      { name: "Frontend", items: ["HTML5", "CSS3", "Bootstrap", "JavaScript"] },
      { name: "Backend", items: ["PHP"] },
      { name: "Database", items: ["MySQL / SQL"] },
    ],
    githubUrl: "https://github.com/Shubho-Debnath/University-Project-Management-System",
    liveUrl: null,
    overview:
      "An academic management web application built with PHP, MySQL, JavaScript, and Bootstrap to streamline undergraduate project submissions, team formation, supervisor allocations, and milestone tracking for senior computer science students.",
    purpose:
      "To replace manual paperwork and scattered spreadsheet coordination in academic departments with a centralized, accessible portal for students, supervisors, and department coordinators.",
    targetUsers:
      "Third- and fourth-year undergraduate university students, academic supervisors, and project committee coordinators at Leading University.",
    mainFeatures: [
      "Student project group registration and proposal submission workflow",
      "Supervisor assignment module with committee approval stages",
      "Milestone-based progress monitoring and status tracking",
      "Relational SQL database schema for students, faculty, and project metadata",
      "Role-tailored interfaces for students and faculty members",
      "Responsive administration views styled with Bootstrap",
    ],
    developmentApproach:
      "Built using a server-rendered PHP model connected to a relational MySQL database. Focused on robust database schema design to guarantee foreign-key constraints between students, project groups, and faculty supervisors, with Bootstrap providing consistent UI controls.",
    challenges: [
      {
        title: "Relational Database Integrity & Group Constraints",
        description:
          "Designing SQL relational tables with constraints preventing students from joining multiple concurrent groups and enforcing maximum team size rules during registration.",
      },
      {
        title: "Multi-Step Approval Workflow Logic",
        description:
          "Managing sequential status transitions (Proposal Submitted → Pending Supervisor Review → Approved / Revision Required → Midterm Review → Final Defense) with data consistency across all views.",
      },
      {
        title: "Server-Side Input Sanitization",
        description:
          "Implementing thorough server-side form validation and sanitization in PHP to prevent injection vulnerabilities and handle invalid character encodings in project descriptions.",
      },
    ],
    futureImprovements: [
      "Refactor legacy procedural scripts into a modern MVC structure or separate REST API",
      "Implement automated email notifications for supervisor approvals and upcoming defense dates",
      "Integrate file upload verification and cloud storage for thesis drafts and presentation slides",
      "Develop granular role-based permissions and an audit log for administrative modifications",
      "Provide real-time messaging between students and their assigned faculty supervisor",
    ],
    mockupType: "university",
  },
  {
    slug: "service-hiring-web-app",
    name: "Service Hiring Web App",
    type: "On-Demand Service Platform",
    shortDescription:
      "Built a responsive web application for finding and hiring service professionals, including plumbers, electricians, and mechanics. Designed a component-based interface focused on reusability, clear navigation, and an intuitive user experience.",
    technologies: ["React", "JavaScript", "CSS"],
    techCategories: [
      { name: "Frontend", items: ["React.js", "JavaScript (ES6+)"] },
      { name: "Styling", items: ["Custom CSS", "Responsive Flexbox & Grid"] },
      { name: "UX Design", items: ["Component Reusability", "Modal Flows"] },
    ],
    githubUrl: null, // Note: Repository link not provided in CV
    liveUrl: null,
    overview:
      "A component-based React web application engineered to connect homeowners and commercial clients with qualified local service specialists such as electricians, plumbers, and mechanics through an intuitive discovery and booking interface.",
    purpose:
      "To remove the friction of hiring verified local trade workers by offering transparent service categorization, detailed specialist profiles, and a straightforward booking inquiry workflow.",
    targetUsers:
      "Residents and property managers needing fast, trustworthy maintenance assistance, and independent tradespeople looking for direct customer leads.",
    mainFeatures: [
      "Categorized service directory (Electrical, Plumbing, Mechanical repair, Carpentry)",
      "Detailed professional profile cards with skill summaries and contact triggers",
      "Interactive booking inquiry modal with form validation",
      "Real-time client-side search and category filtering",
      "Mobile-optimized layout designed with clean, accessible touch targets",
    ],
    developmentApproach:
      "Created as a single-page React application focusing on high component reusability. The interface emphasizes clear information hierarchy, clean typographic contrast, and seamless state-driven filtering.",
    challenges: [
      {
        title: "Component Modularity & Clean State Hierarchy",
        description:
          "Designing provider cards and filter bars that communicate seamlessly through parent component state without introducing unnecessary complexity or prop drilling.",
      },
      {
        title: "Responsive Filter Interactions",
        description:
          "Crafting category selectors that render as horizontal scrolling chips on desktop while smoothly adapting to a thumb-friendly bottom sheet or drawer on mobile devices.",
      },
      {
        title: "Form Ergonomics & Feedback",
        description:
          "Structuring the booking inquiry modal with accessible form labels, error states, and clear visual confirmations for required user entries.",
      },
    ],
    futureImprovements: [
      "Connect frontend components to a RESTful Node.js / Express backend with live database records",
      "Add customer rating, verified review collection, and badge systems",
      "Integrate interactive geolocation and radius-based specialist search",
      "Implement real-time appointment scheduling and calendar syncing",
      "Add SMS / email automated notifications upon receiving a new service inquiry",
    ],
    mockupType: "service",
  },
  {
    slug: "ecommerce-website",
    name: "E-Commerce Website",
    type: "Frontend Storefront",
    shortDescription:
      "Developed a responsive e-commerce website with product listings, shopping cart functionality, and a modern interface designed to provide a smooth online shopping experience.",
    technologies: ["HTML", "CSS", "JavaScript"],
    techCategories: [
      { name: "Core Technologies", items: ["HTML5", "CSS3", "JavaScript (Vanilla)"] },
      { name: "Design System", items: ["CSS Grid", "Flexbox", "Responsive Typography"] },
      { name: "Client Architecture", items: ["DOM Manipulation", "Local Storage State"] },
    ],
    githubUrl: "https://github.com/Shubho-Debnath/Ecommerce-Website",
    liveUrl: "https://shubho-debnath.github.io/Ecommerce-Website/",
    overview:
      "A responsive e-commerce web storefront built with vanilla HTML, CSS, and modern JavaScript. It features an interactive product catalog, persistent client-side shopping cart state, price calculations, and responsive checkout previews.",
    purpose:
      "To build a high-performance, responsive e-commerce storefront utilizing core web fundamentals without heavy third-party framework dependencies, showcasing solid mastery of DOM manipulation and CSS layout techniques.",
    targetUsers:
      "Online retail shoppers seeking an agile, distraction-free browsing experience across smartphones, tablets, and desktop computers.",
    mainFeatures: [
      "Product catalog with high-resolution visual cards, pricing, and tag indicators",
      "Interactive shopping cart with item increment, decrement, and item removal",
      "Real-time subtotal, tax calculation, and order total updates",
      "Cart drawer with live badge counter reflected in the sticky navigation header",
      "Responsive checkout summary modal with input validation",
      "Mobile-first responsive layout utilizing modern CSS Grid and Flexbox",
    ],
    developmentApproach:
      "Constructed entirely with semantic HTML5 elements, modular CSS stylesheets, and vanilla JavaScript event listeners. State management is encapsulated in clean JavaScript modules that synchronize UI changes with local browser storage.",
    challenges: [
      {
        title: "Vanilla JavaScript State & DOM Synchronization",
        description:
          "Managing cart state, price updates, and quantity controls purely in vanilla JavaScript without a reactive framework, while keeping the UI synchronized across multiple page interactions.",
      },
      {
        title: "Responsive Cart Drawer Ergonomics",
        description:
          "Engineering an accessible, sliding cart drawer that handles backdrop dismissal, prevents body background scroll when active, and maintains full responsiveness on small mobile screens.",
      },
      {
        title: "Consistent Cross-Browser CSS Layouts",
        description:
          "Ensuring the multi-column product grid and sticky header maintain pixel-perfect alignment across different browser engines without layout shifts.",
      },
    ],
    futureImprovements: [
      "Re-engineer into a Next.js / React application with Server Components and static site generation",
      "Integrate secure payment gateway checkout (such as Stripe or SSLCommerz)",
      "Implement server-backed inventory management and persistent customer order history",
      "Add faceted filtering (filter by price range, brand, availability) and instantaneous text search",
      "Optimize images using next/image with AVIF/WebP formats for faster mobile load times",
    ],
    mockupType: "ecommerce",
  },
];
