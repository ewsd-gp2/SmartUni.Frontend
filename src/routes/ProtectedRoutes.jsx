
import { Navigate } from "react-router-dom";
import UnauthorizedPage from "../pages/UnauthorizedPage";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const role = localStorage.getItem("user_role");

  if (!role || !allowedRoles.includes(role)) {
    return <UnauthorizedPage/>
  }

  return children;
};

export default ProtectedRoute;
