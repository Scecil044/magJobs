import { useState } from "react";
import AuthSpinner from "../components/spinners/authSpinner";
import GoogleLogin from "../components/oAuth/GoogleLogin";
import FaceBookLogin from "../components/oAuth/FacebookLogin";
import { useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordConfirmationError, setPasswordConfirmationError] = useState(false);
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleSubmit = async e => {
    e.preventDefault();
    if (!formData.firstName) {
      setFirstNameError(true);
    } else {
      setFirstNameError(false);
    }
    if (!formData.lastName) {
      setLastNameError(true);
    } else {
      setLastNameError(false);
    }
    if (!formData.email) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    if (!formData.password) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
    if (formData.password_confirmation !== formData.password) {
      setPasswordConfirmationError(true);
    } else {
      setPasswordConfirmationError(false);

      try {
        setIsLoading(true);
        setIsError(false);
        const res = await fetch("/api/auth/register", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(formData)
        });

        const data = await res.json();
        if (data.success === false) {
          setIsLoading(false);
          setIsError(data.message);
          console.log(data.message);
          return;
        }
        navigate("/login");
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setIsError(error.message);
        console.log(error);
      }
    }
  };
  return (
    <div className="relative flex flex-col items-center justify-center h-screen">
      <div className="hidden md:flex absolute text-2xl font-bold top-8 left-5 mb-10">
        <span className="flex">
          <p>Job</p>
          <div className="h-10 w-14 text-white bg-indigo-700 rounded-lg px-1">
            <p>mag</p>
          </div>
        </span>
      </div>
      <form onSubmit={handleSubmit} className="w-[450px] shadow-xl p-5 bg-white">
        <div className="mt-2">
          <h1 className="text-3xl font-bold">SignUp</h1>
          <p className="text-sm text-gray-500 mt-1">The professional world is waiting for you!</p>
        </div>

        {isError && (
          <div className="bg-red-600 text-white px-4 py-1 text-sm flex items-center justify-between z-50 shadow-lg hover:shadow-none transition-shadow duration-500">
            Oops! something went wrong!
            <div onClick={() => setIsError(!isError)} className="rounded-full hover:bg-black/30 p-1 cursor-pointer">
              <AiOutlineClose />
            </div>
          </div>
        )}
        <div className="flex flex-col gap-3 md:grid md:grid-cols-2 md:gap-4">
          <div>
            <input
              type="text"
              placeholder="First Name"
              id="firstName"
              name="firstName"
              className={`w-full outline-none border border-neutral-500 py-2 px-4 rounded-xl`}
              onChange={handleChange}
            />
            {firstNameError && <span className="text-red-600 text-sm">First name field is required</span>}
          </div>

          <div>
            <input
              type="text"
              placeholder="Last Name"
              id="lastName"
              name="lastName"
              className={`w-full outline-none border border-neutral-500 py-2 px-4 rounded-xl`}
              onChange={handleChange}
            />
            {lastNameError && <span className="text-red-600 text-sm">Last name field is required</span>}
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              id="email"
              name="email"
              className={`w-full outline-none border border-neutral-500 py-2 px-4 rounded-xl`}
              onChange={handleChange}
            />
            {emailError && <span className="text-red-600 text-sm">Email field is required</span>}
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
            {passwordError && <span className="text-red-600 text-sm">Passwords field is required</span>}
          </div>

          <div>
            <input
              type="password"
              placeholder="confirmPassword"
              id="password_confirmation"
              name="password_confirmation"
              className={`w-full outline-none border border-neutral-500 py-2 px-4 rounded-xl`}
              onChange={handleChange}
            />
            {passwordConfirmationError && <span className="text-red-600 text-sm">Passwords did not match!</span>}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <button
            disabled={isLoading}
            type="submit"
            className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-indigo-700 text-white rounded-xl text-sm shadow-lg hover:shadow-none transition-shadow duration-300 hover:bg-indigo-600 disabled:cursor-not-allowed disabled:opacity-75"
          >
            {isLoading && <AuthSpinner />}
            Sign Up
          </button>
          <GoogleLogin />
          <FaceBookLogin />
        </div>
      </form>
    </div>
  );
}
