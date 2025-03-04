export const projectData = [
  {
    title: 'Accessibility Dashboard',
    description: 'A comprehensive dashboard for monitoring web accessibility metrics and WCAG compliance.',
    image: 'https://picsum.photos/800/400',
    link: '#',
    tags: ['Next.js', 'WCAG', 'TypeScript', 'Tailwind'],
  },
  {
    title: 'Screen Reader Plus',
    description: 'Enhanced screen reader extension with customizable shortcuts and voice commands.',
    image: 'https://picsum.photos/800/400?random=2',
    link: '#',
    tags: ['JavaScript', 'ARIA', 'Chrome Extension'],
  }
];

export const skillsData = [
  { name: 'Web Accessibility', icon: 'FaUniversalAccess', level: 95 },
  { name: 'ARIA Standards', icon: 'FaKeyboard', level: 90 },
  { name: 'Screen Readers', icon: 'FaHeadphones', level: 85 },
  { name: 'Color Theory', icon: 'FaPalette', level: 88 },
  { name: 'UX Design', icon: 'FaPencilRuler', level: 82 },
  { name: 'HTML Semantics', icon: 'FaCode', level: 92 }
];

export const socialData = [
  { name: 'GitHub', url: 'https://github.com/yourusername', icon: 'FaGithub' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/yourusername', icon: 'FaLinkedin' }
];

export interface Recommendation {
  name: string;
  role: string;
  email: string;
  text: string;
  icon: 'fox' | 'owl' | 'bear' | 'deer';
}

export const recommendationsData: Recommendation[] = [
  {
    name: 'Sarah Johnson',
    role: 'Senior UX Designer at Google',
    email: 'sarah.j@google.com',
    text: 'Milica is an exceptional developer with a keen eye for accessibility. Her work consistently demonstrates both technical excellence and genuine care for user experience.',
    icon: 'fox'
  },
  {
    name: 'David Chen',
    role: 'Engineering Manager at Microsoft',
    email: 'd.chen@microsoft.com',
    text: 'Working with Milica was a pleasure. Her attention to detail and commitment to creating inclusive web experiences sets a high standard for our industry.',
    icon: 'owl'
  },
  {
    name: 'Emma Williams',
    role: 'Product Lead at Twitter',
    email: 'emma.w@twitter.com',
    text: 'Milica brings both technical expertise and empathy to her work. She transformed our platform\'s accessibility and helped establish best practices across our team.',
    icon: 'bear'
  },
  {
    name: 'Marcus Thompson',
    role: 'Frontend Architect at Adobe',
    email: 'm.thompson@adobe.com',
    text: 'I\'ve rarely met developers with Milica\'s combination of technical skill and user-focused mindset. She\'s a true advocate for accessible web development.',
    icon: 'deer'
  }
];
