import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function Guest() {
  const { user } = useSelector(state => state.auth);
  return user ? <Navigate to="/jobs" /> : <Outlet />;
}
