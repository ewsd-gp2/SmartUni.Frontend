import {Link} from "react-router-dom";

export const NavBar = () => {
    return(<div className="mx-15 mt-5">
        <nav className="flex justify-between items-center">
            <div className="flex items-center">

                <div className="flex items-center">
                    <Link to={"/"}>
                <img src="" alt="logo" className="w-14"/>
                    </Link>
                    <h1 className="text-teal-600 font-semibold text-3xl">SmartUni</h1>
                </div>
                {/* <div className="ml-20 flex items-center space-x-10 mt-1v hidden lg:block">
                    <Link className="text-teal-600 font-semibold underline" to="/">Home</Link>
                    <Link className="font-semibold" to="/">Feature</Link>
                    <Link className="font-semibold" to="/">Blogs</Link>
                </div> */}

            </div>

            <div>

            </div>

            <div className="flex items-center space-x-10 mt-1">
                <Link to="/" className="bg-teal-300 rounded-lg py-1.5 px-4">Login</Link>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT36VHh-mjL_Rc8IL60D77dMDPL_fNhosHuag&s" alt="profile" className="w-18" />
            </div>
        </nav>
    </div>)

}