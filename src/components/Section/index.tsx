import {ReactNode} from 'react';
import {SectionId} from '../../types';
import Reveal from '../Reveal';

interface SectionProps {
    id: SectionId;
    eyebrow?: string;
    title?: ReactNode;
    children: ReactNode;
    spacing?: string;
}

const Section = ({id, eyebrow, title, children, spacing = 'py-16 md:py-24'}: SectionProps) => (
    <section id={id} className={`relative mx-auto w-full max-w-6xl px-5 sm:px-8 ${spacing}`}>
        {title && (
            <Reveal className="mb-10 md:mb-14">
                {eyebrow && (
                    <p className="font-mono text-sm text-brand-violet dark:text-brand-cyan">{eyebrow}</p>
                )}
                <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-neutral-900 md:text-5xl dark:text-white">
                    {title}
                </h2>
                <div className="animated-border mt-5 w-20 border-t-4"/>
            </Reveal>
        )}
        {children}
    </section>
);

export default Section;
