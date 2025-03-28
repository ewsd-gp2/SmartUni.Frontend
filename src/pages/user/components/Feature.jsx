import StudentDashboard from '../assets/Student Dashboard.png'
import Chat from '../assets/Chat.png'
import Blog from '../assets/Blog.png'

export const Feature = () => {

    return(
        <div className="mt-25 space-y-25">
            <div className="flex justify-center">
                <h1 className="text-3xl text-teal-600 font-semibold">Features We Provide</h1>
            </div>
            <div className="space-y-30">
                <div className="flex gap-15 justify-center items-center">
                    <img src={StudentDashboard} alt="Student Dashboard" className="w-5/10" />
                    <div>
                    <h1 className="text-3xl font-semibold mb-5">Student Dashboard</h1>
                    <p className="5/10">Lorem ipsum dolor sit amet consectetur. Proin lacus consequat convallis fringilla laoreet nec. Mi lorem convallis odio feugiat arcu accumsan sapien. Rutrum velit odio magna pharetra lectus pellentesque suspendisse vitae. Viverra molestie dui sit tortor. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Proin lacus consequat convallis fringilla laoreet nec. Mi lorem convallis odio feugiat arcu accumsan sapien. Rutrum velit odio magna pharetra lectus pellentesque suspendisse vitae. Viverra molestie dui sit tortor. Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
                <div className="flex gap-15 justify-center items-center">
                    <div>
                        <h1 className="text-3xl font-semibold mb-5">Messaging System</h1>
                        <p className="5/10">Lorem ipsum dolor sit amet consectetur. Proin lacus consequat convallis fringilla laoreet nec. Mi lorem convallis odio feugiat arcu accumsan sapien. Rutrum velit odio magna pharetra lectus pellentesque suspendisse vitae. Viverra molestie dui sit tortor. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Proin lacus consequat convallis fringilla laoreet nec. Mi lorem convallis odio feugiat arcu accumsan sapien. Rutrum velit odio magna pharetra lectus pellentesque suspendisse vitae. Viverra molestie dui sit tortor. Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                    <img src={Chat} alt="Student Dashboard" className="w-5/10" />
                </div>
                <div className="flex gap-15 justify-center items-center">
                    <img src={Blog} alt="Student Dashboard" className="w-5/10" />
                    <div>
                        <h1 className="text-3xl font-semibold mb-5">Blog System</h1>
                        <p className="5/10">Lorem ipsum dolor sit amet consectetur. Proin lacus consequat convallis fringilla laoreet nec. Mi lorem convallis odio feugiat arcu accumsan sapien. Rutrum velit odio magna pharetra lectus pellentesque suspendisse vitae. Viverra molestie dui sit tortor. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Proin lacus consequat convallis fringilla laoreet nec. Mi lorem convallis odio feugiat arcu accumsan sapien. Rutrum velit odio magna pharetra lectus pellentesque suspendisse vitae. Viverra molestie dui sit tortor. Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}