import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Layout from "./components/Layout";
import TutorList from "./pages/admin/dashboard/TutorList";
import Chat from "./pages/Chat";
import CreateTutor from "./pages/admin/CreateTutor";
import UpdateTutor from "./pages/admin/UpdateTutor";
import TutorMeeting from "./pages/tutor/meeting/TutorMeeting";
import TutorDashboard from "./pages/tutor/TutorDashboard";

import CreateStaff from "./pages/admin/CreateStaff";
import AdminAllocation from "./pages/admin/AdminAllocation";
import BlogPage from "./components/blogs/BlogPage";
import BlogDetailPage from "./components/blogs/BlogDetailPage";
import PageNotFound from "./pages/PageNotFound";

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
          // {
          //   path: "dashboard/stafflist",
          //   element: <AdminDashboard />,
          // },
          // {
          //   path: "dashboard/studentlist",
          //   element: <AdminDashboard />,
          // },
          {
            path: "dashboard/create",
            element: <CreateTutor />,
          },
          {
            path: "dashboard/update",
            element: <UpdateTutor />,
          },
          // {
          //   path: "dashboard/create/staff",
          //   element: <CreateStaff />,
          // },
          // {
          //   path: "dashboard/update/staff",
          //   element: <UpdateTutor />,
          // },
          // {
          //   path: "allocation",
          //   element: <AdminAllocation />,
          // },
        ],
      },
      {
        path: "/student",
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
