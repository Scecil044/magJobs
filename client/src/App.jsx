import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Profile from "./pages/Profile";

import Landing from "./components/Landing";
import UserHome from "./pages/UserHome";

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
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}