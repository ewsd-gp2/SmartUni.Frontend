import { NavBar } from "./components/NavBar";
import { Header } from "./components/Header";
import { Feature } from "./components/Feature";
import { Blog } from "./components/Blog";
import { StudentVoice } from "./components/StudentVoice";
import { Teacher } from "./components/Teacher";
import { Footer } from "./components/Footer";


export const LandingPage = () => {
   
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