import {useState} from 'react';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import {Theme} from '../../types';

const ThemeToggle = () => {
    const [theme, setTheme] = useState<Theme>(() =>
        document.documentElement.classList.contains('dark') ? 'dark' : 'light'
    );

    const toggleTheme = () => {
        const next = document.documentElement.classList.contains('dark') ? 'light' : 'dark';
        document.documentElement.classList.toggle('dark', next === 'dark');
        localStorage.setItem('theme', next);
        setTheme(next);
    };

    return (
        <button
            type="button"
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            onClick={toggleTheme}
            className="grid size-10 place-items-center overflow-hidden rounded-full border border-neutral-300 bg-white/60 text-xl text-neutral-700 transition-colors hover:border-brand-violet hover:text-brand-violet dark:border-white/10 dark:bg-white/5 dark:text-neutral-300 dark:hover:border-brand-cyan dark:hover:text-brand-cyan"
        >
            <span className="col-start-1 row-start-1 flex transition duration-500 dark:-rotate-90 dark:scale-0 dark:opacity-0">
                <DarkModeIcon fontSize="inherit"/>
            </span>
            <span className="col-start-1 row-start-1 flex rotate-90 scale-0 opacity-0 transition duration-500 dark:rotate-0 dark:scale-100 dark:opacity-100">
                <LightModeIcon fontSize="inherit"/>
            </span>
        </button>
    );
};

export default ThemeToggle;
