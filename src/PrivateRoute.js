import { Navigate, Outlet } from "react-router-dom";
export default function PrivateRoute() {
  const token = localStorage.getItem("auth-token");
  const role = localStorage.getItem("role");
  return( token && role ? <Outlet /> : <Navigate to="/" />);
}
