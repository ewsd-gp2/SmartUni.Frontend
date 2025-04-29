import { IoIosArrowForward } from "react-icons/io";
import Profile from "../../../../profile/Profile";

export const Header = () => {
    return(
        <div className="flex justify-between">

            <div className="space-y-12">
                <h1 className="text-lg lg:text-[35px] mt-5 lg:mt-0">Report &gt;&gt; Messages</h1>
            </div>

            <div className="mr-5 lg:mr-10">
                <Profile />
            </div>
        </div>

    )
}