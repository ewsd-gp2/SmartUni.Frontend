import Dashboard from "./components/Dashboard";
import PersonalTutor from "./components/PersonalTutor";

const StudentDashboard = () => {
    return(
        <>
            <div className="grid md:grid-cols-4">
                <Dashboard/>
                <PersonalTutor/>
            </div>
        </>
    )
}

export default StudentDashboard;