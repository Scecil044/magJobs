import { Link, useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import GuestHeader from "../components/guest/GuestHeader";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import { loginFulfilledState, loginPendingState, loginRejectedState } from "../redux/auth/authSlice";
import { useSelector, useDispatch } from "react-redux";

export default function GuestHomePage() {
  const { isLoading, isError } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [popUp, setPopUp] = useState(true);

  const continueWithGoogle = async () => {
    try {
      dispatch(loginPendingState());
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const res = await signInWithPopup(auth, provider);
      const response = await fetch("/api/auth/googleAuth", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: res.user.displayName,
          email: res.user.email,
          avatar: res.user.photoURL
        })
      });
      const data = await response.json();
      if (data.success === false) {
        dispatch(loginRejectedState(data.message));
        console.log(data.message);
        return;
      }
      dispatch(loginFulfilledState(data));
      navigate("/app/home");
    } catch (error) {
      dispatch(loginRejectedState(error.message));
      console.log("Could not login with google", error);
    }
  };
  return (
    <>
      <GuestHeader />
      <div className="bg-white flex items-center justify-center h-screen relative">
        <div className="flex flex-col items-center justify-center">
          <img
            src="https://img.freepik.com/premium-vector/concept-productive-self-organization-effective-time-management-organize-work-woman-table-read-email-office-workplace-flat-vector-cartoon-illustration-isolated-white-background_198278-10333.jpg"
            alt="avatar"
            className="h-60"
          />
          <p className="text-lg">Try searching for your co-worker, classmate, professor, or friend.</p>
        </div>
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
              <button
                onClick={continueWithGoogle}
                type="button"
                className="flex items-center gap-2 justify-center w-full rounded-3xl border border-gray-300 py-2 px-4 shadow-lg hover:shadow-md transition-shadow duration-200"
              >
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
