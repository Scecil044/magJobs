import { AiOutlinePlus } from "react-icons/ai";
import { MdOutlineGraphicEq } from "react-icons/md";
import { BiHash } from "react-icons/bi";

export default function RecentGroupsAndEvents() {
  return (
    <div className="relative flex flex-col gap-5 text-sm">
      {/* Groups */}
      <div className="px-3 flex flex-col">
        <span className="flex items-center justify-between mb-3">
          <h1 className="font-semibold text-indigo-600">Groups</h1>
        </span>
        <span className="flex items-center gap-1">
          <MdOutlineGraphicEq />
          <h1 className="">Software developer</h1>
        </span>
        <span className="flex items-center gap-1">
          <MdOutlineGraphicEq />
          <h1 className="">Quality assurance</h1>
        </span>
        <span className="flex items-center gap-1">
          <BiHash />
          <h1 className="">react</h1>
        </span>
        <span className="flex items-center gap-1">
          <BiHash />
          <h1 className="">Php</h1>
        </span>
      </div>
      {/* events */}
      <div className="px-3 flex flex-col">
        <span className="flex items-center justify-between">
          <h1 className="font-semibold text-indigo-600">Events</h1>
          <AiOutlinePlus />
        </span>
        <h1 className="text-sm text-indigo-600 font-semibold my-2">
          Followed hashtags
        </h1>
        <span className="flex items-center gap-1">
          <BiHash />
          <h1>react</h1>
        </span>
        <span className="flex items-center gap-1">
          <BiHash />
          <h1>Vue</h1>
        </span>
        <span className="flex items-center gap-1">
          <BiHash />
          <h1>Laravel</h1>
        </span>
      </div>
      <button className="flex items-center justify-center py-2 px-4 w-full hover:bg-gray-300">
        Discover more
      </button>
    </div>
  );
}
