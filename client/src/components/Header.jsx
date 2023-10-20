import { useState } from "react";
import { Link } from "react-router-dom";
import { terminateSession } from "../redux/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineShopping, AiOutlineUser } from "react-icons/ai";
import { SlSocialDropbox } from "react-icons/sl";
import { FiLogOut } from "react-icons/fi";

export default function Header() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  const logoutUser = async () => {
    try {
      await fetch("/api/auth/logout");
      dispatch(terminateSession());
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="flex relative items-center h-20">
        <div className="flex w-full items-center justify-between max-w-6xl mx-auto">
          <div className="logo">
            <Link to="/" className="font-semibold text-2xl">
              <span className="text-indigo-600 font-bold">Mag</span>
              <span className="text-white bg-indigo-600 px-1">Jobs</span>
            </Link>
          </div>
          <nav>
            <ul className="flex items-center gap-5">
              <Link to="/about" className="flex items-center gap-2 ">
                <SlSocialDropbox className="h-8 w-8" />
                <li>Articles</li>
              </Link>
              <Link to="/about" className="flex items-center gap-2">
                <AiOutlineShopping className="h-8 w-8" />
                <li>Jobs</li>
              </Link>

              {user ? (
                <div
                  onClick={() => setToggleDropdown(!toggleDropdown)}
                  className="cursor-pointer flex items-center gap-1"
                >
                  <img
                    src="https://randomuser.me/portraits/men/15.jpg"
                    alt="avatar"
                    className="rounded-full h-8 w-8 object-cover"
                  />
                  <span className="text-sm">{user?.userName}</span>
                </div>
              ) : (
                <div className="flex flex-row  gap-3 border-l border-gray-500 px-2">
                  <Link
                    to="/register"
                    className="py-2 px-6 rounded-2xl hover:bg-blue-50"
                  >
                    Join now
                  </Link>
                  <Link
                    to="/login"
                    className="rounded-2xl py-2 px-6 border border-indigo-800 text-indigo-600 hover:bg-blue-50"
                  >
                    Sign In
                  </Link>
                </div>
              )}
            </ul>
            {toggleDropdown && (
              <div className="absolute right-5 top-16 shadow-xl w-36 py-2 z-50">
                <ul className="flex flex-col gap-1">
                  <Link
                    to="/profile"
                    className="flex items-center gap-1 py-1 px-2 hover:bg-gray-200 transition-all duration-300"
                  >
                    <AiOutlineUser className="w-5 h-5" />
                    <li>Profile</li>
                  </Link>
                  <Link
                    onClick={logoutUser}
                    className="flex items-center gap-1 py-1 px-2 hover:bg-gray-200 transition-all duration-300"
                  >
                    <FiLogOut className="w-5 h-5" />
                    <li>Logout</li>
                  </Link>
                </ul>
              </div>
            )}
          </nav>
        </div>
      </div>
    </>
  );
}
