import { MdOutlinePermMedia } from "react-icons/md";
import { BiCalendarEvent } from "react-icons/bi";
import { GrArticle } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function StartPostCard() {
  const { user } = useSelector((state) => state.auth);
  return (
    <>
      <div className="flex items-center gap-5">
        <div className="flex">
          <Link to="/profile">
            <img
              src={user?.avatar}
              alt="avatar"
              className="rounded-full h-12 w-12"
            />
          </Link>
        </div>
        <div className="flex-1">
          <input
            type="text"
            placeholder="Start a post"
            className="outline-none py-3 px-6 border border-gray-500 rounded-3xl w-full"
          />
        </div>
      </div>
      <div className="flex items-center justify-between max-w-[80%] mx-auto mt-2">
        <button className="flex items-center gap-2 ml-12 py-3 px-2 hover:bg-gray-100">
          <MdOutlinePermMedia className="text-blue-600 h-5 w-5" />
          Media
        </button>
        <button className="flex items-center gap-2 py-3 px-2 hover:bg-gray-100">
          <BiCalendarEvent className="h-5 w-5 text-amber-600" />
          Event
        </button>
        <button className="flex items-center gap-2 py-3 px-2 hover:bg-gray-100">
          <GrArticle className="w-5 h-5 text-green-400" />
          Write article
        </button>
      </div>
    </>
  );
}
