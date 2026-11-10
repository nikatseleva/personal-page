import React, {Dispatch, SetStateAction} from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import cv from "./cv_veronika_tseleva.pdf";

const MoreAboutMe = ({openMoreInfo}: { openMoreInfo: Dispatch<SetStateAction<boolean>> }) => {

    const skills = [
        'React',
        'Jest',
        'TailwindCSS',
        'RTL',
        'TypeScript',
    ];

    return (
        <div className={`text-neutral-900 dark:text-neutral-300
        fixed z-40 bg-inherit w-full h-full flex justify-center items-center`}>
            <div className={'flex flex-col justify-center items-center mobile:w-[80%] w-[50%] lg:max-w-[500px]'}>
                <div className={'w-full mb-8 mobile:mb-32'}>
                    <ArrowBackIcon onClick={() => {
                        openMoreInfo(false)
                    }} className={'hover:cursor-pointer hover:opacity-100 opacity-50'}/>
                </div>
                <div>
                    <h1 className={'font-mono mobile:text-8xl text-6xl lg:text-4xl text-center mobile:mb-16 mb-8 tracking-wide'}>
                        Experience
                    </h1>
                    <h2 className={'mobile:text-5xl text-3xl lg:text-xl italic font-bold mobile:mb-8'}>
                        Frontend Web Developer in PJSC SberBank
                    </h2>
                    <h3 className={'mobile:text-5xl text-3xl lg:text-xl font-mono mb-4 tracking-tight mobile:mb-12'}>
                        09/2021 – 08/2023
                    </h3>
                    <p className={'mobile:text-5xl text-3xl lg:text-xl font-sans mb-8 mobile:mb-12 text-justify'}>
                        Implementation of an infrastructure analytical microservice using
                        layouts from Figma. Participation in API design, work in a cross-functional
                        team, integration testing and bug fixing.
                    </p>
                    <div className={'flex flex-row flex-wrap justify-evenly'}>
                        {
                            skills.map((item, i) =>
                                <p  key={i}
                                    className={'p-2 border-2 border-sky-500 mobile:text-3xl text-xl lg:text-xs rounded-full text-nowrap hover:cursor-default'}>
                                    {item}
                                </p>
                            )
                        }
                    </div>
                    <div className={'flex justify-center items-center mobile:mt-32 mt-16 mobile:text-5xl text-3xl lg:text-xl'}>
                        <a
                            href={cv}
                            target="_blank"
                        >
                        <button className={`mobile:border-[6px] border-4 tracking-tight animated-border p-2 shadow-md
                        hover:shadow-black/30 hover:bg-white dark:hover:shadow-white/10 dark:hover:bg-black`}>
                            Download Resume
                        </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MoreAboutMe;