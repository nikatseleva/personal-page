import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import {Project, projects} from '../../data/profile';
import Section from '../../components/Section';
import Reveal from '../../components/Reveal';
import Tag from '../../components/Tag';

const ProjectCard = ({project}: { project: Project }) => (
    <article className="glow-card group flex h-full flex-col rounded-2xl p-2">
        <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-900">
            <img
                src={project.image}
                alt={`${project.title} interface`}
                loading="lazy"
                className="absolute inset-0 size-full object-cover object-left-top transition duration-700 group-hover:scale-105 group-hover:opacity-0"
            />
            <img
                src={project.hoverImage}
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="absolute inset-0 size-full scale-105 object-cover object-left-top opacity-0 transition duration-700 group-hover:scale-100 group-hover:opacity-100"
            />
        </div>

        <div className="flex flex-1 flex-col p-4">
            <p className="font-mono text-xs text-brand-violet dark:text-brand-cyan">
                {project.company} · {project.period}
            </p>
            <h3 className="mt-1 font-display text-2xl font-bold text-neutral-900 dark:text-white">{project.title}</h3>
            <p className="mt-2 text-neutral-600 dark:text-neutral-400">{project.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((item) => <Tag key={item}>{item}</Tag>)}
            </div>

            <div className="mt-auto pt-5">
                {project.url ? (
                    <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        className="group/link inline-flex items-center gap-1.5 font-semibold text-neutral-900 transition-colors hover:text-brand-violet dark:text-white dark:hover:text-brand-cyan"
                    >
                        Visit website
                        <ArrowOutwardIcon
                            fontSize="small"
                            className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                        />
                    </a>
                ) : (
                    <span className="inline-flex items-center gap-1.5 font-mono text-sm text-neutral-500">
                        <LockOutlinedIcon fontSize="small"/>
                        {project.note}
                    </span>
                )}
            </div>
        </div>
    </article>
);

const Projects = () => (
    <Section id="projects" eyebrow="03. projects" title={<>Products I <span className="text-gradient">build</span></>}>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
                <Reveal key={project.title} delay={i * 100} className="h-full">
                    <ProjectCard project={project}/>
                </Reveal>
            ))}
        </div>
    </Section>
);

export default Projects;
