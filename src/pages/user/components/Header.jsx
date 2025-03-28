import hero from "../assets/Hero.png"

export const Header = () => {
    return(
        <div className="mt-20">
            <div className="flex">
                <div className="w-5/10 ml-10">
                    <h1 className="text-teal-600 leading-[50px] font-semibold">Empowering Learning Through Seamless eTutoring</h1>
                    <h2 className="text-3xl leading-[50px] tracking-tight font-semibold">A secure, role-based platform for students and tutors to connect, collaborate, and succeed.</h2>
                    <h3 className="leading-[30px] mr-25 text-gray-600 text-lg mt-1">Make student-tutor interactions seamless with our advanced eTutoring system. Designed for large universities, our platform simplifies tutor allocation, messaging, meeting management, and academic collaboration all in one place.</h3>
                </div>
                <div className="w-5/10">
                    <img src={hero} alt="hero" className="w-10/11 ml-13" />
                </div>
            </div>
        </div>
    )
}