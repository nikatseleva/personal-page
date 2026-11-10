import {ReactNode} from 'react';

const sizes = {
    sm: 'px-3 py-1 font-mono text-xs',
    lg: 'px-4 py-2 text-base font-medium',
};

const Tag = ({children, size = 'sm'}: { children: ReactNode; size?: keyof typeof sizes }) => (
    <span className={`inline-flex items-center rounded-full border border-neutral-300/80 bg-white/60 text-neutral-700 transition-colors hover:border-brand-violet hover:text-brand-violet dark:border-white/10 dark:bg-white/5 dark:text-neutral-300 dark:hover:border-brand-cyan dark:hover:text-brand-cyan ${sizes[size]}`}>
        {children}
    </span>
);

export default Tag;
