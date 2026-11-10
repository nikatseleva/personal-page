import {useState} from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import {experience, Job} from '../../data/profile';
import Section from '../../components/Section';
import Reveal from '../../components/Reveal';
import Tag from '../../components/Tag';

const JobCard = ({job}: { job: Job }) => {
    const [isOpen, setIsOpen] = useState(false);
    const hasDetails = Boolean(job.products || job.highlights);
    const detailsId = `job-details-${job.company.replace(/\W+/g, '-').toLowerCase()}`;

    return (
        <article className={`glow-card rounded-2xl p-5 md:p-6 ${job.isCurrent ? 'glow-on' : ''}`}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-display text-xl font-bold text-neutral-900 md:text-2xl dark:text-white">
                    {job.role} <span className="text-gradient">@ {job.company}</span>
                </h3>
                <p className="font-mono text-xs text-neutral-500">
                    {job.period} · {job.format}
                </p>
            </div>

            {job.stack && (
                <div className="mt-4 flex flex-wrap gap-2">
                    {job.stack.map((item) => <Tag key={item}>{item}</Tag>)}
                </div>
            )}

            {hasDetails && (
                <>
                    <div
                        id={detailsId}
                        className={`grid transition-[grid-template-rows] duration-500 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                    >
                        <div className="overflow-hidden" inert={!isOpen}>
                            {job.products && (
                                <ul className="mt-5 space-y-1 text-neutral-600 dark:text-neutral-400">
                                    {job.products.map(({name, description}) => (
                                        <li key={name}>
                                            <span className="font-semibold text-neutral-900 dark:text-white">{name}:</span> {description}
                                        </li>
                                    ))}
                                </ul>
                            )}
                            {job.highlights && (
                                <ul className="mt-4 space-y-2">
                                    {job.highlights.map((item) => (
                                        <li key={item} className="flex gap-3 text-neutral-600 dark:text-neutral-400">
                                            <span className="text-brand-pink">▹</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>

                    <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={detailsId}
                        onClick={() => setIsOpen((open) => !open)}
                        className="mt-4 inline-flex items-center gap-1 font-mono text-sm text-brand-violet transition-colors hover:text-brand-pink dark:text-brand-cyan dark:hover:text-brand-pink"
                    >
                        {isOpen ? 'hide details' : 'show details'}
                        <span className={`flex transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                            <ExpandMoreIcon fontSize="small"/>
                        </span>
                    </button>
                </>
            )}
        </article>
    );
};

const Experience = () => (
    <Section id="experience" eyebrow="02. experience" title={<>Where I've <span className="text-gradient">worked</span></>}>
        <ol className="relative space-y-6 before:absolute before:top-2 before:bottom-2 before:left-[7px] before:w-0.5 before:bg-linear-to-b before:from-brand-cyan before:via-brand-violet before:to-brand-pink before:opacity-60">
            {experience.map((job, i) => (
                <li key={job.company} className="relative pl-10 md:pl-14">
                    <span className="absolute top-6 left-0 flex size-4">
                        {job.isCurrent && (
                            <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand-violet opacity-60 dark:bg-brand-cyan"/>
                        )}
                        <span className="relative inline-flex size-4 rounded-full border-4 border-neutral-50 bg-brand-violet dark:border-ink dark:bg-brand-cyan"/>
                    </span>

                    <Reveal delay={i * 100}>
                        <JobCard job={job}/>
                    </Reveal>
                </li>
            ))}
        </ol>
    </Section>
);

export default Experience;
