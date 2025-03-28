export const Blog = () => {
    return(
        <div className="mt-25">
            <div className="flex justify-center">
                <h1 className="text-teal-600 text-3xl font-semibold">Blogs</h1>
            </div>

            <div className="grid grid-cols-3">
                <div className="rounded-xl overflow-hidden ">
                    <img src={"https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fHww"} alt="blogImage" />
                    <h1>Lorem ipsum dolor sit amet consectetur. Quam accumsan odio arcu in ipsum amet cursus velit ac. Iaculis nisl urna magna
                        donec pulvinar.</h1>
                    <div>
                        <div>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT36VHh-mjL_Rc8IL60D77dMDPL_fNhosHuag&s" alt="profileImage"/>
                            <p></p>
                            <h3></h3>
                        </div>
                        <div>Date</div>
                    </div>
                </div>

            </div>
        </div>
    )
}