import {useEffect, useState} from 'react';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';

import {profile, socials} from '../../data/profile';
import Section from '../../components/Section';
import Reveal from '../../components/Reveal';

const Contact = () => {
    const [isCopied, setIsCopied] = useState(false);

    useEffect(() => {
        if (!isCopied) {
            return;
        }
        const timeout = window.setTimeout(() => setIsCopied(false), 2000);
        return () => window.clearTimeout(timeout);
    }, [isCopied]);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(profile.email);
            setIsCopied(true);
        } catch {
            window.location.href = `mailto:${profile.email}`;
        }
    };

    return (
        <Section id="contact" eyebrow="04. contact" title={<>Let's build something <span className="text-gradient">great</span></>}>
            <Reveal>
                <p className="max-w-xl text-lg text-neutral-600 dark:text-neutral-400">
                    Open to remote full-time roles and interesting product teams. The fastest way to reach me is Telegram or email.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                    <a
                        href={`mailto:${profile.email}`}
                        className="font-display text-2xl font-semibold break-all text-neutral-900 transition-colors hover:text-brand-violet sm:text-3xl dark:text-white dark:hover:text-brand-cyan"
                    >
                        {profile.email}
                    </a>
                    <button
                        type="button"
                        onClick={handleCopy}
                        aria-label="Copy email"
                        className="grid size-10 place-items-center rounded-full border border-neutral-300 text-lg text-neutral-600 transition-colors hover:border-brand-violet hover:text-brand-violet dark:border-white/10 dark:text-neutral-400 dark:hover:border-brand-cyan dark:hover:text-brand-cyan"
                    >
                        {isCopied ? <CheckIcon fontSize="inherit" className="text-emerald-500"/> : <ContentCopyIcon fontSize="inherit"/>}
                    </button>
                    <span role="status" className="font-mono text-xs text-emerald-600 dark:text-emerald-400">
                        {isCopied ? 'copied!' : ''}
                    </span>
                </div>

                <ul className="mt-8 flex flex-wrap gap-3">
                    {socials.filter(({label}) => label !== 'Email').map(({label, href, icon: Icon}) => (
                        <li key={label}>
                            <a
                                href={href}
                                target="_blank"
                                rel="noreferrer"
                                className="glow-card inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-semibold text-neutral-800 transition-transform hover:-translate-y-0.5 dark:text-neutral-100"
                            >
                                <span className="flex text-xl text-brand-violet dark:text-brand-cyan"><Icon fontSize="inherit"/></span>
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>
            </Reveal>
        </Section>
    );
};

export default Contact;
