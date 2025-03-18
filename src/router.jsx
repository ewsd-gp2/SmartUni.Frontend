import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Layout from "./components/Layout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import Chat from "./pages/Chat";
import CreateTutor from "./pages/admin/CreateTutor";
import UpdateTutor from "./pages/admin/UpdateTutor";
import CreateStaff from "./pages/admin/CreateStaff";
import AdminAllocation from "./pages/admin/AdminAllocation";
import BlogPage from "./components/blogs/BlogPage";
import BlogDetailPage from "./components/blogs/BlogDetailPage";

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
            path: "dashboard/create",
            element: <CreateTutor />,
          },
          {
            path: "dashboard/update",
            element: <UpdateTutor />,
          },
          {
            path: "dashboard/create/staff",
            element: <CreateStaff />,
          },
          {
            path: "dashboard/update/staff",
            element: <UpdateTutor />,
          },
          {
            path: "dashboard/allocation",
            element: <AdminAllocation />,
          },
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
        ],
      },
    ],
  },
]);

export default router;
