import {NavBar} from "./components/NavBar.jsx";
import {Header} from "./components/Header.jsx";
import {Feature} from "./components/Feature.jsx";
import {Blog} from "./components/Blog.jsx";

export const Landing = () => {
    return (
        <>
            <div className="mx-15 my-5">
            <NavBar />
            <Header />
            <Feature />
                <Blog />
            </div>
        </>
    )
}
