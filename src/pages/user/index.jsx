import {NavBar} from "./components/NavBar.jsx";
import {Header} from "./components/Header.jsx";
import {Feature} from "./components/Feature.jsx";
import {Blog} from "./components/Blog.jsx";
import { StudentVoice } from "./components/StudentVoice.jsx";
import { Teacher } from "./components/Teacher.jsx";
import { Footer } from "./components/Footer.jsx";

export const Landing = () => {
    return (
        <>
            <NavBar />
            <Header />
            <Feature />
            <Blog />
            <StudentVoice/>
            <Teacher />
            <Footer/>
        </>

// mx-15 my-5
    )
}
