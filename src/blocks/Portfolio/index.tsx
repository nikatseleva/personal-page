import React, {useEffect, useRef} from "react";
import {useDispatch} from "react-redux";

import {setCurrentBlock} from "../../store/slice";
import {useOnScreen} from "../../hooks/useOnScreen";

import ygt_light from '../../images/ygt_light.jpg';
import ygt_dark from '../../images/ygt_dark.jpg';
import mg_light from '../../images/mg_light.jpg';
import mg_dark from '../../images/mg_dark.jpg';
import as_light from '../../images/as_light.jpg';
import as_dark from '../../images/as_dark.jpg';
import pc_light from '../../images/pc_light.jpg';
import pc_dark from '../../images/pc_dark.jpg';
import ucp from '../../images/ucp.jpg';
import pp_light from '../../images/pp_light.jpg';
import pp_dark from '../../images/pp_dark.jpg';

import ButtonLink from "../../components/ButtonLink";

const Portfolio = () => {
    const dispatch = useDispatch();

    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(ref);

    const refBlock = useRef<HTMLDivElement>(null);
    const isBlockVisible = useOnScreen(refBlock);

    useEffect(() => {
        if (isBlockVisible) {
            dispatch(setCurrentBlock('portfolio'))
        }
    }, [isBlockVisible])

    const projects = [
        {
            title: 'Personal Collections',
            demoLight: pc_light,
            demoDark: pc_dark,
            desc: 'fullstack. registration, administrative panel. add custom “collections”, add “collection elements” with custom fields. leave comments and likes.',
            web: 'https://personal-collections-rosy.vercel.app/main',
            rep: 'https://github.com/oOFaYOo/personal-collections'
        },
        {
            title: 'Yearly Goal Tracker',
            demoLight: ygt_light,
            demoDark: ygt_dark,
            desc: 'allows you to create goals for the year, add, delete, edit them and track progress',
            web: 'https://yearly-goal-tracker.vercel.app/yearly_goal_tracker/auth',
            rep: 'https://github.com/oOFaYOo/Yearly-goal-tracker'
        },
        {
            title: 'Analytical Service',
            demoLight: as_light,
            demoDark: as_dark,
            desc: 'simulates an application for some kind of business',
            web: 'https://analytical-service.vercel.app/users',
            rep: 'https://github.com/oOFaYOo/analytical-service'
        },
        // {
        //     title: 'Users control panel',
        //     demoLight: ucp,
        //     demoDark: ucp,
        //     desc: 'registration and authorization, ability to delete, block and unblock users',
        //     web: 'https://users-panel-beta.vercel.app/auth',
        //     rep: 'https://github.com/oOFaYOo/users_panel'
        // },
        {
            title: 'Personal page',
            demoLight: pp_light,
            demoDark: pp_dark,
            desc: 'my personal landing page',
            web: 'https://veronika-tseleva-frontend-web-developer.vercel.app/',
            rep: 'https://github.com/oOFaYOo/personal-page'
        },
        {
            title: 'Matching Game',
            demoLight: mg_light,
            demoDark: mg_dark,
            desc: 'choose the theme, amount of cards, "Find a couple" and win',
            web: 'https://matching-game-one.vercel.app',
            rep: 'https://github.com/oOFaYOo/matching_game'
        }
    ];

    return (
        <div ref={ref}
             className={`text-neutral-900 dark:text-neutral-300 px-12 overflow-hidden relative w-full pt-36 mt-44 mb-12`}>
            <div
                className={'absolute left-0 top-0 mobile:hidden border-t-4 border-l-4 translate-y-4 translate-x-8 animated-border w-[60%] h-[50%]'}>
            </div>
            <div
                className={'absolute right-0 top-0 mobile:hidden border-t-4 border-r-4 translate-y-4 -translate-x-8 animated-border w-[20%] h-[50%]'}>
            </div>
            <div
                className={'absolute right-0 top-0 mobile:block hidden border-t-[6px] translate-y-4 -translate-x-8 animated-border w-[90%] '}>
            </div>
            <a id={'portfolio-anchor'}/>
            <div className={'flex grow flex-row flex-wrap justify-evenly items-center gap-6 mobile:flex-col'}>
                {
                    projects.map((item, i) =>
                        <div ref={i === 1 ? refBlock : null} key={i}
                             className={'mobile:w-full w-[400px] h-[530px] lg:h-[500px] shadow-md my-4 mobile:h-[350px] relative p-4 ' +
                                 `flex mobile:flex-row flex-col justify-between items-center
                                      ${isVisible ? 'anim-active' : `${i % 2 === 0 ? 'anim -translate-x-full' : 'anim translate-x-full'}`}
                                      shadow-black/10 dark:shadow-black`}>
                            <img src={item.demoLight}
                                 className={'dark:hidden border-transparent mb-2 mobile:mr-4 max-h-[250px] grayscale hover:grayscale-0'}/>
                            <img src={item.demoDark}
                                 className={'hidden dark:block border-transparent mb-2 mobile:mr-4 max-h-[250px] grayscale hover:grayscale-0'}/>
                            <div className={'flex flex-col w-full justify-between mobile:justify-end mobile:items-center'}>
                                    <span
                                        className={'font-bold mobile:font-semibold mobile:mb-2 text-3xl lg:text-xl mobile:text-5xl mobile:text-center'}>
                                        {item.title}
                                    </span>
                                <p className={'mobile:hidden inline text-2xl lg:text-lg text-justify italic'}>
                                    {item.desc}
                                </p>
                                <div className={'flex justify-evenly flex-row mobile:flex-col'}>
                                    <ButtonLink buttonText={'website'} link={item.web}
                                                className={'mobile:py-2 px-[28px] text-3xl lg:text-xl mobile:text-[3rem]'}/>
                                    <ButtonLink buttonText={'repository'} link={item.rep}
                                                className={'mobile:py-2 px-[14px] text-3xl lg:text-xl mobile:text-[3rem]'}/>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default React.memo(Portfolio);