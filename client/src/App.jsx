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
import FeedUpdate from "./pages/FeedUpdate";
import SetUpCompany from "./pages/SetUpCompany";
import Learning from "./pages/Learning";
import CreateCompany from "./pages/CreateCompany";
import JobCollections from "./pages/JobCollections";
import GuestHomePage from "./pages/GuestHomePage";
import Guest from "./components/Guest";
import AdminPanel from "./pages/AdminPanel";
import Subscribe from "./pages/Subscribe";

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
            <Route path="/learning" element={<Learning />} />
            <Route path="/create/company" element={<CreateCompany />} />
          </Route>
          <Route element={<Landing />}>
            <Route path="/app/home" element={<UserHome />} />
            <Route path="/my/network" element={<MyNetwork />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/messaging" element={<Messaging />} />
            <Route path="/feed/update/:id" element={<FeedUpdate />} />
            <Route path="/company/setup/new" element={<SetUpCompany />} />
            <Route path="/jobs/collections/recommended" element={<JobCollections />} />
          </Route>
          <Route element={<Guest />}>
            <Route path="/guest/home/page" element={<GuestHomePage />} />
          </Route>
          <Route path="/admin/dashboard" element={<AdminPanel />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/subscription" element={<Subscribe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
