import StudentDashboard from '../assets/Student Dashboard 1.png'
import Chat from '../assets/Chat 1.png'
import Blog from '../assets/Blogs.png'

export const Feature = () => {

    return(
        <div className="mt-25 space-y-25">
            <div className="flex justify-center">
                <h1 className="text-3xl text-teal-600 font-semibold">Features We Provide</h1>
            </div>
            <div className="">
                <div className="flex gap-15 justify-center items-center bg-red-100 px-12 py-8">
                    <img src={StudentDashboard} alt="Student Dashboard" className="w-[400px]" />
                    <div>
                    <h1 className="text-3xl font-semibold mb-5">Student Dashboard</h1>
                    <p className="5/10">Lorem ipsum dolor sit amet consectetur. Proin lacus consequat convallis fringilla laoreet nec. Mi lorem convallis odio feugiat arcu accumsan sapien. Rutrum velit odio magna pharetra lectus pellentesque suspendisse vitae. Viverra molestie dui sit tortor. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Proin lacus consequat convallis fringilla laoreet nec. Mi lorem convallis odio feugiat arcu accumsan sapien. Rutrum velit odio magna pharetra lectus pellentesque suspendisse vitae. Viverra molestie dui sit tortor. Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
                <div className="flex gap-15 justify-center items-center bg-green-100 px-12 py-8">
                    <div>
                        <h1 className="text-3xl font-semibold mb-5">Effective Collaborations</h1>
                        <p className="5/10">Lorem ipsum dolor sit amet consectetur. Proin lacus consequat convallis fringilla laoreet nec. Mi lorem convallis odio feugiat arcu accumsan sapien. Rutrum velit odio magna pharetra lectus pellentesque suspendisse vitae. Viverra molestie dui sit tortor. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Proin lacus consequat convallis fringilla laoreet nec. Mi lorem convallis odio feugiat arcu accumsan sapien. Rutrum velit odio magna pharetra lectus pellentesque suspendisse vitae. Viverra molestie dui sit tortor. Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                    <img src={Chat} alt="Student Dashboard" className="w-[400px]" />
                </div>
                <div className="flex gap-15 justify-center items-center bg-blue-100 px-12 py-8">
                    <img src={Blog} alt="Student Dashboard" className="w-[400px] rounded-xl" />
                    <div>
                        <h1 className="text-3xl font-semibold mb-5">Blog System</h1>
                        <p className="5/10">Lorem ipsum dolor sit amet consectetur. Proin lacus consequat convallis fringilla laoreet nec. Mi lorem convallis odio feugiat arcu accumsan sapien. Rutrum velit odio magna pharetra lectus pellentesque suspendisse vitae. Viverra molestie dui sit tortor. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Proin lacus consequat convallis fringilla laoreet nec. Mi lorem convallis odio feugiat arcu accumsan sapien. Rutrum velit odio magna pharetra lectus pellentesque suspendisse vitae. Viverra molestie dui sit tortor. Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}