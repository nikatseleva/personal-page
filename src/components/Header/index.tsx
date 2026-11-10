import {useEffect, useState} from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import {SectionId} from '../../types';
import ThemeToggle from '../ThemeToggle';

const navItems: { id: SectionId; label: string }[] = [
    {id: 'skills', label: 'skills'},
    {id: 'experience', label: 'experience'},
    {id: 'projects', label: 'projects'},
    {id: 'contact', label: 'contact'},
];

const Header = () => {
    const [currentBlock, setCurrentBlock] = useState<SectionId>('home');
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const [isScrolled, setIsScrolled] = useState(() => window.scrollY > 16);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 16);
        window.addEventListener('scroll', handleScroll, {passive: true});
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const media = window.matchMedia('(min-width: 768px)');
        const handleChange = (e: MediaQueryListEvent) => {
            if (e.matches) {
                setIsOpenMenu(false);
            }
        };
        media.addEventListener('change', handleChange);
        return () => media.removeEventListener('change', handleChange);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setCurrentBlock(entry.target.id as SectionId);
                }
            });
        }, {rootMargin: '-45% 0px -50% 0px'});

        document.querySelectorAll('section[id]').forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    const handleNavigate = (id: SectionId) => {
        setCurrentBlock(id);
        setIsOpenMenu(false);
    };

    const isSolid = isScrolled || isOpenMenu;

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${isSolid
                ? 'border-neutral-200/70 bg-neutral-50/75 backdrop-blur-xl dark:border-white/10 dark:bg-ink/70'
                : 'border-transparent'}`}
        >
            <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8 md:h-20">
                <a
                    href="#home"
                    onClick={() => handleNavigate('home')}
                    className="font-mono text-lg font-semibold text-neutral-900 dark:text-white"
                >
                    <span className="text-brand-violet dark:text-brand-cyan">&lt;</span>
                    veronika
                    <span className="text-brand-pink"> /&gt;</span>
                </a>

                <ul className="hidden items-center gap-1 md:flex">
                    {navItems.map(({id, label}) => (
                        <li key={id}>
                            <a
                                href={`#${id}`}
                                onClick={() => handleNavigate(id)}
                                aria-current={currentBlock === id ? 'location' : undefined}
                                className={`relative px-3 py-2 font-mono text-sm transition-colors hover:text-neutral-900 dark:hover:text-white ${currentBlock === id
                                    ? 'text-neutral-900 dark:text-white'
                                    : 'text-neutral-500 dark:text-neutral-400'}`}
                            >
                                {label}
                                <span
                                    className={`absolute inset-x-3 -bottom-0.5 border-b-2 ${currentBlock === id ? 'animated-border' : 'border-transparent'}`}/>
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center gap-2">
                    <ThemeToggle/>
                    <button
                        type="button"
                        aria-label={isOpenMenu ? 'Close menu' : 'Open menu'}
                        aria-expanded={isOpenMenu}
                        onClick={() => setIsOpenMenu((open) => !open)}
                        className="grid size-10 place-items-center rounded-full border border-neutral-300 text-xl text-neutral-700 md:hidden dark:border-white/10 dark:text-neutral-300"
                    >
                        {isOpenMenu ? <CloseIcon fontSize="inherit"/> : <MenuIcon fontSize="inherit"/>}
                    </button>
                </div>
            </nav>

            {isOpenMenu && (
                <ul className="flex flex-col gap-1 border-t border-neutral-200/70 px-5 pt-4 pb-8 md:hidden dark:border-white/10">
                    {navItems.map(({id, label}, i) => (
                        <li key={id}>
                            <a
                                href={`#${id}`}
                                onClick={() => handleNavigate(id)}
                                className="flex items-baseline gap-4 py-3 font-display text-3xl font-semibold text-neutral-900 dark:text-white"
                            >
                                <span className="font-mono text-sm text-brand-violet dark:text-brand-cyan">0{i + 1}</span>
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </header>
    );
};

export default Header;
