import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Layout from "./components/Layout";
import TutorList from "./pages/admin/dashboard/TutorList";
import Chat from "./pages/Chat";
import CreateTutor from "./pages/admin/CreateTutor";
import UpdateTutor from "./pages/admin/UpdateTutor";
import TutorMeeting from "./pages/tutor/meeting/TutorMeeting";
import TutorDashboard from "./pages/tutor/TutorDashboard";
import { ReportSWI } from "./pages/admin/report/ReportSWI/index.jsx";
import { ReportSWT } from "./pages/admin/report/ReportSWT/index.jsx";
import { MessageFT } from "./pages/admin/report/MessageFT/index.jsx";
import { MostViewed } from "./pages/admin/report/MostViewed/index.jsx";

import CreateStaff from "./pages/admin/CreateStaff";
import AdminAllocation from "./pages/admin/AdminAllocation";
import BlogPage from "./components/blogs/BlogPage";
import BlogDetailPage from "./components/blogs/BlogDetailPage";
import PageNotFound from "./pages/PageNotFound";
import StudentList from "./pages/admin/dashboard/StudentList.jsx";
import StaffList from "./pages/admin/dashboard/StaffList.jsx";
import CreateStudent from "./pages/admin/CreateStudent.jsx";
import UpdateStudent from "./pages/admin/UpdateStudent.jsx";
import StudentDashboard from "./pages/student/StudentDashboard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "/",
        element: <LoginPage />,
      },
      {
        path: "/staff",
        element: <Layout />,
        children: [
          {
            path: "dashboard/tutorlist",
            element: <TutorList />,
          },
          {
            path: "dashboard",
            element: <TutorList />,
          },
          {
            path: "dashboard/stafflist",
            element: <StaffList />,
          },
          {
            path: "dashboard/studentlist",
            element: <StudentList />,
          },
          {
            path: "dashboard/create",
            element: <CreateTutor />,
          },
          {
            path: "dashboard/update",
            element: <UpdateTutor />,
          },
          {
            path: "dashboard/create/staff",
            element: <CreateStaff/>
          },
          {
            path: "dashboard/create/student",
            element: <CreateStudent/>
          },
          {
            path: "dashboard/update/staff",
            element: <UpdateTutor />,
          },
          {
            path: "dashboard/update/student",
            element: <UpdateStudent />,
          },
          {
            path: "allocation",
            element: <AdminAllocation />,
          },
          {
            path: "report",
            element: <ReportSWI />,
          },
          {
            path: "report/swt",
            element: <ReportSWT />,
          },
          {
            path: "report/messagefortutors",
            element: <MessageFT />,
          },
          {
            path: "report/mostviewed",
            element: <MostViewed />,
          },
        ],
      },
      {
        path: "/student",
        element: <Layout />,
        children: [
          {
            path:"dashboard",
            element:<StudentDashboard/>
          },
          {
            path: "blog",
            element: <BlogPage />,
          },
          {
            path: "blog/details/:id",
            element: <BlogDetailPage />,
          },
          {
            path: "chat",
            element: <Chat />,
          },
        ],
      },
      
      {
        path: "/tutor",
        element: <Layout />,
        children: [
          {
            path: "blog",
            element: <BlogPage />,
          },
          {
            path: "blog/details/:id",
            element: <BlogDetailPage />,
          },
          {
            path: "chat",
            element: <Chat />,
          },
          {
            path: "meeting",
            element: <TutorMeeting />,
          },
          {
            path: "dashboard",
            element: <TutorDashboard />,
          },
        ],
      },
      
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);

export default router;
