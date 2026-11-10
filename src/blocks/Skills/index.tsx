import {aiTools, SkillGroup, skillGroups} from '../../data/profile';
import Section from '../../components/Section';
import Reveal from '../../components/Reveal';
import Tag from '../../components/Tag';

const Group = ({title, items}: SkillGroup) => (
    <div>
        <h3 className="font-mono text-sm tracking-wider text-brand-violet uppercase dark:text-brand-cyan">{title}</h3>
        <div className="mt-4 flex flex-wrap gap-2">
            {items.map((item) => <Tag key={item} size="lg">{item}</Tag>)}
        </div>
    </div>
);

const Skills = () => (
    <Section id="skills" eyebrow="01. skills" title={<>Tech <span className="text-gradient">stack</span></>}>
        <Reveal className="glow-card rounded-2xl p-6 md:p-8">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {skillGroups.map((group) => <Group key={group.title} {...group}/>)}
            </div>
            <div className="mt-6 border-t border-neutral-200/70 pt-5 dark:border-white/10">
                <Group {...aiTools}/>
            </div>
        </Reveal>
    </Section>
);

export default Skills;
