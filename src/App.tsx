import Background from "./components/Background";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./blocks/Hero";
import Skills from "./blocks/Skills";
import Experience from "./blocks/Experience";
import Projects from "./blocks/Projects";
import Contact from "./blocks/Contact";

function App() {
    return (
        <>
            <Background/>
            <Header/>
            <main>
                <Hero/>
                <Skills/>
                <Experience/>
                <Projects/>
                <Contact/>
            </main>
            <Footer/>
        </>
    );
}

export default App;
