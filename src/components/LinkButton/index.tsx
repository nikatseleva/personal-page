import {AnchorHTMLAttributes, ReactNode} from 'react';

interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    variant?: 'primary' | 'ghost';
    children: ReactNode;
}

const variants = {
    primary: 'bg-linear-to-r from-brand-cyan via-brand-violet to-brand-pink bg-size-[200%_auto] text-white shadow-lg shadow-brand-violet/30 hover:bg-right hover:shadow-brand-violet/50',
    ghost: 'border border-neutral-300 text-neutral-800 hover:border-brand-violet hover:text-brand-violet dark:border-white/15 dark:text-neutral-100 dark:hover:border-brand-cyan dark:hover:text-brand-cyan',
};

const LinkButton = ({variant = 'primary', className = '', children, ...props}: LinkButtonProps) => (
    <a
        {...props}
        className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-base font-semibold transition-all duration-500 hover:-translate-y-0.5 ${variants[variant]} ${className}`}
    >
        {children}
    </a>
);

export default LinkButton;
