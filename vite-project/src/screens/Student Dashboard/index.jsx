import Dashboard from "./components/dashboard";
import PersonalTutor from "./components/personalTutor";

const StudentDashboard = () => {
    return(
        <>
            <div className="grid md:grid-cols-4">
                <div className="md:col-span-1 bg-gray-300">GGGGGG</div>
                <Dashboard/>
                <PersonalTutor/>
            </div>
        </>
    )
}

export default StudentDashboard;