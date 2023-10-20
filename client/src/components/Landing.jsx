import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Landing() {
  const { user } = useSelector(state => state.auth);
  return user ? (
    <div className="h-screen">
      <Outlet />
    </div>
  ) : (
    <Navigate to="/login" />
  );
}
