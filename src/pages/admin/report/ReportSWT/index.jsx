import {Header} from "./components/Header.jsx";
import {StudentsTable} from "./components/Table.jsx";

export const ReportSWT = () => {
    return (
        <>
            <div className="m-6">
                <Header />
                <StudentsTable />
            </div>
        </>
    )
}