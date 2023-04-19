import { Navigate, Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

const AdminRoute = () => {
  const location = useLocation();

  return JSON.parse(localStorage.getItem("isadmin")) &&
    JSON.parse(localStorage.getItem("token")) ? (
    <Outlet />
  ) : (
    <Navigate to="/" replace state={{ from: location }} />
  );
};

export default AdminRoute;
