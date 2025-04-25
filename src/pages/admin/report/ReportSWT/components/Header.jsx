import Profile from "../../../../profile/Profile"



export const Header = () => {
    return(
        <div className="flex justify-between">

            <div className="space-y-12">
                <h1 className="text-[35px]">Report  Students Without Tutors</h1>
            </div>

            <div className="mr-10">
            <Profile />
            </div>
        </div>

    )
}