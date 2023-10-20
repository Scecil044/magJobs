import { FcCheckmark } from "react-icons/fc";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function NewsLettersTab() {
  return (
    <>
      <div className="flex items-center gap-32">
        <div className="flex gap-2">
          <div className="">
            <img
              src="https://expandedramblings.com/wp-content/uploads/2016/03/NIKE-Facts-and-Statistics.jpg"
              alt="avatar"
              className="w-12 h-12 object-cover"
            />
          </div>
          <div className="flex flex-col">
            <p className="font-semibold">Let Us Talk About Nike</p>
            <span className="flex gap-1 items-center text-sm text-gray-400">
              20,234 <p>followers</p>
            </span>
            <button className="flex items-center gap-2 py-2 px-6 rounded-3xl border border-gray-500 outline-none mt-1">
              <FcCheckmark className="w-5 h-5" />
              Subscribed
            </button>
          </div>
        </div>

        <div className="flex gap-2">
          <div className="">
            <img
              src="https://media.autoexpress.co.uk/image/private/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1681822944/autoexpress/2023/04/2023%20Ford%20Ranger%20Wildtrak.jpg"
              alt="avatar"
              className="w-12 h-12 object-cover"
            />
          </div>
          <div className="flex flex-col">
            <p className="font-semibold"> About the new Ford Ranger</p>
            <span className="flex gap-1 items-center text-sm text-gray-400">
              20,234 <p>followers</p>
            </span>
            <button className="flex items-center gap-2 py-2 px-6 rounded-3xl border border-gray-500 outline-none mt-1">
              <FcCheckmark className="w-5 h-5" />
              Subscribed
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
