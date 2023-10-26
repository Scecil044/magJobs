import { useState } from "react";
import AuthSpinner from "../components/spinners/AuthSpinner";
import GoogleLogin from "../components/oAuth/GoogleLogin";
import FaceBookLogin from "../components/oAuth/FacebookLogin";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { loginPendingState, loginFulfilledState, loginRejectedState, reset } from "../redux/auth/authSlice";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, isError } = useSelector(state => state.auth);
  const [formData, setFormData] = useState({});
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleSubmit = async e => {
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
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(loginRejectedState(data.message));
        console.log(data.message);
        return;
      }
      dispatch(loginFulfilledState(data));
      navigate("/app/home");
    } catch (error) {
      dispatch(loginRejectedState(error.message));
      console.log(error.message);
    }
  };
  return (
    <div className="relative flex flex-col items-center justify-center h-screen">
      <Link to="/" className="absolute text-2xl font-bold top-8 left-5">
        <span className="flex">
          <p>Job</p>
          <div className="h-10 w-14 text-white bg-indigo-700 rounded-lg px-1">
            <p>mag</p>
          </div>
        </span>
      </Link>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-[400px] shadow-xl p-5 bg-white">
        <div className="mt-2">
          <h1 className="text-3xl font-bold">SignIn</h1>
          <p className="text-sm text-gray-500 mt-1">The professional world is waiting for you!</p>
        </div>
        {isError && (
          <div className="bg-red-600 text-white px-4 py-1 text-sm flex items-center justify-between z-50 shadow-lg hover:shadow-none transition-shadow duration-500">
            {isError}
            <div onClick={() => dispatch(reset())} className="rounded-full hover:bg-black/30 p-1 cursor-pointer">
              <AiOutlineClose />
            </div>
          </div>
        )}
        <div>
          <input
            type="email"
            placeholder="Email"
            id="email"
            name="email"
            className={`w-full outline-none border border-neutral-500 py-2 px-4 rounded-xl`}
            onChange={handleChange}
          />
          {emailError && <span className="text-red-600 text-sm">The email field is required</span>}
        </div>

        <div>
          <input
            type="password"
            placeholder="Password"
            id="password"
            name="password"
            className={`w-full outline-none border border-neutral-500 py-2 px-4 rounded-xl`}
            onChange={handleChange}
          />
          {passwordError && <span className="text-red-600 text-sm">The password field is required</span>}
        </div>

        <div className="flex flex-col gap-2">
          <button
            disabled={isLoading}
            className={`flex items-center justify-center gap-2 w-full py-3 px-4 bg-indigo-700 text-white rounded-xl text-sm shadow-lg hover:shadow-none transition-shadow duration-300 hover:bg-indigo-600 disabled:cursor-not-allowed`}
          >
            {isLoading && <AuthSpinner />}
            Login
          </button>
          <GoogleLogin />
          <FaceBookLogin />
        </div>
      </form>
    </div>
  );
}
