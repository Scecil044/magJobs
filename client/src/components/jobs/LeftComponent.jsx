import { BsFillBookmarkCheckFill, BsFillBellFill } from "react-icons/bs";
import { FcCheckmark, FcSettings } from "react-icons/fc";
import { GrDocument } from "react-icons/gr";
import { BiSolidVideos } from "react-icons/bi";
import { FaBookOpen } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function LeftComponent() {
  return (
    <div className="flex flex-col gap-5">
      <Link className="flex items-center gap-2 whitespace-nowrap text-md tracking-tight">
        <BsFillBookmarkCheckFill className="w-5 h-5" />
        My Jobs
      </Link>

      <Link className="flex items-center gap-2 whitespace-nowrap text-md tracking-tight">
        <BsFillBellFill className="w-5 h-5" />
        Job alerts
      </Link>

      <Link className="flex items-center gap-2 whitespace-nowrap text-md tracking-tight">
        <FcCheckmark className="w-5 h-5" />
        Show skills
      </Link>

      <Link className="flex items-center gap-2 whitespace-nowrap text-md tracking-tight">
        <FaBookOpen className="w-5 h-5" />
        Interview prep
      </Link>

      <Link className="flex items-center gap-2 whitespace-nowrap text-md tracking-tight">
        <GrDocument className="w-5 h-5" />
        Premium resume highlights
      </Link>

      <Link className="flex items-center gap-2 whitespace-nowrap text-md tracking-tight">
        <BiSolidVideos className="w-5 h-5" />
        Job seeker Guide
      </Link>

      <Link className="flex items-center gap-2 whitespace-nowrap text-md tracking-tight">
        <FcSettings className="w-5 h-5" />
        Application settings
      </Link>
    </div>
  );
}
