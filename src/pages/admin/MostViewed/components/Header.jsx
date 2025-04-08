

export const Header = () => {
    return(
        <div className="flex justify-between">

            <div className="space-y-12">
                <h1 className="text-[35px]">Report Most Viewed Pages</h1>
                    <div className="">
                        <input type={"text"} className="bg-gray-100 rounded-xl text-sm w-80 py-2.5 pl-4 pr-4 focus:border-teal-500 focus:ring-teal-500" placeholder="Search"  />
                    </div>
            </div>

            <div className="mr-10">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT36VHh-mjL_Rc8IL60D77dMDPL_fNhosHuag&s" alt="profile" className="w-17 h-17 rounded-full"/>
            </div>
        </div>

    )
}