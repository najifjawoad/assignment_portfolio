import {
  Code2,
  Database,
  Layout,
  Server,
  Smartphone,
  Terminal,
} from 'lucide-react';

export const personalInfo = {
  name: 'Najif Jawoad Jim',
  role: 'Full Stack Developer',
  location: 'Based in Bangladesh',
  bio: 'A passionate Software Engineer who enjoys building applications that are not only functional but also intelligent. My interest in programming started with a simple curiosity about how software works. Over time, that curiosity grew into a passion for creating scalable applications and solving real-world problems.',
  email: 'najifjawoad@gmail.com',
  phone: '01407322600',
  whatsapp: '01407322600',
  github: 'https://github.com/najifjawoad',
  linkedin: 'https://www.linkedin.com/in/najif-jawoad-jim/',
};

export const education = [
  {
    year: 'Expected 2028',
    degree: 'BSC IN COMPUTER SCIENCE',
    institution: 'United International University',
  },
];

export const skillsData = [
  {
    title: 'FRONTEND ARCHITECTURE',
    icon: Layout,
    items: [
      { name: 'React.js', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'JavaScript/TypeScript', level: 88 },
    ],
  },
  {
    title: 'BACKEND ENGINEERING',
    icon: Server,
    items: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 88 },
      { name: 'REST APIs', level: 90 },
      { name: 'Authentication (JWT)', level: 85 },
    ],
  },
  {
    title: 'DATABASES & CLOUD',
    icon: Database,
    items: [
      { name: 'MongoDB', level: 85 },
      { name: 'PostgreSQL', level: 75 },
      { name: 'Firebase', level: 80 },
      { name: 'Vercel / Netlify', level: 90 },
    ],
  },
  {
    title: 'TOOLS & WORKFLOWS',
    icon: Terminal,
    items: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'VS Code', level: 95 },
      { name: 'Postman', level: 85 },
      { name: 'Figma', level: 70 },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: 'Eco Platform',
    category: 'Full Stack Web Application',
    description: 'A comprehensive eco-friendly platform. It features user authentication, a dynamic dashboard, and real-time data updates to manage eco-related activities.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    liveLink: 'https://chimerical-medovik-63b5cf.netlify.app/',
    githubClient: 'https://github.com/munna7487/my-eco-client',
    githubServer: 'https://github.com/munna7487/eco-server',
    challenges: 'Handling complex state management for real-time updates and ensuring secure data transmission between the client and server.',
  },
  {
    id: 2,
    title: 'Club Sphere',
    category: 'Community Management System',
    description: 'A platform designed to manage club activities, memberships, and events. Includes features for role-based access control and event scheduling.',
    techStack: ['React', 'Firebase', 'Express', 'Node.js'],
    liveLink: 'https://gamy-attention.surge.sh/',
    githubClient: 'https://github.com/munna7487/club-sphere-client',
    githubServer: 'https://github.com/munna7487/club-sphere-server',
    challenges: 'Implementing robust role-based access control and designing an intuitive UI for managing complex event schedules.',
  },
];

export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];
