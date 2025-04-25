import { IoIosArrowForward } from "react-icons/io";
import Profile from "../../../../profile/Profile";


export const Header = () => {


    const user = JSON.parse(localStorage.getItem("user_profile"));

    return(
        <div className="flex justify-between">

            <div className="space-y-12">
                <h1 className="text-[35px] flex items-center">Report <IoIosArrowForward/> Messages for Tutors</h1>
            </div>
            <div className="mr-10">
                <Profile />
            </div>
        </div>

    )
}