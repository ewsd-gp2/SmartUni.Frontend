import StudentDashboard from '../assets/Student Dashboard 1.png'
import Chat from '../assets/Chat 1.png'
import Blog from '../assets/Blogs.png'

export const Feature = () => {

    return(
        <div className="md:mt-25 mt-15 md:space-y-25 space-y-15">
            <div className="flex justify-center">
                <h1 className="md:text-3xl text-xl text-teal-600 font-semibold">Features We Provide</h1>
            </div>
            <div className="">
                <div className="lg:flex gap-15 justify-center items-center bg-red-100 px-12 py-8">
                    <div className="w-full md:w-600 flex justify-center">
                    <img src={StudentDashboard} alt="Student Dashboard" className="w-[300px] lg:w-full" />
                    </div>
                    <div className="text-center lg:text-left">
                    <h1 className="mt-5 lg:mt-0 text-2xl md:text-3xl font-semibold mb-5">Student Dashboard</h1>
                    <p className="md:text-base text-xs">The Student Dashboard offers a personalized hub where students can easily access their profile details, track schedules, view upcoming meetings, create a blog, and communicate with tutors—all designed to streamline learning and boost academic success.
                    </p>
                    </div>
                </div>
                <div className="lg:flex gap-15 justify-center items-center bg-green-100 px-12 py-8">
                <div className="w-full md:w-600 flex justify-center lg:hidden">
                    <img src={Chat} alt="Student Dashboard" className="w-[300px] lg:w-full" />
                    </div>
                    <div className="text-center lg:text-right">
                    <h1 className="mt-5 lg:mt-0 text-2xl md:text-3xl font-semibold mb-5">Effective Collaborations</h1>
                    <p className="md:text-base text-xs">Effective Collaborations empower students and tutors to engage seamlessly through real-time communication, group meetings, and shared resources, fostering an interactive learning environment that drives success together.</p>
                    </div>
                    <div className="w-full md:w-600 hidden lg:block">
                    <img src={Chat} alt="Student Dashboard" className="w-[300px] lg:w-full" />
                    </div>
                </div>
                <div className="lg:flex gap-15 justify-center items-center bg-blue-100 px-12 py-8">
                    <div className="w-full md:w-600 flex justify-center">
                        <img src={Blog} alt="Student Dashboard" className="w-[300px] lg:w-full rounded-xl" />
                        </div>
                    <div className="text-center lg:text-left">
                    <h1 className="mt-5 lg:mt-0 text-2xl md:text-3xl font-semibold mb-5">Blogs System</h1>
                    <p className="md:text-base text-xs">he Blog System provides a platform for sharing insightful articles, educational tips, and the latest updates—keeping the SmartUni community informed, inspired, and connected.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}