import {useEffect, useRef} from 'react';

const Background = () => {
    const spotlightRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMove = (e: PointerEvent) => {
            spotlightRef.current?.style.setProperty('--x', `${e.clientX}px`);
            spotlightRef.current?.style.setProperty('--y', `${e.clientY}px`);
        };

        window.addEventListener('pointermove', handleMove, {passive: true});
        return () => window.removeEventListener('pointermove', handleMove);
    }, []);

    return (
        <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
            <div className="bg-grid absolute inset-0"/>
            <div className="absolute -top-48 -left-40 size-[34rem] animate-float rounded-full bg-brand-cyan/20 blur-3xl dark:bg-brand-cyan/10"/>
            <div className="absolute top-1/3 -right-48 size-[38rem] animate-float rounded-full bg-brand-violet/20 blur-3xl [animation-delay:-2.5s] dark:bg-brand-violet/15"/>
            <div className="absolute -bottom-56 left-1/4 size-[30rem] animate-float rounded-full bg-brand-pink/15 blur-3xl [animation-delay:-5s] dark:bg-brand-pink/10"/>
            <div ref={spotlightRef} className="spotlight absolute inset-0"/>
        </div>
    );
};

export default Background;
