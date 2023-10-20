import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../../firebase";
import {
  loginFulfilledState,
  loginPendingState,
  loginRejectedState,
} from "../../redux/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function SignInWithGoogle() {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      dispatch(loginPendingState());
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const response = await signInWithPopup(auth, provider);

      const res = await fetch("/api/auth/googleAuth", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: response.user.displayName,
          email: response.user.email,
          avatar: response.user.photoURL,
        }),
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
      console.log("could not login with gmail", error.message);
    }
  };
  return (
    <div>
      <button
        onClick={handleSubmit}
        type="button"
        className="flex items-center gap-2 justify-center text-sm outline-none border border-gray-300 py-3 px-4 rounded-3xl hover:bg-blue-100 hover:border-none w-[95%] mx-auto shadow-md hover:shadow-none transition-shadow duration-300 "
      >
        <img src="/google.svg" alt="avatar" className="h-5 w-5" />
        {isLoading ? "Continue with google" : "Loading..."}
      </button>
    </div>
  );
}
