import { AiOutlinePlus } from "react-icons/ai";
import { MdOutlineGraphicEq } from "react-icons/md";
import { BiHash } from "react-icons/bi";

export default function RecentGroupsAndEvents() {
  return (
    <div className="relative flex flex-col gap-5 text-sm mt-2">
      {/* Groups */}
      <div className="px-3 flex flex-col">
        <span className="flex items-center justify-between mb-3">
          <h1 className="font-semibold text-indigo-600 card-header">Groups</h1>
        </span>
        <span className="flex items-center gap-1">
          <MdOutlineGraphicEq />
          <p className="">Software developer</p>
        </span>
        <span className="flex items-center gap-1">
          <MdOutlineGraphicEq />
          <p className="">Quality assurance</p>
        </span>
        <span className="flex items-center gap-1">
          <BiHash />
          <p className="">react</p>
        </span>
        <span className="flex items-center gap-1">
          <BiHash />
          <p>Php</p>
        </span>
      </div>
      {/* events */}
      <div className="px-3 flex flex-col">
        <span className="flex items-center justify-between">
          <h1 className="card-header font-semibold text-indigo-600">Events</h1>
          <AiOutlinePlus />
        </span>
        <h1 className="card-header text-sm text-indigo-600 font-semibold my-2">Followed hashtags</h1>
        <span className="flex items-center gap-1">
          <BiHash />
          <p className="">react</p>
        </span>
        <span className="flex items-center gap-1">
          <BiHash />
          <p className="">Vue</p>
        </span>
        <span className="flex items-center gap-1">
          <BiHash />
          <p className="">Laravel</p>
        </span>
      </div>
      <button className="flex items-center justify-center py-2 px-4 w-full hover:bg-gray-300">Discover more</button>
    </div>
  );
}
