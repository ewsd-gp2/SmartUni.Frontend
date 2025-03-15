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


const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "/",
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
          },
        ],
      },
    ],
  },
]);
  
  export default router;