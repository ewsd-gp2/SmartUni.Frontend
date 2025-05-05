export const Teacher = () => {
    return(
        <div className="mt-12 md:mt-20 mx-4 md:mx-15">
            <div className="flex justify-center">
                <h1 className="md:text-3xl text-xl text-teal-600 font-semibold">Our Teachers</h1>
            </div>

            <div className="flex flex-col items-center justify-center md:mx-10 mt-20 space-y-15">
                <div className="lg:flex">
                    <div className="flex lg:flex-col items-center mr-35">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT36VHh-mjL_Rc8IL60D77dMDPL_fNhosHuag&s" alt="TeacherProfile" className="rounded-full w-20 lg:w-100 mr-8 lg:mr-0"/>
                        <h1 className="mt-3 text-xl lg:text-3xl font-semibold">Ms.Furler</h1>
                    </div>
                    <div>
                        <p className="text-xs md:text-sm mt-5">
                        SmartUni’s platform makes it easy to connect with students and tailor lessons to their individual needs, resulting in more meaningful and effective tutoring sessions.
                        </p>
                    </div>
                </div>
                <div className="lg:flex">
                    <div className="flex lg:flex-col items-center mr-35">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT36VHh-mjL_Rc8IL60D77dMDPL_fNhosHuag&s" alt="TeacherProfile" className="rounded-full w-20 lg:w-100 mr-8 lg:mr-0"/>
                        <h1 className="mt-3 text-xl lg:text-3xl font-semibold">Mr.Rocky</h1>
                    </div>
                    <div>
                        <p className="text-xs md:text-sm mt-5">
                        I appreciate how SmartUni’s collaborative tools streamline communication and help me communicate with my students in real-time, enhancing the overall learning experience.
                        </p>
                    </div>
                </div>
                <div className="lg:flex">
                    <div className="flex lg:flex-col items-center mr-35">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT36VHh-mjL_Rc8IL60D77dMDPL_fNhosHuag&s" alt="TeacherProfile" className="rounded-full w-20 lg:w-100 mr-8 lg:mr-0"/>
                        <h1 className="mt-3 text-xl lg:text-3xl font-semibold">Ms.RiRi</h1>
                    </div>
                    <div>
                        <p className="text-xs md:text-sm mt-5">
                        The intuitive dashboard and resource sharing features allow me to focus on teaching while ensuring each student receives personalized support to succeed.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}