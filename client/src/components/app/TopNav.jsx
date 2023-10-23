import { useSelector } from "react-redux";
import { BiSolidChevronDown } from "react-icons/bi";
import { AiFillMessage, AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
import { HiShoppingBag } from "react-icons/hi";
import { IoMdNotifications } from "react-icons/io";
import { GiNetworkBars } from "react-icons/gi";
import { BsPersonVideo3 } from "react-icons/bs";
import { PiDotsNineBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useState } from "react";
import ProfileDropdown from "./ProfileDropdown";
import { Drawer } from "antd";
import BusinessDrawerCard from "../business/BusinessDrawerCard";

export default function TopNav() {
  const { user } = useSelector(state => state.auth);
  const [toggleProfileDropdown, setToggleProfileDropdown] = useState(false);
  const [activeTab, setActiveTab] = useState(1);

  const handleActiveTab = tabIndex => {
    setActiveTab(tabIndex);
  };

  const handleProfileDropDown = tabIndex => {
    setToggleProfileDropdown(!toggleProfileDropdown);
    setActiveTab(tabIndex);
  };
  const [open, setOpen] = useState(false);
  const showDrawer = tabIndex => {
    setOpen(true);
    setActiveTab(tabIndex);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className="w-full h-16 shadow-lg bg-white">
      <header className=" flex justify-between items-center max-w-6xl mx-auto mt-2">
        <div className="flex items-center gap-4">
          <div className="font-semibold">
            <Link onClick={() => setActiveTab(1)} to="/app/home" className="flex cursor-pointer">
              Mag <div className="text-white bg-indigo-700 px-1 rounded-lg">Jobs</div>
            </Link>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="outline-none border border-gray-500 py-1 px-10 rounded-lg bg-blue-50"
            />
            <AiOutlineSearch className="absolute top-2 left-5" />
          </div>
        </div>

        <Link
          onClick={() => handleActiveTab(1)}
          to="/app/home"
          className={`flex flex-col items-center cursor-pointer ${activeTab === 1 ? "border-green-700 border-b-4" : ""}`}
        >
          <AiOutlineHome className="w-7 h-7" />
          <span className="flex gap-1 items-center text-xs">
            Home
            <BiSolidChevronDown />
          </span>
        </Link>
        <Link
          onClick={() => handleActiveTab(9)}
          to="/jobs"
          className={`flex flex-col items-center cursor-pointer ${activeTab === 9 ? "border-b-4 border-green-700" : ""}`}
        >
          <HiShoppingBag className="w-7 h-7" />
          <span className="flex gap-1 items-center text-xs">
            Jobs
            <BiSolidChevronDown />
          </span>
        </Link>

        <Link
          onClick={() => handleActiveTab(2)}
          to="/my/network"
          className={`flex flex-col items-center cursor-pointer ${activeTab === 2 ? "border-b-4 border-green-700" : ""}`}
        >
          <GiNetworkBars className="w-7 h-7" />
          <span className="flex gap-1 items-center text-xs">
            My network
            <BiSolidChevronDown />
          </span>
        </Link>

        <Link
          onClick={() => handleActiveTab(3)}
          to="/notifications"
          className={`flex flex-col items-center cursor-pointer ${activeTab === 3 ? "border-b-4 border-green-700" : ""}`}
        >
          <IoMdNotifications className="w-7 h-7" />
          <span className="flex gap-1 items-center text-xs">
            Notifications
            <BiSolidChevronDown />
          </span>
        </Link>

        <Link
          onClick={() => handleActiveTab(4)}
          to="/messaging"
          className={`flex flex-col items-center cursor-pointer ${activeTab === 4 ? "border-b-4 border-green-700" : ""}`}
        >
          <AiFillMessage className="w-7 h-7" />
          <span className="flex gap-1 items-center text-xs">
            Messaging
            <BiSolidChevronDown />
          </span>
        </Link>

        <div
          onClick={() => handleProfileDropDown(5)}
          className={`flex flex-col items-center cursor-pointer ${activeTab === 5 ? "border-b-4 border-green-700" : ""}`}
        >
          <img src={user?.avatar} alt="" className="w-7 h-7 rounded-full" />
          <span className="relative flex gap-1 items-center text-xs">
            Me
            <BiSolidChevronDown />
            <ProfileDropdown toggleProfileDropdown={toggleProfileDropdown} />
          </span>
        </div>

        <div
          onClick={() => showDrawer(11)}
          className={`flex flex-col items-center cursor-pointer ${activeTab === 11 ? "border-b-4 border-green-700" : ""}`}
        >
          <PiDotsNineBold className="w-7 h-7" />
          <span className="flex gap-1 items-center text-xs">
            For Business
            <BiSolidChevronDown />
          </span>
        </div>

        <Link
          to="/learning"
          onClick={() => handleActiveTab(7)}
          className={`flex flex-col items-center cursor-pointer ${activeTab === 7 ? "border-b-4 border-green-700" : ""}`}
        >
          <BsPersonVideo3 className="w-7 h-7" />
          <span className="flex gap-1 items-center text-xs">
            Learning
            <BiSolidChevronDown />
          </span>
        </Link>
      </header>

      <Drawer title="For Business" placement="right" onClose={onClose} open={open}>
        <BusinessDrawerCard setOpen={setOpen} />
      </Drawer>
    </div>
  );
}
