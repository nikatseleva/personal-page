import {useEffect, useState} from "react";
import Header from "./components/Header";
import AboutMe from "./blocks/AboutMe";
import Skills from "./blocks/Skills";
import Portfolio from "./blocks/Portfolio";
import Footer from "./components/Footer";
import {useSelector} from "react-redux";
import {RootState} from "./store";
import MoreAboutMe from "./blocks/MoreAboutMe";

function App() {
    const {theme} = useSelector((state: RootState) => state.PortfolioLandingPageStore);
    const [openMoreInfo, setOpenMoreInfo] = useState<boolean>(false);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark');
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <div className={'styled_scrollbar overflow-y-auto duration-500 relative w-full h-full bg-neutral-100 dark:bg-neutral-900'}>
            { openMoreInfo
                ? <MoreAboutMe openMoreInfo={setOpenMoreInfo} />
                : null
            }
            <Header/>
            <AboutMe openMoreInfo={setOpenMoreInfo} />
            <Skills/>
            <Portfolio/>
            <Footer/>
        </div>

    );
}

export default App;
