import NorthIcon from '@mui/icons-material/North';
import {profile, socials} from '../../data/profile';

const Footer = () => (
    <footer className="border-t border-neutral-200/70 dark:border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 sm:px-8 md:flex-row">
            <p className="text-center font-mono text-sm text-neutral-500 md:text-left">
                {profile.firstName} {profile.lastName}
                <span className="mx-2 text-brand-violet dark:text-brand-cyan">·</span>
                built with React, TypeScript, Tailwind & Vite
            </p>
            <div className="flex items-center gap-5">
                {socials.map(({label, href, icon: Icon}) => (
                    <a
                        key={label}
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel="noreferrer"
                        aria-label={label}
                        className="flex text-xl text-neutral-500 transition-colors hover:text-brand-violet dark:hover:text-brand-cyan"
                    >
                        <Icon fontSize="inherit"/>
                    </a>
                ))}
                <a
                    href="#home"
                    aria-label="Back to top"
                    className="ml-2 grid size-9 place-items-center rounded-full border border-neutral-300 text-lg text-neutral-600 transition hover:-translate-y-1 hover:border-brand-violet hover:text-brand-violet dark:border-white/10 dark:text-neutral-400 dark:hover:border-brand-cyan dark:hover:text-brand-cyan"
                >
                    <NorthIcon fontSize="inherit"/>
                </a>
            </div>
        </div>
    </footer>
);

export default Footer;
