import hero from "../assets/Hero.png"

export const Header = () => {
    return(
        <div className="mt-12 md:mt-20 mx-4 md:mx-15">
            <div className="flex">
                <div className="md:w-5/10 w-6/10 lg:ml-10">
                    <h1 className="text-teal-600 leading-[25px] md:leading-[50px] font-semibold text-xs md:text-base">Empowering Learning Through Seamless eTutoring</h1>
                    <h2 className="md:text-3xl text-base leading-[27px] md:leading-[50px] md:tracking-tight font-semibold">A secure, role-based platform for students and tutors to connect, collaborate, and succeed.</h2>
                    <h3 className="md:block hidden leading-[30px] mr-25 text-gray-600 text-xs md:text-lg mt-1">Make student-tutor interactions seamless with our advanced eTutoring system. Designed for large universities, our platform simplifies tutor allocation, messaging, meeting management, and academic collaboration all in one place.</h3>
                    
                </div>
                <div className="md:w-5/10 w-4/10">
                    <img src={hero} alt="hero" className="md:w-10/11 w-full ml-2 md:ml-13 mt-2 md:mt-0" />
                </div>
            </div>
            <h3 className="md:hidden block text-gray-400 text-xs md:text-lg mt-1">Make student-tutor interactions seamless with our advanced eTutoring system. Designed for large universities, our platform simplifies tutor allocation, messaging, meeting management, and academic collaboration all in one place.</h3>
        </div>

    )
}