import { FcCheckmark } from "react-icons/fc";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function SchoolsTab() {
  return (
    <>
      <div className="flex items-center gap-32">
        <div className="flex gap-2">
          <div className="">
            <img
              src="https://static.wixstatic.com/media/b2923a_e1c08eca1087408696640fa27175e27f~mv2.png/v1/fill/w_440,h_428,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Harvard_shield_silence_wreath.png"
              alt="avatar"
              className="w-12 h-12 object-cover"
            />
          </div>
          <div className="flex flex-col">
            <p className="font-semibold">Havard University</p>
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
              src="https://design-style-guide.freecodecamp.org/downloads/fcc_primary_small.jpg"
              alt="avatar"
              className="w-12 h-12 object-cover"
            />
          </div>
          <div className="flex flex-col">
            <p className="font-semibold">Freecodecamp</p>
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
