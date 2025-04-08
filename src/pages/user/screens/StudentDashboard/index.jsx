import Dashboard from "./components/dashboard";
import PersonalTutor from "./components/personalTutor";

const StudentDashboard = () => {
    return(
        <>
            <div className="grid md:grid-cols-3 gap-10">
                <Dashboard/>
                <PersonalTutor/>
            </div>
        </>
    )
}

export default StudentDashboard;