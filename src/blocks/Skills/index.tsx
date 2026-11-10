import {skillGroups} from '../../data/profile';
import Section from '../../components/Section';
import Reveal from '../../components/Reveal';
import Tag from '../../components/Tag';

const Skills = () => (
    <Section id="skills" eyebrow="01. skills" title={<>Tech <span className="text-gradient">stack</span></>}>
        <Reveal className="glow-card grid gap-8 rounded-2xl p-6 sm:grid-cols-2 md:p-8 lg:grid-cols-4">
            {skillGroups.map(({title, items}) => (
                <div key={title}>
                    <h3 className="font-mono text-sm tracking-wider text-brand-violet uppercase dark:text-brand-cyan">{title}</h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                        {items.map((item) => <Tag key={item} size="lg">{item}</Tag>)}
                    </div>
                </div>
            ))}
        </Reveal>
    </Section>
);

export default Skills;
