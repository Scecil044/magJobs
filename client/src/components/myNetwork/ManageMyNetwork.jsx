import { BsHash, BsNewspaper } from "react-icons/bs";
import { FaUserGraduate } from "react-icons/fa";
import { AiTwotoneCalendar } from "react-icons/ai";
import { PiDotsNineBold } from "react-icons/pi";
import { SiPowerpages } from "react-icons/si";
import { LiaUserSolid } from "react-icons/lia";
import { FiUsers } from "react-icons/fi";
import { TbUsersGroup } from "react-icons/tb";

export default function ManageMyNetwork() {
  return (
    <>
      <div className="bg-white rounded-lg shadow-lg border border-gray-400 w-[300px] p-5 self-start">
        <p className="font-semibold">Manage my network</p>
        <div className="flex flex-col gap-5 mt-3">
          <div className="flex justify-between items-center text-gray-400">
            <div className="flex gap-2">
              <FiUsers className="w-5 h-5" />
              Connections
            </div>
            <p>112</p>
          </div>

          <div className="flex justify-between items-center text-gray-400">
            <div className="flex gap-2">
              <TbUsersGroup className="w-5 h-5" />
              Followers and Following
            </div>
            <p>19</p>
          </div>

          <div className="flex justify-between items-center text-gray-400">
            <div className="flex gap-2">
              <FaUserGraduate className="w-5 h-5" />
              Groups
            </div>
            <p>99</p>
          </div>

          <div className="flex justify-between items-center text-gray-400">
            <div className="flex gap-2">
              <AiTwotoneCalendar className="w-5 h-5" />
              Events
            </div>
            <p>19</p>
          </div>

          <div className="flex justify-between items-center text-gray-400">
            <div className="flex gap-2">
              <BsNewspaper className="w-5 h-5" />
              Newsletters
            </div>
            <p>19</p>
          </div>

          <div className="flex justify-between items-center text-gray-400">
            <div className="flex gap-2">
              <BsHash className="w-5 h-5" />
              Hashtags
            </div>
            <p>11</p>
          </div>
        </div>
      </div>
    </>
  );
}
