import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { FiEdit3 } from "react-icons/fi";
import { GoFilter } from "react-icons/go";
import FocusedMessages from "../components/messaging/FocusedMessages";
import OtherMessages from "../components/messaging/OtherMessages";
import MessagingChatCard from "../components/messaging/MessagingChatCard";
import AddText from "../components/common/AddText";

export default function Messaging() {
  const [isActiveTab, setIsActiveTab] = useState(1);
  const handleToggleTab = tabIndex => {
    setIsActiveTab(tabIndex);
  };
  return (
    <div className="flex gap-8 p-5">
      <div className="bg-white p-4 flex gap-5 flex-1 shadow-lg border border-gray-400">
        <div className="">
          <div className="flex items-center justify-between">
            <p>Messaging</p>
            <div className="flex items-center gap-2">
              <BsThreeDots className="h-5 w-5" />
              <FiEdit3 className="w-5 h-5" />
            </div>
          </div>
          <div className="relative mt-2">
            <input type="text" placeholder="Search..." className="outline-none bg-blue-100 w-full py-1 px-10" />
            <AiOutlineSearch className="absolute w-5 h-5 top-2 left-2" />
            <GoFilter className="absolute w-5 h-5 top-2 right-3" />
          </div>
          {/* Tabs */}
          <div>
            {/* buttons */}
            <div className="flex items-center my-3">
              <button
                onClick={() => handleToggleTab(1)}
                className={` ${
                  isActiveTab === 1 ? "border-b-2 border-green-600 text-green-700" : ""
                } flex-1 py-2 px-3 hover:bg-gray-100`}
              >
                Focused
              </button>
              <button
                onClick={() => handleToggleTab(2)}
                className={`${
                  isActiveTab === 2 ? "border-b-2 border-green-700 text-green-700" : ""
                } flex-1 py-2 px-3 hover:bg-gray-100`}
              >
                Other
              </button>
            </div>
            <div className="flex flex-col gap-2 max-h-[350px] overflow-y-auto scroll-smooth">
              {isActiveTab === 1 && <FocusedMessages />}
              {isActiveTab === 2 && <OtherMessages />}
            </div>
          </div>
        </div>
        <div className="w-[50%]">
          <MessagingChatCard />
        </div>
        <div className="flex-1" />
      </div>
      <div className="w-[300px]">
        <AddText />
      </div>
    </div>
  );
}
