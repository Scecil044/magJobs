import { FiUsers } from "react-icons/fi";
import AdminBarChart from "../components/admin/AdminBarChart";
import AdminPieChart from "../components/admin/AdminPieChart";
import { AiOutlineHome, AiOutlineSetting } from "react-icons/ai";
import { PiChatsLight, PiStudentFill } from "react-icons/pi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { HiOutlineLogout } from "react-icons/hi";
import { BiSolidUserAccount } from "react-icons/bi";

export default function AdminPanel() {
  const { user } = useSelector(state => state.auth);
  return (
    <div>
      <header className="p-5 w-full bg-white h-16 shadow-lg hover:scale-100 flex items-center justify-between">
        <div>logo</div>
        <div className="relative">
          <img
            src={user?.avatar}
            alt="avatar"
            className="rounded-full object-cover h-9 w-9 hover:scale-105 transition-all duration-150"
          />
          <div className="absolute py-2 right-4 w-[150px] bg-white shadow-lg hover:scale-105 flex flex-col gap-1 border border-gray-300">
            <button className="flex  items-center gap-2 w-full hover:bg-gray-100 py-1 px-1">
              <BiSolidUserAccount className="h-5 w-5" />
              Profile
            </button>
            <button className="flex  items-center gap-2 w-full hover:bg-gray-100 py-1 px-1">
              <HiOutlineLogout className="h-5 w-5" />
              Logout
            </button>
          </div>
        </div>
      </header>
      <div className="flex gap-2">
        <div className="bg-white p-5 w-[70px] shadow-lg border border-gray-300">
          <ul className="flex flex-col gap-5 text-gray-500">
            <li>
              <AiOutlineHome className="h-8 w-8" />
            </li>
            <li>
              <FiUsers className="h-8 w-8" />
            </li>
            <li>
              <PiStudentFill className="h-8 w-8" />
            </li>
            <li>
              <PiChatsLight className="h-8 w-8" />
            </li>
            <li>
              <AiOutlineSetting className="h-8 w-8" />
            </li>
          </ul>
        </div>
        <div className="p-5">
          <div className="flex gap-8 items-start">
            <div className="items-start flex-1 flex gap-5">
              <div className="bg-white flex-1 p-5 rounded-lg shadow-lg border border-gray-400">one</div>
              <div className="bg-white flex-1 p-5 rounded-lg shadow-lg border border-gray-400">two</div>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-lg border border-gray-400 items-start w-[280px]">two</div>
            <div className="bg-white p-5 rounded-lg shadow-lg border border-gray-400 items-start flex-1">
              <AdminBarChart />
            </div>
          </div>

          <div className="bg-white p-5 mt-10 rounded-lg shadow-lg border border-gray-400">
            <div className="grid grid-cols-4 gap-5">
              <div className="border-r-2 border-indigo-500">
                <AdminPieChart />
              </div>
              <div className="border-r-2 border-indigo-500">second</div>
              <div className="border-r-2 border-indigo-500">Third</div>
              <div className="">Fourth</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
