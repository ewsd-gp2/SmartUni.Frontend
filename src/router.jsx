import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import Layout from "./components/Layout";
import BlogPage from "./pages/BlogPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import AdminDashboardForStu from "./pages/AdminDashboardForStu";
import CreateAccountPage from "./pages/CreateAccountPage";

const router = createBrowserRouter([
    {
      path: "/",
      children: [
        {
          path: "/",
          element: <LoginPage />,
        },
        {
          path: "/dashboard",
          element : <Layout/>,
          children : [
            {
              index: true,
              element : <DashboardPage/>
            },
            {
              path : "blog",
              element : <BlogPage/>
            },
            {
              path : "blog/detail/:id",
              element : <BlogDetailPage/>
            },
            {
              path : "admin",
              element : <AdminDashboardForStu/>
            },
            {
              path : "admin/create/account",
              element : <CreateAccountPage/>
            }
          ]
        }
      ],
    },
  ]);
  
  export default router;