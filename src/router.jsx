import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import Layout from "./components/Layout";
import BlogPage from "./pages/BlogPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import AdminDashboard from "./pages/admin/AdminDashboard";
import Chat from "./pages/Chat";
import CreateTutor from "./pages/admin/CreateTutor";
import UpdateTutor from "./pages/admin/UpdateTutor";
import {Student} from "./pages/admin/Student.jsx";
import {CreateStudent} from "./pages/admin/CreateStudent.jsx";
import {ReportSWI} from "./pages/admin/ReportSWI/index.jsx";
import {ReportSWT} from "./pages/admin/ReportSWT/index.jsx";
import {MessageFT} from "./pages/admin/MessageFT/index.jsx";
import {MostViewed} from "./pages/admin/MostViewed/index.jsx";
import {Landing} from "./pages/user/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "/",
        element: <Landing />
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/admin",
        element: <Layout />,
        children: [
          {
            path: "dashboard",
            element: <AdminDashboard />,
          },
          {
            path: 'dashboard/create',
            element: <CreateTutor />
          },
          {
            path: 'dashboard/update',
            element: <UpdateTutor />
          },
          {
            path: 'dashboard/student',
            element: <Student />
          },
          {
            path: 'dashboard/student/create',
            element: <CreateStudent />
          },
          {
            path: 'report',
            element: <ReportSWI/>
          },
          {
            path: 'report/swt',
            element: <ReportSWT />
          },
          {
            path: 'report/messagefortutors',
            element: <MessageFT />
          },
          {
            path: 'report/mostviewed',
            element: <MostViewed />
          }
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
            path: "blog/detail/:id",
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
            path: "blog/detail/:id",
            element: <BlogDetailPage />,
          },
          {
            path: "chat",
            element: <Chat />,
          }
        ],
      },
    ],
  },
]);
  
  export default router;