import {ReactNode, useRef} from 'react';
import {useOnScreen} from '../../hooks/useOnScreen';

interface RevealProps {
    children: ReactNode;
    className?: string;
    delay?: number;
}

const Reveal = ({children, className = '', delay = 0}: RevealProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(ref, '0px 0px -8% 0px');

    return (
        <div
            ref={ref}
            style={{transitionDelay: `${delay}ms`}}
            className={`transition duration-700 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} ${className}`}
        >
            {children}
        </div>
    );
};

export default Reveal;
