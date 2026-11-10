import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import type {SvgIconComponent} from '@mui/icons-material';

import doboardMain from '../assets/projects/doboard-1.webp';
import doboardHover from '../assets/projects/doboard-2.webp';
import spotfixMain from '../assets/projects/spotfix-1.webp';
import spotfixHover from '../assets/projects/spotfix-2.webp';
import sberMain from '../assets/projects/sber-1.webp';
import sberHover from '../assets/projects/sber-2.webp';

export const profile = {
    firstName: 'Veronika',
    lastName: 'Tseleva',
    role: 'Frontend Developer',
    email: 'nika.tseleva@gmail.com',
    intro: '4+ years of experience in React, TypeScript and JavaScript. I focus on performance, offline-first features and well-tested UI, delivering features end-to-end from Figma designs to production in remote Agile/Scrum teams.',
} as const;

export interface Social {
    label: string;
    href: string;
    icon: SvgIconComponent;
}

export const socials: Social[] = [
    {label: 'Telegram', href: 'https://t.me/nikatseleva', icon: TelegramIcon},
    {label: 'LinkedIn', href: 'https://www.linkedin.com/in/veronika-tseleva', icon: LinkedInIcon},
    {label: 'GitHub', href: 'https://github.com/nikatseleva', icon: GitHubIcon},
    {label: 'Email', href: `mailto:${profile.email}`, icon: AlternateEmailIcon},
];

export interface SkillGroup {
    title: string;
    items: string[];
}

export const skillGroups: SkillGroup[] = [
    {title: 'Core', items: ['JavaScript', 'TypeScript', 'React', 'HTML', 'CSS']},
    {title: 'State & Routing', items: ['Redux Toolkit', 'React Router', 'REST API']},
    {title: 'UI', items: ['TailwindCSS', 'Material UI', 'Adaptive layout', 'Figma']},
    {title: 'Testing & Data', items: ['Jest', 'React Testing Library', 'IndexedDB', 'Node.js']},
];

export const aiTools: SkillGroup = {
    title: 'AI tools',
    items: ['Claude Code', 'AI-assisted coding'],
};

export interface Job {
    company: string;
    role: string;
    period: string;
    format: string;
    isCurrent?: boolean;
    products?: { name: string; description: string }[];
    highlights?: string[];
    stack?: string[];
}

export const experience: Job[] = [
    {
        company: 'CleanTalk Inc',
        role: 'Frontend Developer',
        period: 'Apr 2024 — Present',
        format: 'Remote',
        isCurrent: true,
        products: [
            {name: 'DoBoard', description: 'Corporate task and project management platform.'},
            {name: 'Spotfix', description: 'On-page feedback and annotation tool for website editing.'},
        ],
        highlights: [
            'Developed responsive UI features based on Figma designs, maintaining consistency and usability across the application.',
            'Improved application performance by approximately 20% through code splitting, lazy loading, memoization, and other optimization techniques.',
            'Implemented IndexedDB for local data storage, enabling offline-first functionality.',
            'Maintained and extended a browser extension, ensuring seamless integration with core product features.',
            'Reviewed code, fixed bugs, refactored components, and improved APIs while independently delivering features within a remote Agile/Scrum team.',
        ],
        stack: ['JavaScript', 'React', 'Redux', 'React Router', 'Vite', 'Gulp', 'IndexedDB', 'HTML', 'CSS', 'Adaptive layout'],
    },
    {
        company: 'Itransition Group',
        role: 'Frontend / Full-stack Developer',
        period: 'Feb 2024 — Apr 2024',
        format: 'Upskilling',
    },
    {
        company: 'Sber',
        role: 'Frontend Developer',
        period: 'Sep 2021 — Oct 2022',
        format: 'Remote',
        products: [
            {name: 'Internal platform', description: 'Web platform for managers and brokers, featuring analytical dashboards and financial tracking tools.'},
        ],
        highlights: [
            "Built complex user interfaces for the “Manager's Workspace” module, enabling real-time KPI monitoring and goal setting based on Figma designs.",
            'Expanded the internal UI component library, adapting and enhancing reusable components to maintain visual consistency across the platform.',
            'Optimized frontend-backend interactions by participating in REST API design and reducing redundant network requests, leading to smoother dashboard performance.',
            'Ensured application reliability and accessibility, focusing on UX details and writing unit/integration tests with Jest and React Testing Library.',
            'Maintained a strictly typed codebase using TypeScript, which helped minimize bugs and improved the speed of developing new features.',
            'Collaborated within a cross-functional Agile team (analysts, backend, QA), delivering consistent updates in a fully remote environment.',
        ],
        stack: ['TypeScript', 'React', 'React Router', 'Chart.js', 'TailwindCSS', 'HTML', 'CSS', 'Adaptive layout'],
    },
];

export interface Project {
    title: string;
    company: string;
    period: string;
    description: string;
    stack: string[];
    image: string;
    hoverImage: string;
    url?: string;
    note?: string;
}

export const projects: Project[] = [
    {
        title: 'DoBoard',
        company: 'CleanTalk',
        period: '2024 — now',
        description: 'Simple, fast and powerful project management tool for planning projects, to-do lists and tasks.',
        stack: ['React', 'Redux', 'JavaScript', 'React Router', 'Vite', 'IndexedDB', 'HTML', 'CSS', 'Adaptive layout'],
        image: doboardMain,
        hoverImage: doboardHover,
        url: 'https://doboard.com/',
    },
    {
        title: 'Spotfix',
        company: 'CleanTalk',
        period: '2024 — now',
        description: 'Visual website feedback tool: highlight text or an image on a page and leave a comment.',
        stack: ['JavaScript', 'Gulp', 'IndexedDB', 'HTML', 'CSS'],
        image: spotfixMain,
        hoverImage: spotfixHover,
        url: 'https://doboard.com/spotfix/',
    },
    {
        title: "Manager's Workspace",
        company: 'Sber',
        period: '2021 — 2022',
        description: 'Internal web platform for managers and brokers, featuring analytical dashboards and financial tracking tools.',
        stack: ['TypeScript', 'React', 'React Router', 'Chart.js', 'TailwindCSS', 'HTML', 'CSS', 'Adaptive layout'],
        image: sberMain,
        hoverImage: sberHover,
        note: 'Internal · NDA',
    },
];
