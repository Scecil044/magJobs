import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../../firebase";
import { useDispatch } from "react-redux";
import {
  loginFulfilledState,
  loginPendingState,
  loginRejectedState,
} from "../../redux/auth/authSlice";
import { useNavigate } from "react-router-dom";

export default function GoogleLogin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = async () => {
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
      }
      dispatch(loginFulfilledState(data));
      navigate("/app/home");
    } catch (error) {
      dispatch(loginRejectedState(error.message));
      console.log("could not login with google", error);
    }
  };
  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        className="flex items-center justify-center gap-2 w-full py-3 px-4 border border-neutral-500 rounded-xl text-sm shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <img src="/google.svg" alt="google" className="w-5 h-5" />
        Continue with google
      </button>
    </>
  );
}
