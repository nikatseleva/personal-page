import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import DownloadIcon from '@mui/icons-material/Download';

import photo from '../../assets/photo.webp';
import cv from '../../assets/cv_veronika_tseleva.pdf';
import {profile, socials} from '../../data/profile';
import Section from '../../components/Section';
import Reveal from '../../components/Reveal';
import LinkButton from '../../components/LinkButton';

const Hero = () => {
    return (
        <Section id="home" spacing="flex min-h-svh flex-col justify-center pt-24 pb-12 md:pt-28">
            <div className="grid items-center gap-14 lg:grid-cols-[1.3fr_1fr]">
                <div>
                    <Reveal>
                        <h1 className="font-display text-5xl leading-[0.95] font-bold tracking-tight text-neutral-900 sm:text-6xl lg:text-7xl dark:text-white">
                            {profile.firstName}
                            <br/>
                            <span className="text-gradient">{profile.lastName}</span>
                        </h1>
                        <p className="mt-5 font-mono text-lg text-neutral-700 sm:text-xl dark:text-neutral-200">
                            <span className="text-brand-pink">&gt; </span>
                            {profile.role}
                        </p>
                        <p className="mt-4 max-w-2xl leading-relaxed text-neutral-600 md:text-lg dark:text-neutral-400">
                            {profile.intro}
                        </p>
                    </Reveal>

                    <Reveal delay={200} className="mt-7 flex flex-wrap items-center gap-3">
                        <LinkButton href="#contact">
                            Let's talk
                            <ArrowOutwardIcon fontSize="small"/>
                        </LinkButton>
                        <LinkButton href={cv} target="_blank" rel="noreferrer" variant="ghost">
                            <DownloadIcon fontSize="small"/>
                            CV
                        </LinkButton>
                        <span className="flex items-center gap-2 sm:ml-2">
                            {socials.map(({label, href, icon: Icon}) => (
                                <a
                                    key={label}
                                    href={href}
                                    target={href.startsWith('http') ? '_blank' : undefined}
                                    rel="noreferrer"
                                    aria-label={label}
                                    className="grid size-11 place-items-center rounded-full text-xl text-neutral-500 transition hover:-translate-y-0.5 hover:text-brand-violet dark:text-neutral-400 dark:hover:text-brand-cyan"
                                >
                                    <Icon fontSize="inherit"/>
                                </a>
                            ))}
                        </span>
                    </Reveal>
                </div>

                <Reveal delay={150} className="relative mx-auto w-60 sm:w-72 lg:w-80">
                    <div className="animated-border absolute -top-5 -left-5 size-28 border-t-4 border-l-4"/>
                    <div className="animated-border absolute -right-4 -bottom-4 size-full border-[5px]"/>
                    <div className="group relative aspect-[4/5] overflow-hidden bg-neutral-200 shadow-2xl dark:bg-neutral-800">
                        <img
                            src={photo}
                            alt={`${profile.firstName} ${profile.lastName}`}
                            className="size-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                        />
                    </div>
                </Reveal>
            </div>
        </Section>
    );
};

export default Hero;
