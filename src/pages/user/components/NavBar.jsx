import {Link} from "react-router-dom";
import logo from '../assets/img.png'

export const NavBar = () => {
    return(<div>
        <nav>
            <div>
                <img src={logo} alt="logo" />
                <Link to="/">Feature</Link>
                <Link to="/">Blogs</Link>
            </div>

            <div>
                <Link to="/">Login</Link>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT36VHh-mjL_Rc8IL60D77dMDPL_fNhosHuag&s" alt="profile" />
            </div>
        </nav>
    </div>)

}