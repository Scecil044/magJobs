import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import TopNav from "./app/TopNav";
import BodyFooter from "./common/BodyFooter";

export default function Landing() {
  const { user } = useSelector(state => state.auth);
  return user ? (
    <div className="h-screen">
      <TopNav />
      <div className="bg-[#f1ece5] max-w-6xl mx-auto">
        <Outlet />
      </div>
      <BodyFooter />
    </div>
  ) : (
    <Navigate to="/login" />
  );
}
