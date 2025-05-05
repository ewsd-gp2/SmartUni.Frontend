import StudentDashboard from './assets/Student Dashboard 1.png'
import Chat from './assets/Chat 1.png'
import Blog from './assets/Blogs.png'
import DataInsights from './assets/Data Insights.png'
import Schedules from './assets/Schedules.png'
import SetUp from './assets/Set Up.png'
import Allocation from './assets/Allocation 5.png'
import { NavBar } from './components/NavBar'
import { Footer } from './components/Footer'

export const FeaturePage = () => {

    return(
        <>
        <NavBar />
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
                    <p className="md:text-base text-xs">he Student Dashboard offers a personalized hub where students can easily access their profile details, track schedules, view upcoming meetings, create a blog, and communicate with tutors—all designed to streamline learning and boost academic success.</p>
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
                    <p className="md:text-base text-xs">The Blog System provides a platform for sharing insightful articles, educational tips, and the latest updates—keeping the SmartUni community informed, inspired, and connected.</p>
                    </div>
                </div>

                <div className="lg:flex gap-15 justify-center items-center bg-green-100 px-12 py-8">
                <div className="w-full md:w-600 flex justify-center lg:hidden">
                    <img src={Schedules} alt="Student Dashboard" className="w-[300px] lg:w-full" />
                    </div>
                    <div className="text-center lg:text-right">
                    <h1 className="mt-5 lg:mt-0 text-2xl md:text-3xl font-semibold mb-5">Meeting Schedules</h1>
                    <p className="md:text-base text-xs">Lorem ipsum dolor sit amet consectetur. Proin lacus consequat convallis fringilla laoreet nec. Mi lorem convallis odio feugiat arcu accumsan sapien. Rutrum velit odio magna pharetra lectus pellentesque suspendisse vitae. Viverra molestie dui sit tortor. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Proin lacus consequat convallis fringilla laoreet nec. Mi lorem convallis odio feugiat arcu accumsan sapien. Rutrum velit odio magna pharetra lectus pellentesque suspendisse vitae. Viverra molestie dui sit tortor. Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                    <div className="w-full md:w-600 hidden lg:block">
                    <img src={Chat} alt="Student Dashboard" className="w-[300px] lg:w-full" />
                    </div>
                </div>

                <div className="lg:flex gap-15 justify-center items-center bg-red-100 px-12 py-8">
                    <div className="w-full md:w-600 flex justify-center">
                    <img src={SetUp} alt="Student Dashboard" className="w-[300px] lg:w-full" />
                    </div>
                    <div className="text-center lg:text-left">
                    <h1 className="mt-5 lg:mt-0 text-2xl md:text-3xl font-semibold mb-5">Meeting Set Up</h1>
                    <p className="md:text-base text-xs">Lorem ipsum dolor sit amet consectetur. Proin lacus consequat convallis fringilla laoreet nec. Mi lorem convallis odio feugiat arcu accumsan sapien. Rutrum velit odio magna pharetra lectus pellentesque suspendisse vitae. Viverra molestie dui sit tortor. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Proin lacus consequat convallis fringilla laoreet nec. Mi lorem convallis odio feugiat arcu accumsan sapien. Rutrum velit odio magna pharetra lectus pellentesque suspendisse vitae. Viverra molestie dui sit tortor. Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>

                <div className="lg:flex gap-15 justify-center items-center bg-green-100 px-12 py-8">
                <div className="w-full md:w-600 flex justify-center lg:hidden">
                    <img src={Allocation} alt="Student Dashboard" className="w-[300px] lg:w-full" />
                    </div>
                    <div className="text-center lg:text-right">
                    <h1 className="mt-5 lg:mt-0 text-2xl md:text-3xl font-semibold mb-5">Allocation System</h1>
                    <p className="md:text-base text-xs">Lorem ipsum dolor sit amet consectetur. Proin lacus consequat convallis fringilla laoreet nec. Mi lorem convallis odio feugiat arcu accumsan sapien. Rutrum velit odio magna pharetra lectus pellentesque suspendisse vitae. Viverra molestie dui sit tortor. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Proin lacus consequat convallis fringilla laoreet nec. Mi lorem convallis odio feugiat arcu accumsan sapien. Rutrum velit odio magna pharetra lectus pellentesque suspendisse vitae. Viverra molestie dui sit tortor. Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                    <div className="w-full md:w-600 hidden lg:block">
                    <img src={Chat} alt="Student Dashboard" className="w-[300px] lg:w-full" />
                    </div>
                </div>

                <div className="lg:flex gap-15 justify-center items-center bg-red-100 px-12 py-8">
                    <div className="w-full md:w-600 flex justify-center">
                    <img src={Schedules} alt="Student Dashboard" className="w-[300px] lg:w-full" />
                    </div>
                    <div className="text-center lg:text-left">
                    <h1 className="mt-5 lg:mt-0 text-2xl md:text-3xl font-semibold mb-5">Schedules At A Glance</h1>
                    <p className="md:text-base text-xs">Lorem ipsum dolor sit amet consectetur. Proin lacus consequat convallis fringilla laoreet nec. Mi lorem convallis odio feugiat arcu accumsan sapien. Rutrum velit odio magna pharetra lectus pellentesque suspendisse vitae. Viverra molestie dui sit tortor. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Proin lacus consequat convallis fringilla laoreet nec. Mi lorem convallis odio feugiat arcu accumsan sapien. Rutrum velit odio magna pharetra lectus pellentesque suspendisse vitae. Viverra molestie dui sit tortor. Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>

                <div className="lg:flex gap-15 justify-center items-center bg-green-100 px-12 py-8">
                <div className="w-full md:w-600 flex justify-center lg:hidden">
                    <img src={DataInsights} alt="Student Dashboard" className="w-[300px] lg:w-full" />
                    </div>
                    <div className="text-center lg:text-right">
                    <h1 className="mt-5 lg:mt-0 text-2xl md:text-3xl font-semibold mb-5">Smart Data Insights</h1>
                    <p className="md:text-base text-xs">Lorem ipsum dolor sit amet consectetur. Proin lacus consequat convallis fringilla laoreet nec. Mi lorem convallis odio feugiat arcu accumsan sapien. Rutrum velit odio magna pharetra lectus pellentesque suspendisse vitae. Viverra molestie dui sit tortor. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Proin lacus consequat convallis fringilla laoreet nec. Mi lorem convallis odio feugiat arcu accumsan sapien. Rutrum velit odio magna pharetra lectus pellentesque suspendisse vitae. Viverra molestie dui sit tortor. Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                    <div className="w-full md:w-600 hidden lg:block">
                    <img src={Chat} alt="Student Dashboard" className="w-[300px] lg:w-full" />
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}