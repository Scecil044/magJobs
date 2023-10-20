import { useSelector, useDispatch } from "react-redux";
import { terminateSession } from "../../redux/auth/authSlice";
import { Link } from "react-router-dom";
import { BsFillBookmarkFill } from "react-icons/bs";

export default function ProfileDropdown({ toggleProfileDropdown }) {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);
  return (
    <div
      className={`${
        toggleProfileDropdown
          ? "flex flex-col gap-1 absolute w-[280px] h-auto top-12 -right-2 bg-white py-1 px-5 rounded-lg shadow-2xl border border-gray-600 z-50"
          : "hidden"
      }`}
    >
      <div className="flex gap-2">
        <div className="flex">
          <img src={user?.avatar} alt="avatar" className="h-12 w-12 object-cover rounded-full" />
        </div>
        <div className="flex flex-1 flex-col gap-1">
          <h1 className="font-semibold text-[14px] card-header">
            {user?.firstName} {user?.lastName}
          </h1>
          <span>BBIT | Javascript | react |Node.js | vue | Laravel</span>
        </div>
      </div>
      <Link
        to="/profile"
        className="flex items-center justify-center w-full rounded-3xl outline-none border border-indigo-700 py-1 px-4 mt-2 text-blue-700"
      >
        View Profile
      </Link>

      <div className="flex flex-col mt-5 mb-2 text-[14px]">
        <h1 className="font-semibold mb-2 card-header">Account</h1>
        <div className="text-gray-600 flex flex-col gap-1">
          <h3 className="flex items-center gap-1 hover:underline">
            <BsFillBookmarkFill className="text-amber-500" />
            Premium features
          </h3>
          <h3 className="hover:underline">Settings & privacy</h3>
          <h3 className="hover:underline">Posts & activity</h3>
          <h3 className="hover:underline">Help</h3>
          <h3 className="hover:underline">Posts & activity</h3>
          <h3 className="hover:underline">Language</h3>
        </div>
      </div>

      <div className="flex flex-col mt-5 mb-2 text-[14px]">
        <h1 className="font-semibold mb-2 card-header">Manage</h1>
        <div className="text-gray-600 flex flex-col gap-1">
          <h3 className="hover:underline">Posts & activity</h3>
          <h3 className="hover:underline">Job Posting account</h3>
          <h1 onClick={() => dispatch(terminateSession())} className="hover:underline card-header">
            Sign Out
          </h1>
        </div>
      </div>
    </div>
  );
}
