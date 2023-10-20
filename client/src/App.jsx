import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Profile from "./pages/Profile";
import Landing from "./components/Landing";
import UserHome from "./pages/UserHome";
import MyNetwork from "./pages/MyNetwork";
import NotFound from "./pages/NotFound";
import Jobs from "./pages/Jobs";
import Notifications from "./pages/Notifications";
import Messaging from "./pages/Messaging";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<Layout />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route element={<Landing />}>
            <Route path="/app/home" element={<UserHome />} />
            <Route path="/my/network" element={<MyNetwork />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/messaging" element={<Messaging />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
