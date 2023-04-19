import { Navigate, Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

const PrivateRoute = () => {
  const location = useLocation();

  return localStorage.getItem("token") ? (
    <Outlet />
  ) : (
    <Navigate to="/" replace state={{ from: location }} />
  );
};

export default PrivateRoute;
