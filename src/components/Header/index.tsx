import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {Switch} from "@mui/material";
import DehazeIcon from '@mui/icons-material/Dehaze';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import {RootState} from "../../store";
import {setCurrentBlock, setTheme} from "../../store/slice";

const Header = () => {

    const dispatch = useDispatch();
    const {theme, currentBlock} = useSelector((state: RootState) => state.PortfolioLandingPageStore)
    const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

    const handleResize = () => {
        if (window.screen.width > 1024) {
            setIsOpenMenu(false);
        }
    };

    useEffect(() => {
        if (isOpenMenu) {
            window.addEventListener('resize', handleResize);
        }

        return () => {
            window.removeEventListener('resize', handleResize);
        };

    }, [isOpenMenu]);

    return (
        <header className={`text-neutral-900 dark:text-neutral-300
         lg:h-[10vh] h-[10%] min-h-[64px] w-full bg-inherit z-30 sticky top-0 font-mono`}>
            {
                isOpenMenu
                    ? <div className={'lg:hidden bg-inherit w-full h-full relative flex flex-row justify-between'}>
                        <div className={'w-[20%] flex h-full justify-evenly items-center'}>
                            <button onClick={() => setIsOpenMenu(false)}>
                                <ArrowBackIosIcon sx={{fontSize: '4rem'}}/>
                            </button>
                        </div>
                        <div className={'flex justify-evenly items-center mobile:text-5xl text-3xl grow'}>
                            <div
                                className={`border-b-4 ${currentBlock === 'about' ? 'animated-border' : 'border-transparent'}`}>
                                <a href={'#about-anchor'} className={'hover:scale-110'}
                                   onClick={() => {
                                       dispatch(setCurrentBlock('about'))
                                   }
                                   }>about</a>
                            </div>
                            <div
                                className={`border-b-4 ${currentBlock === 'skills' ? 'animated-border' : 'border-transparent'}`}>
                                <a href={'#skills-anchor'} className={'hover:scale-110'}
                                   onClick={() => {
                                       dispatch(setCurrentBlock('skills'))
                                   }
                                   }>skills</a>
                            </div>
                            <div
                                className={`border-b-4 ${currentBlock === 'portfolio' ? 'animated-border' : 'border-transparent'}`}>
                                <a href={'#portfolio-anchor'} className={'hover:scale-110'}
                                   onClick={() => {
                                       dispatch(setCurrentBlock('portfolio'))
                                   }
                                   }>pet-projects</a>
                            </div>
                        </div>
                    </div>
                    : (<div className={'relative w-full h-full flex flex-row justify-between'}>
                        <div className={'lg:hidden w-[20%] flex h-full justify-evenly items-center'}>
                            <button onClick={() => setIsOpenMenu(true)}>
                                <DehazeIcon sx={{fontSize: '4rem'}}/>
                            </button>
                        </div>
                        <div className={'lg:flex w-[35%] hidden gap-2 h-full justify-evenly items-center text-2xl'}>
                            <div
                                className={`border-b-4 ${currentBlock === 'about' ? 'animated-border' : 'border-transparent'}`}>
                                <a href={'#about-anchor'} className={'opacity-70 active:opacity-100 hover:opacity-100'}
                                   onClick={() => {
                                       dispatch(setCurrentBlock('about'))
                                   }
                                   }>about</a>
                            </div>
                            <div
                                className={`border-b-4 ${currentBlock === 'skills' ? 'animated-border' : 'border-transparent'}`}>
                                <a href={'#skills-anchor'} className={'opacity-70 active:opacity-100 hover:opacity-100'}
                                   onClick={() => {
                                       dispatch(setCurrentBlock('skills'))
                                   }
                                   }>skills</a>
                            </div>
                            <div
                                className={`border-b-4 ${currentBlock === 'portfolio' ? 'animated-border' : 'border-transparent'}`}>
                                <a href={'#portfolio-anchor'} className={'opacity-70 active:opacity-100 hover:opacity-100'}
                                   onClick={() => {
                                       dispatch(setCurrentBlock('portfolio'))
                                   }
                                   }>pet-projects</a>
                            </div>
                        </div>
                        <div className={'flex grow h-full justify-center gap-8 items-center'}>
                            <a href={'https://t.me/nikatseleva'} target="_blank">
                                <TelegramIcon className={'opacity-50 hover:opacity-100 active:opacity-100'}/>
                            </a>
                            <a href={'https://github.com/oOFaYOo'} target="_blank">
                                <GitHubIcon className={'opacity-50 hover:opacity-100 active:opacity-100'}/>
                            </a>
                            <a href={"mailto:nikatseleva@gmail.com"} target="_blank">
                                <AlternateEmailIcon className={'opacity-50 hover:opacity-100 active:opacity-100'}/>
                            </a>
                            <a href={'https://www.linkedin.com/in/veronika-tseleva-frontend-web-developer/'}
                               target="_blank">
                                <LinkedInIcon className={'opacity-50 hover:opacity-100 active:opacity-100'}/>
                            </a>
                        </div>
                        <div className={'mobile:hidden flex w-[20%] h-full justify-center items-center'}>
                            <LightModeIcon
                                className={'text-amber-500/50 dark:text-inherit dark:opacity-50'}/>
                            <Switch data-testid={'switch'} id={'theme-switcher'} color={'default'}
                                    checked={theme === 'dark'}
                                    onChange={(e) => {
                                        dispatch(setTheme(e.currentTarget.checked ? 'dark' : 'light'));
                                    }}/>
                            <DarkModeIcon
                                className={'opacity-50 dark:opacity-100 dark:text-sky-600/50'}/>
                        </div>
                        <div className={'hidden mobile:flex w-[20%] h-full justify-center items-center opacity-50'}>
                            <span className={'hidden dark:inline'}>
                                <LightModeIcon onClick={() => dispatch(setTheme('light'))}/>
                            </span>
                            <span className={'dark:hidden'}>
                                <DarkModeIcon onClick={() => dispatch(setTheme('dark'))}/>
                            </span>
                        </div>
                    </div>)
            }
        </header>
    )
};

export default React.memo(Header);