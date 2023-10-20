import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  loginFulfilledState,
  loginPendingState,
  loginRejectedState,
} from "../../redux/auth/authSlice";
import SignInWithGoogle from "./signInWithGoogle";

export default function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({});
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    if (!formData.password) {
      setPasswordError(true);
      return;
    } else {
      setPasswordError(false);
    }
    try {
      dispatch(loginPendingState());
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success === false) {
        dispatch(loginRejectedState(data.message));
        console.log(data.message);
        return;
      }
      dispatch(loginFulfilledState(data));
      navigate("/");
    } catch (error) {
      dispatch(loginRejectedState(error.message));
      console.log(error);
    }
  };
  return (
    <div className="mt-8">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            className="outline-none border border-gray-400 py-4 px-4 w-full rounded-lg"
          />
          {emailError && (
            <span className="text-red-600 text-sm">
              The email field is required
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="email">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
            className="outline-none border border-gray-400 py-4 px-4 w-full rounded-lg"
          />
          {passwordError && (
            <span className="text-red-600 text-sm">
              The password field is required
            </span>
          )}
        </div>
        <div className="mt-3">
          <Link
            to="/login"
            className="text-indigo-500 text-sm hover:underline hover:text-md transition-all duration-300 font-semibold"
          >
            Forgot password?
          </Link>
        </div>
        <div className="mt-3 flex flex-col gap-2">
          <button className="flex items-center justify-center bg-indigo-700 rounded-3xl text-white w-[95%] mx-auto py-3 px-4 hover:bg-indigo-800">
            Sign in
          </button>
          <div className="text-center text-gray-400">
            ______________ or ______________
          </div>
          <SignInWithGoogle />

          <Link
            to="/register"
            className="flex items-center justify-center text-sm py-3 px-4 border border-gray-500 outline-none rounded-3xl hover:bg-[#f1ece5] shadow-sm hover:shadow-none transition-shadow duration-300 w-[98%] mx-auto"
          >
            New to JobMag? Join now
          </Link>
        </div>
      </form>
    </div>
  );
}
