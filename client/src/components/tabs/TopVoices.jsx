import { FcCheckmark } from "react-icons/fc";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function TopVoices() {
  return (
    <>
      <div className="flex items-center gap-32">
        <div className="flex gap-2">
          <div className="">
            <img
              src="https://randomuser.me/portraits/men/78.jpg"
              alt="avatar"
              className="w-12 h-12 rounded-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <p className="font-semibold">Spencer Cecil</p>
            <span className="flex gap-1 items-center text-sm text-gray-400">
              20,234 <p>followers</p>
            </span>
            <button className="flex items-center gap-2 py-2 px-6 rounded-3xl border border-gray-500 outline-none mt-1">
              <FcCheckmark className="w-5 h-5" />
              Following
            </button>
          </div>
        </div>

        <div className="flex gap-2">
          <div className="">
            <img
              src="https://randomuser.me/portraits/men/98.jpg"
              alt="avatar"
              className="w-12 h-12 rounded-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <p className="font-semibold">Mark Hughes</p>
            <span className="flex gap-1 items-center text-sm text-gray-400">
              20,234 <p>followers</p>
            </span>
            <button className="flex items-center gap-2 py-2 px-6 rounded-3xl border border-gray-500 outline-none mt-1">
              <FcCheckmark className="w-5 h-5" />
              Following
            </button>
          </div>
        </div>
      </div>
      <Link to="/" className="flex items-center justify-center mt-5 gap-1 font-semibold text-sm">
        Show more companies <BsArrowRight />
      </Link>
    </>
  );
}
