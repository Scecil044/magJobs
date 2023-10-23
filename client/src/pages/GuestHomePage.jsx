import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import GuestHeader from "../components/guest/GuestHeader";

export default function GuestHomePage() {
  const [popUp, setPopUp] = useState(true);
  return (
    <>
      <GuestHeader />
      <div className="bg-white flex items-center justify-center h-screen relative">
        <p className="text-lg">Try searching for your co-worker, classmate, professor, or friend.</p>
        {/* pop-up */}
        {popUp && (
          <div className="bg-white p-5 w-[300px] border border-gray-300 shadow-lg absolute top-24 right-8">
            <div className="flex items-center justify-between gap-2">
              <p className="text-2xl font-semibold">You are signed out</p>{" "}
              <AiOutlineClose onClick={() => setPopUp(!popUp)} className="cursor-pointer" />
            </div>
            <p className="text-gray-500 mb-5">Sign in for full experience</p>
            <form>
              <div className="mb-5">
                <label htmlFor="" className="text-sm">
                  Email or Phone No.
                </label>
                <input type="email" name="email" id="email" required className="w-full border-2 border-gray-300 py-2 px-2" />
              </div>

              <div className="mb-5">
                <label htmlFor="" className="text-sm">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  required
                  className="w-full border-2 border-gray-300 py-2 px-2"
                />
              </div>

              <div className="mb-4">
                <Link to="/" className="text-blue-700 font-semibold text-[15px]">
                  Forgot password?
                </Link>
              </div>
              <div className="mb-4">
                <button className="text-white bg-indigo-700 py-2 px-4 rounded-3xl w-full hover:bg-indigo-800">Sign In</button>
              </div>

              <div className="text-gray-500 items-center text-center mb-4">________or________</div>
              <div className="text-center mb-4">
                <span className="text-xs">
                  By clicking continue, You agree to use this websites <span className="text-blue-600">Terms and services</span>
                </span>
              </div>
              <button className="flex items-center gap-2 justify-center w-full rounded-3xl border border-gray-300 py-2 px-4 shadow-lg hover:shadow-md transition-shadow duration-200">
                <img src="/google.svg" alt="avatar" className="object-cover h-5 w-5" />
                Continue with Google
              </button>
            </form>
          </div>
        )}
      </div>
    </>
  );
}
