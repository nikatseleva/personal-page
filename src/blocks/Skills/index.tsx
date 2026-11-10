import React, {useEffect, useRef} from "react";
import {useDispatch} from "react-redux";
import {useOnScreen} from "../../hooks/useOnScreen";

import css_icon from '../../images/css_icon.png'

import {setCurrentBlock} from "../../store/slice";

const Skills = () => {
    const dispatch = useDispatch();

    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(ref);

    const refBlock = useRef<HTMLDivElement>(null);
    const isBlockVisible = useOnScreen(refBlock);

    useEffect(() => {
        if (isBlockVisible) {
            dispatch(setCurrentBlock('skills'))
        }
    }, [isBlockVisible])

    return (
        <div ref={ref} className={`text-neutral-900 dark:text-neutral-300
        mt-16 mb-52 py-32 overflow-hidden`}>
            <a id={'skills-anchor'}/>
            <div ref={refBlock} className={`px-24 w-full 
            ${isVisible ? 'anim-active' : 'anim translate-y-[20%]'}`}>
                <div
                    className={'absolute left-0 top-0 mobile:border-t-8 mobile:border-l-8 border-t-[6px] border-l-[6px] -translate-y-12 translate-x-16 animated-border w-[30%] h-[70%]'}>
                </div>
                <div className={'z-10 flex flex-row flex-wrap items-stretch gap-16 justify-evenly relative w-full h-full'}>
                <img className={'dark:invert absolute right-4 -translate-y-20 duration-500 opacity-[0.05] w-[500px] h-[500px]'} src={css_icon} />
                    <p className={`${isVisible ? 'anim-active' : 'anim translate-x-full'} hover:text-sky-500 hover:cursor-default text-6xl mobile:text-7xl text-center font-serif`}>JavaScript</p>
                    <p className={`${isVisible ? 'anim-active' : 'anim translate-x-[-50%]'} hover:text-sky-500 hover:cursor-default text-3xl mobile:text-5xl text-center italic`}>Material UI</p>
                    <p className={`${isVisible ? 'anim-active' : 'anim translate-x-full'} hover:text-sky-500 hover:cursor-default text-7xl mobile:text-8xl text-center`}>React</p>
                    <p className={`${isVisible ? 'anim-active' : 'anim translate-x-[-50%]'} hover:text-sky-500 hover:cursor-default text-3xl mobile:text-5xl text-center italic`}>Redux Toolkit</p>
                    <p className={`${isVisible ? 'anim-active' : 'anim translate-x-full'} hover:text-sky-500 hover:cursor-default text-5xl mobile:text-6xl text-center`}>TailwindCSS</p>
                    <p className={`${isVisible ? 'anim-active' : 'anim translate-x-[-50%]'} hover:text-sky-500 hover:cursor-default text-6xl mobile:text-7xl text-center`}>CSS</p>
                    <p className={`${isVisible ? 'anim-active' : 'anim translate-x-full'} hover:text-sky-500 hover:cursor-default text-4xl mobile:text-5xl text-center font-serif`}>Adaptive Web Design</p>
                    <p className={`${isVisible ? 'anim-active' : 'anim translate-x-[-50%]'} hover:text-sky-500 hover:cursor-default text-6xl mobile:text-7xl text-center`}>TypeScript</p>
                    <p className={`${isVisible ? 'anim-active' : 'anim translate-x-full'} hover:text-sky-500 hover:cursor-default text-5xl mobile:text-6xl text-center italic`}>Jest</p>
                    <p className={`${isVisible ? 'anim-active' : 'anim translate-x-[-50%]'} hover:text-sky-500 hover:cursor-default text-4xl mobile:text-5xl text-center italic`}>React Router</p>
                    <p className={`${isVisible ? 'anim-active' : 'anim translate-x-full'} hover:text-sky-500 hover:cursor-default text-5xl mobile:text-6xl text-center font-serif`}>HTML</p>
                    <p className={`${isVisible ? 'anim-active' : 'anim translate-x-[-50%]'} hover:text-sky-500 hover:cursor-default text-3xl mobile:text-5xl text-center italic`}>Node.js</p>
                    <p className={`${isVisible ? 'anim-active' : 'anim translate-x-full'} hover:text-sky-500 hover:cursor-default text-4xl mobile:text-5xl text-center italic`}>React Testing Library</p>
                </div>
                    <div
                    className={'absolute right-0 bottom-0 mobile:border-b-8 mobile:border-r-8 border-b-[6px] border-r-[6px] translate-y-16 -translate-x-12 animated-border w-[60%] h-[50%]'}>
                </div>
            </div>
        </div>
    )
};

export default React.memo(Skills);