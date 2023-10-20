import { FcCheckmark } from "react-icons/fc";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function GroupsTab() {
  return (
    <>
      <div className="flex items-center gap-32">
        <div className="flex gap-2">
          <div className="">
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png" alt="avatar" className="w-12 h-12" />
          </div>
          <div className="flex flex-col">
            <p className="font-semibold">Vue developers</p>
            <span className="flex gap-1 items-center text-sm text-gray-400">
              20,234 <p>followers</p>
            </span>
            <button className="flex items-center gap-2 py-2 px-6 rounded-3xl border border-gray-500 outline-none mt-1">
              <FcCheckmark className="w-5 h-5" />
              Joined
            </button>
          </div>
        </div>

        <div className="flex gap-2">
          <div className="">
            <img
              src="https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_400x400.png"
              alt="avatar"
              className="w-12 h-12"
            />
          </div>
          <div className="flex flex-col">
            <p className="font-semibold">React developers</p>
            <span className="flex gap-1 items-center text-sm text-gray-400">
              20,234 <p>followers</p>
            </span>
            <button className="flex items-center gap-2 py-2 px-6 rounded-3xl border border-gray-500 outline-none mt-1">
              <FcCheckmark className="w-5 h-5" />
              Joined
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
