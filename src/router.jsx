import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Layout from "./components/Layout";
import TutorList from "./pages/admin/dashboard/TutorList";
import Chat from "./pages/tutor/chat/Chat.jsx";
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
import StudentMeeting from "./pages/student/meeting/StudentMeeting.jsx";
import StudentChat from "./pages/student/chat/StudentChat.jsx";
import UserProfile from "./pages/profile/UserProfile.jsx";
import BlogCreatePage from "./components/blogs/BlogCreatePage.jsx";
import { LandingPage } from "./pages/landing/LandingPage.jsx";
import UpdateStaff from "./pages/admin/UpdateStaff.jsx";
import { LandingBlogPage } from "./pages/landing/LandingBlogPage.jsx";
import { FeaturePage } from "./pages/landing/FeaturePage.jsx";

import ProtectedRoute from "./routes/ProtectedRoutes.jsx";

const userRole = localStorage.getItem("user_role");

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: 'blogs',
        element: <LandingBlogPage />
      },
      {
        path: 'feature',
        element: <FeaturePage />
      },
      {
        path: "/staff",
        element: (
          <ProtectedRoute allowedRoles={["staff"]}>
            <Layout />
          </ProtectedRoute>
        ),

        children: [
          {
            path: "dashboard/tutorlist",
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
            path: "dashboard/update/tutor",
            element: <UpdateTutor />,
          },
          {
            path: "dashboard/update/student",
            element: <UpdateStudent />,
          },
          {
            path: "dashboard/update/staff",
            element: <UpdateStaff />,
          },
          {
            path: "dashboard/create/staff",
            element: <CreateStaff />,
          },
          {
            path: "dashboard/create/student",
            element: <CreateStudent />,
          },

          {
            path: "allocation",
            element: <AdminAllocation />,
          },
          {
            path: "report/swi",
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
        element: (
          <ProtectedRoute allowedRoles={["student"]}>
            <Layout />
          </ProtectedRoute>
        ),
        children: [
          {
            path: "dashboard",
            element: <StudentDashboard />,
          },
          {
            path: "blog",
            element: <BlogPage />,
          },
          {
            path: "blog/create",
            element: <BlogCreatePage />,
          },
          {
            path: "blog/details/:id",
            element: <BlogDetailPage />,
          },
          {
            path: "meeting",
            element: <StudentMeeting />,
          },
          {
            path: "chat",
            element: <StudentChat />,
          },
          {
            path: "profile",
            element:<UserProfile/>
          }
        ],
      },

      {
        path: "/tutor",
        element: (
          <ProtectedRoute allowedRoles={["tutor"]}>
            <Layout />
          </ProtectedRoute>
        ),
        children: [
          {
            path: "blog",
            element: <BlogPage />,
          },
          {
            path: "blog/create",
            element: <BlogCreatePage />,
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
          {
            path: "profile",
            element: <UserProfile />,
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