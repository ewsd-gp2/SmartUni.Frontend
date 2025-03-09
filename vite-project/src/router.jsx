import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import StudentDashboard from "./screens/Student Dashboard";

const router = createBrowserRouter([
    {
      path: "/login",
      children: [
        {
          path: "/login",
          element: <LoginPage />,
        }
      ],
    },
    {
      path: "/dashboard",
      children: [
        {
          path: "/dashboard",
          element: <StudentDashboard />,
        }
      ],
    },
  ]);
  
  export default router;